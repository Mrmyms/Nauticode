export type ChallengeType =
  | "THEORY"
  | "SELECT"
  | "ASSIST"
  | "CODE_FILL"
  | "CODE_TEST"
  | "DEBUG"
  | "CODE_ORDER"
  | "CODE_WRITE"
  | "MATCHING"
  | "PREDICT_OUTPUT";

export interface Option {
  text: string;
  correct: boolean;
  audioSrc?: string;
  imageSrc?: string;
}

export interface Challenge {
  type: ChallengeType;
  question: string;
  lessonText?: string;
  codeSnippet?: string;
  options: Option[];
}

export interface Lesson {
  title: string;
  challenges: Challenge[];
}

export interface UnitDefinition {
  order: number;
  slug: string;
  title: string;
  description: string;
  guidebookText: string;
  lessons: Lesson[];
}
