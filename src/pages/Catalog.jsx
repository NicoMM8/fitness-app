import { useState, useMemo } from 'react';
import { EXERCISE_DATABASE, MUSCLE_GROUPS, searchExercises } from '../utils/exercises';
import ExerciseDetail from '../components/ExerciseDetail';

export default function Catalog() {
    const [query, setQuery] = useState('');
    const [muscleFilter, setMuscleFilter] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const results = useMemo(
        () => searchExercises(query, muscleFilter),
        [query, muscleFilter]
    );

    const totalCount = EXERCISE_DATABASE.length;

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>
                    <span className="gradient-text">Ejercicios</span>
                </h1>
                <p className="subtitle">{totalCount} ejercicios con vídeo y descripción</p>
            </div>

            {/* Search */}
            <div style={{ marginBottom: 16 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <input
                        type="text"
                        placeholder="🔍 Buscar ejercicio..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        style={{
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--bg-glass-border)',
                            borderRadius: 'var(--radius-card)',
                            height: 44,
                            backdropFilter: 'var(--blur-regular)',
                            WebkitBackdropFilter: 'var(--blur-regular)',
                        }}
                    />
                </div>
            </div>

            {/* Muscle filter chips */}
            <div style={{
                display: 'flex',
                gap: 6,
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                paddingBottom: 6,
                marginBottom: 20,
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}>
                <button
                    className={`day-tab ${muscleFilter === null ? 'active' : ''}`}
                    onClick={() => setMuscleFilter(null)}
                >
                    Todos
                </button>
                {MUSCLE_GROUPS.map(mg => (
                    <button
                        key={mg.id}
                        className={`day-tab ${muscleFilter === mg.id ? 'active' : ''}`}
                        onClick={() => setMuscleFilter(muscleFilter === mg.id ? null : mg.id)}
                    >
                        {mg.icon} {mg.name}
                    </button>
                ))}
            </div>

            {/* Results count */}
            <div className="section-title">
                {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
            </div>

            {/* Exercise list */}
            {results.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">🔍</div>
                    <div className="empty-text">No se encontraron ejercicios</div>
                    <div className="empty-hint">Prueba con otro término o filtro</div>
                </div>
            ) : (
                <div className="ios-list">
                    {results.map((ex, i) => {
                        const primaryMuscle = MUSCLE_GROUPS.find(mg => mg.id === ex.primaryMuscle);
                        const diffColor =
                            ex.difficulty === 'Principiante' ? 'green' :
                                ex.difficulty === 'Intermedio' ? 'orange' :
                                    'pink';

                        return (
                            <div
                                className="ios-row"
                                key={ex.id}
                                onClick={() => setSelectedExercise(ex.name)}
                                style={{ cursor: 'pointer', animationDelay: `${i * 0.03}s` }}
                            >
                                <div className={`row-icon ${diffColor}`}>
                                    {primaryMuscle ? primaryMuscle.icon : '💪'}
                                </div>
                                <div className="row-body">
                                    <div className="row-title">{ex.name}</div>
                                    <div className="row-subtitle">
                                        {ex.equipment} · {ex.difficulty}
                                    </div>
                                </div>
                                <span className="row-accessory" style={{ fontSize: '0.75rem' }}>
                                    ▶
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Exercise Detail Modal */}
            {selectedExercise && (
                <ExerciseDetail
                    exerciseName={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                />
            )}
        </div>
    );
}
