'use client';
import { Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import LikertScale from '../../../components/likert-scale/likert-scale.component';
import ProgressBar from '../../../components/progress-bar/progress-bar.component';
import YellowContainer from '../../../components/yellow-container/yellow-container.component';

export default function Survey() {
  const [active, setActive] = useState(1);
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

        <LikertScale form={form} currentQuestionId={0} />
      </Stack>
    </YellowContainer>
  );
}
