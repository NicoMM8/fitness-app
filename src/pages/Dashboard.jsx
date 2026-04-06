import { useState, useMemo } from 'react';
import { getWeeklyStats, getDateKey } from '../utils/storage';
import { getActiveRoutine } from '../utils/routines';

import { Dumbbell, ClipboardList, Repeat, CalendarDays, Star, TrendingUp, Zap, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DataSettings from '../components/DataSettings';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Tooltip } from 'recharts';

const SHORT_DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

const WEEK_MOTTOS = [
    'Cada semana cuenta. Cada sesión suma.',
    'La constancia construye campeones.',
    'Revisa, ajusta, sigue creciendo.',
];

export default function Dashboard() {
    const navigate = useNavigate();
    const [weekOffset, setWeekOffset] = useState(0);

    const referenceDate = useMemo(() => {
        const d = new Date();
        d.setDate(d.getDate() + weekOffset * 7);
        return d;
    }, [weekOffset]);

    const stats = useMemo(() => getWeeklyStats(referenceDate), [referenceDate]);
    const todayKey = getDateKey(new Date());
    const activeRoutine = getActiveRoutine();

    const maxCal = Math.max(...stats.dailyCalories.map(d => d.total), 1);

    const weekStart = stats.weekDates[0];
    const weekEnd = stats.weekDates[6];
    function formatShort(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        return `${d.getDate()}/${d.getMonth() + 1}`;
    }

    const motto = WEEK_MOTTOS[Math.abs(weekOffset) % WEEK_MOTTOS.length];

    const chartData = useMemo(() => {
        return stats.dailyCalories.map((day, i) => ({
            name: SHORT_DAYS[i],
            calorias: day.total,
            volumen: day.volume || 0,
        }));
    }, [stats.dailyCalories]);

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Resumen</h1>
                <p className="subtitle">{motto}</p>
            </div>

            {/* Profile Link Banner */}
            <div className="card" onClick={() => navigate('/profile')} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', marginBottom: '22px', cursor: 'pointer', background: 'var(--accent-gradient-soft)', border: '1px solid rgba(255, 45, 85, 0.2)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <User size={24} />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Perfil de Nicolás</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Ver dieta, macros y requerimientos</div>
                </div>
                <div style={{ color: 'var(--text-tertiary)' }}>›</div>
            </div>

            {/* Week Navigation */}
            <div className="date-nav">
                <button onClick={() => setWeekOffset(prev => prev - 1)}>‹</button>
                <div className="date-display">
                    <div className="day-name">Semana</div>
                    <div>{formatShort(weekStart)} — {formatShort(weekEnd)}</div>
                </div>
                <button onClick={() => setWeekOffset(prev => prev + 1)}>›</button>
            </div>

            {/* Active routine info */}
            {activeRoutine && (
                <div className="today-routine-banner" style={{ marginBottom: 22 }}>
                    <div className="trb-icon">{activeRoutine.icon}</div>
                    <div className="trb-info">
                        <div className="trb-label">Rutina activa</div>
                        <div className="trb-name">{activeRoutine.name}</div>
                    </div>
                </div>
            )}

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon"><Dumbbell size={20} /></div>
                    <div className="stat-value anim-count">{stats.totalExercises}</div>
                    <div className="stat-label">Ejercicios</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><ClipboardList size={20} /></div>
                    <div className="stat-value anim-count">{stats.totalSets}</div>
                    <div className="stat-label">Series</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><Repeat size={20} /></div>
                    <div className="stat-value anim-count">{stats.totalReps}</div>
                    <div className="stat-label">Repeticiones</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><CalendarDays size={20} /></div>
                    <div className="stat-value anim-count">{stats.daysTraining}</div>
                    <div className="stat-label">Días entrenados</div>
                </div>
            </div>

            {/* Top Exercise */}
            <div className="card" style={{ marginBottom: 22 }}>
                <div className="card-title">Ejercicio más frecuente</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Star size={22} color="var(--ios-yellow)" />
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                        {stats.topExercise}
                    </span>
                </div>
            </div>

            {/* Weekly Volume & Calories Chart */}
            <div className="card" style={{ marginBottom: 22, height: 320, padding: '20px 10px 10px 0' }}>
                <div className="card-title" style={{ marginLeft: 20, marginBottom: 16 }}>Volumen y Calorías</div>
                <ResponsiveContainer width="100%" height="85%">
                    <ComposedChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }} />
                        <YAxis yAxisId="left" orientation="left" stroke="none" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
                        <YAxis yAxisId="right" orientation="right" stroke="none" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
                        <Tooltip 
                            contentStyle={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', background: 'var(--card-bg)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
                            itemStyle={{ fontSize: '0.9rem', fontWeight: 600 }}
                            labelStyle={{ color: 'var(--text-secondary)', marginBottom: 4 }}
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        />
                        <Bar yAxisId="left" dataKey="calorias" name="Kcal" fill="#ff2d55" radius={[4, 4, 0, 0]} barSize={16} />
                        <Line yAxisId="right" type="monotone" dataKey="volumen" name="Volumen (kg)" stroke="#ffd60a" strokeWidth={3} dot={{ r: 4, fill: 'var(--card-bg)', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#ffd60a' }} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            {/* Motivation */}
            {stats.daysTraining >= 4 && (
                <div className="motivation-banner">
                    <div className="motto" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <TrendingUp size={20} color="var(--ios-green)" /> ¡Gran semana!
                    </div>
                    <div className="motto-sub">
                        Has entrenado {stats.daysTraining} días esta semana.
                    </div>
                </div>
            )}
            {stats.daysTraining > 0 && stats.daysTraining < 4 && (
                <div className="motivation-banner">
                    <div className="motto" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Zap size={20} color="var(--ios-orange)" /> ¡Sigue empujando!
                    </div>
                    <div className="motto-sub">
                        Llevas {stats.daysTraining} {stats.daysTraining === 1 ? 'día' : 'días'}. Tú puedes con más.
                    </div>
                </div>
            )}
            {stats.daysTraining === 0 && (
                <div className="card" style={{ textAlign: 'center', padding: 32 }}>
                    <div style={{ marginBottom: 10 }}>
                        <Dumbbell size={28} color="var(--text-tertiary)" />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                        ¡Esta semana no hay excusas!
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: 8 }}>
                        Ve a Entrenos y empieza tu primer día
                    </div>
                </div>
            )}

            <div style={{ marginTop: 32, marginBottom: 24 }}>
                <DataSettings />
            </div>
        </div>
    );
}
