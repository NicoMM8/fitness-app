// mealplans.js — Pre-made weekly meal plans

export const MEAL_TYPES = [
    { id: 'breakfast', name: 'Desayuno', icon: '🌅', time: '08:00' },
    { id: 'morning_snack', name: 'Media mañana', icon: '🍎', time: '11:00' },
    { id: 'lunch', name: 'Almuerzo', icon: '🍽️', time: '14:00' },
    { id: 'afternoon_snack', name: 'Merienda', icon: '🥤', time: '17:00' },
    { id: 'dinner', name: 'Cena', icon: '🌙', time: '21:00' },
];

const DAY_NAMES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export const DEFAULT_MEAL_PLANS = [
    {
        id: 'deficit',
        name: 'Déficit Calórico',
        description: 'Plan de ~1800 kcal para pérdida de grasa',
        icon: '🔥',
        color: 'orange',
        tags: ['1800 kcal', 'Perder grasa', 'Alto en proteína'],
        targetCalories: 1800,
        days: [
            {
                name: 'Lunes',
                meals: [
                    { type: 'breakfast', name: 'Tortilla de claras con espinacas', calories: 220, protein: 28, icon: '🥚' },
                    { type: 'morning_snack', name: 'Yogur griego con arándanos', calories: 150, protein: 12, icon: '🫐' },
                    { type: 'lunch', name: 'Pechuga de pollo a la plancha con arroz integral y brócoli', calories: 480, protein: 42, icon: '🍗' },
                    { type: 'afternoon_snack', name: 'Batido de proteínas con plátano', calories: 250, protein: 30, icon: '🥤' },
                    { type: 'dinner', name: 'Salmón al horno con espárragos', calories: 420, protein: 35, icon: '🐟' },
                ],
            },
            {
                name: 'Martes',
                meals: [
                    { type: 'breakfast', name: 'Avena con proteína whey y fresas', calories: 300, protein: 28, icon: '🥣' },
                    { type: 'morning_snack', name: 'Manzana con mantequilla de cacahuete', calories: 180, protein: 5, icon: '🍎' },
                    { type: 'lunch', name: 'Ensalada de atún con huevo duro y aguacate', calories: 450, protein: 38, icon: '🥗' },
                    { type: 'afternoon_snack', name: 'Queso fresco con nueces', calories: 160, protein: 14, icon: '🧀' },
                    { type: 'dinner', name: 'Pavo a la plancha con verduras salteadas', calories: 380, protein: 40, icon: '🍖' },
                ],
            },
            {
                name: 'Miércoles',
                meals: [
                    { type: 'breakfast', name: 'Tostadas integrales con aguacate y huevo poché', calories: 320, protein: 16, icon: '🥑' },
                    { type: 'morning_snack', name: 'Batido verde (espinacas, manzana, jengibre)', calories: 120, protein: 3, icon: '🥬' },
                    { type: 'lunch', name: 'Ternera magra con patata asada y ensalada', calories: 500, protein: 42, icon: '🥩' },
                    { type: 'afternoon_snack', name: 'Yogur griego con semillas de chía', calories: 140, protein: 12, icon: '🥛' },
                    { type: 'dinner', name: 'Merluza al vapor con calabacín y tomate', calories: 350, protein: 32, icon: '🐟' },
                ],
            },
            {
                name: 'Jueves',
                meals: [
                    { type: 'breakfast', name: 'Tortilla francesa con jamón de pavo', calories: 240, protein: 24, icon: '🥚' },
                    { type: 'morning_snack', name: 'Puñado de almendras', calories: 160, protein: 6, icon: '🥜' },
                    { type: 'lunch', name: 'Pollo al curry con arroz basmati', calories: 480, protein: 38, icon: '🍛' },
                    { type: 'afternoon_snack', name: 'Fruta de temporada', calories: 100, protein: 1, icon: '🍊' },
                    { type: 'dinner', name: 'Revuelto de gambas con champiñones', calories: 380, protein: 30, icon: '🦐' },
                ],
            },
            {
                name: 'Viernes',
                meals: [
                    { type: 'breakfast', name: 'Porridge de avena con canela y plátano', calories: 310, protein: 10, icon: '🥣' },
                    { type: 'morning_snack', name: 'Cottage cheese con piña', calories: 140, protein: 16, icon: '🍍' },
                    { type: 'lunch', name: 'Salmón con quinoa y aguacate', calories: 520, protein: 36, icon: '🐟' },
                    { type: 'afternoon_snack', name: 'Barrita de proteínas', calories: 180, protein: 20, icon: '🍫' },
                    { type: 'dinner', name: 'Ensalada templada de pollo y espinacas', calories: 360, protein: 34, icon: '🥗' },
                ],
            },
            {
                name: 'Sábado',
                meals: [
                    { type: 'breakfast', name: 'Huevos revueltos con tostada integral', calories: 280, protein: 18, icon: '🍳' },
                    { type: 'morning_snack', name: 'Smoothie de frutas con proteína', calories: 200, protein: 22, icon: '🥤' },
                    { type: 'lunch', name: 'Pechuga de pavo con boniato y brócoli', calories: 460, protein: 40, icon: '🍖' },
                    { type: 'afternoon_snack', name: 'Palitos de zanahoria con hummus', calories: 130, protein: 5, icon: '🥕' },
                    { type: 'dinner', name: 'Lubina al horno con verduras', calories: 400, protein: 34, icon: '🐟' },
                ],
            },
            {
                name: 'Domingo',
                meals: [
                    { type: 'breakfast', name: 'Pancakes de avena y proteína', calories: 340, protein: 26, icon: '🥞' },
                    { type: 'morning_snack', name: 'Yogur con granola casera', calories: 180, protein: 10, icon: '🥛' },
                    { type: 'lunch', name: 'Pollo asado con patatas y ensalada', calories: 520, protein: 42, icon: '🍗' },
                    { type: 'afternoon_snack', name: 'Frutos secos variados', calories: 170, protein: 5, icon: '🥜' },
                    { type: 'dinner', name: 'Crema de calabaza con pollo desmenuzado', calories: 350, protein: 28, icon: '🍲' },
                ],
            },
        ],
    },
    {
        id: 'volumen',
        name: 'Volumen Limpio',
        description: 'Plan de ~2800 kcal para ganar masa muscular',
        icon: '💪',
        color: 'blue',
        tags: ['2800 kcal', 'Ganar músculo', 'Alto en proteína'],
        targetCalories: 2800,
        days: [
            {
                name: 'Lunes',
                meals: [
                    { type: 'breakfast', name: 'Avena con leche, plátano, miel y nueces', calories: 500, protein: 16, icon: '🥣' },
                    { type: 'morning_snack', name: 'Tostadas con aguacate y pavo', calories: 350, protein: 22, icon: '🥑' },
                    { type: 'lunch', name: 'Arroz con pollo, huevo y verduras al wok', calories: 680, protein: 48, icon: '🍗' },
                    { type: 'afternoon_snack', name: 'Batido de proteínas con avena y manteca de cacahuete', calories: 450, protein: 35, icon: '🥤' },
                    { type: 'dinner', name: 'Pasta integral con ternera picada y tomate', calories: 620, protein: 40, icon: '🍝' },
                ],
            },
            {
                name: 'Martes',
                meals: [
                    { type: 'breakfast', name: 'Tortilla de 4 huevos con pan integral', calories: 480, protein: 30, icon: '🍳' },
                    { type: 'morning_snack', name: 'Yogur griego con granola y miel', calories: 320, protein: 18, icon: '🥛' },
                    { type: 'lunch', name: 'Salmón a la plancha con patatas y ensalada', calories: 650, protein: 42, icon: '🐟' },
                    { type: 'afternoon_snack', name: 'Sándwich de pavo, queso y aguacate', calories: 400, protein: 28, icon: '🥪' },
                    { type: 'dinner', name: 'Pollo al horno con arroz y brócoli', calories: 580, protein: 45, icon: '🍗' },
                ],
            },
            {
                name: 'Miércoles',
                meals: [
                    { type: 'breakfast', name: 'Pancakes de avena con frutas y sirope', calories: 520, protein: 18, icon: '🥞' },
                    { type: 'morning_snack', name: 'Batido de plátano, avena y proteína', calories: 380, protein: 30, icon: '🥤' },
                    { type: 'lunch', name: 'Lentejas con chorizo y arroz', calories: 700, protein: 35, icon: '🍲' },
                    { type: 'afternoon_snack', name: 'Frutos secos con chocolate negro', calories: 300, protein: 8, icon: '🍫' },
                    { type: 'dinner', name: 'Hamburguesa casera de ternera con boniato', calories: 650, protein: 42, icon: '🍔' },
                ],
            },
            {
                name: 'Jueves',
                meals: [
                    { type: 'breakfast', name: 'Tostadas con huevo, aguacate y salmón ahumado', calories: 500, protein: 28, icon: '🥑' },
                    { type: 'morning_snack', name: 'Rice cakes con mantequilla de almendras', calories: 280, protein: 8, icon: '🍘' },
                    { type: 'lunch', name: 'Pollo con pasta y salsa pesto', calories: 680, protein: 44, icon: '🍝' },
                    { type: 'afternoon_snack', name: 'Yogur griego con nueces y miel', calories: 340, protein: 16, icon: '🥛' },
                    { type: 'dinner', name: 'Atún a la plancha con arroz y verduras', calories: 560, protein: 40, icon: '🐟' },
                ],
            },
            {
                name: 'Viernes',
                meals: [
                    { type: 'breakfast', name: 'Avena overnight con proteína y arándanos', calories: 480, protein: 28, icon: '🥣' },
                    { type: 'morning_snack', name: 'Wrap de pollo y hummus', calories: 380, protein: 26, icon: '🌯' },
                    { type: 'lunch', name: 'Ternera con patatas y salsa verde', calories: 700, protein: 48, icon: '🥩' },
                    { type: 'afternoon_snack', name: 'Batido de frutas con avena', calories: 320, protein: 10, icon: '🥤' },
                    { type: 'dinner', name: 'Pizza casera de pollo y verduras', calories: 600, protein: 35, icon: '🍕' },
                ],
            },
            {
                name: 'Sábado',
                meals: [
                    { type: 'breakfast', name: 'Huevos revueltos con bacon de pavo y tostadas', calories: 520, protein: 32, icon: '🍳' },
                    { type: 'morning_snack', name: 'Smoothie bowl con frutas y granola', calories: 400, protein: 14, icon: '🥝' },
                    { type: 'lunch', name: 'Paella de pollo y mariscos', calories: 680, protein: 40, icon: '🥘' },
                    { type: 'afternoon_snack', name: 'Tortitas de arroz con pavo y queso', calories: 280, protein: 20, icon: '🧀' },
                    { type: 'dinner', name: 'Salmón con boniato y espárragos', calories: 580, protein: 38, icon: '🐟' },
                ],
            },
            {
                name: 'Domingo',
                meals: [
                    { type: 'breakfast', name: 'Brunch: tortilla, aguacate, tostadas, zumo', calories: 600, protein: 24, icon: '🍳' },
                    { type: 'morning_snack', name: 'Fruta variada con yogur', calories: 250, protein: 8, icon: '🍎' },
                    { type: 'lunch', name: 'Asado de pollo con arroz y ensalada', calories: 700, protein: 50, icon: '🍗' },
                    { type: 'afternoon_snack', name: 'Tarta de queso proteica', calories: 350, protein: 22, icon: '🍰' },
                    { type: 'dinner', name: 'Crema de verduras con pollo a la plancha', calories: 480, protein: 36, icon: '🍲' },
                ],
            },
        ],
    },
    {
        id: 'equilibrado',
        name: 'Equilibrado',
        description: 'Plan de ~2200 kcal para mantenimiento',
        icon: '⚖️',
        color: 'green',
        tags: ['2200 kcal', 'Mantenimiento', 'Balanceado'],
        targetCalories: 2200,
        days: [
            {
                name: 'Lunes',
                meals: [
                    { type: 'breakfast', name: 'Tostadas integrales con tomate y aceite de oliva', calories: 280, protein: 8, icon: '🍞' },
                    { type: 'morning_snack', name: 'Plátano con almendras', calories: 200, protein: 6, icon: '🍌' },
                    { type: 'lunch', name: 'Pollo a la plancha con ensalada mediterránea', calories: 520, protein: 40, icon: '🥗' },
                    { type: 'afternoon_snack', name: 'Yogur natural con miel', calories: 150, protein: 10, icon: '🥛' },
                    { type: 'dinner', name: 'Merluza con patatas y verduras al vapor', calories: 450, protein: 32, icon: '🐟' },
                ],
            },
            {
                name: 'Martes',
                meals: [
                    { type: 'breakfast', name: 'Porridge con manzana y canela', calories: 320, protein: 10, icon: '🥣' },
                    { type: 'morning_snack', name: 'Queso fresco con membrillo', calories: 170, protein: 12, icon: '🧀' },
                    { type: 'lunch', name: 'Pasta con atún, tomate cherry y olivas', calories: 550, protein: 32, icon: '🍝' },
                    { type: 'afternoon_snack', name: 'Fruta de temporada', calories: 100, protein: 1, icon: '🍊' },
                    { type: 'dinner', name: 'Tortilla de patata con ensalada', calories: 480, protein: 22, icon: '🥚' },
                ],
            },
            {
                name: 'Miércoles',
                meals: [
                    { type: 'breakfast', name: 'Cereales integrales con leche y frutos rojos', calories: 300, protein: 10, icon: '🥣' },
                    { type: 'morning_snack', name: 'Tostada con jamón ibérico', calories: 180, protein: 14, icon: '🍖' },
                    { type: 'lunch', name: 'Arroz con verduras y huevo frito', calories: 520, protein: 18, icon: '🍚' },
                    { type: 'afternoon_snack', name: 'Batido de yogur y frutas', calories: 180, protein: 10, icon: '🥤' },
                    { type: 'dinner', name: 'Dorada al horno con limón y patatas', calories: 440, protein: 34, icon: '🐟' },
                ],
            },
            {
                name: 'Jueves',
                meals: [
                    { type: 'breakfast', name: 'Huevos revueltos con tostada y tomate', calories: 310, protein: 18, icon: '🍳' },
                    { type: 'morning_snack', name: 'Mix de frutos secos', calories: 180, protein: 6, icon: '🥜' },
                    { type: 'lunch', name: 'Garbanzos con espinacas y huevo duro', calories: 500, protein: 26, icon: '🍲' },
                    { type: 'afternoon_snack', name: 'Manzana con mantequilla de cacahuete', calories: 180, protein: 5, icon: '🍎' },
                    { type: 'dinner', name: 'Revuelto de setas con jamón', calories: 380, protein: 22, icon: '🍄' },
                ],
            },
            {
                name: 'Viernes',
                meals: [
                    { type: 'breakfast', name: 'Tostada de aguacate con huevo', calories: 340, protein: 14, icon: '🥑' },
                    { type: 'morning_snack', name: 'Yogur con kiwi', calories: 130, protein: 8, icon: '🥝' },
                    { type: 'lunch', name: 'Salmón con cuscús y verduras', calories: 550, protein: 36, icon: '🐟' },
                    { type: 'afternoon_snack', name: 'Hummus con crudités', calories: 160, protein: 6, icon: '🥕' },
                    { type: 'dinner', name: 'Sopa de pollo con fideos', calories: 400, protein: 28, icon: '🍜' },
                ],
            },
            {
                name: 'Sábado',
                meals: [
                    { type: 'breakfast', name: 'Pancakes con miel y frutas', calories: 380, protein: 10, icon: '🥞' },
                    { type: 'morning_snack', name: 'Zumo natural de naranja', calories: 120, protein: 2, icon: '🍊' },
                    { type: 'lunch', name: 'Paella valenciana', calories: 580, protein: 28, icon: '🥘' },
                    { type: 'afternoon_snack', name: 'Macedonia de frutas', calories: 100, protein: 1, icon: '🍓' },
                    { type: 'dinner', name: 'Pechuga a la plancha con ensalada César', calories: 450, protein: 38, icon: '🥗' },
                ],
            },
            {
                name: 'Domingo',
                meals: [
                    { type: 'breakfast', name: 'Brunch: tostadas, huevo, aguacate, zumo', calories: 450, protein: 18, icon: '🍳' },
                    { type: 'morning_snack', name: 'Fruta con yogur', calories: 140, protein: 8, icon: '🍎' },
                    { type: 'lunch', name: 'Cocido o guiso casero', calories: 600, protein: 32, icon: '🍲' },
                    { type: 'afternoon_snack', name: 'Bizcocho casero con café', calories: 200, protein: 4, icon: '🍰' },
                    { type: 'dinner', name: 'Ensalada tibia con queso de cabra', calories: 380, protein: 18, icon: '🥗' },
                ],
            },
        ],
    },
    {
        id: 'vegano',
        name: 'Vegano Fitness',
        description: 'Plan de ~2100 kcal 100% vegetal',
        icon: '🌱',
        color: 'green',
        tags: ['2100 kcal', 'Vegano', 'High protein'],
        targetCalories: 2100,
        days: [
            {
                name: 'Lunes',
                meals: [
                    { type: 'breakfast', name: 'Smoothie bowl de açaí con granola y semillas', calories: 380, protein: 10, icon: '🫐' },
                    { type: 'morning_snack', name: 'Tostada con crema de cacahuete y plátano', calories: 280, protein: 9, icon: '🥜' },
                    { type: 'lunch', name: 'Bowl de quinoa, tofu, aguacate y edamame', calories: 550, protein: 28, icon: '🥗' },
                    { type: 'afternoon_snack', name: 'Batido de proteína vegetal con leche de avena', calories: 250, protein: 24, icon: '🥤' },
                    { type: 'dinner', name: 'Curry de garbanzos con arroz basmati', calories: 480, protein: 18, icon: '🍛' },
                ],
            },
            {
                name: 'Martes',
                meals: [
                    { type: 'breakfast', name: 'Porridge de avena con leche de soja y nueces', calories: 360, protein: 14, icon: '🥣' },
                    { type: 'morning_snack', name: 'Hummus con bastones de pepino y zanahoria', calories: 180, protein: 6, icon: '🥕' },
                    { type: 'lunch', name: 'Lentejas rojas con verduras y pan de pita', calories: 520, protein: 22, icon: '🍲' },
                    { type: 'afternoon_snack', name: 'Mix de frutos secos y arándanos deshidratados', calories: 250, protein: 7, icon: '🥜' },
                    { type: 'dinner', name: 'Salteado de tempeh con fideos de arroz y verduras', calories: 460, protein: 24, icon: '🍜' },
                ],
            },
            {
                name: 'Miércoles',
                meals: [
                    { type: 'breakfast', name: 'Tostadas con aguacate, tomate y semillas de cáñamo', calories: 350, protein: 12, icon: '🥑' },
                    { type: 'morning_snack', name: 'Yogur de coco con granola', calories: 220, protein: 5, icon: '🥥' },
                    { type: 'lunch', name: 'Burrito vegano de frijoles, arroz y guacamole', calories: 580, protein: 20, icon: '🌯' },
                    { type: 'afternoon_snack', name: 'Barrita energética casera de dátiles y nueces', calories: 200, protein: 5, icon: '🍫' },
                    { type: 'dinner', name: 'Sopa de miso con tofu y algas', calories: 350, protein: 18, icon: '🍜' },
                ],
            },
            {
                name: 'Jueves',
                meals: [
                    { type: 'breakfast', name: 'Pancakes veganos de plátano y avena', calories: 380, protein: 10, icon: '🥞' },
                    { type: 'morning_snack', name: 'Batido verde con espirulina', calories: 180, protein: 8, icon: '🥬' },
                    { type: 'lunch', name: 'Bowl de arroz con seitán, boniato y kale', calories: 560, protein: 30, icon: '🍚' },
                    { type: 'afternoon_snack', name: 'Edamame con sal marina', calories: 160, protein: 14, icon: '🫛' },
                    { type: 'dinner', name: 'Pasta con pesto vegano y champiñones', calories: 500, protein: 16, icon: '🍝' },
                ],
            },
            {
                name: 'Viernes',
                meals: [
                    { type: 'breakfast', name: 'Chia pudding con leche de almendras y mango', calories: 320, protein: 8, icon: '🥛' },
                    { type: 'morning_snack', name: 'Tostada con tahini y miel de agave', calories: 220, protein: 5, icon: '🍞' },
                    { type: 'lunch', name: 'Ensalada de garbanzos, aguacate y tomate', calories: 500, protein: 18, icon: '🥗' },
                    { type: 'afternoon_snack', name: 'Proteína vegetal con fruta', calories: 250, protein: 24, icon: '🥤' },
                    { type: 'dinner', name: 'Fajitas de tofu con pimientos y cebolla', calories: 450, protein: 22, icon: '🌮' },
                ],
            },
            {
                name: 'Sábado',
                meals: [
                    { type: 'breakfast', name: 'Açaí bowl con coco rallado y granola', calories: 400, protein: 8, icon: '🫐' },
                    { type: 'morning_snack', name: 'Plátano con mantequilla de almendras', calories: 260, protein: 7, icon: '🍌' },
                    { type: 'lunch', name: 'Pad thai vegano con tofu y verduras', calories: 560, protein: 22, icon: '🍜' },
                    { type: 'afternoon_snack', name: 'Fruta fresca variada', calories: 120, protein: 1, icon: '🍎' },
                    { type: 'dinner', name: 'Hamburguesa de lentejas con boniato al horno', calories: 520, protein: 20, icon: '🍔' },
                ],
            },
            {
                name: 'Domingo',
                meals: [
                    { type: 'breakfast', name: 'Brunch vegano: tofu scramble con tostadas', calories: 420, protein: 22, icon: '🍳' },
                    { type: 'morning_snack', name: 'Smoothie tropical', calories: 200, protein: 3, icon: '🥤' },
                    { type: 'lunch', name: 'Risotto de setas con levadura nutricional', calories: 550, protein: 16, icon: '🍄' },
                    { type: 'afternoon_snack', name: 'Hummus con crackers integrales', calories: 200, protein: 7, icon: '🫘' },
                    { type: 'dinner', name: 'Wok de verduras con tempeh y salsa teriyaki', calories: 440, protein: 24, icon: '🥡' },
                ],
            },
        ],
    },
];

