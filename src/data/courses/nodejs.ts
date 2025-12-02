import type { Course } from '../types';

export const nodejsCourse: Course = {
    id: 'nodejs-basics',
    title: 'Node.js Basics',
    language: 'javascript',
    lessons: [
        {
            id: 'hello-world',
            title: 'Hello World',
            description: 'Your first Node.js program',
            xpReward: 10,
            problems: [
                {
                    id: 'p1',
                    type: 'code_execution',
                    prompt: 'Print "Hello World" to the console.',
                    codeTemplate: '// Write your code here\n',
                    validationCode: 'if (!logs.includes("Hello World")) throw new Error("Did not print Hello World");',
                },
                {
                    id: 'p2',
                    type: 'code_execution',
                    prompt: 'Calculate 5 + 5 and print the result.',
                    codeTemplate: 'console.log(5 + 5);',
                    validationCode: 'if (!logs.includes("10")) throw new Error("Result is not 10");',
                }
            ]
        },
        {
            id: 'variables',
            title: 'Variables',
            description: 'Learn about let and const',
            xpReward: 15,
            problems: [
                {
                    id: 'p3',
                    type: 'code_execution',
                    prompt: 'Create a variable named `name` with the value "DuoPingo" and print it.',
                    codeTemplate: '',
                    validationCode: 'if (!logs.includes("DuoPingo")) throw new Error("Did not print DuoPingo");',
                }
            ]
        }
    ]
};

export const courses: Course[] = [nodejsCourse];
