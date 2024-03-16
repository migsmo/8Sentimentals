import { Stepper, StepperProps, rem } from '@mantine/core';

interface Props {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
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
  const { active, setActive } = props;
  return (
    <>
      <StyledStepper active={active} onStepClick={setActive} size='xs'>
        {Array.from({ length: 20 }, (_, i) => (
          <Stepper.Step key={i} label={`Step ${i + 1}`} />
        ))}
      </StyledStepper>
    </>
  );
}
