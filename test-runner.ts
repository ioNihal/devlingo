import { runJavascript } from './src/engine/JavascriptRunner';

async function testRunner() {
    console.log('Testing JavascriptRunner...');

    // Test 1: Basic Console Log
    const result1 = await runJavascript('console.log("Hello Test");');
    if (result1.success && result1.output.includes('Hello Test')) {
        console.log('Test 1 Passed: Console Log');
    } else {
        console.error('Test 1 Failed', result1);
    }

    // Test 2: Error Handling
    const result2 = await runJavascript('throw new Error("Boom");');
    if (!result2.success && result2.error === 'Boom') {
        console.log('Test 2 Passed: Error Handling');
    } else {
        console.error('Test 2 Failed', result2);
    }

    // Test 3: Math
    const result3 = await runJavascript('console.log(2 + 2);');
    if (result3.success && result3.output.includes('4')) {
        console.log('Test 3 Passed: Math');
    } else {
        console.error('Test 3 Failed', result3);
    }
}

testRunner();
