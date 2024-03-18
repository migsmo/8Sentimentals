'use client';
import { Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import LikertScale from '../../../components/likert-scale/likert-scale.component';
import ProgressBar from '../../../components/progress-bar/progress-bar.component';
import YellowContainer from '../../../components/yellow-container/yellow-container.component';
import SurveyQuestions from './surveyQuestions.tsx';

export default function Survey() {
  const [active, setActive] = useState(0);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const form = useForm<SurveyForm>({
    initialValues: {
      currentQuestionId: 0,
      responses: [],
    },
  });

  return (
    <YellowContainer alignItems='flex-start' justifyContent='flex-start'>
      <Stack w='100%'>
        <Title>Survey</Title>

        <ProgressBar active={active} setActive={setActive} />
        <h1 size="lg" style={{ marginBottom: '1rem' }}>
              {SurveyQuestions[active]} {/* Displays the current question*/}
          </h1>

        <LikertScale form={form} currentQuestionId={setActive} />
      </Stack>
    </YellowContainer>
  );
}
