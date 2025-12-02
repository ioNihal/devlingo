import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { courses } from '../../data/courses/javascript';
import { ProblemView } from '../../components/ProblemView/ProblemView';
import { useUserStore } from '../../store/userStore';
import { ArrowLeft } from 'lucide-react';
import styles from './Lesson.module.css';

export function Lesson() {
    const { courseId, lessonId } = useParams();
    const navigate = useNavigate();
    const { completeLesson, addXp } = useUserStore();

    const course = courses.find(c => c.id === courseId);
    const lesson = course?.lessons.find(l => l.id === lessonId);

    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

    if (!lesson) {
        return <div>Lesson not found</div>;
    }

    const currentProblem = lesson.problems[currentProblemIndex];

    const handleProblemComplete = () => {
        if (currentProblemIndex < lesson.problems.length - 1) {
            setCurrentProblemIndex(prev => prev + 1);
        } else {
            completeLesson(lesson.id);
            addXp(lesson.xpReward);
            navigate('/');
        }
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link to="/" className={styles.backBtn}>
                    <ArrowLeft />
                </Link>

                <div className={styles.titleBlock}>
                    <div className={styles.courseTitle}>{course?.title}</div>
                    <div className={styles.lessonTitle}>{lesson.title}</div>
                </div>

                <div className={styles.progressBubble}>
                    {Math.round((currentProblemIndex / lesson.problems.length) * 100)}%
                </div>
            </header>

            <div className={styles.container}>
                <ProblemView
                    key={currentProblem.id}
                    problem={currentProblem}
                    onComplete={handleProblemComplete}
                />
            </div>
        </div>
    );
}
