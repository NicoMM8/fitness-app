// storage.js — localStorage CRUD for workouts & calories

const WORKOUTS_KEY = 'fitness_workouts';
const CALORIES_KEY = 'fitness_calories';
const SETTINGS_KEY = 'fitness_settings';

// ─── Helpers ───────────────────────────────────────────
function getDateKey(date = new Date()) {
  return date.toISOString().split('T')[0]; // "2026-02-19"
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ─── Workouts ──────────────────────────────────────────
function getAllWorkouts() {
  const raw = localStorage.getItem(WORKOUTS_KEY);
  return raw ? JSON.parse(raw) : {};
}

function getWorkoutsByDate(dateKey) {
  const all = getAllWorkouts();
  return all[dateKey] || [];
}

function addWorkout(dateKey, workout) {
  const all = getAllWorkouts();
  if (!all[dateKey]) all[dateKey] = [];
  const entry = { id: generateId(), ...workout, createdAt: Date.now() };
  all[dateKey].push(entry);
  localStorage.setItem(WORKOUTS_KEY, JSON.stringify(all));
  return entry;
}

function deleteWorkout(dateKey, workoutId) {
  const all = getAllWorkouts();
  if (!all[dateKey]) return;
  all[dateKey] = all[dateKey].filter(w => w.id !== workoutId);
  if (all[dateKey].length === 0) delete all[dateKey];
  localStorage.setItem(WORKOUTS_KEY, JSON.stringify(all));
}

function updateWorkout(dateKey, workoutId, updates) {
  const all = getAllWorkouts();
  if (!all[dateKey]) return;
  all[dateKey] = all[dateKey].map(w =>
    w.id === workoutId ? { ...w, ...updates } : w
  );
  localStorage.setItem(WORKOUTS_KEY, JSON.stringify(all));
}

// ─── Calories ──────────────────────────────────────────
function getAllCalories() {
  const raw = localStorage.getItem(CALORIES_KEY);
  return raw ? JSON.parse(raw) : {};
}

function getCaloriesByDate(dateKey) {
  const all = getAllCalories();
  return all[dateKey] || [];
}

function addCalorie(dateKey, entry) {
  const all = getAllCalories();
  if (!all[dateKey]) all[dateKey] = [];
  const item = { id: generateId(), ...entry, createdAt: Date.now() };
  all[dateKey].push(item);
  localStorage.setItem(CALORIES_KEY, JSON.stringify(all));
  return item;
}

function deleteCalorie(dateKey, entryId) {
  const all = getAllCalories();
  if (!all[dateKey]) return;
  all[dateKey] = all[dateKey].filter(c => c.id !== entryId);
  if (all[dateKey].length === 0) delete all[dateKey];
  localStorage.setItem(CALORIES_KEY, JSON.stringify(all));
}

function updateCalorie(dateKey, entryId, updates) {
  const all = getAllCalories();
  if (!all[dateKey]) return;
  all[dateKey] = all[dateKey].map(c =>
    c.id === entryId ? { ...c, ...updates } : c
  );
  localStorage.setItem(CALORIES_KEY, JSON.stringify(all));
}

// ─── Settings ──────────────────────────────────────────
function getSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  return raw ? JSON.parse(raw) : { calorieGoal: 2200, proteinGoal: 150 };
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// ─── Weekly Stats ──────────────────────────────────────
function getWeekDates(referenceDate = new Date()) {
  const d = new Date(referenceDate);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday start
  const monday = new Date(d.setDate(diff));
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    dates.push(getDateKey(date));
  }
  return dates;
}

function getWeeklyStats(referenceDate = new Date()) {
  const weekDates = getWeekDates(referenceDate);
  const allWorkouts = getAllWorkouts();
  const allCalories = getAllCalories();

  let totalExercises = 0;
  let totalSets = 0;
  let totalReps = 0;
  let daysTraining = 0;
  const exerciseCount = {};
  const dailyCalories = [];

  weekDates.forEach(dateKey => {
    const workouts = allWorkouts[dateKey] || [];
    const calories = allCalories[dateKey] || [];

    if (workouts.length > 0) daysTraining++;
    totalExercises += workouts.length;

    workouts.forEach(w => {
      const sets = parseInt(w.sets) || 0;
      const reps = parseInt(w.reps) || 0;
      totalSets += sets;
      totalReps += sets * reps;
      exerciseCount[w.name] = (exerciseCount[w.name] || 0) + 1;
    });

    const dayTotal = calories.reduce((sum, c) => sum + (parseInt(c.calories) || 0), 0);
    dailyCalories.push({ date: dateKey, total: dayTotal });
  });

  // Most frequent exercise
  let topExercise = '—';
  let topCount = 0;
  Object.entries(exerciseCount).forEach(([name, count]) => {
    if (count > topCount) {
      topExercise = name;
      topCount = count;
    }
  });

  return {
    weekDates,
    totalExercises,
    totalSets,
    totalReps,
    daysTraining,
    topExercise,
    dailyCalories,
  };
}

// ─── Data Persistence (Export/Import) ──────────────────
function exportAllData() {
  const data = {
    workouts: getAllWorkouts(),
    calories: getAllCalories(),
    settings: getSettings(),
    // We also need to capture routines data designated in routines.js
    // We access localStorage directly to avoid circular dependency issues if we tried to import from routines.js
    customRoutines: JSON.parse(localStorage.getItem('fitness_routines') || '[]'),
    activeRoutine: JSON.parse(localStorage.getItem('fitness_active_routine') || 'null'),
    exportDate: new Date().toISOString(),
    version: 1,
  };
  return JSON.stringify(data, null, 2);
}

function importAllData(jsonString) {
  try {
    const data = JSON.parse(jsonString);

    // Basic validation
    if (!data.workouts || !data.calories) {
      throw new Error('Invalid backup file format');
    }

    // Restore data
    localStorage.setItem(WORKOUTS_KEY, JSON.stringify(data.workouts));
    localStorage.setItem(CALORIES_KEY, JSON.stringify(data.calories));
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(data.settings || { calorieGoal: 2200, proteinGoal: 150 }));

    if (data.customRoutines) {
      localStorage.setItem('fitness_routines', JSON.stringify(data.customRoutines));
    }

    if (data.activeRoutine) {
      localStorage.setItem('fitness_active_routine', JSON.stringify(data.activeRoutine));
    }

    return { success: true };
  } catch (error) {
    console.error('Import failed:', error);
    return { success: false, error: error.message };
  }
}

function clearAllData() {
  localStorage.removeItem(WORKOUTS_KEY);
  localStorage.removeItem(CALORIES_KEY);
  localStorage.removeItem(SETTINGS_KEY);
  localStorage.removeItem('fitness_routines');
  localStorage.removeItem('fitness_active_routine');
}

export {
  getDateKey,
  getWorkoutsByDate,
  addWorkout,
  deleteWorkout,
  updateWorkout,
  getCaloriesByDate,
  addCalorie,
  deleteCalorie,
  updateCalorie,
  getSettings,
  saveSettings,
  getWeeklyStats,
  getWeekDates,
  exportAllData,
  importAllData,
  clearAllData,
};
