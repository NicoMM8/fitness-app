// routines.js — Pre-made workout routines

export const DEFAULT_ROUTINES = [
    {
        id: 'ppl',
        name: 'Push / Pull / Legs',
        description: 'Clásica división de 3 días para hipertrofia',
        icon: '💪',
        color: 'orange',
        tags: ['3 días', 'Hipertrofia', 'Intermedio'],
        days: [
            {
                name: 'Push',
                label: 'Empuje',
                exercises: [
                    { name: 'Press de banca', sets: 4, reps: 10 },
                    { name: 'Press militar', sets: 4, reps: 10 },
                    { name: 'Press inclinado mancuernas', sets: 3, reps: 12 },
                    { name: 'Elevaciones laterales', sets: 3, reps: 15 },
                    { name: 'Extensiones de tríceps', sets: 3, reps: 12 },
                    { name: 'Fondos en paralelas', sets: 3, reps: 10 },
                ],
            },
            {
                name: 'Pull',
                label: 'Tirón',
                exercises: [
                    { name: 'Dominadas', sets: 4, reps: 8 },
                    { name: 'Remo con barra', sets: 4, reps: 10 },
                    { name: 'Jalón al pecho', sets: 3, reps: 12 },
                    { name: 'Remo con mancuerna', sets: 3, reps: 10 },
                    { name: 'Curl de bíceps', sets: 3, reps: 12 },
                    { name: 'Face pulls', sets: 3, reps: 15 },
                ],
            },
            {
                name: 'Legs',
                label: 'Piernas',
                exercises: [
                    { name: 'Sentadilla', sets: 4, reps: 8 },
                    { name: 'Prensa de piernas', sets: 4, reps: 12 },
                    { name: 'Peso muerto rumano', sets: 3, reps: 10 },
                    { name: 'Extensiones de cuádriceps', sets: 3, reps: 15 },
                    { name: 'Curl femoral', sets: 3, reps: 12 },
                    { name: 'Elevaciones de gemelos', sets: 4, reps: 15 },
                ],
            },
        ],
    },
    {
        id: 'fullbody',
        name: 'Full Body',
        description: 'Entrena todo el cuerpo en cada sesión',
        icon: '🏋️',
        color: 'blue',
        tags: ['3 días', 'Fuerza', 'Principiante'],
        days: [
            {
                name: 'Día A',
                label: 'Full Body A',
                exercises: [
                    { name: 'Sentadilla', sets: 4, reps: 8 },
                    { name: 'Press de banca', sets: 4, reps: 8 },
                    { name: 'Remo con barra', sets: 3, reps: 10 },
                    { name: 'Press militar', sets: 3, reps: 10 },
                    { name: 'Curl de bíceps', sets: 2, reps: 12 },
                    { name: 'Extensiones de tríceps', sets: 2, reps: 12 },
                ],
            },
            {
                name: 'Día B',
                label: 'Full Body B',
                exercises: [
                    { name: 'Peso muerto', sets: 4, reps: 6 },
                    { name: 'Press inclinado', sets: 4, reps: 10 },
                    { name: 'Dominadas', sets: 3, reps: 8 },
                    { name: 'Elevaciones laterales', sets: 3, reps: 15 },
                    { name: 'Prensa de piernas', sets: 3, reps: 12 },
                    { name: 'Abdominales', sets: 3, reps: 15 },
                ],
            },
            {
                name: 'Día C',
                label: 'Full Body C',
                exercises: [
                    { name: 'Sentadilla frontal', sets: 4, reps: 8 },
                    { name: 'Press con mancuernas', sets: 4, reps: 10 },
                    { name: 'Jalón al pecho', sets: 3, reps: 12 },
                    { name: 'Face pulls', sets: 3, reps: 15 },
                    { name: 'Zancadas', sets: 3, reps: 10 },
                    { name: 'Curl martillo', sets: 2, reps: 12 },
                ],
            },
        ],
    },
    {
        id: 'upperlower',
        name: 'Upper / Lower',
        description: 'Divide en tren superior e inferior, 4 días',
        icon: '⚡',
        color: 'purple',
        tags: ['4 días', 'Hipertrofia', 'Intermedio'],
        days: [
            {
                name: 'Upper A',
                label: 'Tren Superior A',
                exercises: [
                    { name: 'Press de banca', sets: 4, reps: 8 },
                    { name: 'Remo con barra', sets: 4, reps: 8 },
                    { name: 'Press militar', sets: 3, reps: 10 },
                    { name: 'Jalón al pecho', sets: 3, reps: 12 },
                    { name: 'Curl de bíceps', sets: 3, reps: 12 },
                    { name: 'Extensiones de tríceps', sets: 3, reps: 12 },
                ],
            },
            {
                name: 'Lower A',
                label: 'Tren Inferior A',
                exercises: [
                    { name: 'Sentadilla', sets: 4, reps: 6 },
                    { name: 'Peso muerto rumano', sets: 4, reps: 10 },
                    { name: 'Prensa de piernas', sets: 3, reps: 12 },
                    { name: 'Curl femoral', sets: 3, reps: 12 },
                    { name: 'Elevaciones de gemelos', sets: 4, reps: 15 },
                    { name: 'Abdominales', sets: 3, reps: 15 },
                ],
            },
            {
                name: 'Upper B',
                label: 'Tren Superior B',
                exercises: [
                    { name: 'Press inclinado mancuernas', sets: 4, reps: 10 },
                    { name: 'Dominadas', sets: 4, reps: 8 },
                    { name: 'Elevaciones laterales', sets: 3, reps: 15 },
                    { name: 'Remo con mancuerna', sets: 3, reps: 10 },
                    { name: 'Face pulls', sets: 3, reps: 15 },
                    { name: 'Curl martillo', sets: 3, reps: 12 },
                ],
            },
            {
                name: 'Lower B',
                label: 'Tren Inferior B',
                exercises: [
                    { name: 'Peso muerto', sets: 4, reps: 5 },
                    { name: 'Sentadilla búlgara', sets: 3, reps: 10 },
                    { name: 'Extensiones de cuádriceps', sets: 3, reps: 15 },
                    { name: 'Curl femoral', sets: 3, reps: 12 },
                    { name: 'Elevaciones de gemelos', sets: 4, reps: 12 },
                    { name: 'Plancha', sets: 3, reps: 45 },
                ],
            },
        ],
    },
    {
        id: 'brosplit',
        name: 'Bro Split',
        description: 'Un grupo muscular por día, máximo volumen',
        icon: '🔥',
        color: 'pink',
        tags: ['5 días', 'Volumen', 'Avanzado'],
        days: [
            {
                name: 'Pecho',
                label: 'Pecho',
                exercises: [
                    { name: 'Press de banca', sets: 4, reps: 10 },
                    { name: 'Press inclinado mancuernas', sets: 4, reps: 10 },
                    { name: 'Aperturas con mancuernas', sets: 3, reps: 12 },
                    { name: 'Cross over', sets: 3, reps: 15 },
                    { name: 'Fondos en paralelas', sets: 3, reps: 10 },
                ],
            },
            {
                name: 'Espalda',
                label: 'Espalda',
                exercises: [
                    { name: 'Dominadas', sets: 4, reps: 8 },
                    { name: 'Remo con barra', sets: 4, reps: 10 },
                    { name: 'Jalón al pecho', sets: 3, reps: 12 },
                    { name: 'Remo con mancuerna', sets: 3, reps: 10 },
                    { name: 'Pull over', sets: 3, reps: 12 },
                ],
            },
            {
                name: 'Hombros',
                label: 'Hombros',
                exercises: [
                    { name: 'Press militar', sets: 4, reps: 10 },
                    { name: 'Elevaciones laterales', sets: 4, reps: 15 },
                    { name: 'Elevaciones frontales', sets: 3, reps: 12 },
                    { name: 'Pájaros', sets: 3, reps: 15 },
                    { name: 'Face pulls', sets: 3, reps: 15 },
                ],
            },
            {
                name: 'Piernas',
                label: 'Piernas',
                exercises: [
                    { name: 'Sentadilla', sets: 4, reps: 8 },
                    { name: 'Prensa de piernas', sets: 4, reps: 12 },
                    { name: 'Extensiones de cuádriceps', sets: 3, reps: 15 },
                    { name: 'Curl femoral', sets: 3, reps: 12 },
                    { name: 'Elevaciones de gemelos', sets: 4, reps: 15 },
                ],
            },
            {
                name: 'Brazos',
                label: 'Brazos',
                exercises: [
                    { name: 'Curl de bíceps barra', sets: 4, reps: 10 },
                    { name: 'Curl martillo', sets: 3, reps: 12 },
                    { name: 'Curl concentrado', sets: 3, reps: 12 },
                    { name: 'Press francés', sets: 4, reps: 10 },
                    { name: 'Extensiones de tríceps', sets: 3, reps: 12 },
                    { name: 'Fondos en banco', sets: 3, reps: 12 },
                ],
            },
        ],
    },
];

