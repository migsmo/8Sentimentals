import { Group, Radio, RadioGroup, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export default function LikertScale(props: Props) {
  const { form, currentQuestionId } = props;

  const responseIdx = form.values.responses.findIndex(
    (response) => response.qId === currentQuestionId
  );

  const options = [
    { value: '1', label: 'Strongly Disagree' },
    { value: '2', label: 'Disagree' },
    { value: '3', label: 'Neutral' },
    { value: '4', label: 'Agree' },
    { value: '5', label: 'Strongly Agree' },
  ];

  return (
    <>
      <RadioGroup value={form.values.responses[responseIdx]?.answer || '3'}>
        <Group>
          {options.map((option) => (
            <Radio
              size='md'
              key={option.value}
              value={option.value}
              label={
                <Text
                  size={'xl'}
                  fw={700}
                  style={{
                    body: {},
                  }}
                >
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
  currentQuestionId: number;
}
