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
    {
        id: 'nicolas_routine',
        name: 'Plan Entrenamiento Nicolás',
        description: 'Torso, Pierna+Core, Full Body Correctivo',
        icon: '👑',
        color: 'purple',
        tags: ['3 Días + Cardio', 'Recomposición', 'Postural'],
        days: [
            {
                name: 'Lunes',
                label: 'Descanso Activo',
                exercises: [
                    { name: 'Rutina postural completa (Bloques 1 y 2)', sets: 1, reps: 1 }
                ]
            },
            {
                name: 'Martes',
                label: 'TORSO (Énfasis Tracciones)',
                exercises: [
                    { name: 'Calentamiento: Bloque 1 (Pectoral, Chin Tucks, Wall Angels)', sets: 1, reps: 1 },
                    { name: 'Dominadas Asistidas (Saca pecho)', sets: 3, reps: 10 },
                    { name: 'Remo en Máquina (Pecho apoyado)', sets: 3, reps: 12 },
                    { name: 'Cruces en Polea (Alta a Baja)', sets: 3, reps: 12 },
                    { name: 'Face Pull en Polea Alta', sets: 3, reps: 15 },
                    { name: 'Extensión de Tríceps en Polea', sets: 3, reps: 15 }
                ]
            },
            {
                name: 'Miércoles',
                label: 'Cardio',
                exercises: [
                    { name: 'Cinta (Método CACO)', sets: 1, reps: 35 }
                ]
            },
            {
                name: 'Jueves',
                label: 'PIERNA Y CORE',
                exercises: [
                    { name: 'Calentamiento: Bloque 2 (Flexores, Dead Bugs, Puente)', sets: 1, reps: 1 },
                    { name: 'Curl de Isquiotibiales', sets: 3, reps: 12 },
                    { name: 'Hip Thrust o Multipower', sets: 3, reps: 12 },
                    { name: 'Prensa de Piernas (Pies altos)', sets: 3, reps: 12 },
                    { name: 'Extensión de Cadera Polea Baja', sets: 3, reps: 15 },
                    { name: 'Pallof Press en Polea (por lado)', sets: 3, reps: 10 }
                ]
            },
            {
                name: 'Viernes',
                label: 'Descanso',
                exercises: []
            },
            {
                name: 'Sábado',
                label: 'FULL BODY CORRECTIVO',
                exercises: [
                    { name: 'Calentamiento Express (Blq 1 y 2)', sets: 1, reps: 1 },
                    { name: 'Remo en Polea Baja (Triángulo)', sets: 3, reps: 12 },
                    { name: 'Pájaros en Máquina (Peck-Deck)', sets: 3, reps: 15 },
                    { name: 'Prensa de Piernas (Freno lento)', sets: 3, reps: 12 },
                    { name: 'Curl de Bíceps Polea Baja', sets: 3, reps: 12 },
                    { name: 'Crunch Abdominal Polea Alta', sets: 3, reps: 15 }
                ]
            },
            {
                name: 'Domingo',
                label: 'Cardio',
                exercises: [
                    { name: 'Cinta (Método CACO)', sets: 1, reps: 35 }
                ]
            }
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
    
    let dayIndex;
    if (daysCount === 7) {
        dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    } else {
        if (dayOfWeek === 0) return { day: null, exercises: [], isRest: true };
        dayIndex = (dayOfWeek - 1) % daysCount;
    }
    const day = routine.days[dayIndex];

    return {
        day,
        exercises: day.exercises,
        dayIndex,
        isRest: false,
    };
}