const ROUTINES_KEY = 'fitness_routines';
const ACTIVE_ROUTINE_KEY = 'fitness_active_routine';

// Get user's custom routines
export function getUserRoutines() {
    const raw = localStorage.getItem(ROUTINES_KEY);
    return raw ? JSON.parse(raw) : [];
}

export function saveUserRoutines(routines) {
    localStorage.setItem(ROUTINES_KEY, JSON.stringify(routines));
}

// Get ALL routines (defaults + custom)
export function getAllRoutines() {
    return [...DEFAULT_ROUTINES, ...getUserRoutines()];
}

// Add a new custom routine
export function addCustomRoutine(routine) {
    const customs = getUserRoutines();
    routine.id = 'custom_' + Date.now();
    routine.custom = true;
    customs.push(routine);
    saveUserRoutines(customs);
    return routine;
}

// Delete a custom routine
export function deleteCustomRoutine(routineId) {
    const customs = getUserRoutines().filter(r => r.id !== routineId);
    saveUserRoutines(customs);
    // If it was the active routine, deactivate
    const active = getActiveRoutine();
    if (active && active.id === routineId) {
        clearActiveRoutine();
    }
}

// Active routine
export function getActiveRoutine() {
    const raw = localStorage.getItem(ACTIVE_ROUTINE_KEY);
    return raw ? JSON.parse(raw) : null;
}

export function setActiveRoutine(routine) {
    localStorage.setItem(ACTIVE_ROUTINE_KEY, JSON.stringify(routine));
}

export function clearActiveRoutine() {
    localStorage.removeItem(ACTIVE_ROUTINE_KEY);
}

// Get today's exercises from the active routine
export function getTodayRoutineExercises(dayOfWeek) {
    const routine = getActiveRoutine();
    if (!routine) return null;

    const daysCount = routine.days.length;
    if (dayOfWeek === 0) return { day: null, exercises: [], isRest: true };

    const dayIndex = (dayOfWeek - 1) % daysCount;
    const day = routine.days[dayIndex];

    return {
        day,
        exercises: day.exercises,
        dayIndex,
        isRest: false,
    };
}

