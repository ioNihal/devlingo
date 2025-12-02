import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, Sparkles, Info, Github } from 'lucide-react';
import styles from './Layout.module.css';

export function Layout() {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Learn', path: '/' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: Sparkles, label: 'AI Beta', path: '/experimental' },
        { icon: Info, label: 'About', path: '/about' },
    ];

    return (
        <div className={styles.container}>
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>

            {/* Mobile Bottom Nav */}
            <nav className={styles.bottomNav}>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                        >
                            <item.icon size={24} strokeWidth={isActive ? 3 : 2} />
                            <span className={styles.navLabel}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Desktop Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>DuoPingo</div>

                <div style={{ padding: '0 1rem 1rem' }}>
                    <a
                        href="https://github.com/ioNihal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                    >
                        <Github size={16} />
                        <span>Github</span>
                    </a>
                </div>

                <nav className={styles.sidebarNav}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`${styles.sidebarItem} ${isActive ? styles.active : ''}`}
                            >
                                <item.icon size={24} strokeWidth={isActive ? 3 : 2} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </div >
    );
}
