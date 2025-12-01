import { useState } from 'react';
import type { Problem } from '../data/types';
import { CodeEditor } from './CodeEditor';
import { runJavascript } from '../engine/JavascriptRunner';
import { CheckCircle, Play } from 'lucide-react';

interface ProblemViewProps {
    problem: Problem;
    onComplete: () => void;
}

export function ProblemView({ problem, onComplete }: ProblemViewProps) {
    const [code, setCode] = useState(problem.codeTemplate || '');
    const [output, setOutput] = useState<string[]>([]);
    const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleRun = async () => {
        setStatus('running');
        setFeedback(null);
        setOutput([]);

        try {
            // 1. Run the user's code
            const result = await runJavascript(code);
            setOutput(result.output);

            if (!result.success) {
                setStatus('error');
                setFeedback(result.error || 'Runtime Error');
                return;
            }

            // 2. Run validation
            if (problem.validationCode) {
                // Inject logs into the validation scope
                // We concatenate the user's code with the validation code so they share the same scope
                // This ensures functions defined in user code are available to validation logic
                const logsJson = JSON.stringify(result.output);
                const validationFullCode = `
                    ${code}
                    
                    // --- Validation Logic ---
                    const logs = ${logsJson};
                    ${problem.validationCode}
                `;

                const valResult = await runJavascript(validationFullCode);

                if (!valResult.success) {
                    setStatus('error');
                    setFeedback('Validation Failed: ' + valResult.error);
                } else {
                    setStatus('success');
                    setFeedback('Correct! Great job.');
                }
            } else {
                setStatus('success');
            }

        } catch (e) {
            setStatus('error');
            setFeedback('System Error');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '100px' }}>
            <div className="card">
                <h2 style={{ marginBottom: '0.5rem' }}>Challenge</h2>
                <p style={{ lineHeight: '1.6' }}>{problem.prompt}</p>
            </div>

            <CodeEditor code={code} onChange={setCode} />

            <div className="card" style={{ minHeight: '100px', backgroundColor: '#000' }}>
                <div style={{ color: '#888', fontSize: '0.8rem', marginBottom: '0.5rem' }}>CONSOLE</div>
                {output.map((line, i) => (
                    <div key={i} style={{ fontFamily: 'monospace', color: '#fff' }}>{line}</div>
                ))}
                {status === 'error' && feedback && (
                    <div style={{ color: 'var(--error)', marginTop: '0.5rem' }}>{feedback}</div>
                )}
                {status === 'success' && (
                    <div style={{ color: 'var(--success)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle size={20} /> {feedback}
                    </div>
                )}
            </div>

            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1rem',
                background: 'var(--bg-color)',
                borderTop: '2px solid var(--border-color)',
                display: 'flex',
                gap: '1rem',
                zIndex: 200
            }}>
                <button
                    className="btn btn-secondary"
                    onClick={handleRun}
                    disabled={status === 'running'}
                    style={{ flex: 1 }}
                >
                    <Play size={20} style={{ marginRight: '8px' }} /> Run
                </button>

                <button
                    className="btn btn-primary"
                    onClick={onComplete}
                    disabled={status !== 'success'}
                    style={{ flex: 1, opacity: status === 'success' ? 1 : 0.5 }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
