import { useState, useEffect } from 'react';
import {
    getDateKey,
    getWorkoutsByDate,
    addWorkout,
    deleteWorkout,
    updateWorkout,
    getLastExerciseStats,
} from '../utils/storage';
import { getActiveRoutine, getTodayRoutineExercises } from '../utils/routines';
import { getExerciseByName } from '../utils/exercises';
import ExerciseDetail from '../components/ExerciseDetail';
import EmojiPicker from '../components/EmojiPicker';
import { Target, CheckCircle, ClipboardList, Dumbbell, Info, X, Zap, ChevronDown, ChevronUp, Moon } from 'lucide-react';

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTH_NAMES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const MOTTOS = [
    'Hoy es tu día. Demuéstralo.',
    'Cada rep cuenta. Cada serie importa.',
    'Tu mejor versión empieza hoy.',
    'Disciplina > Motivación',
    'El hierro nunca miente.',
];

function formatDate(date) {
    const d = new Date(date);
    return {
        dayName: DAY_NAMES[d.getDay()],
        dayOfWeek: d.getDay(),
        formatted: `${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`,
    };
}

function getSetData(workout) {
    const count = parseInt(workout.sets) || 0;
    if (workout.setDetails && workout.setDetails.length > 0) {
        return Array.from({ length: count }, (_, i) => ({
            reps: workout.setDetails[i]?.reps ?? workout.reps ?? '',
            weight: workout.setDetails[i]?.weight ?? workout.weight ?? '',
            done: workout.setDetails[i]?.done ?? (workout.completedSets ? workout.completedSets[i] : false) ?? false,
        }));
    }
    const completedSets = workout.completedSets || Array(count).fill(false);
    return Array.from({ length: count }, (_, i) => ({
        reps: workout.reps ?? '',
        weight: workout.weight ?? '',
        done: completedSets[i] || false,
    }));
}

