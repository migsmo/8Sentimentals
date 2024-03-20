'use client';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SurveyForm } from '../interfaces';

interface SurveyContextType {
  survey?: SurveyForm;
  setSurvey: (survey: SurveyForm) => void;
  isLoading: boolean;
}

const SurveyContext = createContext<SurveyContextType>({} as SurveyContextType);

export const useSurvey = () => useContext(SurveyContext);

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const [survey, setSurvey] = useState<SurveyForm>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (survey?.responses && survey?.responses.length > 0) {
        localStorage.setItem('surveyState', JSON.stringify(survey || '{}'));
      }
    }
  }, [survey]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const surveyState = JSON.parse(
        localStorage.getItem('surveyState') || '{}'
      );
      setSurvey(surveyState);
      setIsLoading(false);
    }
  }, []);

  return (
    <SurveyContext.Provider value={{ survey, setSurvey, isLoading }}>
      {children}
    </SurveyContext.Provider>
  );
};