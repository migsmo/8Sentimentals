'use client';
import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import CenterContainer from '../../../components/yellow-container/yellow-container.component';
import { finalOutcomes } from '../../../data/final-outcomes';
import { SurveyQuestionsData } from '../../../data/survey-questions';
import { EmotionCategory } from '../../../enums/index';
import { SurveyResponse } from '../../../interfaces';

export default function Results() {
  const surveyResponsesString = localStorage.getItem('surveyState');
  const surveyResponses: SurveyResponse[] = JSON.parse(
    surveyResponsesString || '{}'
  ).responses;
  // Retrieve survey responses from localStorage

  const formattedResponses = surveyResponses.map(({ qId, answer }) => ({
    qId: qId,
    answer: parseInt(answer),
  }));
  // Format survey responses into array

  const [emotionTally, setEmotionTally] = useState({
    [EmotionCategory.EXCITEMENT]: 0,
    [EmotionCategory.SADNESS]: 0,
    [EmotionCategory.AFFECTIONATE]: 0,
    [EmotionCategory.DISTANT]: 0,
    [EmotionCategory.BOREDOM]: 0,
    [EmotionCategory.HAPPINESS]: 0,
  });

  useEffect(() => {
    // Reset tally
    setEmotionTally({
      [EmotionCategory.EXCITEMENT]: 0,
      [EmotionCategory.SADNESS]: 0,
      [EmotionCategory.AFFECTIONATE]: 0,
      [EmotionCategory.DISTANT]: 0,
      [EmotionCategory.BOREDOM]: 0,
      [EmotionCategory.HAPPINESS]: 0,
    });

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
  }, [formattedResponses]);

  let emotionA = '';
  let emotionB = '';
  let emotionC = '';
  let ratioA = 0;
  let ratioB = 0;
  let ratioC = 0;
  let finalEmotions = '';
  let finalOutcome = '';

  if (
    emotionTally[EmotionCategory.HAPPINESS] >
    emotionTally[EmotionCategory.SADNESS]
  ) {
    emotionA = 'H';
    ratioA =
      (emotionTally[EmotionCategory.HAPPINESS] /
        (emotionTally[EmotionCategory.SADNESS] +
          emotionTally[EmotionCategory.HAPPINESS])) *
      100;
  } else {
    emotionA = 'S';
    ratioA =
      (emotionTally[EmotionCategory.HAPPINESS] /
        (emotionTally[EmotionCategory.HAPPINESS] +
          emotionTally[EmotionCategory.SADNESS])) *
      100;
  }

  if (
    emotionTally[EmotionCategory.EXCITEMENT] >
    emotionTally[EmotionCategory.BOREDOM]
  ) {
    emotionB = 'E';
    ratioB =
      (emotionTally[EmotionCategory.EXCITEMENT] /
        (emotionTally[EmotionCategory.BOREDOM] +
          emotionTally[EmotionCategory.EXCITEMENT])) *
      100;
  } else {
    emotionB = 'B';
    ratioB =
      (emotionTally[EmotionCategory.EXCITEMENT] /
        (emotionTally[EmotionCategory.EXCITEMENT] +
          emotionTally[EmotionCategory.BOREDOM])) *
      100;
  }

  if (
    emotionTally[EmotionCategory.AFFECTIONATE] >
    emotionTally[EmotionCategory.DISTANT]
  ) {
    emotionC = 'A';
    ratioC =
      (emotionTally[EmotionCategory.AFFECTIONATE] /
        (emotionTally[EmotionCategory.DISTANT] +
          emotionTally[EmotionCategory.AFFECTIONATE])) *
      100;
  } else {
    emotionC = 'D';
    ratioC =
      (emotionTally[EmotionCategory.AFFECTIONATE] /
        (emotionTally[EmotionCategory.AFFECTIONATE] +
          emotionTally[EmotionCategory.DISTANT])) *
      100;
  }

  if (emotionA == 'H') {
    if (emotionB == 'E') {
      if (emotionC == 'A') {
        finalOutcome = finalOutcomes[0];
        finalEmotions = 'HEA';
      } else if (emotionC == 'D') {
        finalOutcome = finalOutcomes[1];
        finalEmotions = 'HED';
      }
    } else if (emotionB == 'B') {
      if (emotionC == 'A') {
        finalOutcome = finalOutcomes[2];
        finalEmotions = 'HBA';
      } else if (emotionC == 'D') {
        finalOutcome = finalOutcomes[3];
        finalEmotions = 'HBD';
      }
    }
  }

  if (emotionA == 'S') {
    if (emotionB == 'E') {
      if (emotionC == 'A') {
        finalOutcome = finalOutcomes[4];
        finalEmotions = 'SEA';
      } else if (emotionC == 'D') {
        finalOutcome = finalOutcomes[5];
        finalEmotions = 'SED';
      }
    } else if (emotionB == 'B') {
      if (emotionC == 'A') {
        finalOutcome = finalOutcomes[6];
        finalEmotions = 'SBA';
      } else if (emotionC == 'D') {
        finalOutcome = finalOutcomes[7];
        finalEmotions = 'SBD';
      }
    }
  }

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
