import { useState, useMemo } from 'react';
import { getWeeklyStats, getDateKey } from '../utils/storage';
import { getActiveRoutine } from '../utils/routines';

// Actually, I just need to add the import.
import { Dumbbell, ClipboardList, Repeat, CalendarDays, Star, TrendingUp, Zap } from 'lucide-react';
import DataSettings from '../components/DataSettings';

const SHORT_DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

const WEEK_MOTTOS = [
    'Cada semana cuenta. Cada sesión suma.',
    'La constancia construye campeones.',
    'Revisa, ajusta, sigue creciendo.',
];

export default function Dashboard() {
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

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Resumen</h1>
                <p className="subtitle">{motto}</p>
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

            {/* Weekly Calories Chart */}
            <div className="week-chart">
                <div className="chart-title">Calorías por día</div>
                <div className="chart-bars">
                    {stats.dailyCalories.map((day, i) => {
                        const isToday = day.date === todayKey;
                        const barHeight = day.total > 0 ? Math.max((day.total / maxCal) * 100, 5) : 0;
                        return (
                            <div className="chart-bar-wrap" key={day.date}>
                                <div className="chart-bar-value">
                                    {day.total > 0 ? day.total : ''}
                                </div>
                                <div
                                    className={`chart-bar ${isToday ? 'today' : ''} ${day.total === 0 ? 'empty' : ''}`}
                                    style={{ height: `${barHeight}%` }}
                                />
                                <div className={`chart-bar-label ${isToday ? 'today' : ''}`}>
                                    {SHORT_DAYS[i]}
                                </div>
                            </div>
                        );
                    })}
                </div>
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
