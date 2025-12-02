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
                        What started as <span className={styles.highlight}>Antigravity</span>—a robust but complex system designed to defy the limits of traditional coding tools—has evolved into something even more powerful.
                    </p>
                    <br />
                    <p>
                        We realized that true power lies not just in lifting heavy loads, but in the flow and rhythm of development. By restructuring the core architecture, we engineered <span className={styles.highlight}>Vibecode</span>. This evolution isn't just a rename; it's a paradigm shift towards a more intuitive, efficient, and "vibe-coded" experience that saves developers precious time while maintaining the structural integrity they rely on.
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
                        DuoPingo is proudly open source. We believe in the power of community collaboration to build tools that truly serve the needs of developers worldwide. Every line of code is a testament to our commitment to transparency and shared knowledge.
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
