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
        },

        {
            id: 'functions',
            title: 'Functions',
            description: 'Function declarations & returns',
            xpReward: 20,
            problems: [
                {
                    id: 'fn-1',
                    type: 'code_execution',
                    prompt: 'Create function add(a,b) and print add(2,3).',
                    codeTemplate: 'function add(a, b) {\n  // return sum\n}\nconsole.log(add(2, 3));',
                    validationCode: 'if (!logs.includes("5")) throw new Error("Expected 5");',
                    solution: 'function add(a, b) { return a + b; }\nconsole.log(add(2, 3));'
                }
            ]
        },

        {
            id: 'loops',
            title: 'Loops',
            description: 'For loops and iteration',
            xpReward: 20,
            problems: [
                {
                    id: 'loop-1',
                    type: 'code_execution',
                    prompt: 'Print numbers 1 to 5 using a loop.',
                    codeTemplate: '// print 1 to 5\n',
                    validationCode: `
                        ["1","2","3","4","5"].forEach(n => {
                           if (!logs.includes(n)) throw new Error("Missing " + n);
                        });
                    `,
                    solution: 'for (let i = 1; i <= 5; i++) console.log(i);'
                }
            ]
        },

        {
            id: 'arrays',
            title: 'Arrays',
            description: 'Basics of arrays',
            xpReward: 15,
            problems: [
                {
                    id: 'arr-1',
                    type: 'code_execution',
                    prompt: 'Create array colors and print first item.',
                    codeTemplate: 'let colors = [];\n',
                    validationCode: 'if (logs.length === 0) throw new Error("Expected a value printed");',
                    solution: 'let colors = ["red", "green", "blue"];\nconsole.log(colors[0]);'
                }
            ]
        },

        {
            id: 'objects',
            title: 'Objects',
            description: 'Key-value pairs and object access',
            xpReward: 20,
            problems: [
                {
                    id: 'obj-1',
                    type: 'code_execution',
                    prompt: 'Create object user with name "Nihal" and print the name.',
                    codeTemplate: 'let user = {};\n',
                    validationCode: 'if (!logs.includes("Nihal")) throw new Error("Expected Nihal");',
                    solution: 'let user = { name: "Nihal" };\nconsole.log(user.name);'
                }
            ]
        },

        {
            id: 'array-methods',
            title: 'Array Methods',
            description: 'map, filter, find basics',
            xpReward: 20,
            problems: [
                {
                    id: 'arr-m-1',
                    type: 'code_execution',
                    prompt: 'Use map to double numbers and print [2,4,6].',
                    codeTemplate: 'let nums = [1,2,3];\n// map here\n',
                    validationCode: `
                        if (!logs.includes("2") || !logs.includes("4") || !logs.includes("6"))
                          throw new Error("Expected 2,4,6");
                    `,
                    solution: 'let nums = [1,2,3];\nnums.map(n => console.log(n*2));'
                }
            ]
        },

        {
            id: 'string-methods',
            title: 'Strings & Methods',
            description: 'length, toUpperCase, slice',
            xpReward: 20,
            problems: [
                {
                    id: 'str-1',
                    type: 'code_execution',
                    prompt: 'Print "HELLO" using toUpperCase().',
                    codeTemplate: 'let msg = "hello";\n',
                    validationCode: 'if (!logs.includes("HELLO")) throw new Error("Expected HELLO");',
                    solution: 'let msg = "hello";\nconsole.log(msg.toUpperCase());'
                }
            ]
        },

        {
            id: 'switch',
            title: 'Switch Statements',
            description: 'Switch-case branching',
            xpReward: 15,
            problems: [
                {
                    id: 'sw-1',
                    type: 'code_execution',
                    prompt: 'Use switch on "apple" to print "Fruit".',
                    codeTemplate: 'let item = "apple";\n',
                    validationCode: 'if (!logs.includes("Fruit")) throw new Error("Expected Fruit");',
                    solution: `
                        let item = "apple";
                        switch(item) {
                          case "apple": console.log("Fruit"); break;
                        }
                    `
                }
            ]
        },

        {
            id: 'comparison',
            title: 'Comparison Operators',
            description: '== vs ===, >, <, !=, !==',
            xpReward: 15,
            problems: [
                {
                    id: 'cmp-1',
                    type: 'code_execution',
                    prompt: 'Check if 5 === "5" and print false.',
                    codeTemplate: '// comparison here\n',
                    validationCode: 'if (!logs.includes("false")) throw new Error("Expected false");',
                    solution: 'console.log(5 === "5");'
                }
            ]
        },

        {
            id: 'logical',
            title: 'Logical Operators',
            description: '&&, ||, ! basics',
            xpReward: 15,
            problems: [
                {
                    id: 'logic-1',
                    type: 'code_execution',
                    prompt: 'Use && so it prints "OK".',
                    codeTemplate: 'let a = true, b = true;\n',
                    validationCode: 'if (!logs.includes("OK")) throw new Error("Expected OK");',
                    solution: 'let a = true, b = true;\nif (a && b) console.log("OK");'
                }
            ]
        },

        {
            id: 'loops-advanced',
            title: 'Advanced Loops',
            description: 'while and do…while',
            xpReward: 15,
            problems: [
                {
                    id: 'while-1',
                    type: 'code_execution',
                    prompt: 'Use a while loop to print numbers 0,1,2.',
                    codeTemplate: 'let i = 0;\n',
                    validationCode: `
                        ["0","1","2"].forEach(n => {
                          if (!logs.includes(n)) throw new Error("Missing " + n);
                        });
                    `,
                    solution: 'let i = 0;\nwhile (i <= 2) { console.log(i); i++; }'
                }
            ]
        },

        {
            id: 'template-literals',
            title: 'Template Literals',
            description: 'Backticks & ${} expressions',
            xpReward: 10,
            problems: [
                {
                    id: 'tmp-1',
                    type: 'code_execution',
                    prompt: 'Use template literal to print "Hello Nihal".',
                    codeTemplate: 'let name = "Nihal";\n',
                    validationCode: 'if (!logs.includes("Hello Nihal")) throw new Error("Expected Hello Nihal");',
                    solution: 'let name = "Nihal";\nconsole.log(`Hello ${name}`);'
                }
            ]
        },

        {
            id: 'math',
            title: 'Math Basics',
            description: 'Math.floor, Math.random',
            xpReward: 15,
            problems: [
                {
                    id: 'math-1',
                    type: 'code_execution',
                    prompt: 'Print Math.floor(3.9).',
                    codeTemplate: '// print here\n',
                    validationCode: 'if (!logs.includes("3")) throw new Error("Expected 3");',
                    solution: 'console.log(Math.floor(3.9));'
                }
            ]
        },

        {
            id: 'dates',
            title: 'Dates',
            description: 'Basic Date usage',
            xpReward: 10,
            problems: [
                {
                    id: 'date-1',
                    type: 'code_execution',
                    prompt: 'Create a Date and print its year.',
                    codeTemplate: 'let d = new Date();\n',
                    validationCode: 'if (logs.length === 0) throw new Error("Expected a year printed");',
                    solution: 'let d = new Date();\nconsole.log(d.getFullYear());'
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
        /* ---------------- EXISTING LESSONS ---------------- */
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
        },

        /* ---------------- NEW LESSONS (13 more) ---------------- */

        {
            id: 'while-loop',
            title: 'While Loop',
            description: 'Repeat until condition is false',
            xpReward: 15,
            problems: [
                {
                    id: 'while-1',
                    type: 'code_execution',
                    prompt: 'Print 0,1,2 using a while loop.',
                    codeTemplate: 'let i = 0;\n// your loop\n',
                    validationCode: `
                        ["0","1","2"].forEach(n => {
                          if (!logs.includes(n)) throw new Error("Missing " + n);
                        });
                    `,
                    solution: 'let i = 0;\nwhile(i <= 2){ console.log(i); i++; }'
                }
            ]
        },

        {
            id: 'do-while',
            title: 'Do-While Loop',
            description: 'Loop that runs at least once',
            xpReward: 15,
            problems: [
                {
                    id: 'do-1',
                    type: 'code_execution',
                    prompt: 'Use a do-while loop to print "Run".',
                    codeTemplate: '// do-while\n',
                    validationCode: 'if (!logs.includes("Run")) throw new Error("Expected Run");',
                    solution: 'let x = 0;\ndo { console.log("Run"); } while(x > 1);'
                }
            ]
        },

        {
            id: 'nested-loops',
            title: 'Nested Loops',
            description: 'Loop inside another loop',
            xpReward: 25,
            problems: [
                {
                    id: 'nest-1',
                    type: 'code_execution',
                    prompt: 'Using nested loops, print:\n*\n*',
                    codeTemplate: 'for(let i=0;i<2;i++){\n  for(let j=0;j<1;j++){\n    console.log("*");\n  }\n}',
                    validationCode: 'if (logs.filter(l => l==="*").length !== 2) throw new Error("Expected two *");',
                    solution: 'for(let i=0;i<2;i++){ for(let j=0;j<1;j++){ console.log("*"); }}'
                }
            ]
        },

        {
            id: 'reverse-loop',
            title: 'Reverse Loops',
            description: 'Counting backward',
            xpReward: 10,
            problems: [
                {
                    id: 'rev-1',
                    type: 'code_execution',
                    prompt: 'Print 5,4,3 using a loop.',
                    codeTemplate: '// reverse loop\n',
                    validationCode: `
                        ["5","4","3"].forEach(n => {
                          if (!logs.includes(n)) throw new Error("Missing " + n);
                        });
                    `,
                    solution: 'for(let i=5;i>=3;i--){ console.log(i); }'
                }
            ]
        },

        {
            id: 'even-numbers',
            title: 'Even Numbers Loop',
            description: 'Loops with conditional checks',
            xpReward: 15,
            problems: [
                {
                    id: 'even-1',
                    type: 'code_execution',
                    prompt: 'Print even numbers 2,4,6.',
                    codeTemplate: '// even loop\n',
                    validationCode: `
                        ["2","4","6"].forEach(n => {
                          if (!logs.includes(n)) throw new Error("Missing " + n);
                        });
                    `,
                    solution: 'for(let i=2;i<=6;i+=2){ console.log(i); }'
                }
            ]
        },

        {
            id: 'sum-loop',
            title: 'Summation Loop',
            description: 'Accumulating values in loops',
            xpReward: 20,
            problems: [
                {
                    id: 'sum-1',
                    type: 'code_execution',
                    prompt: 'Use a loop to sum numbers 1–5 and print 15.',
                    codeTemplate: 'let sum = 0;\n// loop here\nconsole.log(sum);',
                    validationCode: 'if (!logs.includes("15")) throw new Error("Sum must be 15");',
                    solution: 'let sum = 0;\nfor(let i=1;i<=5;i++){ sum+=i; }\nconsole.log(sum);'
                }
            ]
        },

        {
            id: 'string-loop',
            title: 'Loop Through String',
            description: 'Iterating characters',
            xpReward: 15,
            problems: [
                {
                    id: 'strlp-1',
                    type: 'code_execution',
                    prompt: 'Loop through "hi" and print h then i.',
                    codeTemplate: 'let s = "hi";\n',
                    validationCode: `
                        ["h","i"].forEach(c => {
                           if (!logs.includes(c)) throw new Error("Missing " + c);
                        });
                    `,
                    solution: 'let s="hi";\nfor(let i=0;i<s.length;i++){ console.log(s[i]); }'
                }
            ]
        },

        {
            id: 'array-loop-for',
            title: 'Loop Arrays (for)',
            description: 'Standard index loop over arrays',
            xpReward: 20,
            problems: [
                {
                    id: 'arrf-1',
                    type: 'code_execution',
                    prompt: 'Loop over [10,20] and print both.',
                    codeTemplate: 'let nums=[10,20];\n',
                    validationCode: `
                        ["10","20"].forEach(n => {
                          if (!logs.includes(n)) throw new Error("Missing " + n);
                        });
                    `,
                    solution: 'let nums=[10,20]; for(let i=0;i<nums.length;i++){ console.log(nums[i]); }'
                }
            ]
        },

        {
            id: 'array-loop-forof',
            title: 'Loop Arrays (for...of)',
            description: 'More readable array iteration',
            xpReward: 20,
            problems: [
                {
                    id: 'arro-1',
                    type: 'code_execution',
                    prompt: 'Use for...of to print "a" and "b".',
                    codeTemplate: 'let arr=["a","b"];\n',
                    validationCode: `
                        ["a","b"].forEach(v => {
                          if (!logs.includes(v)) throw new Error("Missing " + v);
                        });
                    `,
                    solution: 'let arr=["a","b"];\nfor(let v of arr){ console.log(v); }'
                }
            ]
        },

        {
            id: 'break-loop',
            title: 'Break in Loops',
            description: 'Exit a loop early',
            xpReward: 10,
            problems: [
                {
                    id: 'brk-1',
                    type: 'code_execution',
                    prompt: 'Loop 1–5 but break when i is 3. Should print 1,2.',
                    codeTemplate: '// your loop\n',
                    validationCode: `
                        if (!logs.includes("1") || !logs.includes("2") || logs.includes("3"))
                          throw new Error("Should stop before 3");
                    `,
                    solution: `
                        for(let i=1;i<=5;i++){
                          if(i===3) break;
                          console.log(i);
                        }
                    `
                }
            ]
        },

        {
            id: 'continue-loop',
            title: 'Continue in Loops',
            description: 'Skip one iteration',
            xpReward: 10,
            problems: [
                {
                    id: 'cont-1',
                    type: 'code_execution',
                    prompt: 'Print numbers 1,3,5 using continue to skip even numbers.',
                    codeTemplate: '// loop with continue\n',
                    validationCode: `
                        ["1","3","5"].forEach(n=>{
                          if(!logs.includes(n)) throw new Error("Missing " + n);
                        });
                        if (logs.includes("2") || logs.includes("4")) throw new Error("Should skip evens");
                    `,
                    solution: `
                        for(let i=1;i<=5;i++){
                          if(i%2===0) continue;
                          console.log(i);
                        }
                    `
                }
            ]
        },

        {
            id: 'multiplication-table',
            title: 'Multiplication Table',
            description: 'Loops that generate tables',
            xpReward: 25,
            problems: [
                {
                    id: 'mult-1',
                    type: 'code_execution',
                    prompt: 'Print 2,4,6 using a loop for the 2-times table (only first 3 values).',
                    codeTemplate: '// 2 times table\n',
                    validationCode: `
                        ["2","4","6"].forEach(n => {
                          if (!logs.includes(n)) throw new Error("Missing " + n);
                        });
                    `,
                    solution: `
                        for(let i=1;i<=3;i++){
                          console.log(2*i);
                        }
                    `
                }
            ]
        },

        {
            id: 'pyramid-pattern',
            title: 'Pyramid Pattern',
            description: 'Nested star patterns',
            xpReward: 30,
            problems: [
                {
                    id: 'pyr-1',
                    type: 'code_execution',
                    prompt: 'Print:\n*\n**\n***',
                    codeTemplate: '// build pattern\n',
                    validationCode: `
                        ["*","**","***"].forEach(r=>{
                          if(!logs.includes(r)) throw new Error("Missing " + r);
                        });
                    `,
                    solution: `
                        for(let i=1;i<=3;i++){
                          let row="";
                          for(let j=0;j<i;j++){
                            row+="*";
                          }
                          console.log(row);
                        }
                    `
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
        /* ---------------- EXISTING LESSONS ---------------- */
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
        },

        /* ---------------- NEW LESSONS (13 MORE) ---------------- */

        {
            id: 'queue-ds',
            title: 'Queue',
            description: 'FIFO principle',
            xpReward: 40,
            problems: [
                {
                    id: 'queue-1',
                    type: 'code_execution',
                    prompt: 'Enqueue "X" then "Y" into queue and print it.',
                    codeTemplate: 'const queue = [];\n// enqueue X, then Y\nconsole.log(queue);',
                    validationCode: `
                        const o = logs.join(" ");
                        if(!o.includes("X") || !o.includes("Y")) throw new Error("Queue must contain X and Y");
                    `,
                    solution: 'const queue=[]; queue.push("X"); queue.push("Y"); console.log(queue);'
                }
            ]
        },

        {
            id: 'binary-search',
            title: 'Binary Search',
            description: 'Search sorted arrays efficiently',
            xpReward: 60,
            problems: [
                {
                    id: 'bs-1',
                    type: 'code_execution',
                    prompt: 'Perform binary search on [1,2,3,4,5] to find 4 and print "Found".',
                    codeTemplate: 'const arr=[1,2,3,4,5];\nlet target=4;\nlet found=false;\n// write binary search\nif(found) console.log("Found");',
                    validationCode: 'if(!logs.includes("Found")) throw new Error("Expected Found");',
                    solution: `
                        const arr=[1,2,3,4,5];
                        let target=4, found=false;
                        let l=0,r=arr.length-1;
                        while(l<=r){
                            let mid=Math.floor((l+r)/2);
                            if(arr[mid]===target){ found=true; break; }
                            if(target < arr[mid]) r=mid-1; else l=mid+1;
                        }
                        if(found) console.log("Found");
                    `
                }
            ]
        },

        {
            id: 'linear-search',
            title: 'Linear Search',
            description: 'Basic searching method',
            xpReward: 40,
            problems: [
                {
                    id: 'ls-1',
                    type: 'code_execution',
                    prompt: 'Search for number 7 in [3,7,1] and print "Yes".',
                    codeTemplate: 'const a=[3,7,1]; let found=false;\n// search here\nif(found) console.log("Yes");',
                    validationCode: 'if(!logs.includes("Yes")) throw new Error("Expected Yes");',
                    solution: `
                        const a=[3,7,1]; let found=false;
                        for(let x of a){ if(x===7){ found=true; break; }}
                        if(found) console.log("Yes");
                    `
                }
            ]
        },

        {
            id: 'bubble-sort',
            title: 'Bubble Sort',
            description: 'Classic comparison sort',
            xpReward: 70,
            problems: [
                {
                    id: 'bsort-1',
                    type: 'code_execution',
                    prompt: 'Sort [3,1,2] using bubble sort and print [1,2,3].',
                    codeTemplate: 'let arr=[3,1,2];\n// bubble sort\nconsole.log(arr);',
                    validationCode: `
                        const o = logs.join("");
                        if(!o.includes("1") || !o.includes("2") || !o.includes("3")) throw new Error("Expected sorted");
                    `,
                    solution: `
                        let arr=[3,1,2];
                        for(let i=0;i<arr.length;i++){
                            for(let j=0;j<arr.length-1;j++){
                                if(arr[j]>arr[j+1]){
                                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                                }
                            }
                        }
                        console.log(arr);
                    `
                }
            ]
        },

        {
            id: 'selection-sort',
            title: 'Selection Sort',
            description: 'Pick smallest element each loop',
            xpReward: 70,
            problems: [
                {
                    id: 'ssort-1',
                    type: 'code_execution',
                    prompt: 'Sort [4,2,1] using selection sort.',
                    codeTemplate: 'let arr=[4,2,1];\n// selection sort\nconsole.log(arr);',
                    validationCode: `
                        const o = logs.join("");
                        if(!o.includes("1") || !o.includes("2") || !o.includes("4")) throw new Error("Expected sorted");
                    `,
                    solution: `
                        let arr=[4,2,1];
                        for(let i=0;i<arr.length;i++){
                            let min=i;
                            for(let j=i+1;j<arr.length;j++){
                                if(arr[j] < arr[min]) min=j;
                            }
                            [arr[i],arr[min]]=[arr[min],arr[i]];
                        }
                        console.log(arr);
                    `
                }
            ]
        },

        {
            id: 'count-occurrence',
            title: 'Frequency Counter',
            description: 'Count appearances of elements',
            xpReward: 40,
            problems: [
                {
                    id: 'freq-1',
                    type: 'code_execution',
                    prompt: 'Count how many times "a" appears in ["a","b","a"]. Print 2.',
                    codeTemplate: 'const arr=["a","b","a"]; let count=0;\n// count\nconsole.log(count);',
                    validationCode: 'if(!logs.includes("2")) throw new Error("Expected 2");',
                    solution: `
                        const arr=["a","b","a"]; let count=0;
                        for(let c of arr) if(c==="a") count++;
                        console.log(count);
                    `
                }
            ]
        },

        {
            id: 'two-sum',
            title: 'Two Sum (Brute Force)',
            description: 'Find two numbers that add to target',
            xpReward: 60,
            problems: [
                {
                    id: 'twosum-1',
                    type: 'code_execution',
                    prompt: 'From [2,7,4] find two numbers that sum to 9 then print "OK".',
                    codeTemplate: 'const arr=[2,7,4]; let ok=false;\n// find pair\nif(ok) console.log("OK");',
                    validationCode: 'if(!logs.includes("OK")) throw new Error("Expected OK");',
                    solution: `
                        const arr=[2,7,4]; let ok=false;
                        for(let i=0;i<arr.length;i++){
                            for(let j=i+1;j<arr.length;j++){
                                if(arr[i]+arr[j]===9){ ok=true; }
                            }
                        }
                        if(ok) console.log("OK");
                    `
                }
            ]
        },

        {
            id: 'reverse-string',
            title: 'Reverse String',
            description: 'Algorithmic string manipulation',
            xpReward: 40,
            problems: [
                {
                    id: 'revstr-1',
                    type: 'code_execution',
                    prompt: 'Reverse "abc" and print "cba".',
                    codeTemplate: 'let s="abc"; let out="";\n// reverse\nconsole.log(out);',
                    validationCode: 'if(!logs.includes("cba")) throw new Error("Expected cba");',
                    solution: `
                        let s="abc"; let out="";
                        for(let i=s.length-1;i>=0;i--) out+=s[i];
                        console.log(out);
                    `
                }
            ]
        },

        {
            id: 'palindrome-check',
            title: 'Palindrome Check',
            description: 'Check if string reads same backward',
            xpReward: 50,
            problems: [
                {
                    id: 'pal-1',
                    type: 'code_execution',
                    prompt: 'Check if "madam" is palindrome. Print "Yes".',
                    codeTemplate: 'let s="madam"; let rev="";\n// reverse\nif(s===rev) console.log("Yes");',
                    validationCode: 'if(!logs.includes("Yes")) throw new Error("Expected Yes");',
                    solution: `
                        let s="madam"; let rev="";
                        for(let i=s.length-1;i>=0;i--) rev+=s[i];
                        if(s===rev) console.log("Yes");
                    `
                }
            ]
        },

        {
            id: 'fibonacci',
            title: 'Recursion / Fibonacci',
            description: 'Classic recursive problem',
            xpReward: 80,
            problems: [
                {
                    id: 'fib-1',
                    type: 'code_execution',
                    prompt: 'Compute fib(5) recursively and print 5.',
                    codeTemplate: `function fib(n){\n  // recursive\n}\nconsole.log(fib(5));`,
                    validationCode: 'if(!logs.includes("5")) throw new Error("Expected 5");',
                    solution: `
                        function fib(n){
                            if(n<=1) return n;
                            return fib(n-1)+fib(n-2);
                        }
                        console.log(fib(5));
                    `
                }
            ]
        },

        {
            id: 'hashmap-basic',
            title: 'Hash Map (Object Map)',
            description: 'Key-value storage',
            xpReward: 40,
            problems: [
                {
                    id: 'map-1',
                    type: 'code_execution',
                    prompt: 'Add key "x"=10 to the map and print it.',
                    codeTemplate: 'const map={};\n// add key x=10\nconsole.log(map);',
                    validationCode: 'if(!logs.join("").includes("10")) throw new Error("Expected 10");',
                    solution: `
                        const map={};
                        map.x=10;
                        console.log(map);
                    `
                }
            ]
        },

        {
            id: 'set-basic',
            title: 'Set Data Structure',
            description: 'Unique elements only',
            xpReward: 40,
            problems: [
                {
                    id: 'set-1',
                    type: 'code_execution',
                    prompt: 'Insert 1,1,2 into a Set and print its size (should be 2).',
                    codeTemplate: 'const s=new Set();\n// add values\nconsole.log(s.size);',
                    validationCode: 'if(!logs.includes("2")) throw new Error("Expected size = 2");',
                    solution: `
                        const s=new Set();
                        s.add(1); s.add(1); s.add(2);
                        console.log(s.size);
                    `
                }
            ]
        },

        {
            id: 'sliding-window',
            title: 'Sliding Window (Basic)',
            description: 'Sum of first K elements',
            xpReward: 60,
            problems: [
                {
                    id: 'win-1',
                    type: 'code_execution',
                    prompt: 'Find sum of first 3 numbers of [2,5,1,6]. Print 8.',
                    codeTemplate: 'const arr=[2,5,1,6]; let sum=0;\n// sum first 3\nconsole.log(sum);',
                    validationCode: 'if(!logs.includes("8")) throw new Error("Expected 8");',
                    solution: `
                        const arr=[2,5,1,6]; let sum=0;
                        for(let i=0;i<3;i++) sum+=arr[i];
                        console.log(sum);
                    `
                }
            ]
        },

        {
            id: 'min-element',
            title: 'Find Minimum',
            description: 'Basic scan algorithm',
            xpReward: 40,
            problems: [
                {
                    id: 'min-1',
                    type: 'code_execution',
                    prompt: 'Find minimum in [9,4,7] and print 4.',
                    codeTemplate: 'let a=[9,4,7]; let min=a[0];\n// loop\nconsole.log(min);',
                    validationCode: 'if(!logs.includes("4")) throw new Error("Expected 4");',
                    solution: `
                        let a=[9,4,7]; let min=a[0];
                        for(let x of a) if(x<min) min=x;
                        console.log(min);
                    `
                }
            ]
        }
    ]
};


export const courses: Course[] = [jsBasics, jsLoops, jsAlgo];
