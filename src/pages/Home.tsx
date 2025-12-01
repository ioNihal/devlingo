import { courses } from '../data/courses/javascript';
import { Link } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { Check, Lock, Star } from 'lucide-react';

export function Home() {
    const { completedLessons, xp } = useUserStore();

    return (
        <div style={{ padding: '1rem 0' }}>
            <header style={{
                padding: '0 1rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1>Learning Path</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--secondary)',
                    fontWeight: 'bold'
                }}>
                    <Star fill="currentColor" /> {xp} XP
                </div>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {courses.map(course => (
                    <div key={course.id}>
                        <h2 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', paddingLeft: '1rem' }}>
                            {course.title}
                        </h2>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            justifyContent: 'center',
                            padding: '0 1rem'
                        }}>
                            {course.lessons.map((lesson, index) => {
                                const isCompleted = completedLessons[lesson.id];
                                // Unlock if previous is completed or it's the first one
                                const previousLesson = index > 0 ? course.lessons[index - 1] : null;
                                const isLocked = index > 0 && !completedLessons[previousLesson!.id];

                                return (
                                    <Link
                                        key={lesson.id}
                                        to={isLocked ? '#' : `/lesson/${course.id}/${lesson.id}`}
                                        style={{
                                            position: 'relative',
                                            pointerEvents: isLocked ? 'none' : 'auto',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: '100px'
                                        }}
                                    >
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            backgroundColor: isCompleted ? 'var(--success)' : (isLocked ? 'var(--card-bg)' : 'var(--primary)'),
                                            border: '4px solid var(--border-color)',
                                            borderBottomWidth: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            opacity: isLocked ? 0.5 : 1,
                                            transition: 'transform 0.1s',
                                            marginBottom: '0.5rem'
                                        }}
                                            className="lesson-node"
                                        >
                                            {isCompleted ? <Check size={32} strokeWidth={4} /> : (isLocked ? <Lock /> : <Star fill="white" />)}
                                        </div>
                                        <div style={{
                                            textAlign: 'center',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            color: isLocked ? 'var(--text-muted)' : 'var(--text-color)',
                                            lineHeight: 1.2
                                        }}>
                                            {lesson.title}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
