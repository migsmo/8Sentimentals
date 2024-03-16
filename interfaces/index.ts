interface SurveyForm {
  currentQuestionId: number;
  responses: {
    qId: number;
    answer: string;
  }[];
}
