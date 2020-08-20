export interface Survey {
  key: string;
  title: string;
  questions: Question[];
}

export interface Question {
  key: string;
  text: string;
  leftLabel: string;
  rightLabel: string;
  categories: string[];
  steps: number;
}

export interface SliderQuestion extends Question{
  type: 'slider';
  key: string;
  text: string;
  steps: number,
  leftLabel: string;
  rightLabel: string;
}

export interface Answer {
  surveyKey: string;
  questionKey: string;
  value: string;
}