const ACTIVE_MEAL_PLAN_KEY = 'fitness_active_meal_plan';
const CUSTOM_MEAL_PLANS_KEY = 'fitness_custom_meal_plans';

// Custom meal plans CRUD
export function getUserMealPlans() {
    const raw = localStorage.getItem(CUSTOM_MEAL_PLANS_KEY);
    return raw ? JSON.parse(raw) : [];
}

function saveUserMealPlans(plans) {
    localStorage.setItem(CUSTOM_MEAL_PLANS_KEY, JSON.stringify(plans));
}

export function getAllMealPlans() {
    return [...DEFAULT_MEAL_PLANS, ...getUserMealPlans()];
}

export function addCustomMealPlan(plan) {
    const customs = getUserMealPlans();
    plan.id = 'custom_' + Date.now();
    plan.custom = true;
    customs.push(plan);
    saveUserMealPlans(customs);
    return plan;
}

export function deleteCustomMealPlan(planId) {
    const customs = getUserMealPlans().filter(p => p.id !== planId);
    saveUserMealPlans(customs);
    const active = getActiveMealPlan();
    if (active && active.id === planId) {
        clearActiveMealPlan();
    }
}

export function getActiveMealPlan() {
    const raw = localStorage.getItem(ACTIVE_MEAL_PLAN_KEY);
    return raw ? JSON.parse(raw) : null;
}

