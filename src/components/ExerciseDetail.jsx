import { getExerciseByName } from '../utils/exercises';
import { MUSCLE_GROUPS } from '../utils/exercises';

export default function ExerciseDetail({ exerciseName, onClose }) {
    const exercise = getExerciseByName(exerciseName);

    if (!exercise) {
        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-handle" />
                    <div className="modal-title">Ejercicio no encontrado</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 16 }}>
                        "{exerciseName}" no está en el catálogo todavía.
                    </p>
                    <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        );
    }

    const muscleNames = exercise.muscles
        .map(m => MUSCLE_GROUPS.find(mg => mg.id === m))
        .filter(Boolean)
        .map(mg => `${mg.icon} ${mg.name}`);

    const difficultyColor =
        exercise.difficulty === 'Principiante' ? 'var(--ios-green)' :
            exercise.difficulty === 'Intermedio' ? 'var(--ios-orange)' :
                'var(--ios-red)';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={e => e.stopPropagation()}
                style={{ maxHeight: '92vh', overflowY: 'auto' }}
            >
                <div className="modal-handle" />

                {/* Video embed */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    marginBottom: 20,
                    background: 'var(--bg-tertiary)',
                }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${exercise.videoId}?modestbranding=1&rel=0`}
                        title={exercise.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                    />
                </div>

                {/* Title */}
                <h2 style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    marginBottom: 6,
                }}>
                    {exercise.name}
                </h2>

                {/* Meta tags */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 18,
                }}>
                    <span className="routine-tag highlight" style={{ color: difficultyColor }}>
                        {exercise.difficulty}
                    </span>
                    <span className="routine-tag">
                        🏠 {exercise.equipment}
                    </span>
                </div>

                {/* Muscles */}
                <div className="section-title">Músculos</div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 18,
                }}>
                    {muscleNames.map(name => (
                        <span className="routine-tag" key={name}>{name}</span>
                    ))}
                </div>

                {/* Description */}
                <div className="section-title">Descripción</div>
                <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 18,
                }}>
                    {exercise.description}
                </p>

                {/* Tips */}
                <div className="section-title">Consejos</div>
                <div style={{ marginBottom: 20 }}>
                    {exercise.tips.map((tip, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'flex-start',
                            padding: '8px 0',
                            borderBottom: i < exercise.tips.length - 1 ? '0.33px solid var(--bg-glass-border)' : 'none',
                        }}>
                            <span style={{
                                width: 22,
                                height: 22,
                                borderRadius: 'var(--radius-full)',
                                background: 'var(--accent-gradient)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                color: 'white',
                                flexShrink: 0,
                                marginTop: 1,
                            }}>
                                {i + 1}
                            </span>
                            <span style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.5,
                            }}>
                                {tip}
                            </span>
                        </div>
                    ))}
                </div>

                <button className="btn btn-secondary" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}
