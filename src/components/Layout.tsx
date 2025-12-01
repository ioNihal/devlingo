import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, Sparkles } from 'lucide-react';

export function Layout() {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Learn', path: '/' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: Sparkles, label: 'AI Beta', path: '/experimental' },
    ];

    return (
        <div className="container">
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="bottom-nav">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-item ${isActive ? 'active' : ''}`}
                        >
                            <item.icon size={24} strokeWidth={isActive ? 3 : 2} />
                            <span className="nav-label">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Desktop Sidebar */}
            <aside className="sidebar">
                <div className="logo">DevLingo</div>
                <nav className="sidebar-nav">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`sidebar-item ${isActive ? 'active' : ''}`}
                            >
                                <item.icon size={24} strokeWidth={isActive ? 3 : 2} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </div>
    );
}
