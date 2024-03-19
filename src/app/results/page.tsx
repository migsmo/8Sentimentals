import { Stack, Title } from '@mantine/core';
import { useSurvey } from '../../../contexts/survey.context';
import CenterContainer from '../../../components/yellow-container/yellow-container.component';

export default function Results() {
  const { survey} = useSurvey;

  // Access survey data and render results
  return (
    <CenterContainer>
      <Stack align='center'>
        <Title>Results</Title>
        {/* Render survey data here */}
        <pre>{JSON.stringify(survey, null, 2)}</pre>
      </Stack>
    </CenterContainer>
  );
}
