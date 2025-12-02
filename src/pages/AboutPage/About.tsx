import { Github, Rocket, Code2, Heart } from 'lucide-react';
import styles from './About.module.css';

export function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>About DuoPingo</h1>
                <p className={styles.subtitle}>
                    Reimagining how developers learn and grow through open source.
                </p>
            </header>

            <section className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <Rocket className={styles.cardIcon} />
                    The Journey: Antigravity to Vibecode
                </h2>
                <div className={styles.cardContent}>
                    <p>
                        I originally built this project using Google's new agentic IDE, <span className={styles.highlight}>Antigravity</span>.
                        It helped me speed up parts of the development, but every idea, feature, and direction you see here came from my own vision.
                        I engineered the overall vibecoding workflow myself and guided the tool instead of relying on it.
                    </p>
                    <br />
                    <p>
                        After shaping the first version, I fully refactored the entire codebase by hand—bringing everything back to standard developer practices,
                        proper structure, and safe code conventions. This refined approach became what I call <span className={styles.highlight}>Vibecode</span>:
                        a more fluid, intuitive way of building software that keeps the creativity alive while maintaining technical discipline.
                    </p>

                </div>
            </section>

            <section className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <Code2 className={styles.cardIcon} />
                    Open Source at Heart
                </h2>
                <div className={styles.cardContent}>
                    <p>
                        DuoPingo is completely open source, and the entire idea behind it is my own.
                        The public repository is available at <span className={styles.highlight}>github.com/ioNihal/devlingo</span>,
                        and everyone is welcome to explore, learn, or contribute.
                        I believe in open collaboration—not just sharing code, but sharing the thought process that shaped it.
                    </p>
                </div>
            </section>

            <div className={styles.githubSection}>
                <Heart size={32} className={styles.cardIcon} fill="currentColor" />
                <div className="text-center">
                    <h3 className={styles.cardTitle}>Connect with the Creator</h3>
                    <p className={styles.cardContent}>Check out more projects and contributions</p>
                </div>
                <a
                    href="https://github.com/ioNihal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                >
                    <Github size={20} />
                    <span>Follow @ioNihal on GitHub</span>
                </a>
            </div>
        </div>
    );
}
