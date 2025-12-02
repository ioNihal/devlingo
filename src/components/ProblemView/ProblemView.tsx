import { useState } from 'react';
import { CheckCircle, Play } from 'lucide-react';
import { runJavascript } from '../../engine/JavascriptRunner';
import type { Problem } from '../../data/types';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import styles from './ProblemView.module.css';

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
            const result = await runJavascript(code);
            setOutput(result.output);

            if (!result.success) {
                setStatus('error');
                setFeedback(result.error || 'Runtime Error');
                return;
            }

            if (problem.validationCode) {
                const logsJson = JSON.stringify(result.output);
                const validationFullCode = `
                    ${code}

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
        <div className={styles.wrapper}>
            <div className="card">
                <h2 className={styles.challengeTitle}>Challenge</h2>
                <p className={styles.prompt}>{problem.prompt}</p>
            </div>

            <CodeEditor code={code} onChange={setCode} />

            <div className={`${styles.consoleBox} card`}>
                <div className={styles.consoleLabel}>CONSOLE</div>

                {output.map((line, i) => (
                    <div key={i} className={styles.consoleLine}>{line}</div>
                ))}

                {status === 'error' && feedback && (
                    <div className={styles.errorText}>{feedback}</div>
                )}

                {status === 'success' && (
                    <div className={styles.successText}>
                        <CheckCircle size={20} /> {feedback}
                    </div>
                )}
            </div>

            <div className={styles.bottomBar}>
                <button
                    className={`${styles.btn} ${styles.btnSecondary}`}
                    onClick={handleRun}
                    disabled={status === 'running'}
                >
                    <Play size={20} className={styles.runIcon} /> Run
                </button>

                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={onComplete}
                    disabled={status !== 'success'}
                    style={{ opacity: status === 'success' ? 1 : 0.5 }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
