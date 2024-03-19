import { Stepper, StepperProps, rem } from '@mantine/core';
import { SurveyQuestionsData } from '../../data/survey-questions';

interface Props {
  active: number;
}

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      color='black'
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
      {...props}
    />
  );
}

export default function ProgressBar(props: Props) {
  const { active } = props;
  return (
    <>
      <StyledStepper active={active} allowNextStepsSelect={false} size='xs'>
        {Array.from({ length: SurveyQuestionsData.length }, (_, i) => (
          <Stepper.Step key={i} label={`Step ${i + 1}`} />
        ))}
      </StyledStepper>
    </>
  );
}
