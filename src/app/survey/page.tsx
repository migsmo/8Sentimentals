'use client';
import { Button, Container, Paper, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import LikertScale from '../../../components/likert-scale/likert-scale.component';
import ProgressBar from '../../../components/progress-bar/progress-bar.component';
import YellowContainer from '../../../components/yellow-container/yellow-container.component';
import { SurveyQuestionsData } from '../../../data/survey-questions';
import { SurveyForm, SurveyQuestion } from '../../../interfaces';

export default function Survey() {
  const [active, setActive] = useState(0);
  const [randomizedSurveyQuestions, setRandomizedSurveyQuestions] = useState<
    SurveyQuestion[]
  >([]);
  const form = useForm<SurveyForm>({
    initialValues: {
      currentQuestionIdx: 0,
      responses: [],
    },
  });

  useEffect(() => {
    const randomized = SurveyQuestionsData.sort(() => Math.random() - 0.5);
    setRandomizedSurveyQuestions(randomized);
  }, []);

  console.log(form.values);

  return (
    <YellowContainer alignItems='flex-start' justifyContent='flex-start'>
      <Stack w='100%' justify='space-between' h='100%'>
        <Container fluid w='100%'>
          <Title>Survey</Title>
        </Container>

        <Paper
          style={{
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          py={'10%'}
        >
          <Stack>
            {randomizedSurveyQuestions.length > 0 && (
              <Stack w='100%' align='center' px='xl'>
                <Title order={2} pb='xl'>
                  {randomizedSurveyQuestions[0].question}
                </Title>
                <LikertScale
                  form={form}
                  question={
                    randomizedSurveyQuestions[form.values.currentQuestionIdx]
                  }
                />
              </Stack>
            )}
            <Button color='black'>Next question</Button>
          </Stack>
        </Paper>

        <ProgressBar active={active} setActive={setActive} />
      </Stack>
    </YellowContainer>
  );
}
