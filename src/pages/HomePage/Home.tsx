import { courses } from '../../data/courses/javascript';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { Check, Lock, Star } from 'lucide-react';
import styles from './Home.module.css';

export function Home() {
    const { completedLessons, xp } = useUserStore();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Learning Path</h1>
                <div className={styles.xpBox}>
                    <Star fill="currentColor" /> {xp} XP
                </div>
            </header>

            <div className={styles.courseList}>
                {courses.map(course => (
                    <div key={course.id}>
                        <h2 className={styles.courseTitle}>{course.title}</h2>

                        <div className={styles.lessonGrid}>
                            {course.lessons.map((lesson, index) => {
                                const isCompleted = completedLessons[lesson.id];
                                const previousLesson = index > 0 ? course.lessons[index - 1] : null;
                                const isLocked =
                                    index > 0 && previousLesson !== null && !completedLessons[previousLesson.id];

                                return (
                                    <Link
                                        key={lesson.id}
                                        to={isLocked ? '#' : `/lesson/${course.id}/${lesson.id}`}
                                        className={`${styles.lessonLink} ${isLocked ? styles.locked : ''}`}
                                    >
                                        <div
                                            className={`
                                                ${styles.lessonNode}
                                                ${isCompleted ? styles.completed : ''}
                                                ${isLocked ? styles.lockedNode : styles.unlockedNode}
                                            `}
                                        >
                                            {isCompleted ? (
                                                <Check size={32} strokeWidth={4} />
                                            ) : isLocked ? (
                                                <Lock />
                                            ) : (
                                                <Star fill="white" />
                                            )}
                                        </div>

                                        <div
                                            className={`
                                                ${styles.lessonTitle}
                                                ${isLocked ? styles.lockedText : ''}
                                            `}
                                        >
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
