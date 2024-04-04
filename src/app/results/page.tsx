'use client';
import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import CenterContainer from '../../../components/yellow-container/yellow-container.component';
import { SurveyQuestionsData } from '../../../data/survey-questions';
import { EmotionCategory } from '../../../enums/index';
import { SurveyResponse } from '../../../interfaces';

export default function Results() {
  const [finalOutcome, setFinalOutcome] = useState('');
  const [ratioA, setRatioA] = useState<number>(0);
  const [ratioB, setRatioB] = useState<number>(0);
  const [ratioC, setRatioC] = useState<number>(0);
  const [finalEmotions, setFinalEmotions] = useState<string>('');

  const [emotionTally, setEmotionTally] = useState({
    [EmotionCategory.EXCITEMENT]: 0,
    [EmotionCategory.SADNESS]: 0,
    [EmotionCategory.AFFECTIONATE]: 0,
    [EmotionCategory.DISTANT]: 0,
    [EmotionCategory.BOREDOM]: 0,
    [EmotionCategory.HAPPINESS]: 0,
  });
  const [isDoneInitializing, setIsDoneInitializing] = useState(false);

  useEffect(() => {
    const surveyResponsesString = localStorage.getItem('surveyState');
    const surveyResponsesParsed: SurveyResponse[] = JSON.parse(
      surveyResponsesString || '{}'
    ).responses;

    const formattedResponses = surveyResponsesParsed.map(({ qId, answer }) => ({
      qId: qId,
      answer: parseInt(answer),
    }));

    formattedResponses.forEach((response) => {
      const question = SurveyQuestionsData.find(
        (question) => question.id === response.qId
      );
      if (question) {
        // Increment tally based on answer
        if (response.answer === 1) {
          setEmotionTally((prevTally) => ({
            ...prevTally,
            [question.disagree]: prevTally[question.disagree] + 2,
          }));
        } else if (response.answer === 2) {
          setEmotionTally((prevTally) => ({
            ...prevTally,
            [question.disagree]: prevTally[question.disagree] + 1,
          }));
        } else if (response.answer === 4) {
          setEmotionTally((prevTally) => ({
            ...prevTally,
            [question.agree]: prevTally[question.agree] + 1,
          }));
        } else if (response.answer === 5) {
          setEmotionTally((prevTally) => ({
            ...prevTally,
            [question.agree]: prevTally[question.agree] + 2,
          }));
        }
      }
    });

    setIsDoneInitializing(true);
  }, []);

  useEffect(() => {
    if (!isDoneInitializing) {
      return;
    }

    let emotionA = '';
    let emotionB = '';
    let emotionC = '';

    if (
      emotionTally[EmotionCategory.HAPPINESS] >
      emotionTally[EmotionCategory.SADNESS]
    ) {
      emotionA = 'H';
      setRatioA(
        (emotionTally[EmotionCategory.HAPPINESS] /
          (emotionTally[EmotionCategory.SADNESS] +
            emotionTally[EmotionCategory.HAPPINESS])) *
          100
      );
    } else {
      emotionA = 'S';
      setRatioA(
        (emotionTally[EmotionCategory.HAPPINESS] /
          (emotionTally[EmotionCategory.HAPPINESS] +
            emotionTally[EmotionCategory.SADNESS])) *
          100
      );
    }

    if (
      emotionTally[EmotionCategory.EXCITEMENT] >
      emotionTally[EmotionCategory.BOREDOM]
    ) {
      emotionB = 'E';
      setRatioB(
        (emotionTally[EmotionCategory.EXCITEMENT] /
          (emotionTally[EmotionCategory.BOREDOM] +
            emotionTally[EmotionCategory.EXCITEMENT])) *
          100
      );
    } else {
      emotionB = 'B';
      setRatioB(
        (emotionTally[EmotionCategory.EXCITEMENT] /
          (emotionTally[EmotionCategory.EXCITEMENT] +
            emotionTally[EmotionCategory.BOREDOM])) *
          100
      );
    }

    if (
      emotionTally[EmotionCategory.AFFECTIONATE] >
      emotionTally[EmotionCategory.DISTANT]
    ) {
      emotionC = 'A';
      setRatioC(
        (emotionTally[EmotionCategory.AFFECTIONATE] /
          (emotionTally[EmotionCategory.DISTANT] +
            emotionTally[EmotionCategory.AFFECTIONATE])) *
          100
      );
    } else {
      emotionC = 'D';
      setRatioC(
        (emotionTally[EmotionCategory.AFFECTIONATE] /
          (emotionTally[EmotionCategory.AFFECTIONATE] +
            emotionTally[EmotionCategory.DISTANT])) *
          100
      );
    }

    if (emotionA == 'H') {
      if (emotionB == 'E') {
        if (emotionC == 'A') {
          setFinalEmotions('HEA');
        } else if (emotionC == 'D') {
          setFinalEmotions('HED');
        }
      } else if (emotionB == 'B') {
        if (emotionC == 'A') {
          setFinalEmotions('HBA');
        } else if (emotionC == 'D') {
          setFinalEmotions('HBD');
        }
      }
    }

    if (emotionA == 'S') {
      if (emotionB == 'E') {
        if (emotionC == 'A') {
          setFinalEmotions('SEA');
        } else if (emotionC == 'D') {
          setFinalEmotions('SED');
        }
      } else if (emotionB == 'B') {
        if (emotionC == 'A') {
          setFinalEmotions('SBA');
        } else if (emotionC == 'D') {
          setFinalEmotions('SBD');
        }
      }
    }

    const aiPrompt = `Given an emotional tally of happiness: ${
      emotionTally[EmotionCategory.HAPPINESS]
    }, sadness: ${emotionTally[EmotionCategory.SADNESS]}, excitement: ${
      emotionTally[EmotionCategory.EXCITEMENT]
    }, boredom: ${emotionTally[EmotionCategory.BOREDOM]}, affectionate: ${
      emotionTally[EmotionCategory.AFFECTIONATE]
    }, and distant: ${
      emotionTally[EmotionCategory.DISTANT]
    } and  the final emotions is ${finalEmotions}. Make sure it starts with The outcome of your 8Sentimentals: Emotion Personality Test Simulator is final emotion. Generate a personalized outcome.`;

    const fetchData = async () => {
      try {
        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: aiPrompt }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setFinalOutcome(data);
      } catch (error) {
        console.error("Failed to fetch OpenAI's response:", error);
      }
    };

    fetchData();
  }, [isDoneInitializing]);

  return (
    <CenterContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex' }}>
          <Title style={{ fontSize: '10rem' }}>{finalEmotions}</Title>
        </div>
        <div>
          <h2>{`happiness ${ratioA.toFixed(0)}% ${(
            100 - parseFloat(ratioA.toFixed(0))
          ).toString()}% sadness`}</h2>
          <h2>{`excitement ${ratioB.toFixed(0)}% ${(
            100 - parseFloat(ratioB.toFixed(0))
          ).toString()}% boredom`}</h2>
          <h2>{`affectionate ${ratioC.toFixed(0)}% ${(
            100 - parseFloat(ratioC.toFixed(0))
          ).toString()}% distant`}</h2>
        </div>
        <h1>{finalOutcome}</h1>
        <div style={{ marginTop: '2rem' }}></div>
      </div>
    </CenterContainer>
  );
}
