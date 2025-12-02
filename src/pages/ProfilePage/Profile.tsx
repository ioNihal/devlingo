import { useState } from 'react';
import { useUserStore } from '../../store/userStore';
import {
    Trophy,
    Flame,
    BookOpen,
    Target,
    Activity,
    Sparkles
} from 'lucide-react';
import styles from './Profile.module.css';

export function Profile() {
    const {
        xp,
        streak,
        completedLessons,
        dailyGoal,
        dailyProgress,
        geminiApiKey,
        removeGeminiApiKey
    } = useUserStore();

    const [showConfirmDisable, setShowConfirmDisable] = useState(false);

    const lessonsCompletedCount = Object.keys(completedLessons).length;

    const today = new Date().toISOString().split('T')[0];
    const todayXp = dailyProgress[today] || 0;
    const progressPercent = Math.min(100, (todayXp / dailyGoal) * 100);

    const last7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return d.toISOString().split('T')[0];
    });

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.pageTitle}>Profile</h1>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                <div className={styles.cardCentered}>
                    <div className={styles.iconSecondary}>
                        <Trophy size={32} />
                    </div>
                    <div className={styles.statValue}>{xp}</div>
                    <div className={styles.statLabel}>Total XP</div>
                </div>

                <div className={styles.cardCentered}>
                    <div className={styles.iconError}>
                        <Flame size={32} />
                    </div>
                    <div className={styles.statValue}>{streak}</div>
                    <div className={styles.statLabel}>Day Streak</div>
                </div>

                <div className={styles.cardCentered}>
                    <div className={styles.iconPrimary}>
                        <BookOpen size={32} />
                    </div>
                    <div className={styles.statValue}>{lessonsCompletedCount}</div>
                    <div className={styles.statLabel}>Lessons Completed</div>
                </div>
            </div>

            {/* Daily Goal */}
            <div className={styles.card}>
                <div className={styles.goalHeader}>
                    <h2 className={styles.goalTitle}>
                        <Target size={24} /> Daily Goal
                    </h2>
                    <span className={styles.goalSub}>
                        {todayXp} / {dailyGoal} XP
                    </span>
                </div>

                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Activity Chart */}
            <div className={styles.card}>
                <h2 className={styles.activityTitle}>
                    <Activity size={24} /> Activity (Last 7 Days)
                </h2>

                <div className={styles.chartWrapper}>
                    {last7Days.map(date => {
                        const dayXp = dailyProgress[date] || 0;
                        const heightPercent = Math.min(
                            100,
                            Math.max(10, (dayXp / 100) * 100)
                        );
                        const dayLabel = new Date(date).toLocaleDateString(
                            'en-US',
                            { weekday: 'short' }
                        );
                        const isToday = date === today;

                        return (
                            <div key={date} className={styles.chartColumn}>
                                <div
                                    className={styles.chartBar}
                                    style={{
                                        height: `${heightPercent}%`,
                                        backgroundColor: isToday
                                            ? 'var(--primary)'
                                            : 'var(--border-color)'
                                    }}
                                >
                                    {dayXp > 0 && (
                                        <div className={styles.barValue}>
                                            {dayXp}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.barLabel}>
                                    {dayLabel}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Experimental Features */}
            <div className={`${styles.card} ${styles.cardExperimental}`}>
                <h2 className={styles.expTitle}>
                    <Sparkles size={24} color="var(--secondary)" /> Experimental
                    Features
                </h2>

                <div className={styles.expRow}>
                    <div>
                        <div className={styles.expName}>Gemini AI Integration</div>
                        <div className={styles.expStatus}>
                            {geminiApiKey ? 'Enabled' : 'Disabled'}
                        </div>
                    </div>

                    {geminiApiKey ? (
                        <div className={styles.expButtons}>
                            {showConfirmDisable ? (
                                <>
                                    <button
                                        onClick={() => {
                                            removeGeminiApiKey();
                                            setShowConfirmDisable(false);
                                        }}
                                        className={`${styles.btn} ${styles.btnError}`}
                                    >
                                        Confirm Disable
                                    </button>

                                    <button
                                        onClick={() =>
                                            setShowConfirmDisable(false)
                                        }
                                        className={`${styles.btn} ${styles.btnGhostError}`}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setShowConfirmDisable(true)}
                                    className={`${styles.btn} ${styles.btnGhostError}`}
                                >
                                    Disable
                                </button>
                            )}
                        </div>
                    ) : (
                        <a href="/experimental" className={`${styles.btn} ${styles.btnPrimary}`}>
                            Setup
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
