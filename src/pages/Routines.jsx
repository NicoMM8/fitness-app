import { useState } from 'react';
import {
    DEFAULT_ROUTINES,
    getAllRoutines,
    getActiveRoutine,
    setActiveRoutine,
    clearActiveRoutine,
    addCustomRoutine,
    deleteCustomRoutine,
} from '../utils/routines';
import { getExerciseByName } from '../utils/exercises';
import ExerciseDetail from '../components/ExerciseDetail';
import ExerciseAutocomplete from '../components/ExerciseAutocomplete';

const MOTTOS = [
    '¡Elige tu plan y a darle!',
    'La constancia es la clave 🔑',
    'Tu cuerpo puede, tu mente decide',
];

const ICONS = ['💪', '🏋️', '⚡', '🔥', '🎯', '🦾', '🏆', '🚀', '💎', '⭐'];
const COLORS = ['orange', 'blue', 'purple', 'pink', 'green', 'teal'];

export default function Routines() {
    const [selected, setSelected] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [active, setActive] = useState(getActiveRoutine());
    const [editMode, setEditMode] = useState(false);
    const [editedRoutine, setEditedRoutine] = useState(null);
    const [viewExercise, setViewExercise] = useState(null);
    const [showCreate, setShowCreate] = useState(false);
    const [allRoutines, setAllRoutines] = useState(getAllRoutines());
    const [newRoutine, setNewRoutine] = useState({
        name: '',
        description: '',
        icon: '💪',
        color: 'orange',
        tags: [],
        days: [
            { name: 'Día 1', label: 'Día 1', exercises: [{ name: '', sets: 3, reps: 10 }] },
        ],
    });

    const motto = MOTTOS[Math.floor(Date.now() / 86400000) % MOTTOS.length];

    function refreshRoutines() {
        setAllRoutines(getAllRoutines());
    }

    function handleSelect(routine) {
        setSelected({ ...routine });
        setEditedRoutine(JSON.parse(JSON.stringify(routine)));
        setActiveTab(0);
        setEditMode(false);
    }

    function handleActivate() {
        const routineToActivate = editMode ? editedRoutine : selected;
        setActiveRoutine(routineToActivate);
        setActive(routineToActivate);
        setSelected(null);
        setEditMode(false);
    }

    function handleDeactivate() {
        clearActiveRoutine();
        setActive(null);
    }

    function handleDeleteRoutine(id) {
        deleteCustomRoutine(id);
        refreshRoutines();
        if (active && active.id === id) setActive(null);
    }

    function updateExercise(dayIdx, exIdx, field, value) {
        const updated = { ...editedRoutine };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? {
                    ...d,
                    exercises: d.exercises.map((e, ei) =>
                        ei === exIdx ? { ...e, [field]: field === 'name' ? value : parseInt(value) || 0 } : e
                    ),
                }
                : d
        );
        setEditedRoutine(updated);
    }

    function removeExercise(dayIdx, exIdx) {
        const updated = { ...editedRoutine };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? { ...d, exercises: d.exercises.filter((_, ei) => ei !== exIdx) }
                : d
        );
        setEditedRoutine(updated);
    }

    function addExercise(dayIdx) {
        const updated = { ...editedRoutine };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? { ...d, exercises: [...d.exercises, { name: '', sets: 3, reps: 10 }] }
                : d
        );
        setEditedRoutine(updated);
    }

    // Create flow helpers
    function updateNewExercise(dayIdx, exIdx, field, value) {
        const updated = { ...newRoutine };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? {
                    ...d,
                    exercises: d.exercises.map((e, ei) =>
                        ei === exIdx ? { ...e, [field]: field === 'name' ? value : parseInt(value) || 0 } : e
                    ),
                }
                : d
        );
        setNewRoutine(updated);
    }

    function addNewDay() {
        const dayNum = newRoutine.days.length + 1;
        setNewRoutine({
            ...newRoutine,
            days: [...newRoutine.days, { name: `Día ${dayNum}`, label: `Día ${dayNum}`, exercises: [{ name: '', sets: 3, reps: 10 }] }],
        });
    }

    function removeNewDay(dayIdx) {
        if (newRoutine.days.length <= 1) return;
        setNewRoutine({
            ...newRoutine,
            days: newRoutine.days.filter((_, i) => i !== dayIdx),
        });
    }

    function addNewExercise(dayIdx) {
        const updated = { ...newRoutine };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? { ...d, exercises: [...d.exercises, { name: '', sets: 3, reps: 10 }] }
                : d
        );
        setNewRoutine(updated);
    }

    function removeNewExercise(dayIdx, exIdx) {
        const updated = { ...newRoutine };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? { ...d, exercises: d.exercises.filter((_, ei) => ei !== exIdx) }
                : d
        );
        setNewRoutine(updated);
    }

    function saveNewRoutine() {
        if (!newRoutine.name.trim()) return;
        // Filter out empty exercises
        const cleaned = {
            ...newRoutine,
            tags: [`${newRoutine.days.length} días`, 'Personalizado'],
            days: newRoutine.days.map(d => ({
                ...d,
                exercises: d.exercises.filter(e => e.name.trim()),
            })).filter(d => d.exercises.length > 0),
        };
        if (cleaned.days.length === 0) return;
        addCustomRoutine(cleaned);
        refreshRoutines();
        setShowCreate(false);
        setNewRoutine({
            name: '', description: '', icon: '💪', color: 'orange', tags: [],
            days: [{ name: 'Día 1', label: 'Día 1', exercises: [{ name: '', sets: 3, reps: 10 }] }],
        });
    }

    // ─── Create routine view ───
    if (showCreate) {
        return (
            <div className="page-container">
                <div className="routine-detail-header">
                    <button className="back-btn" onClick={() => setShowCreate(false)}>‹</button>
                    <h1 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.03em', flex: 1 }}>
                        Nueva Rutina
                    </h1>
                </div>

                {/* Name + description */}
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Ej: Mi rutina Push/Pull" value={newRoutine.name}
                        onChange={e => setNewRoutine({ ...newRoutine, name: e.target.value })} autoFocus />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input type="text" placeholder="Breve descripción del plan" value={newRoutine.description}
                        onChange={e => setNewRoutine({ ...newRoutine, description: e.target.value })} />
                </div>

                {/* Icon + Color pickers */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                    <div style={{ flex: 1 }}>
                        <div className="section-title">Icono</div>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            {ICONS.map(ic => (
                                <button key={ic} onClick={() => setNewRoutine({ ...newRoutine, icon: ic })}
                                    style={{
                                        width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                                        background: newRoutine.icon === ic ? 'var(--accent-gradient)' : 'var(--bg-glass)',
                                        fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                    {ic}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className="section-title">Color</div>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            {COLORS.map(c => (
                                <button key={c} onClick={() => setNewRoutine({ ...newRoutine, color: c })}
                                    className={`row-icon ${c}`}
                                    style={{
                                        width: 36, height: 36,
                                        border: newRoutine.color === c ? '2px solid white' : '2px solid transparent',
                                        borderRadius: 'var(--radius-sm)', fontSize: '0.65rem',
                                    }}>
                                    {newRoutine.color === c ? '✓' : ''}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Days */}
                {newRoutine.days.map((day, di) => (
                    <div key={di} style={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <input
                                style={{
                                    flex: 1, background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)',
                                    padding: '6px 10px', fontSize: '0.9rem', fontWeight: 600,
                                }}
                                value={day.name}
                                onChange={e => {
                                    const updated = { ...newRoutine };
                                    updated.days[di] = { ...day, name: e.target.value, label: e.target.value };
                                    setNewRoutine(updated);
                                }}
                                placeholder={`Día ${di + 1}`}
                            />
                            {newRoutine.days.length > 1 && (
                                <button className="delete-btn" onClick={() => removeNewDay(di)} style={{ color: 'var(--ios-red)' }}>✕</button>
                            )}
                        </div>
                        <div className="ios-list">
                            {day.exercises.map((ex, ei) => (
                                <div className="ios-row" key={ei}>
                                    <div className={`row-icon ${newRoutine.color}`} style={{ fontSize: '0.7rem', fontWeight: 700 }}>
                                        {String(ei + 1).padStart(2, '0')}
                                    </div>
                                    <div className="row-body">
                                        <ExerciseAutocomplete
                                            value={ex.name}
                                            onChange={val => updateNewExercise(di, ei, 'name', val)}
                                            onSelectExercise={selEx => {
                                                updateNewExercise(di, ei, 'name', selEx.name);
                                            }}
                                            placeholder="Nombre del ejercicio"
                                        />
                                        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                                            <input type="number" style={{
                                                width: 38, background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)',
                                                padding: '2px 4px', textAlign: 'center', fontSize: '0.78rem',
                                            }}
                                                value={ex.sets} onChange={e => updateNewExercise(di, ei, 'sets', e.target.value)} inputMode="numeric" />
                                            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>×</span>
                                            <input type="number" style={{
                                                width: 38, background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)',
                                                padding: '2px 4px', textAlign: 'center', fontSize: '0.78rem',
                                            }}
                                                value={ex.reps} onChange={e => updateNewExercise(di, ei, 'reps', e.target.value)} inputMode="numeric" />
                                            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>reps</span>
                                        </div>
                                    </div>
                                    <button className="delete-btn" onClick={() => removeNewExercise(di, ei)}>✕</button>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => addNewExercise(di)} style={{
                            width: '100%', padding: '10px', background: 'var(--bg-glass)',
                            border: '1px dashed var(--bg-glass-border)', borderRadius: 'var(--radius-card)',
                            color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, marginTop: 8,
                        }}>
                            + Ejercicio
                        </button>
                    </div>
                ))}

                <button onClick={addNewDay} style={{
                    width: '100%', padding: '12px', background: 'var(--accent-gradient-soft)',
                    border: '1px solid rgba(255, 45, 85, 0.15)', borderRadius: 'var(--radius-card)',
                    color: 'var(--accent-2)', fontSize: '0.85rem', fontWeight: 700, marginBottom: 20,
                }}>
                    + Añadir día
                </button>

                <div className="btn-group">
                    <button className="btn btn-secondary" onClick={() => setShowCreate(false)}>Cancelar</button>
                    <button className="btn btn-primary" onClick={saveNewRoutine}>💾 Crear Rutina</button>
                </div>
            </div>
        );
    }

    // ─── Detail View ───
    if (selected) {
        const displayRoutine = editMode ? editedRoutine : selected;
        const currentDay = displayRoutine.days[activeTab];

        return (
            <div className="page-container">
                <div className="routine-detail-header">
                    <button className="back-btn" onClick={() => { setSelected(null); setEditMode(false); }}>‹</button>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                            {displayRoutine.icon} {displayRoutine.name}
                        </h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                            {displayRoutine.description}
                        </p>
                    </div>
                </div>

                <div className="day-tabs">
                    {displayRoutine.days.map((day, i) => (
                        <button key={i} className={`day-tab ${activeTab === i ? 'active' : ''}`}
                            onClick={() => setActiveTab(i)}>{day.name}</button>
                    ))}
                </div>

                <div className="section-title">
                    {currentDay.label || currentDay.name} — {currentDay.exercises.length} ejercicios
                </div>

                <div className="ios-list">
                    {currentDay.exercises.map((ex, i) => {
                        const hasInfo = !editMode && !!getExerciseByName(ex.name);
                        return (
                            <div className="ios-row" key={i}>
                                <div className={`row-icon ${displayRoutine.color}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="row-body">
                                    {editMode ? (
                                        <ExerciseAutocomplete
                                            value={ex.name}
                                            onChange={val => updateExercise(activeTab, i, 'name', val)}
                                            onSelectExercise={selEx => {
                                                updateExercise(activeTab, i, 'name', selEx.name);
                                            }}
                                            placeholder="Nombre del ejercicio"
                                        />
                                    ) : (
                                        <div className="row-title">{ex.name}</div>
                                    )}
                                    <div className="row-subtitle">
                                        {editMode ? (
                                            <span style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
                                                <input type="number" style={{ width: 40, background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)', padding: '3px 6px', textAlign: 'center', fontSize: '0.8rem' }}
                                                    value={ex.sets} onChange={e => updateExercise(activeTab, i, 'sets', e.target.value)} inputMode="numeric" />
                                                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem' }}>×</span>
                                                <input type="number" style={{ width: 40, background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)', padding: '3px 6px', textAlign: 'center', fontSize: '0.8rem' }}
                                                    value={ex.reps} onChange={e => updateExercise(activeTab, i, 'reps', e.target.value)} inputMode="numeric" />
                                                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem' }}>reps</span>
                                            </span>
                                        ) : (
                                            `${ex.sets} series × ${ex.reps} reps`
                                        )}
                                    </div>
                                </div>
                                {editMode ? (
                                    <button className="delete-btn" onClick={() => removeExercise(activeTab, i)} aria-label="Eliminar">✕</button>
                                ) : (
                                    <>
                                        {hasInfo && (
                                            <button className="info-btn" onClick={() => setViewExercise(ex.name)} aria-label="Ver ejercicio">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                                                </svg>
                                            </button>
                                        )}
                                        <span className="row-accessory">›</span>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {editMode && (
                    <button style={{
                        width: '100%', padding: '12px', background: 'var(--bg-glass)',
                        border: '1px dashed var(--bg-glass-border)', borderRadius: 'var(--radius-card)',
                        color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginTop: 12,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    }} onClick={() => addExercise(activeTab)}>
                        + Añadir ejercicio
                    </button>
                )}

                <div className="btn-group" style={{ marginTop: 24 }}>
                    {!editMode && (
                        <button className="btn btn-secondary" onClick={() => setEditMode(true)}>✏️ Editar</button>
                    )}
                    {editMode && (
                        <button className="btn btn-secondary" onClick={() => { setEditMode(false); setEditedRoutine(JSON.parse(JSON.stringify(selected))); }}>
                            Cancelar
                        </button>
                    )}
                    {active && active.id === displayRoutine.id ? (
                        <button className="btn btn-secondary" onClick={handleDeactivate}>Desactivar</button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleActivate}>
                            {editMode ? '💾 Guardar y Activar' : '⚡ Activar Rutina'}
                        </button>
                    )}
                </div>

                {viewExercise && (
                    <ExerciseDetail exerciseName={viewExercise} onClose={() => setViewExercise(null)} />
                )}
            </div>
        );
    }

    // ─── Main Routines List ───
    return (
        <div className="page-container">
            <div className="page-header">
                <h1><span className="gradient-text">Rutinas</span></h1>
                <p className="subtitle">{motto}</p>
            </div>

            {active && (
                <div className="today-routine-banner">
                    <div className="trb-icon">{active.icon}</div>
                    <div className="trb-info">
                        <div className="trb-label">Rutina activa</div>
                        <div className="trb-name">{active.name}</div>
                        <div className="trb-exercises">{active.days.length} días • {active.days.reduce((s, d) => s + d.exercises.length, 0)} ejercicios</div>
                    </div>
                    <button className="back-btn" onClick={() => handleSelect(active)} style={{ background: 'var(--bg-glass)' }}>›</button>
                </div>
            )}

            {/* Create button */}
            <button className="btn btn-primary" style={{ marginBottom: 20 }} onClick={() => setShowCreate(true)}>
                + Crear rutina personalizada
            </button>

            <div className="section-title">Planes disponibles</div>
            <div className="routine-grid">
                {allRoutines.map((routine, i) => (
                    <div
                        className={`routine-card ${active && active.id === routine.id ? 'active-routine' : ''}`}
                        key={routine.id}
                        onClick={() => handleSelect(routine)}
                        style={{ animationDelay: `${i * 0.08}s` }}
                    >
                        <div className="routine-header">
                            <div className={`routine-icon row-icon ${routine.color}`}>{routine.icon}</div>
                            <div style={{ flex: 1 }}>
                                <div className="routine-name">{routine.name}</div>
                                <div className="routine-desc">{routine.description}</div>
                            </div>
                            {routine.custom && (
                                <button className="delete-btn" onClick={e => {
                                    e.stopPropagation();
                                    handleDeleteRoutine(routine.id);
                                }} aria-label="Eliminar rutina" style={{ color: 'var(--ios-red)' }}>✕</button>
                            )}
                        </div>
                        <div className="routine-tags">
                            {(routine.tags || []).map(tag => (
                                <span className={`routine-tag ${tag.includes('día') ? 'highlight' : ''}`} key={tag}>{tag}</span>
                            ))}
                            {routine.custom && <span className="routine-tag highlight">✏️ Personalizado</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
