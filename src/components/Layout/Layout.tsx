import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, Sparkles } from 'lucide-react';
import styles from './Layout.module.css';

export function Layout() {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Learn', path: '/' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: Sparkles, label: 'AI Beta', path: '/experimental' },
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
                <div className={styles.logo}>DevLingo</div>
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
