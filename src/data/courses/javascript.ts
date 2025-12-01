import type { Course } from '../types';

export const jsBasics: Course = {
    id: 'js-basics',
    title: 'JS Basics: Foundations',
    language: 'javascript',
    lessons: [
        {
            id: 'variables',
            title: 'Variables & Types',
            description: 'Let, Const, and primitive types',
            xpReward: 10,
            problems: [
                {
                    id: 'var-1',
                    type: 'code_execution',
                    prompt: 'Create a variable `score` set to 100 and print it.',
                    codeTemplate: 'let score = 0;\n',
                    validationCode: 'if (!logs.includes("100")) throw new Error("Expected 100");',
                    solution: 'let score = 100;\nconsole.log(score);'
                }
            ]
        },
        {
            id: 'conditions',
            title: 'Logic & Conditions',
            description: 'If statements and booleans',
            xpReward: 15,
            problems: [
                {
                    id: 'cond-1',
                    type: 'code_execution',
                    prompt: 'Write an if statement: if `age` is 18 or more, print "Adult".',
                    codeTemplate: 'let age = 20;\n// Write if statement here\n',
                    validationCode: 'if (!logs.includes("Adult")) throw new Error("Expected output: Adult");',
                    solution: 'let age = 20;\nif (age >= 18) console.log("Adult");'
                }
            ]
        }
    ]
};

export const jsLoops: Course = {
    id: 'js-loops',
    title: 'JS Basics: Loops & Patterns',
    language: 'javascript',
    lessons: [
        {
            id: 'for-loop',
            title: 'The For Loop',
            description: 'Repeating actions',
            xpReward: 20,
            problems: [
                {
                    id: 'loop-1',
                    type: 'code_execution',
                    prompt: 'Print numbers 1 to 5 using a loop.',
                    codeTemplate: 'for (let i = 1; i <= 5; i++) {\n  \n}',
                    validationCode: 'if (!logs.includes("1") || !logs.includes("5")) throw new Error("Print 1 to 5");',
                    solution: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'
                }
            ]
        },
        {
            id: 'patterns',
            title: 'Star Patterns',
            description: 'Visual logic exercises',
            xpReward: 30,
            problems: [
                {
                    id: 'pat-1',
                    type: 'code_execution',
                    prompt: 'Print a 3-star line: "***"',
                    codeTemplate: 'console.log("***");',
                    validationCode: 'if (!logs.includes("***")) throw new Error("Print ***");',
                    solution: 'console.log("***");'
                },
                {
                    id: 'pat-2',
                    type: 'code_execution',
                    prompt: 'Use a loop to print 3 rows of "***".',
                    codeTemplate: 'for(let i=0; i<3; i++) {\n  console.log("***");\n}',
                    validationCode: 'if (logs.filter(l => l === "***").length !== 3) throw new Error("Print *** 3 times");',
                    solution: 'for(let i=0; i<3; i++) {\n  console.log("***");\n}'
                }
            ]
        }
    ]
};

export const jsAlgo: Course = {
    id: 'js-algo',
    title: 'Algorithms & Data Structures',
    language: 'javascript',
    lessons: [
        {
            id: 'arrays-algo',
            title: 'Array Algorithms',
            description: 'Searching and Sorting basics',
            xpReward: 50,
            problems: [
                {
                    id: 'sum-array',
                    type: 'code_execution',
                    prompt: 'Calculate the sum of the array `nums` and print it.',
                    codeTemplate: 'const nums = [10, 20, 30];\nlet sum = 0;\n// Write loop here\n\nconsole.log(sum);',
                    validationCode: 'if (!logs.includes("60")) throw new Error("Sum should be 60");',
                    solution: 'const nums = [10, 20, 30];\nlet sum = 0;\nfor(let n of nums) sum += n;\nconsole.log(sum);'
                },
                {
                    id: 'find-max',
                    type: 'code_execution',
                    prompt: 'Find the maximum number in `arr` and print it.',
                    codeTemplate: 'const arr = [5, 12, 8, 3];\nlet max = arr[0];\n\nconsole.log(max);',
                    validationCode: 'if (!logs.includes("12")) throw new Error("Max should be 12");',
                    solution: 'const arr = [5, 12, 8, 3];\nlet max = arr[0];\nfor(let n of arr) if(n > max) max = n;\nconsole.log(max);'
                }
            ]
        },
        {
            id: 'stack-ds',
            title: 'Data Structures: Stack',
            description: 'LIFO principle',
            xpReward: 50,
            problems: [
                {
                    id: 'stack-1',
                    type: 'code_execution',
                    prompt: 'Implement a push operation. Add "A" then "B" to `stack`, then print the stack.',
                    codeTemplate: 'const stack = [];\n// push "A"\n// push "B"\nconsole.log(stack);',
                    validationCode: 'const out = logs.join(" "); if (!out.includes("A") || !out.includes("B")) throw new Error("Stack should contain A and B");',
                    solution: 'const stack = [];\nstack.push("A");\nstack.push("B");\nconsole.log(stack);'
                }
            ]
        }
    ]
};

export const courses: Course[] = [jsBasics, jsLoops, jsAlgo];
