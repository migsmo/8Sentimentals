'use client';
import { Button, Group, Stack, Title } from '@mantine/core';
import CenterContainer from '../../../components/yellow-container/yellow-container.component';

export default function Instructions() {
  return (
    <CenterContainer>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>8Sentimentals</h1>
        <h2>Welcome to 8Sentimentals! Follow these instructions to get started:</h2>
        <ol>
        <li><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h4 style={{ marginRight: '8px' }}>Read Each Question:</h4>
            <p style={{ margin: 0 }}>Ensure to carefully read each question presented in the survey.</p>
          </div></li>
        <li><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h4 style={{ marginRight: '8px' }}>Reflect and Answer:</h4>
            <p style={{ margin: 0 }}>Answer the survey questions honestly from the range of options.</p>
          </div></li>
        <li><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h4 style={{ marginRight: '8px' }}>Review Your Results:</h4>
            <p style={{ margin: 0 }}> With the results, gain some insights into your emotional well-being.</p>
          </div></li>
        </ol>
        <p>After reading these instructions, please click the "Get Started" button below to proceed.</p>
        <Button variant='filled' color='black' component='a' href='survey'>
              Get Started
            </Button>

      </div>
    </CenterContainer>
  );
}