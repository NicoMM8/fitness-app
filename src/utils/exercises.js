// exercises.js — Exercise catalog with descriptions, muscles, and video links

// YouTube video IDs for exercise demonstrations (curated, popular channels)
export const MUSCLE_GROUPS = [
    { id: 'chest', name: 'Pecho', icon: '🫁' },
    { id: 'back', name: 'Espalda', icon: '🔙' },
    { id: 'shoulders', name: 'Hombros', icon: '🤷' },
    { id: 'biceps', name: 'Bíceps', icon: '💪' },
    { id: 'triceps', name: 'Tríceps', icon: '🦾' },
    { id: 'legs', name: 'Piernas', icon: '🦵' },
    { id: 'glutes', name: 'Glúteos', icon: '🍑' },
    { id: 'core', name: 'Core', icon: '🧱' },
    { id: 'calves', name: 'Gemelos', icon: '🦶' },
    { id: 'forearms', name: 'Antebrazos', icon: '✊' },
    { id: 'fullbody', name: 'Full Body', icon: '🏋️' },
];

export const EXERCISE_DATABASE = [
    // ─── PECHO ────────────────────────────────────────────
    {
        id: 'press-banca',
        name: 'Press de banca',
        muscles: ['chest', 'triceps', 'shoulders'],
        primaryMuscle: 'chest',
        equipment: 'Barra + banco plano',
        difficulty: 'Intermedio',
        description: 'Ejercicio fundamental para desarrollar el pectoral mayor. Acuéstate en un banco plano, agarra la barra con las manos algo más separadas que los hombros. Baja la barra controladamente hasta el pecho y empuja hacia arriba hasta bloquear los codos.',
        tips: [
            'Mantén los omóplatos retraídos y el pecho alto',
            'Los pies firmes en el suelo',
            'Baja la barra a la línea de los pezones',
            'No rebotes la barra en el pecho',
        ],
        videoId: 'rT7DgCr-3pg',
    },
    {
        id: 'press-inclinado',
        name: 'Press inclinado',
        muscles: ['chest', 'shoulders', 'triceps'],
        primaryMuscle: 'chest',
        equipment: 'Barra o mancuernas + banco inclinado',
        difficulty: 'Intermedio',
        description: 'Variante del press de banca en banco inclinado (30-45°) que enfatiza la parte superior del pectoral (clavicular). El movimiento es similar al press plano pero el ángulo redirige la tensión hacia las fibras superiores del pecho.',
        tips: [
            'Inclina el banco entre 30° y 45°',
            'Baja hasta el pecho superior',
            'No arquees excesivamente la espalda',
        ],
        videoId: 'SrqOu55lrYU',
    },
    {
        id: 'press-inclinado-mancuernas',
        name: 'Press inclinado mancuernas',
        muscles: ['chest', 'shoulders', 'triceps'],
        primaryMuscle: 'chest',
        equipment: 'Mancuernas + banco inclinado',
        difficulty: 'Intermedio',
        description: 'Igual que el press inclinado pero con mancuernas, lo que permite un mayor rango de movimiento y activación de fibras estabilizadoras. Excelente para corregir desbalances entre ambos lados.',
        tips: [
            'Baja más que con barra para mayor estiramiento',
            'Junta las mancuernas arriba sin chocarlas',
            'Controla la fase excéntrica',
        ],
        videoId: '8iPEnn-ltC8',
    },
    {
        id: 'press-mancuernas',
        name: 'Press con mancuernas',
        muscles: ['chest', 'triceps', 'shoulders'],
        primaryMuscle: 'chest',
        equipment: 'Mancuernas + banco plano',
        difficulty: 'Principiante',
        description: 'Press de pecho en banco plano con mancuernas. Permite mayor rango de movimiento que la barra y trabaja los estabilizadores. Ideal para sentir mejor la contracción del pectoral.',
        tips: [
            'Gira ligeramente las mancuernas hacia dentro al subir',
            'Baja hasta sentir un buen estiramiento',
            'Mantén los codos a 45° del cuerpo',
        ],
        videoId: 'VmB1G1K7v94',
    },
    {
        id: 'aperturas-mancuernas',
        name: 'Aperturas con mancuernas',
        muscles: ['chest'],
        primaryMuscle: 'chest',
        equipment: 'Mancuernas + banco plano',
        difficulty: 'Principiante',
        description: 'Ejercicio de aislamiento para el pectoral. Con los brazos casi extendidos, abre las mancuernas en un arco amplio y vuelve a juntar en la parte superior. Gran estiramiento y contracción del pecho.',
        tips: [
            'Mantén una ligera flexión en los codos todo el tiempo',
            'Imagina que abrazas un árbol grande',
            'No bajes más allá de la línea del hombro',
        ],
        videoId: 'eozdVDA78K0',
    },
    {
        id: 'cross-over',
        name: 'Cross over',
        muscles: ['chest'],
        primaryMuscle: 'chest',
        equipment: 'Poleas',
        difficulty: 'Intermedio',
        description: 'Ejercicio con poleas que permite una contracción constante del pectoral durante todo el movimiento. Las poleas mantienen tensión continua, a diferencia de los pesos libres.',
        tips: [
            'Inclínate ligeramente hacia adelante',
            'Cruza las manos en la fase final para máxima contracción',
            'Controla la vuelta sin dejar que las poleas te tiren',
        ],
        videoId: 'taI4XduLpTk',
    },
    {
        id: 'fondos-paralelas',
        name: 'Fondos en paralelas',
        muscles: ['chest', 'triceps', 'shoulders'],
        primaryMuscle: 'chest',
        equipment: 'Barras paralelas',
        difficulty: 'Intermedio',
        description: 'Ejercicio compuesto con tu peso corporal. Inclínate hacia adelante para enfatizar pecho, o mantente vertical para tríceps. Excelente para desarrollar la parte inferior del pectoral.',
        tips: [
            'Inclínate hacia adelante para más pecho',
            'Baja hasta que los hombros queden al nivel de los codos',
            'Añade peso con un cinturón si es fácil',
        ],
        videoId: 'dX_nSOOJIsE',
    },
    {
        id: 'fondos-banco',
        name: 'Fondos en banco',
        muscles: ['triceps', 'chest', 'shoulders'],
        primaryMuscle: 'triceps',
        equipment: 'Banco',
        difficulty: 'Principiante',
        description: 'Versión más accesible de los fondos. Coloca las manos en un banco detrás de ti y baja el cuerpo flexionando los codos. Trabaja principalmente el tríceps.',
        tips: [
            'Mantén la espalda cerca del banco',
            'No bajes más de 90° en los codos',
            'Extiende las piernas para mayor dificultad',
        ],
        videoId: 'c3ZGl4pAwZ4',
    },

    // ─── ESPALDA ──────────────────────────────────────────
    {
        id: 'dominadas',
        name: 'Dominadas',
        muscles: ['back', 'biceps', 'forearms'],
        primaryMuscle: 'back',
        equipment: 'Barra de dominadas',
        difficulty: 'Intermedio',
        description: 'El rey de los ejercicios de espalda. Cuelga de una barra con agarre prono y tira de tu cuerpo hasta que la barbilla supere la barra. Trabaja todo el dorsal ancho, romboides y bíceps.',
        tips: [
            'Agarre algo más ancho que los hombros',
            'Inicia el tirón apretando los omóplatos',
            'Baja completamente entre repeticiones',
            'Si no puedes, usa bandas de asistencia',
        ],
        videoId: 'eGo4IYlbE5g',
    },
    {
        id: 'remo-barra',
        name: 'Remo con barra',
        muscles: ['back', 'biceps', 'core'],
        primaryMuscle: 'back',
        equipment: 'Barra',
        difficulty: 'Intermedio',
        description: 'Ejercicio compuesto de tirón horizontal. Inclínate hacia adelante con la espalda recta y tira de la barra hacia el abdomen. Trabaja dorsales, romboides, trapecios y bíceps.',
        tips: [
            'Mantén la espalda plana, nunca redondeada',
            'Tira hacia el ombligo',
            'Aprieta los omóplatos en la parte alta',
            'Flexión de rodillas ligera',
        ],
        videoId: 'FWJR5Ve8bnQ',
    },
    {
        id: 'jalon-pecho',
        name: 'Jalón al pecho',
        muscles: ['back', 'biceps'],
        primaryMuscle: 'back',
        equipment: 'Máquina de poleas',
        difficulty: 'Principiante',
        description: 'Variante en máquina de las dominadas. Siéntate, agarra la barra ancha y tira hacia el pecho. Excelente para principiantes que aún no dominan las dominadas.',
        tips: [
            'No te eches demasiado hacia atrás',
            'Tira con los codos, no con las manos',
            'Baja la barra hasta la clavícula',
        ],
        videoId: 'CAwf7n6Luuc',
    },
    {
        id: 'remo-mancuerna',
        name: 'Remo con mancuerna',
        muscles: ['back', 'biceps'],
        primaryMuscle: 'back',
        equipment: 'Mancuerna + banco',
        difficulty: 'Principiante',
        description: 'Remo unilateral que permite corregir desbalances. Apoya una rodilla y mano en el banco, y rema la mancuerna hacia la cadera con el otro brazo.',
        tips: [
            'La mancuerna debe ir hacia la cadera, no hacia el hombro',
            'Mantén el core activado',
            'Rota ligeramente el torso al subir',
        ],
        videoId: 'pYcpY20QaE8',
    },
    {
        id: 'pull-over',
        name: 'Pull over',
        muscles: ['back', 'chest'],
        primaryMuscle: 'back',
        equipment: 'Mancuerna + banco',
        difficulty: 'Intermedio',
        description: 'Ejercicio que trabaja dorsales y pectoral de forma única. Acostado en el banco, baja una mancuerna por detrás de la cabeza y vuelve. Estira mucho la caja torácica.',
        tips: [
            'No flexiones demasiado los codos',
            'Siente el estiramiento en los dorsales',
            'No uses demasiado peso al principio',
        ],
        videoId: 'FK4rHfWKEac',
    },

    // ─── HOMBROS ──────────────────────────────────────────
    {
        id: 'press-militar',
        name: 'Press militar',
        muscles: ['shoulders', 'triceps'],
        primaryMuscle: 'shoulders',
        equipment: 'Barra o mancuernas',
        difficulty: 'Intermedio',
        description: 'Ejercicio fundamental para el deltoides anterior y medio. De pie o sentado, empuja la barra desde la clavícula hasta la extensión completa de los brazos.',
        tips: [
            'Activa el core para estabilizar',
            'No arquees la espalda',
            'Baja hasta la barbilla o clavícula',
        ],
        videoId: '2yjwXTZQDDI',
    },
    {
        id: 'elevaciones-laterales',
        name: 'Elevaciones laterales',
        muscles: ['shoulders'],
        primaryMuscle: 'shoulders',
        equipment: 'Mancuernas',
        difficulty: 'Principiante',
        description: 'Ejercicio de aislamiento para el deltoides lateral, responsable de la amplitud de los hombros. Sube las mancuernas hacia los lados hasta la altura de los hombros.',
        tips: [
            'No subas más allá de la horizontal',
            'Codos ligeramente flexionados',
            'Controla la bajada, no dejes caer',
            'Usa poco peso y muchas repeticiones',
        ],
        videoId: '3VcKaXpzqRo',
    },
    {
        id: 'elevaciones-frontales',
        name: 'Elevaciones frontales',
        muscles: ['shoulders'],
        primaryMuscle: 'shoulders',
        equipment: 'Mancuernas o disco',
        difficulty: 'Principiante',
        description: 'Aislamiento para el deltoides anterior. Sube las mancuernas al frente hasta la altura de los hombros con los brazos casi extendidos.',
        tips: [
            'Alterna brazos o hazlo simultáneo',
            'No uses impulso del cuerpo',
            'Sube hasta la horizontal, no más',
        ],
        videoId: '-t7fuZ0KhDA',
    },
    {
        id: 'pajaros',
        name: 'Pájaros',
        muscles: ['shoulders', 'back'],
        primaryMuscle: 'shoulders',
        equipment: 'Mancuernas',
        difficulty: 'Principiante',
        description: 'Aislamiento del deltoides posterior. Inclínate hacia adelante y sube las mancuernas hacia los lados como un pájaro abriendo las alas. También conocido como "rear delt fly".',
        tips: [
            'Inclínate bien hacia adelante',
            'Lleva los codos hacia atrás y arriba',
            'Aprieta los omóplatos al final',
        ],
        videoId: 'lPMi7QXEBHY',
    },
    {
        id: 'face-pulls',
        name: 'Face pulls',
        muscles: ['shoulders', 'back'],
        primaryMuscle: 'shoulders',
        equipment: 'Polea con cuerda',
        difficulty: 'Principiante',
        description: 'Ejercicio esencial para la salud de los hombros. Tira de la cuerda hacia la cara separando las manos. Trabaja deltoides posterior, romboides y rotadores externos.',
        tips: [
            'Usa la polea a la altura de la cara',
            'Separa las manos al final del movimiento',
            'Mantén los codos altos',
            'Haz muchas repeticiones (15-25)',
        ],
        videoId: 'rep-qVOkqgk',
    },

    // ─── BÍCEPS ───────────────────────────────────────────
    {
        id: 'curl-biceps',
        name: 'Curl de bíceps',
        muscles: ['biceps', 'forearms'],
        primaryMuscle: 'biceps',
        equipment: 'Barra o mancuernas',
        difficulty: 'Principiante',
        description: 'El ejercicio clásico de bíceps. De pie, con los brazos extendidos, flexiona los codos subiendo el peso hacia los hombros. Mantén los codos pegados al cuerpo.',
        tips: [
            'No balancees el cuerpo',
            'Mantén los codos quietos',
            'Baja completamente entre reps',
            'Aprieta el bíceps arriba',
        ],
        videoId: 'ykJmrZ5v0Oo',
    },
    {
        id: 'curl-biceps-barra',
        name: 'Curl de bíceps barra',
        muscles: ['biceps', 'forearms'],
        primaryMuscle: 'biceps',
        equipment: 'Barra recta o Z',
        difficulty: 'Principiante',
        description: 'Curl de bíceps con barra, permite mover más peso que con mancuernas. La barra Z es más cómoda para las muñecas.',
        tips: [
            'La barra Z reduce tensión en muñecas',
            'Mantén la espalda recta',
            'No uses la espalda para balancear',
        ],
        videoId: 'kwG2ipFRgFo',
    },
    {
        id: 'curl-martillo',
        name: 'Curl martillo',
        muscles: ['biceps', 'forearms'],
        primaryMuscle: 'biceps',
        equipment: 'Mancuernas',
        difficulty: 'Principiante',
        description: 'Variante del curl con agarre neutro (palmas mirándose). Trabaja el braquial y braquiorradial además del bíceps, dando más grosor al brazo.',
        tips: [
            'Palmas mirándose durante todo el movimiento',
            'Alterna brazos o hazlo simultáneo',
            'Gran ejercicio para antebrazos también',
        ],
        videoId: 'zC3nLlEvin4',
    },
    {
        id: 'curl-concentrado',
        name: 'Curl concentrado',
        muscles: ['biceps'],
        primaryMuscle: 'biceps',
        equipment: 'Mancuerna',
        difficulty: 'Principiante',
        description: 'Curl unilateral sentado con el codo apoyado en la cara interna del muslo. Aísla completamente el bíceps eliminando cualquier trampa.',
        tips: [
            'Apoya bien el codo en el muslo',
            'Concéntrate en la contracción',
            'Baja lento y controlado',
        ],
        videoId: 'Jvj2wV0vOYo',
    },

    // ─── TRÍCEPS ──────────────────────────────────────────
    {
        id: 'extensiones-triceps',
        name: 'Extensiones de tríceps',
        muscles: ['triceps'],
        primaryMuscle: 'triceps',
        equipment: 'Polea o mancuerna',
        difficulty: 'Principiante',
        description: 'Ejercicio de aislamiento para el tríceps. En polea, empuja hacia abajo extendiendo los codos. Con mancuerna, extiende por encima de la cabeza.',
        tips: [
            'Mantén los codos pegados al cuerpo',
            'Solo mueve los antebrazos',
            'Aprieta el tríceps en la extensión completa',
        ],
        videoId: '2-LAMcpzODU',
    },
    {
        id: 'press-frances',
        name: 'Press francés',
        muscles: ['triceps'],
        primaryMuscle: 'triceps',
        equipment: 'Barra Z + banco',
        difficulty: 'Intermedio',
        description: 'Acostado en banco, baja la barra hacia la frente flexionando los codos, luego extiende. Trabaja las tres cabezas del tríceps intensamente.',
        tips: [
            'Los codos apuntan al techo todo el tiempo',
            'Baja la barra hacia la frente o detrás de la cabeza',
            'Usa barra Z para más comodidad en muñecas',
        ],
        videoId: 'd_KZxkY_0cM',
    },

    // ─── PIERNAS ──────────────────────────────────────────
    {
        id: 'sentadilla',
        name: 'Sentadilla',
        muscles: ['legs', 'glutes', 'core'],
        primaryMuscle: 'legs',
        equipment: 'Barra + rack',
        difficulty: 'Intermedio',
        description: 'El ejercicio rey del tren inferior. Coloca la barra en la parte alta de la espalda, baja flexionando rodillas y caderas hasta que los muslos queden paralelos al suelo o más abajo.',
        tips: [
            'Rodillas en línea con las puntas de los pies',
            'Mantén el pecho alto y la espalda recta',
            'Baja al menos hasta paralelo',
            'Empuja con los talones al subir',
        ],
        videoId: 'ultWZbUMPL8',
    },
    {
        id: 'sentadilla-frontal',
        name: 'Sentadilla frontal',
        muscles: ['legs', 'core'],
        primaryMuscle: 'legs',
        equipment: 'Barra + rack',
        difficulty: 'Avanzado',
        description: 'Variante con la barra delante, apoyada en los deltoides. Enfatiza cuádriceps y requiere más movilidad de tobillos y muñecas. Obliga a mantener el torso muy vertical.',
        tips: [
            'Codos altos para mantener la barra',
            'Torso muy vertical',
            'Requiere buena movilidad de muñecas',
        ],
        videoId: 'wyDbagKwOq0',
    },
    {
        id: 'sentadilla-bulgara',
        name: 'Sentadilla búlgara',
        muscles: ['legs', 'glutes'],
        primaryMuscle: 'legs',
        equipment: 'Mancuernas + banco',
        difficulty: 'Intermedio',
        description: 'Sentadilla unilateral con el pie trasero elevado en un banco. Excelente para fuerza, equilibrio y corregir desbalances entre piernas.',
        tips: [
            'El pie delantero adelantado respecto a la cadera',
            'Baja vertical, no hacia adelante',
            'Mantén el tronco erguido',
        ],
        videoId: '2C-uNgKwPLE',
    },
    {
        id: 'prensa-piernas',
        name: 'Prensa de piernas',
        muscles: ['legs', 'glutes'],
        primaryMuscle: 'legs',
        equipment: 'Máquina prensa',
        difficulty: 'Principiante',
        description: 'Ejercicio en máquina que permite mover mucho peso de forma segura. Empuja la plataforma con los pies hasta extender las piernas. Pies arriba = más glúteo, pies abajo = más cuádriceps.',
        tips: [
            'No bloquees las rodillas completamente',
            'Baja hasta 90° de flexión de rodilla',
            'Varía la posición de los pies según el foco',
        ],
        videoId: 'IZxyjW7MPJQ',
    },
    {
        id: 'peso-muerto',
        name: 'Peso muerto',
        muscles: ['back', 'legs', 'glutes', 'core'],
        primaryMuscle: 'legs',
        equipment: 'Barra',
        difficulty: 'Avanzado',
        description: 'Ejercicio compuesto que trabaja toda la cadena posterior. Levanta la barra del suelo hasta la posición erguida con la espalda perfectamente recta. Fundamental para fuerza total.',
        tips: [
            'La barra debe rozar las espinillas',
            'La espalda SIEMPRE recta, nunca redondeada',
            'Empuja el suelo con los pies, no tires con la espalda',
            'Bloquea arriba apretando glúteos',
        ],
        videoId: 'op9kVnSso6Q',
    },
    {
        id: 'peso-muerto-rumano',
        name: 'Peso muerto rumano',
        muscles: ['legs', 'glutes', 'back'],
        primaryMuscle: 'legs',
        equipment: 'Barra o mancuernas',
        difficulty: 'Intermedio',
        description: 'Variante del peso muerto enfocada en isquiotibiales y glúteos. A diferencia del convencional, la barra sale desde arriba y las piernas se mantienen casi rectas.',
        tips: [
            'Rodillas ligeramente flexionadas todo el tiempo',
            'Desliza la barra pegada a las piernas',
            'Siente el estiramiento en los isquiotibiales',
            'No bajes más allá de media espinilla',
        ],
        videoId: 'JCXUYuzwNrM',
    },
    {
        id: 'extensiones-cuadriceps',
        name: 'Extensiones de cuádriceps',
        muscles: ['legs'],
        primaryMuscle: 'legs',
        equipment: 'Máquina de extensiones',
        difficulty: 'Principiante',
        description: 'Aislamiento puro del cuádriceps. Sentado en la máquina, extiende las piernas elevando el peso. Ideal para calentar o como finisher.',
        tips: [
            'Extiende completamente sin bloquear',
            'Baja controlado, no dejes caer',
            'Aprieta el cuádriceps arriba 1 segundo',
        ],
        videoId: 'YyvSfVjQeL0',
    },
    {
        id: 'curl-femoral',
        name: 'Curl femoral',
        muscles: ['legs'],
        primaryMuscle: 'legs',
        equipment: 'Máquina de curl',
        difficulty: 'Principiante',
        description: 'Aislamiento de isquiotibiales. Boca abajo o sentado, flexiona las rodillas acercando los talones a los glúteos.',
        tips: [
            'No levantes la cadera al flexionar',
            'Aprieta arriba del todo',
            'Baja lento para más tensión',
        ],
        videoId: '1Tq3QdYUuHs',
    },
    {
        id: 'zancadas',
        name: 'Zancadas',
        muscles: ['legs', 'glutes'],
        primaryMuscle: 'legs',
        equipment: 'Mancuernas o barra',
        difficulty: 'Principiante',
        description: 'Ejercicio unilateral que trabaja cuádriceps, glúteos e isquiotibiales. Da un paso largo al frente, baja la rodilla trasera casi al suelo y empuja de vuelta.',
        tips: [
            'Paso largo para más glúteo, corto para más cuádriceps',
            'La rodilla no sobrepasa la punta del pie',
            'Mantén el torso erguido',
        ],
        videoId: 'QOVaHwm-Q6U',
    },
    {
        id: 'elevaciones-gemelos',
        name: 'Elevaciones de gemelos',
        muscles: ['calves'],
        primaryMuscle: 'calves',
        equipment: 'Máquina o step',
        difficulty: 'Principiante',
        description: 'Ponte de puntillas con peso sobre los hombros para desarrollar los gemelos. Baja los talones por debajo del nivel del step para máximo estiramiento.',
        tips: [
            'Rango completo: estira abajo, contrae arriba',
            'Pausa de 1-2 segundos arriba',
            'Haz muchas repeticiones (15-25)',
        ],
        videoId: 'gwLzBJYoWlI',
    },

    // ─── CORE ─────────────────────────────────────────────
    {
        id: 'abdominales',
        name: 'Abdominales',
        muscles: ['core'],
        primaryMuscle: 'core',
        equipment: 'Ninguno',
        difficulty: 'Principiante',
        description: 'Crunch clásico. Acostado boca arriba con las rodillas flexionadas, sube los hombros del suelo contrayendo los abdominales. No necesitas subir mucho.',
        tips: [
            'No tires del cuello con las manos',
            'Exhala al subir, inhala al bajar',
            'Contrae el abdomen antes de subir',
        ],
        videoId: 'Xyd_fa5zoEU',
    },
    {
        id: 'plancha',
        name: 'Plancha',
        muscles: ['core', 'shoulders'],
        primaryMuscle: 'core',
        equipment: 'Ninguno',
        difficulty: 'Principiante',
        description: 'Ejercicio isométrico de core. Mantén la posición de plancha con los antebrazos y puntas de los pies apoyados, el cuerpo recto como una tabla.',
        tips: [
            'No dejes caer la cadera',
            'Aprieta glúteos y abdomen',
            'Mira al suelo, cuello neutro',
            'Respira de forma normal',
        ],
        videoId: 'ASdvN_XEl_c',
    },
];

// ─── Search & Filter ────────────────────────────────────
export function searchExercises(query, muscleFilter = null) {
    let results = EXERCISE_DATABASE;

    if (muscleFilter) {
        results = results.filter(ex =>
            ex.muscles.includes(muscleFilter) || ex.primaryMuscle === muscleFilter
        );
    }

    if (query && query.trim()) {
        const q = query.toLowerCase().trim();
        results = results.filter(ex =>
            ex.name.toLowerCase().includes(q) ||
            ex.description.toLowerCase().includes(q) ||
            ex.equipment.toLowerCase().includes(q)
        );
    }

    return results;
}

export function getExerciseByName(name) {
    const normalized = name.toLowerCase().trim();
    return EXERCISE_DATABASE.find(ex => ex.name.toLowerCase() === normalized) || null;
}

export function getExerciseById(id) {
    return EXERCISE_DATABASE.find(ex => ex.id === id) || null;
}
