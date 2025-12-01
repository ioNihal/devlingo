import { useState } from 'react';
import { useUserStore } from '../store/userStore';
import { Trophy, Flame, BookOpen, Target, Activity, Sparkles } from 'lucide-react';

export function Profile() {
    const { xp, streak, completedLessons, dailyGoal, dailyProgress, geminiApiKey, removeGeminiApiKey } = useUserStore();
    const [showConfirmDisable, setShowConfirmDisable] = useState(false);
    const lessonsCompletedCount = Object.keys(completedLessons).length;

    const today = new Date().toISOString().split('T')[0];
    const todayXp = dailyProgress[today] || 0;
    const progressPercent = Math.min(100, (todayXp / dailyGoal) * 100);

    // Generate last 7 days data
    const last7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return d.toISOString().split('T')[0];
    });

    return (
        <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>Profile</h1>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                    <div style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                        <Trophy size={32} />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{xp}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total XP</div>
                </div>

                <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                    <div style={{ color: 'var(--error)', marginBottom: '0.5rem' }}>
                        <Flame size={32} />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{streak}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Day Streak</div>
                </div>

                <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                        <BookOpen size={32} />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{lessonsCompletedCount}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Lessons Completed</div>
                </div>
            </div>

            {/* Daily Goal */}
            <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Target size={24} /> Daily Goal
                    </h2>
                    <span style={{ color: 'var(--text-muted)' }}>{todayXp} / {dailyGoal} XP</span>
                </div>
                <div style={{
                    height: '20px',
                    backgroundColor: 'var(--bg-color)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{
                        width: `${progressPercent}%`,
                        height: '100%',
                        backgroundColor: 'var(--primary)',
                        transition: 'width 0.5s ease'
                    }} />
                </div>
            </div>

            {/* Activity Chart */}
            <div className="card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <Activity size={24} /> Activity (Last 7 Days)
                </h2>
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    height: '150px',
                    paddingTop: '20px'
                }}>
                    {last7Days.map(date => {
                        const dayXp = dailyProgress[date] || 0;
                        const heightPercent = Math.min(100, Math.max(10, (dayXp / 100) * 100)); // Scale relative to 100 XP
                        const dayLabel = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
                        const isToday = date === today;

                        return (
                            <div key={date} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                                <div style={{
                                    width: '30px',
                                    height: `${heightPercent}%`,
                                    backgroundColor: isToday ? 'var(--primary)' : 'var(--border-color)',
                                    borderRadius: '4px 4px 0 0',
                                    transition: 'height 0.3s',
                                    position: 'relative',
                                    minHeight: '4px'
                                }}>
                                    {dayXp > 0 && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-25px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            fontSize: '0.7rem',
                                            color: 'var(--text-muted)'
                                        }}>
                                            {dayXp}
                                        </div>
                                    )}
                                </div>
                                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    {dayLabel}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Experimental Features Management */}
            <div className="card" style={{ border: '1px solid var(--secondary)' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={24} color="var(--secondary)" /> Experimental Features
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Gemini AI Integration</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            {geminiApiKey ? 'Enabled' : 'Disabled'}
                        </div>
                    </div>
                    {geminiApiKey ? (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {showConfirmDisable ? (
                                <>
                                    <button
                                        onClick={() => {
                                            removeGeminiApiKey();
                                            setShowConfirmDisable(false);
                                        }}
                                        className="btn"
                                        style={{
                                            backgroundColor: 'var(--error)',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            padding: '0.5rem 1rem'
                                        }}
                                    >
                                        Confirm Disable
                                    </button>
                                    <button
                                        onClick={() => setShowConfirmDisable(false)}
                                        className="btn"
                                        style={{
                                            backgroundColor: 'var(--bg-color)',
                                            border: '1px solid var(--error)',
                                            fontSize: '0.9rem',
                                            padding: '0.5rem 1rem',
                                            color: "var(--error)"
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setShowConfirmDisable(true)}
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: '1px solid var(--error)',
                                        color: 'var(--error)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.5rem',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Disable
                                </button>
                            )}
                        </div>
                    ) : (
                        <a
                            href="/experimental"
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                fontSize: '0.9rem'
                            }}
                        >
                            Setup
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
