import { useState } from 'react';
import { Sparkles, AlertTriangle, Loader2, ArrowLeft } from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import type { Problem } from '../../data/types';
import { generateProblem } from '../../services/gemini';
import { ProblemView } from '../../components/ProblemView/ProblemView';
import styles from './Experimental.module.css';

const TOPICS = [
    'Variables', 'Strings', 'Numbers',
    'Loops', 'Arrays', 'Functions',
    'Objects', 'Algorithms'
];

export function Experimental() {
    const { geminiApiKey } = useUserStore();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [generatedProblem, setGeneratedProblem] = useState<Problem | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const handleGenerate = async (topic: string) => {
        if (!geminiApiKey) return;
        setLoading(true);
        setError(null);
        setSelectedTopic(topic);

        try {
            const problem = await generateProblem(topic, geminiApiKey);
            setGeneratedProblem(problem);
        } catch (err: any) {
            setError(err.message || 'Failed to generate problem');
            setGeneratedProblem(null);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        setGeneratedProblem(null);
        setSelectedTopic(null);
        setError(null);
    };

    // --- NO API KEY SCREEN ---
    if (!geminiApiKey) {
        return (
            <div className={styles.noKeyWrapper}>
                <AlertTriangle size={48} color="var(--secondary)" className={styles.noKeyIcon} />
                <h2>Enable AI Features</h2>

                <p className={styles.noKeyText}>
                    Enter your Google Gemini API Key to enable dynamic lesson generation.
                    <br />
                    <span className={styles.noKeyNote}>
                        (Stored locally in your browser. Never sent to our servers.)
                    </span>
                </p>

                <form
                    className={styles.apiForm}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const input = form.elements.namedItem('apiKey') as HTMLInputElement;
                        if (input.value.trim()) {
                            useUserStore.getState().setGeminiApiKey(input.value.trim());
                        }
                    }}
                >
                    <input
                        name="apiKey"
                        type="password"
                        placeholder="Paste your API Key here"
                        className={styles.apiInput}
                    />
                    <button type="submit" className={styles.btnPrimary}>Save</button>
                </form>

                <div className={styles.apiLink}>
                    <a
                        href="https://aistudio.google.com/app/apikey"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get a free API Key →
                    </a>
                </div>
            </div>
        );
    }

    // --- PROBLEM GENERATED SCREEN ---
    if (generatedProblem) {
        return (
            <div className={styles.generatedWrapper}>
                <button className={styles.backBtn} onClick={handleBack}>
                    <ArrowLeft size={20} /> Back to Topics
                </button>

                <div className={styles.generatedTag}>
                    AI Generated: {selectedTopic}
                </div>

                <ProblemView
                    problem={generatedProblem}
                    onComplete={() => {
                        if (selectedTopic) {
                            setGeneratedProblem(null);
                            handleGenerate(selectedTopic);
                        }
                    }}
                />
            </div>
        );
    }

    // --- TOPIC LIST SCREEN ---
    return (
        <div className={styles.wrapper}>
            <div className={styles.heroBox}>
                <Sparkles size={48} color="var(--secondary)" className={styles.heroIcon} />
                <h1>AI Lesson Generator</h1>
                <p className={styles.heroText}>
                    Choose a topic and Gemini will create a unique coding challenge for you instantly.
                </p>
            </div>

            {error && (
                <div className={styles.errorBox}>
                    {error}
                </div>
            )}

            {loading ? (
                <div className={styles.loaderBox}>
                    <Loader2 size={48} className={styles.spin} />
                    <p>Generating challenge...</p>
                </div>
            ) : (
                <div className={styles.topicGrid}>
                    {TOPICS.map(topic => (
                        <button
                            key={topic}
                            className={styles.topicCard}
                            onClick={() => handleGenerate(topic)}
                        >
                            {topic}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