export default function Workouts() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [workouts, setWorkouts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', sets: '4', reps: '10', weight: '' });
    const [viewExercise, setViewExercise] = useState(null);
    const [expandedCard, setExpandedCard] = useState(null);
    const [editingIcon, setEditingIcon] = useState(null);

    const dateKey = getDateKey(currentDate);
    const { dayName, dayOfWeek, formatted } = formatDate(currentDate);
    const activeRoutine = getActiveRoutine();
    const routineInfo = activeRoutine ? getTodayRoutineExercises(dayOfWeek) : null;

    const motto = MOTTOS[Math.floor(Date.now() / 86400000) % MOTTOS.length];

    useEffect(() => {
        setWorkouts(getWorkoutsByDate(dateKey));
    }, [dateKey]);

    function changeDay(delta) {
        const d = new Date(currentDate);
        d.setDate(d.getDate() + delta);
        setCurrentDate(d);
    }

    function loadRoutineExercises() {
        if (!routineInfo || routineInfo.isRest) return;
        routineInfo.exercises.forEach(ex => {
            const exists = workouts.find(w => w.name === ex.name && w.fromRoutine);
            if (!exists) {
                const pastStats = getLastExerciseStats(ex.name, dateKey);

                const setDetails = Array.from({ length: ex.sets }, (_, i) => ({
                    reps: pastStats?.setDetails?.[i]?.reps ?? pastStats?.reps ?? ex.reps,
                    weight: pastStats?.setDetails?.[i]?.weight ?? pastStats?.weight ?? '',
                    done: false,
                }));

                const baseNote = [
                    ex.tempo ? `Tempo: ${ex.tempo}` : '',
                    ex.descanso ? `Descanso: ${ex.descanso}` : '',
                    ex.indicaciones ? `\n${ex.indicaciones.trim()}` : ''
                ].filter(Boolean).join(' | ').replace(' | \n', '\n');

                const finalNote = pastStats?.note 
                    ? `${baseNote}\n\n--- Última vez ---\n${pastStats.note}`.trim()
                    : baseNote;

                addWorkout(dateKey, {
                    name: ex.name,
                    sets: ex.sets,
                    reps: ex.reps,
                    weight: pastStats?.weight ?? null,
                    icon: '🏋️',
                    note: finalNote,
                    video: ex.video || null,
                    setDetails,
                    completedSets: Array(ex.sets).fill(false),
                    fromRoutine: true,
                });
            }
        });
        setWorkouts(getWorkoutsByDate(dateKey));
    }

    function handleAdd() {
        if (!form.name.trim() || !form.sets) return;
        const exerciseName = form.name.trim();
        const numSets = parseInt(form.sets) || 1;
        const defaultReps = parseInt(form.reps) || 10;
        const defaultWeight = form.weight ? parseFloat(form.weight) : '';
        
        const pastStats = getLastExerciseStats(exerciseName, dateKey);

        const setDetails = Array.from({ length: numSets }, (_, i) => ({
            reps: form.reps !== '10' ? defaultReps : (pastStats?.setDetails?.[i]?.reps ?? pastStats?.reps ?? defaultReps),
            weight: form.weight ? defaultWeight : (pastStats?.setDetails?.[i]?.weight ?? pastStats?.weight ?? ''),
            done: false,
        }));

        const finalNote = pastStats?.note ? `--- Última vez ---\n${pastStats.note}` : '';

        addWorkout(dateKey, {
            name: exerciseName,
            sets: numSets,
            reps: defaultReps,
            weight: form.weight ? defaultWeight : (pastStats?.weight ?? null),
            icon: pastStats?.icon ?? '💪',
            note: finalNote,
            setDetails,
            completedSets: Array(numSets).fill(false),
            fromRoutine: false,
        });
        setWorkouts(getWorkoutsByDate(dateKey));
        setForm({ name: '', sets: '4', reps: '10', weight: '' });
        setShowModal(false);
    }

    function handleDelete(id) {
        deleteWorkout(dateKey, id);
        setWorkouts(getWorkoutsByDate(dateKey));
    }

    function handleChangeIcon(workoutId, newIcon) {
        updateWorkout(dateKey, workoutId, { icon: newIcon });
        setWorkouts(getWorkoutsByDate(dateKey));
        setEditingIcon(null);
    }

    function toggleSet(workoutId, setIndex) {
        const w = workouts.find(w => w.id === workoutId);
        if (!w) return;
        const sd = getSetData(w);
        sd[setIndex] = { ...sd[setIndex], done: !sd[setIndex].done };
        const completedSets = sd.map(s => s.done);
        updateWorkout(dateKey, workoutId, { setDetails: sd, completedSets });
        setWorkouts(getWorkoutsByDate(dateKey));
    }

    function addSetToExercise(workoutId) {
        const w = workouts.find(w => w.id === workoutId);
        if (!w) return;
        const sd = getSetData(w);
        const lastSet = sd[sd.length - 1] || { reps: 10, weight: '', done: false };
        sd.push({ reps: lastSet.reps, weight: lastSet.weight, done: false });
        
        const newSets = parseInt(w.sets) + 1;
        const completedSets = sd.map(s => s.done);
        
        updateWorkout(dateKey, workoutId, { 
            sets: newSets,
            setDetails: sd,
            completedSets
        });
        setWorkouts(getWorkoutsByDate(dateKey));
    }

    function updateWorkoutNote(workoutId, note) {
        updateWorkout(dateKey, workoutId, { note });
        // We do not call setWorkouts here on every keystroke to avoid losing focus if React remounts.
        // We will call it onBlur
    }

    function updateSetField(workoutId, setIndex, field, value) {
        const w = workouts.find(w => w.id === workoutId);
        if (!w) return;
        const sd = getSetData(w);
        sd[setIndex] = { ...sd[setIndex], [field]: value === '' ? '' : (field === 'reps' ? parseInt(value) || '' : parseFloat(value) || '') };
        updateWorkout(dateKey, workoutId, { setDetails: sd });
        setWorkouts(getWorkoutsByDate(dateKey));
    }

    const totalCompleted = workouts.reduce((sum, w) => {
        const sd = getSetData(w);
        return sum + sd.filter(s => s.done).length;
    }, 0);
    const totalSets = workouts.reduce((s, w) => s + (parseInt(w.sets) || 0), 0);

    const hasRoutineExercises = workouts.some(w => w.fromRoutine);
    const showLoadButton = activeRoutine && routineInfo && !routineInfo.isRest && !hasRoutineExercises;

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Entrenos</h1>
                <p className="subtitle">{motto}</p>
            </div>

            <div className="date-nav">
                <button onClick={() => changeDay(-1)}>‹</button>
                <div className="date-display">
                    <div className="day-name">{dayName}</div>
                    <div>{formatted}</div>
                </div>
                <button onClick={() => changeDay(1)}>›</button>
            </div>

            {activeRoutine && routineInfo && (
                <div className="today-routine-banner">
                    <div className="trb-icon">{activeRoutine.icon}</div>
                    <div className="trb-info">
                        <div className="trb-label">Rutina del día</div>
                        {routineInfo.isRest ? (
                            <>
                                <div className="trb-name">Día de descanso</div>
                                <div className="trb-exercises">Recupera y vuelve con todo</div>
                            </>
                        ) : (
                            <>
                                <div className="trb-name">{routineInfo.day.name} — {routineInfo.day.label}</div>
                                <div className="trb-exercises">{routineInfo.exercises.length} ejercicios</div>
                            </>
                        )}
                    </div>
                </div>
            )}

            {showLoadButton && (
                <button className="btn btn-primary" style={{ marginBottom: 22 }} onClick={loadRoutineExercises}>
                    <Zap size={16} /> Cargar ejercicios de la rutina
                </button>
            )}

            {workouts.length > 0 && (
                <div className="stats-grid" style={{ marginBottom: 22 }}>
                    <div className="stat-card">
                        <div className="stat-icon"><Target size={18} /></div>
                        <div className="stat-value anim-count">{workouts.length}</div>
                        <div className="stat-label">Ejercicios</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon"><CheckCircle size={18} /></div>
                        <div className="stat-value anim-count">{totalCompleted}/{totalSets}</div>
                        <div className="stat-label">Series hechas</div>
                    </div>
                </div>
            )}

            <div className="section-title">
                {workouts.length > 0 ? 'Ejercicios del día' : ''}
            </div>

            {workouts.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">
                        {routineInfo && routineInfo.isRest
                            ? <Moon size={36} />
                            : <Dumbbell size={36} />}
                    </div>
                    <div className="empty-text">
                        {routineInfo && routineInfo.isRest ? '¡Hoy toca descansar!' : 'No hay ejercicios hoy'}
                    </div>
                    <div className="empty-hint">
                        {routineInfo && routineInfo.isRest
                            ? 'Tu cuerpo necesita recuperarse para seguir creciendo'
                            : showLoadButton ? 'Pulsa el botón para cargar tu rutina' : 'Pulsa + para añadir un ejercicio'}
                    </div>
                </div>
            ) : (
                workouts.map((w, i) => {
                    const setData = getSetData(w);
                    const isExpanded = expandedCard === w.id;
                    const hasInfo = !!getExerciseByName(w.name);
                    const doneSets = setData.filter(s => s.done).length;
                    const currentIcon = w.icon || (w.fromRoutine ? '🏋️' : '💪');

                    return (
                        <div className="workout-card" key={w.id} style={{ animationDelay: `${i * 0.05}s` }}>
                            <div className="workout-card-header"
                                onClick={() => setExpandedCard(isExpanded ? null : w.id)}
                                style={{ cursor: 'pointer' }}>
                                <div className="w-icon" style={{ position: 'relative', cursor: 'pointer' }}
                                    onClick={e => { e.stopPropagation(); setEditingIcon(editingIcon === w.id ? null : w.id); }}>
                                    {currentIcon}
                                    {editingIcon === w.id && (
                                        <EmojiPicker
                                            currentEmoji={currentIcon}
                                            type="fitness"
                                            onSelect={emoji => handleChangeIcon(w.id, emoji)}
                                            onClose={() => setEditingIcon(null)}
                                        />
                                    )}
                                </div>
                                <div className="w-info">
                                    <div className="w-name">{w.name}</div>
                                    <div className="w-meta">
                                        {w.sets} series · {doneSets}/{w.sets} completadas
                                    </div>
                                </div>
                                {hasInfo && (
                                    <button className="info-btn" onClick={e => { e.stopPropagation(); setViewExercise(w.name); }}
                                        aria-label="Ver ejercicio">
                                        <Info size={16} />
                                    </button>
                                )}
                                <button className="delete-btn" onClick={e => { e.stopPropagation(); handleDelete(w.id); }} aria-label="Eliminar">
                                    <X size={14} />
                                </button>
                            </div>

                            <div className="workout-sets-row">
                                {setData.map((s, si) => (
                                    <button key={si} className={`set-bubble ${s.done ? 'done' : ''}`}
                                        onClick={() => toggleSet(w.id, si)}>
                                        {s.done ? '✓' : si + 1}
                                    </button>
                                ))}
                                <span style={{
                                    fontSize: '0.7rem', color: 'var(--text-tertiary)',
                                    marginLeft: 'auto', opacity: 0.7,
                                    display: 'flex', alignItems: 'center', gap: 2,
                                }}>
                                    {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                    {!isExpanded && 'detalle'}
                                </span>
                            </div>

                            {isExpanded && (
                                <div className="set-details-grid">
                                    <div className="set-details-header">
                                        <span>Serie</span>
                                        <span>Reps</span>
                                        <span>Peso (kg)</span>
                                        <span>✓</span>
                                    </div>
                                    {setData.map((s, si) => (
                                        <div className={`set-details-row ${s.done ? 'set-done' : ''}`} key={si}>
                                            <span className="set-number">{si + 1}</span>
                                            <input type="number" className="set-input" value={s.reps}
                                                onChange={e => updateSetField(w.id, si, 'reps', e.target.value)}
                                                inputMode="numeric" placeholder="—" />
                                            <input type="number" className="set-input" value={s.weight}
                                                onChange={e => updateSetField(w.id, si, 'weight', e.target.value)}
                                                inputMode="decimal" placeholder="—" />
                                            <button className={`set-check ${s.done ? 'checked' : ''}`}
                                                onClick={() => toggleSet(w.id, si)}>
                                                {s.done ? '✓' : ''}
                                            </button>
                                        </div>
                                    ))}
                                    {w.video && (
                                        <a href={w.video} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', background: 'var(--accent-gradient)', color: 'white', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', marginTop: '12px' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                                            Ver Tutorial 
                                        </a>
                                    )}
                                    <button 
                                        onClick={() => addSetToExercise(w.id)}
                                        style={{ marginTop: '8px', width: '100%', padding: '8px', background: 'var(--card-bg-elevated)', border: '1px dashed var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.9rem' }}
                                    >
                                        + Añadir serie
                                    </button>
                                    <div style={{ marginTop: '12px' }}>
                                        <textarea
                                            className="set-input"
                                            style={{ width: '100%', minHeight: '60px', padding: '8px', borderRadius: '8px', textAlign: 'left', resize: 'vertical' }}
                                            placeholder="Notas de este ejercicio (ej. subir 5kg, molestia en hombro...)"
                                            defaultValue={w.note || ''}
                                            onBlur={e => {
                                                updateWorkoutNote(w.id, e.target.value);
                                                setWorkouts(getWorkoutsByDate(dateKey)); // refresh the state after save
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })
            )}

            <button className="fab" onClick={() => setShowModal(true)} aria-label="Añadir ejercicio">+</button>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-handle" />
                        <div className="modal-title">Nuevo Ejercicio</div>
                        <div className="form-group">
                            <label>Nombre del ejercicio</label>
                            <input type="text" placeholder="Ej: Press de banca" value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })} autoFocus />
                        </div>
                        <div className="form-row-3">
                            <div className="form-group">
                                <label>Series</label>
                                <input type="number" placeholder="4" value={form.sets}
                                    onChange={e => setForm({ ...form, sets: e.target.value })} inputMode="numeric" />
                            </div>
                            <div className="form-group">
                                <label>Reps</label>
                                <input type="number" placeholder="12" value={form.reps}
                                    onChange={e => setForm({ ...form, reps: e.target.value })} inputMode="numeric" />
                            </div>
                            <div className="form-group">
                                <label>Peso (kg)</label>
                                <input type="number" placeholder="60" value={form.weight}
                                    onChange={e => setForm({ ...form, weight: e.target.value })} inputMode="decimal" />
                            </div>
                        </div>
                        <p style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginBottom: 18, textAlign: 'center' }}>
                            Puedes ajustar reps y peso por serie después
                        </p>
                        <div className="btn-group">
                            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                            <button className="btn btn-primary" onClick={handleAdd}>Guardar</button>
                        </div>
                    </div>
                </div>
            )}

            {viewExercise && (
                <ExerciseDetail exerciseName={viewExercise} onClose={() => setViewExercise(null)} />
            )}
        </div>
    );
}
