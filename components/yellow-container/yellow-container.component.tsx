import { Container } from '@mantine/core';
import { Property } from 'csstype';
import React from 'react';

interface Props {
  children: React.ReactNode;
  alignItems?: Property.AlignItems | undefined;
  justifyContent?: Property.JustifyContent | undefined;
}

const YellowContainer: React.FC<Props> = ({
  children,
  alignItems = 'center',
  justifyContent = 'center',
}) => {
  return (
    <Container
      fluid
      p='xl'
      bg='yellow'
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      {children}
    </Container>
  );
};

export default YellowContainer;
