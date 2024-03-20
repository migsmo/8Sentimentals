'use client'
import { Stack, Title } from '@mantine/core';
import CenterContainer from '../../../components/yellow-container/yellow-container.component';

export default function Results() {
  // Retrieve survey responses from localStorage
  const surveyResponsesString = localStorage.getItem('surveyState');
  const surveyResponses = JSON.parse(surveyResponsesString || '{}').responses;

  // Format survey responses into an array with qId and answer
  const formattedResponses = surveyResponses.map(({ qId, answer }) => ({
    qId,
    answer
  }));

  // Display formatted survey responses
  return (
    <CenterContainer>
      <Stack align='center'>
        {formattedResponses.map((response, index) => (
          <div key={index}>
            <p>Question ID: {response.qId}</p>
            <p>Answer: {response.answer}</p>
          </div>
        ))}
      </Stack>
    </CenterContainer>
  );
}
