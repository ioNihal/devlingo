export type ProblemType = 'multiple_choice' | 'fill_gap' | 'code_execution';

export interface Problem {
    id: string;
    type: ProblemType;
    prompt: string;
    codeTemplate?: string;
    solution?: string; // Reference solution for testing
    options?: string[]; // For multiple choice
    validationCode?: string; // Hidden code to run for verification
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    problems: Problem[];
    xpReward: number;
}

export interface Course {
    id: string;
    title: string;
    language: 'javascript' | 'typescript' | 'go';
    lessons: Lesson[];
}
