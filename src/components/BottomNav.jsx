import { NavLink } from 'react-router-dom';
import { Dumbbell, LayoutGrid, BookOpen, UtensilsCrossed, Flame, BarChart3 } from 'lucide-react';

const navItems = [
    {
        to: '/',
        label: 'Entrenos',
        icon: <Dumbbell size={22} />,
    },
    {
        to: '/routines',
        label: 'Rutinas',
        icon: <LayoutGrid size={22} />,
    },
    {
        to: '/catalog',
        label: 'Ejercicios',
        icon: <BookOpen size={22} />,
    },
    {
        to: '/mealplans',
        label: 'Menú',
        icon: <UtensilsCrossed size={22} />,
    },
    {
        to: '/calories',
        label: 'Nutrición',
        icon: <Flame size={22} />,
    },
    {
        to: '/dashboard',
        label: 'Resumen',
        icon: <BarChart3 size={22} />,
    },
];

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            {navItems.map(item => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    end={item.to === '/'}
                >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
}


