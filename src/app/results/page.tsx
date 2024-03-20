'use client'
import { Stack, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { EmotionCategory } from '../../../enums/index';
import { SurveyQuestion, SurveyQuestionsData } from '../../../data/survey-questions';
import CenterContainer from '../../../components/yellow-container/yellow-container.component';

export default function Results(){
  const surveyResponsesString = localStorage.getItem('surveyState');
  const surveyResponses = JSON.parse(surveyResponsesString || '{}').responses;
  // Retrieve survey responses from localStorage

  const formattedResponses = surveyResponses.map(({ qId, answer }) => ({
        qId: parseInt(qId), answer: parseInt(answer)}));
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
      const question = SurveyQuestionsData.find((question) => question.id === response.qId);
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

  // Display formatted survey responses
  return (
    <CenterContainer>
      <Stack align='center'>
        {Object.entries(emotionTally).map(([emotion, count]) => (
          <p key={emotion}>
            {emotion}: {count}
          </p>
        ))}
      </Stack>
    </CenterContainer>
  );
}