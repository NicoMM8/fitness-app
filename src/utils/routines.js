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
        name: 'BLOQUE 0: Adaptación',
        description: 'Semana 1-4. Objetivo: ganar masa muscular + pérdida de grasa visceral',
        icon: '👑',
        color: 'purple',
        tags: ['5 Días', 'Adaptación', 'Recomposición'],
        days: [
            {
                name: 'Lunes',
                label: 'DÍA 1: PUSH (pecho, hombro, tríceps)',
                exercises: [
                    { name: 'PRESS BANCA (barra o máq)', sets: 3, reps: '8-10', descanso: '90 seg', tempo: '3-1-2-0', indicaciones: '- Escápulas juntas y saca pecho\n- Baja la barra al pecho controlando\n- Pies empujan el suelo' },
                    { name: 'PRESS INCLINADO MANCUERNA', sets: 2, reps: '10-12', descanso: '90 seg', tempo: '3-1-2-0', indicaciones: '- Baja lento, controla recorrido\n- Sube juntando ligeramente' },
                    { name: 'CRUCES EN POLEA', sets: 2, reps: '12-15', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Polea al hombro, brazos semi flexionados\n- JUNTAR CODOS, NO MANOS\n- Menos peso, más conexión' },
                    { name: 'PRESS MILITAR', sets: 2, reps: '10', descanso: '90 seg', tempo: '2-1-2-0', indicaciones: '- Core y glúteo activos\n- No arquees la espalda\n- Ligerísima flexión de rodillas' },
                    { name: 'ELEVACIONES LATERALES', sets: 2, reps: '12-15', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Controlado. Sube con los codos\n- Como si sirvieras agua' },
                    { name: 'TRÍCEPS EN POLEA', sets: 2, reps: '12', descanso: '30 seg', tempo: '2-1-2-1', indicaciones: '- Usar barra corta, es más estable\n- En la pausa final, sube un poco más moviendo codos' },
                    { name: 'PALLOF PRESS', sets: 2, reps: '10', descanso: '45 seg', indicaciones: '- 10 reps por lado' },
                    { name: 'PLANCHA ABDOMINAL', sets: 2, reps: '30', descanso: '45 seg', indicaciones: '- Mantener 30 segundos' },
                    { name: 'MÁQUINA ABS', sets: 2, reps: '12', descanso: '45 seg', indicaciones: '- Foco en enrollar el core' },
                    { name: 'ESCALERA (CARDIO)', sets: 1, reps: '10', indicaciones: '- 10 min, Nivel 4-5 (120-140 lpm)' }
                ]
            },
            {
                name: 'Martes',
                label: 'DÍA 2: PIERNA (base cuádriceps)',
                exercises: [
                    { name: 'SENTADILLA EN MULTIPOWER', sets: 3, reps: '8-10', descanso: '90 seg', tempo: '3-1-2-0', indicaciones: '- Calienta hombros/muñecas antes\n- Empuja con talones, no los levantes\n- No bloquees rodillas, saca pecho' },
                    { name: 'PRENSA INCLINADA', sets: 2, reps: '10', descanso: '60 seg', tempo: '3-1-2-0', indicaciones: '- No bloquees rodillas. Exhala al subir\n- Pies en la mitad, abiertos para profundidad' },
                    { name: 'EXTENSIÓN CUÁDRICEPS', sets: 2, reps: '12-15', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Controla el movimiento\n- Aprieta en la máxima extensión' },
                    { name: 'PESO MUERTO RUMANO', sets: 2, reps: '10', descanso: '90 seg', tempo: '3-1-2-0', indicaciones: '- Cadera atrás, lumbar neutra\n- Manos rozan las piernas\n- Empuja el suelo con talones' },
                    { name: 'GEMELOS', sets: 2, reps: '12-15', descanso: '45 seg', tempo: '2-1-2-1', indicaciones: '- Controla el movimiento y la bajada' },
                    { name: 'PLANCHA LATERAL', sets: 2, reps: '30', descanso: '45 seg', indicaciones: '- Mantener 30 segundos por lado' },
                    { name: 'ELEVACIÓN PIERNAS SUELO', sets: 2, reps: '10', descanso: '45 seg', indicaciones: '- Lenta y controlada' },
                    { name: 'BICI (CARDIO)', sets: 1, reps: '10', indicaciones: '- 10 min: esfuerzos de 30s variando resistencia' }
                ]
            },
            {
                name: 'Miércoles',
                label: 'DÍA 3: POSTURA (Síndromes Cruzados Sup. e Inf.)',
                exercises: [
                    { name: 'ESTIRAMIENTO PECTORAL', sets: 3, reps: '30-45s', descanso: '-', indicaciones: 'BLOQUE 1: Síndrome Cruzado Sup.\n- Marco de puerta.\n- Inhibe pectoral mayor/menor.\n- Retrae los hombros redondeados.' },
                    { name: 'ESTIRAMIENTO TRAPECIO SUP.', sets: 3, reps: '30s/lado', descanso: '-', indicaciones: 'BLOQUE 1:\n- Trabaja la cabeza adelantada.\n- Mano detrás de la espalda.\n- Inclina la cabeza al lado contrario y ligeramente abajo.' },
                    { name: 'CHIN TUCKS (Retracciones Cervicales)', sets: 3, reps: '10', descanso: 'Completas', tempo: 'Hold 3-5s', indicaciones: 'BLOQUE 1:\n- Haz papada sin mirar arriba ni abajo.\n- Cabeza desliza horizontal en raíles.\n- Elonga y fortalece flexores profundos.' },
                    { name: 'WALL ANGELS', sets: 3, reps: '12', descanso: '60 seg', tempo: 'Lento', indicaciones: 'BLOQUE 1:\n- Lumbar, espalda alta y cabeza tocan pared.\n- No encojas hombros hacia orejas.\n- Foco en Trapecio Inferior y Medio.' },
                    { name: 'ESTIRAMIENTO FLEXORES CABALLERO', sets: 3, reps: '30-45s', descanso: '-', indicaciones: 'BLOQUE 2: Síndrome Cruzado Inf. (Inhibición)\n- Posición half-kneeling.\n- Retroversión de cadera (no arquees lumbar).' },
                    { name: 'POSICIÓN DEL NIÑO (Childs Pose)', sets: 3, reps: '45s', descanso: '-', indicaciones: 'BLOQUE 2:\n- Descomprime carillas lumbares.\n- Respiración diafragmática profunda.' },
                    { name: 'INSECTO MUERTO (Dead Bugs)', sets: 3, reps: '10/lado', descanso: '60 seg', tempo: 'Muy lento', indicaciones: 'BLOQUE 2: Core Profundo (Activación)\n- Lumbar APLASTADA al suelo siempre.\n- Costillas no suben.\n- Si espalda arquea, no bajes tanto las piernas.' },
                    { name: 'PUENTE DE GLÚTEO (Glute Bridge)', sets: 3, reps: '15', descanso: '60 seg', tempo: 'Hold 2s', indicaciones: 'BLOQUE 2:\n- Haz retroversión pélvica primero (aplana espalda).\n- Sube estricamente de glúteo, no empujando de lumbar.' }
                ]
            },
            {
                name: 'Jueves',
                label: 'DÍA 3: PULL (espalda, bíceps)',
                exercises: [
                    { name: 'JALÓN AL PECHO (Neutro)', sets: 3, reps: '8-10', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Lleva la barra al pecho\n- Baja los codos al costado' },
                    { name: 'REMO POLEA ESTRECHO', sets: 2, reps: '10', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Junta escápulas en la contracción' },
                    { name: 'REMO MANCUERNA', sets: 2, reps: '10', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Solo se mueve dorsal/brazo, no cadera ni torso\n- Espalda recta, cabeza neutra' },
                    { name: 'FACE PULL EN POLEA', sets: 2, reps: '12-15', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Lleva la cuerda a la cara\n- Codos altos. Aprieta máxima contracción' },
                    { name: 'CURL BÍCEPS BARRA Z', sets: 2, reps: '10-12', descanso: '90 seg', tempo: '2-1-2-1', indicaciones: '- Hazlo sentado en banquito\n- No balancees, fija los codos' },
                    { name: 'MÁQUINA ABS', sets: 2, reps: '10', descanso: '45 seg', indicaciones: '- Controlar la excéntrica' },
                    { name: 'PALLOF PRESS', sets: 2, reps: '10', descanso: '45 seg', indicaciones: '- 10 reps por lado' },
                    { name: 'ESCALERA (CARDIO)', sets: 1, reps: '15', indicaciones: '- 15 min, Nivel 4-5 (120-140 lpm)' }
                ]
            },
            {
                name: 'Viernes',
                label: 'DÍA 4: PIERNA (glúteo y femoral)',
                exercises: [
                    { name: 'PESO MUERTO MULTI', sets: 3, reps: '6-8', descanso: '90 seg', tempo: '2-1-2-0', indicaciones: '- Mitad del pie bajo la barra\n- Cadera atrás y baja hasta mitad de tibia\n- Empuja suelo con talones' },
                    { name: 'HIP THRUST MÁQUINA', sets: 2, reps: '10', descanso: '90 seg', tempo: '2-2-2-1', indicaciones: '- Barbilla pegada al pecho\n- Retroversión pélvica\n- Aprieta 3 seg arriba' },
                    { name: 'CURL FEMORAL ACOSTADO', sets: 2, reps: '12', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Colchón muy bajo\n- Fuerza desde talones activando el pie' },
                    { name: 'ABDUCCIÓN (abrir)', sets: 2, reps: '15', descanso: '60 seg', tempo: '2-1-2-1', indicaciones: '- Abre fuerte, aprieta 1 seg y controla la vuelta' },
                    { name: 'PLANCHA LATERAL', sets: 2, reps: '30', descanso: '45 seg', indicaciones: '- Mantener 30 segundos por lado' },
                    { name: 'ELEVACIÓN PIERNAS LENTA', sets: 2, reps: '10', descanso: '45 seg', indicaciones: '- Fuerte contracción abdominal al retener' },
                    { name: 'BICI (CARDIO)', sets: 1, reps: '10', indicaciones: '- 10 min: esfuerzos de 30s variando resistencia' }
                ]
            },
            {
                name: 'Sábado',
                label: 'DÍA 5: MOVILIDAD Y PLIOMETRÍA',
                exercises: [
                    { name: 'SALTOS EN EL SITIO', sets: 3, reps: '6', descanso: '90 seg', indicaciones: '- Verticales, suaves, aterriza controlado\n- Rodillas ligeramente hacia afuera' },
                    { name: 'SENTADILLA CON SALTO', sets: 3, reps: '5', descanso: '60 seg', indicaciones: '- Baja en sentadilla lento, salta explosivo\n- Aterriza amortiguando con talones' },
                    { name: 'SALTOS AL CAJÓN', sets: 3, reps: '5', descanso: '90 seg', indicaciones: '- Usar el lado bajo del cajón pegado a pared\n- Aterriza sin hacer ruido en el centro' },
                    { name: 'STEP-UP AL CAJÓN', sets: 3, reps: '8', descanso: '60 seg', indicaciones: '- Lado alto. Sube explosivo, baja 3 seg\n- Rodilla alineada con pie (8 reps/lado)' },
                    { name: 'CARDIO LISS', sets: 1, reps: '1', indicaciones: 'Opciones:\n- Caminar en cinta 25 min (variando inclinación)\n- Bici: 15 min\n- Elíptica: 20 min' }
                ]
            },
            {
                name: 'Domingo',
                label: 'Descanso Total',
                exercises: []
            }
        ],
    },
    {
        id: 'nicolas_routine_v0',
        name: 'Rutina Nicolás v0',
        description: 'El Trabajo Invisible (Hábitos), Movilidad y Tablas de Fuerza',
        icon: '🧠',
        color: 'blue',
        tags: ['Torso/Pierna', 'Hábitos', 'Postura', 'RIR 2'],
        days: [
            {
                name: 'Lunes',
                label: 'Descanso Activo (Movilidad Completa Casa)',
                exercises: [
                    { name: 'Estiramiento Pectoral (Marco puerta)', sets: 3, reps: '30-45 seg', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 1' },
                    { name: 'Estiramiento Trapecio Superior', sets: 3, reps: '30 seg/lado', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 1. Cabeza a lado contrario' },
                    { name: 'Retracciones Cervicales (Chin Tucks)', sets: 3, reps: '10', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 1. Sostén papada 3-5s. No mires arriba/abajo.' },
                    { name: 'Wall Angels (Deslizamiento pared)', sets: 3, reps: '12', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 1. Lumbar y cabeza pegadas, no encojas hombros.' },
                    { name: 'Estiramiento Flexores Cadera (Caballero)', sets: 3, reps: '30-45 seg', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 2. No arquees lumbar.' },
                    { name: 'Posición del Niño (Childs Pose)', sets: 3, reps: '45 seg', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 2. Respira a tu abdomen.' },
                    { name: 'Insecto Muerto (Dead Bugs)', sets: 3, reps: '10/lado', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 2. Lumbar aplastada al suelo, lento.' },
                    { name: 'Puente de Glúteo', sets: 3, reps: '15', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 2. Retroversión pélvica, aprieta 2s arriba' }
                ]
            },
            {
                name: 'Martes',
                label: 'Torso (Énfasis Tracciones)',
                exercises: [
                    { name: 'Calentamiento: Bloque 1', sets: 1, reps: '1', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 1: Pectoral, Trapecio, Chin Tucks y Wall Angels' },
                    { name: 'Dominadas Asistidas (Máquina)', sets: 3, reps: '8-10', descanso: 'RIR 2', tempo: '2-1-2-1', indicaciones: 'Saca pecho arriba. Tira con los codos al suelo.' },
                    { name: 'Remo en Máquina (Pecho apoyado)', sets: 3, reps: '10-12', descanso: 'RIR 2', tempo: '2-1-2-1', indicaciones: 'Pecho pegado al cojín. Inicia juntando escápulas.' },
                    { name: 'Cruces Polea (Alta a Baja)', sets: 3, reps: '12-15', descanso: 'RIR 2', tempo: '3-1-2-0', indicaciones: 'Exagera sacar pecho. Junta codos abajo, no manos.' },
                    { name: 'Face Pull Polea Alta (Cuerda)', sets: 3, reps: '12-15', descanso: 'RIR 2', tempo: '2-1-2-1', indicaciones: 'Puños más atrás que codos. Siente la espalda alta.' },
                    { name: 'Extensión Tríceps Polea (Cuerda)', sets: 3, reps: '12-15', descanso: 'RIR 2', tempo: '2-1-2-0', indicaciones: 'Codos pegados a costillas. Hombros atrás y abajo.' }
                ]
            },
            {
                name: 'Miércoles',
                label: 'Cardio',
                exercises: [
                    { name: 'Cinta (Método CACO)', sets: 1, reps: '35 min', descanso: '-', tempo: '-', indicaciones: 'Min 0-5 caminar. Min 5-20 trote suave. Min 20-25 caminar. Min 25-35 trote suave. Mantén Cremallera frontal' }
                ]
            },
            {
                name: 'Jueves',
                label: 'Pierna y Core (Cadena Posterior)',
                exercises: [
                    { name: 'Calentamiento: Bloque 2', sets: 1, reps: '1', descanso: '-', tempo: '-', indicaciones: 'BLOQUE 2: Flexores, Posición del niño, Dead Bugs y Puente de Glúteo' },
                    { name: 'Curl de Isquiotibiales (Sentado)', sets: 3, reps: '10-12', descanso: 'RIR 2', tempo: '3-1-2-0', indicaciones: 'Lumbar pegada al respaldo. Fuerza solo de rodilla hacia abajo.' },
                    { name: 'Hip Thrust (Máquina o Multi)', sets: 3, reps: '10-12', descanso: 'RIR 2', tempo: '2-1-2-2', indicaciones: 'Empuja con talones. Aprieta glúteo 2s arriba. Sin arquear lumbar.' },
                    { name: 'Prensa Inclinada', sets: 3, reps: '10-12', descanso: 'RIR 2', tempo: '3-1-2-0', indicaciones: 'Pies a media altura/altos. Apoya toda la espalda.' },
                    { name: 'Extensión Cadera Polea Baja', sets: 3, reps: '12-15', descanso: 'RIR 2', tempo: '2-0-2-1', indicaciones: 'Torso recto. Patada corta apretando el glúteo.' },
                    { name: 'Dead Bugs (Suelo)', sets: 3, reps: '10/lado', descanso: '-', tempo: 'Lento', indicaciones: 'Lumbar PEGADA al suelo en todo momento. Movimiento controlado.' }
                ]
            },
            {
                name: 'Viernes',
                label: 'Descanso Total',
                exercises: []
            },
            {
                name: 'Sábado',
                label: 'Full Body Correctivo',
                exercises: [
                    { name: 'Calentamiento Express', sets: 1, reps: '1', descanso: '-', tempo: '-', indicaciones: '1 serie de CADA ejercicio del Bloque 1 y Bloque 2' },
                    { name: 'Remo Polea Baja (Agarre estrecho)', sets: 3, reps: '10-12', descanso: 'RIR 2', tempo: '2-1-2-1', indicaciones: 'Siéntate erguido. Hombros abajo y lejos de las orejas.' },
                    { name: 'Pájaros Máquina (Peck-Deck Inv.)', sets: 3, reps: '12-15', descanso: 'RIR 2', tempo: '2-0-2-1', indicaciones: 'Empuja el peso con los codos hacia las paredes.' },
                    { name: 'Prensa Inclinada', sets: 3, reps: '10-12', descanso: 'RIR 2', tempo: '3-1-2-0', indicaciones: 'Pies centrados. Control absoluto en bajada (3 seg).' },
                    { name: 'Curl Bíceps Polea', sets: 3, reps: '12', descanso: 'RIR 2', tempo: '2-1-2-0', indicaciones: 'Codos fijos al cuerpo, no adelantes hombros al subir.' },
                    { name: 'Crunch Abdominal Polea Alta', sets: 3, reps: '12-15', descanso: 'RIR 2', tempo: '2-0-2-1', indicaciones: 'Enrolla tu columna con el abdomen, no tires con brazos.' }
                ]
            },
            {
                name: 'Domingo',
                label: 'Cardio',
                exercises: [
                    { name: 'Cinta (Método CACO)', sets: 1, reps: '35 min', descanso: '-', tempo: '-', indicaciones: 'Misma pauta que el Miércoles. Foco en "Hilo en la coronilla" y "Cremallera frontal"' }
                ]
            }
        ]
    }
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

