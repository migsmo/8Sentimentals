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
          px='xl'
        >
          <Stack
            style={{
              maxWidth: '50rem',
            }}
          >
            {randomizedSurveyQuestions.length > 0 && (
              <Stack w='100%' align='center'>
                <Title order={2} pb='xl'>
                  {
                    randomizedSurveyQuestions[form.values.currentQuestionIdx]
                      .question
                  }
                </Title>
                <LikertScale
                  form={form}
                  question={
                    randomizedSurveyQuestions[form.values.currentQuestionIdx]
                  }
                />
              </Stack>
            )}
            <Stack justify='center' align='center' gap={5}>
              <Button
                color='black'
                mt='xl'
                w='20rem'
                onClick={() => {
                  form.setFieldValue(
                    'currentQuestionIdx',
                    form.values.currentQuestionIdx + 1
                  );
                }}
                disabled={
                  form.values.responses[form.values.currentQuestionIdx] ===
                  undefined
                }
              >
                Next question
              </Button>
              <Button
                variant='subtle'
                color='black'
                w='5rem'
                size='xs'
                onClick={() => {
                  form.setFieldValue(
                    'currentQuestionIdx',
                    form.values.currentQuestionIdx + 1
                  );
                }}
                disabled={form.values.currentQuestionIdx === 0}
              >
                Back
              </Button>
            </Stack>
          </Stack>
        </Paper>

        <ProgressBar active={form.values.currentQuestionIdx} />
      </Stack>
    </YellowContainer>
  );
}
