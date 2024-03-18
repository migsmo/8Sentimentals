import { Divider, Group, Radio, RadioGroup, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { SurveyForm, SurveyQuestion, SurveyResponse } from '../../interfaces';

export default function LikertScale(props: Props) {
  const { form, question } = props;

  const options = [
    { value: '1', label: 'Strongly Disagree' },
    { value: '2', label: 'Disagree' },
    { value: '3', label: 'Neutral' },
    { value: '4', label: 'Agree' },
    { value: '5', label: 'Strongly Agree' },
  ];

  return (
    <>
      <Group justify='space-between' w='100%' wrap='nowrap'>
        <Text size={'md'} fw={700}>
          {question.disagree}
        </Text>
        <Divider color='black' orientation='horizontal' w='100%' />
        <Text size={'md'} fw={700}>
          {question.agree}
        </Text>
      </Group>

      <RadioGroup
        value={
          form.values.responses[form.values.currentQuestionIdx]?.answer || '-1'
        }
        onChange={(value) => {
          const response: SurveyResponse = {
            qId: question.id,
            answer: value,
          };
          form.setFieldValue(
            `responses.${form.values.currentQuestionIdx}`,
            response
          );
        }}
      >
        <Group>
          {options.map((option) => (
            <Radio
              size='md'
              key={option.value}
              value={option.value}
              label={
                <Text size={'md'} fw={700}>
                  {option.label}
                </Text>
              }
            />
          ))}
        </Group>
      </RadioGroup>
    </>
  );
}

interface Props {
  form: UseFormReturnType<SurveyForm, (values: SurveyForm) => SurveyForm>;
  question: SurveyQuestion;
}
