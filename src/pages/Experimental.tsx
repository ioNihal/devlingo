import { useState } from 'react';
import { useUserStore } from '../store/userStore';
import { Sparkles, AlertTriangle, Loader2, ArrowLeft } from 'lucide-react';
import { generateProblem } from '../services/gemini';
import { ProblemView } from '../components/ProblemView';
import type { Problem } from '../data/types';

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

    if (!geminiApiKey) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <AlertTriangle size={48} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                <h2>Enable AI Features</h2>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                    Enter your Google Gemini API Key to enable dynamic lesson generation.
                    <br />
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                        (Stored locally in your browser. Never sent to our servers.)
                    </span>
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const input = form.elements.namedItem('apiKey') as HTMLInputElement;
                        if (input.value.trim()) {
                            useUserStore.getState().setGeminiApiKey(input.value.trim());
                        }
                    }}
                    style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}
                >
                    <input
                        name="apiKey"
                        type="password"
                        placeholder="Paste your API Key here"
                        style={{
                            flex: 1,
                            flexShrink: 0,
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-color)',
                            color: 'var(--text-color)'
                        }}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            width: "auto"
                        }}
                    >
                        Save
                    </button>
                </form>

                <div style={{ marginTop: '2rem' }}>
                    <a
                        href="https://aistudio.google.com/app/apikey"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--primary)', fontSize: '0.9rem' }}
                    >
                        Get a free API Key →
                    </a>
                </div>
            </div>
        );
    }

    if (generatedProblem) {
        return (
            <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                <button
                    onClick={handleBack}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        marginBottom: '1rem',
                        fontSize: '1rem'
                    }}
                >
                    <ArrowLeft size={20} /> Back to Topics
                </button>

                <div style={{ marginBottom: '1rem' }}>
                    <span style={{
                        backgroundColor: 'var(--secondary)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                    }}>
                        AI Generated: {selectedTopic}
                    </span>
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

    return (
        <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '3rem',
                padding: '2rem',
                backgroundColor: 'rgba(206, 130, 255, 0.1)',
                borderRadius: '1rem',
                border: '1px solid var(--secondary)'
            }}>
                <Sparkles size={48} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                <h1 style={{ marginBottom: '0.5rem' }}>AI Lesson Generator</h1>
                <p style={{ color: 'var(--text-muted)' }}>
                    Choose a topic and Gemini will create a unique coding challenge for you instantly.
                </p>
            </div>

            {error && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    border: '1px solid var(--error)',
                    borderRadius: '0.5rem',
                    color: 'var(--error)',
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    {error}
                </div>
            )}

            {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <Loader2 size={48} className="spin" style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
                    <p>Generating challenge...</p>
                    <style>{`
            .spin { animation: spin 1s linear infinite; }
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}</style>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '1rem'
                }}>
                    {TOPICS.map(topic => (
                        <button
                            key={topic}
                            onClick={() => handleGenerate(topic)}
                            className="card"
                            style={{
                                padding: '1.5rem',
                                textAlign: 'center',
                                cursor: 'pointer',
                                border: '1px solid var(--border-color)',
                                transition: 'transform 0.2s, border-color 0.2s',
                                background: 'var(--card-bg)',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                color: 'var(--text-color)',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--secondary)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                            }}
                        >
                            {topic}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
