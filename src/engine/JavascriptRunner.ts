export interface ExecutionResult {
    success: boolean;
    output: string[];
    error?: string;
}

export async function runJavascript(code: string): Promise<ExecutionResult> {
    return new Promise((resolve) => {
        const logs: string[] = [];

        // Create a safe-ish context
        // We will use a simple approach for now: overriding console.log temporarily
        // In a real production app, this should be in a Web Worker to prevent freezing and better isolation

        const originalLog = console.log;
        const originalError = console.error;

        try {
            console.log = (...args) => {
                logs.push(args.map(a => String(a)).join(' '));
            };
            console.error = (...args) => {
                logs.push('Error: ' + args.map(a => String(a)).join(' '));
            };

            // Wrap code to allow return values if needed, though we mostly check logs
            // We use 'new Function' to execute the code
            const func = new Function(code);
            func();

            resolve({
                success: true,
                output: logs
            });
        } catch (err: any) {
            resolve({
                success: false,
                output: logs,
                error: err.message || String(err)
            });
        } finally {
            console.log = originalLog;
            console.error = originalError;
        }
    });
}
