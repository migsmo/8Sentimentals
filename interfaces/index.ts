import { EmotionCategory } from '../enums';

export interface SurveyForm {
  currentQuestionIdx: number;
  responses: SurveyResponse[];
}

export interface SurveyResponse {
  qId: number;
  answer: string;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  agree: EmotionCategory;
  disagree: EmotionCategory;
}
