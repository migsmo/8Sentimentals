import { Button, Group, Stack, Title } from '@mantine/core';
import CenterContainer from '../../components/yellow-container/yellow-container.component';

export default function Home() {
  return (
    <>
      <CenterContainer>
        <Group justify='center' style={{ width: '100%' }}>
          <Stack align='center'>
            <Title>8Sentimentals</Title>
            <Button variant='filled' color='black' component='a' href='survey'>
              Get Started
            </Button>
          </Stack>
        </Group>
      </CenterContainer>
    </>
  );
}