export function setActiveMealPlan(plan) {
    localStorage.setItem(ACTIVE_MEAL_PLAN_KEY, JSON.stringify(plan));
}

export function clearActiveMealPlan() {
    localStorage.removeItem(ACTIVE_MEAL_PLAN_KEY);
}

// Estimate protein based on meal name keywords
function estimateProtein(name, calories) {
    const n = name.toLowerCase();
    // High protein foods
    if (/pollo|pavo|ternera|salmón|atún|gambas|merluza|lubina|huevo|tortilla|proteín|whey|cottage/.test(n))
        return Math.round(calories * 0.18);
    // Medium protein
    if (/yogur|queso|leche|avena|lentejas|pasta|arroz|quinoa|hummus/.test(n))
        return Math.round(calories * 0.12);
    // Low protein (fruits, veggies, snacks)
    return Math.round(calories * 0.06);
}

// Get today's meals from the active plan
export function getTodayMeals(dayOfWeek) {
    const plan = getActiveMealPlan();
    if (!plan) return null;

    const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const day = plan.days[dayIndex];

    const meals = day.meals.map(m => ({
        ...m,
        protein: m.protein ?? estimateProtein(m.name, m.calories),
    }));

    return {
        day,
        meals,
        dayIndex,
        totalCalories: meals.reduce((s, m) => s + m.calories, 0),
        totalProtein: meals.reduce((s, m) => s + (m.protein || 0), 0),
    };
}
