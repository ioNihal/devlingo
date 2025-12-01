import { describe, it, expect } from 'vitest';
import { runJavascript } from '../engine/JavascriptRunner';

describe('JavascriptRunner', () => {
    it('should execute valid code and capture output', async () => {
        const result = await runJavascript('console.log("Hello World")');
        expect(result.success).toBe(true);
        expect(result.output).toContain('Hello World');
    });

    it('should handle errors gracefully', async () => {
        const result = await runJavascript('throw new Error("Test Error")');
        expect(result.success).toBe(false);
        expect(result.error).toBe('Test Error');
    });

    it('should handle math operations', async () => {
        const result = await runJavascript('console.log(5 + 5)');
        expect(result.success).toBe(true);
        expect(result.output).toContain('10');
    });
});
