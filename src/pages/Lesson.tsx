import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { courses } from '../data/courses/javascript';
import { ProblemView } from '../components/ProblemView';
import { useUserStore } from '../store/userStore';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            // Lesson Finished
            completeLesson(lesson.id);
            addXp(lesson.xpReward);
            navigate('/');
        }
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header style={{
                padding: '1rem',
                borderBottom: '2px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <Link to="/"><ArrowLeft /></Link>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{course?.title}</div>
                    <div style={{ fontWeight: 'bold' }}>{lesson.title}</div>
                </div>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '4px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                }}>
                    {Math.round(((currentProblemIndex) / lesson.problems.length) * 100)}%
                </div>
            </header>

            <div className="container">
                <ProblemView
                    key={currentProblem.id} // Reset state on new problem
                    problem={currentProblem}
                    onComplete={handleProblemComplete}
                />
            </div>
        </div>
    );
}
