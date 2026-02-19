import { useState, useEffect } from 'react';
import {
    getDateKey,
    getCaloriesByDate,
    addCalorie,
    deleteCalorie,
    updateCalorie,
    getSettings,
    saveSettings,
} from '../utils/storage';
import { getActiveMealPlan, getTodayMeals, MEAL_TYPES } from '../utils/mealplans';
import { UtensilsCrossed, X, Plus, Beef } from 'lucide-react';
import EmojiPicker from '../components/EmojiPicker';

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTH_NAMES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

function formatDate(date) {
    const d = new Date(date);
    return {
        dayName: DAY_NAMES[d.getDay()],
        dayOfWeek: d.getDay(),
        formatted: `${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`,
    };
}

export default function Calories() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [entries, setEntries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', calories: '', protein: '' });
    const [settings, setSettingsState] = useState(getSettings());
    const [editingIcon, setEditingIcon] = useState(null);

    const dateKey = getDateKey(currentDate);
    const { dayName, dayOfWeek, formatted } = formatDate(currentDate);
    const activePlan = getActiveMealPlan();
    const planInfo = activePlan ? getTodayMeals(dayOfWeek) : null;

    useEffect(() => {
        setEntries(getCaloriesByDate(dateKey));
    }, [dateKey]);

    function changeDay(delta) {
        const d = new Date(currentDate);
        d.setDate(d.getDate() + delta);
        setCurrentDate(d);
    }

    function loadPlanMeals() {
        if (!planInfo) return;
        planInfo.meals.forEach(meal => {
            const exists = entries.find(e => e.name === meal.name && e.fromPlan);
            if (!exists) {
                addCalorie(dateKey, {
                    name: meal.name,
                    calories: meal.calories,
                    protein: meal.protein || 0,
                    icon: meal.icon || '🍽️',
                    fromPlan: true,
                    mealType: meal.type,
                });
            }
        });
        setEntries(getCaloriesByDate(dateKey));
    }

    function handleAdd() {
        if (!form.name.trim() || !form.calories) return;
        addCalorie(dateKey, {
            name: form.name.trim(),
            calories: parseInt(form.calories),
            protein: parseInt(form.protein) || 0,
            icon: '🍽️',
            fromPlan: false,
        });
        setEntries(getCaloriesByDate(dateKey));
        setForm({ name: '', calories: '', protein: '' });
        setShowModal(false);
    }

    function handleDelete(id) {
        deleteCalorie(dateKey, id);
        setEntries(getCaloriesByDate(dateKey));
    }

    function handleChangeIcon(entryId, newIcon) {
        updateCalorie(dateKey, entryId, { icon: newIcon });
        setEntries(getCaloriesByDate(dateKey));
        setEditingIcon(null);
    }

    function handleGoalChange(field, val) {
        const v = parseInt(val) || 0;
        const newSettings = { ...settings, [field]: v };
        setSettingsState(newSettings);
        saveSettings(newSettings);
    }

    const totalCal = entries.reduce((sum, e) => sum + (parseInt(e.calories) || 0), 0);
    const totalProtein = entries.reduce((sum, e) => sum + (parseInt(e.protein) || 0), 0);
    const calGoal = settings.calorieGoal || 2200;
    const proteinGoal = settings.proteinGoal || 150;
    const calPct = Math.min((totalCal / calGoal) * 100, 100);
    const proteinPct = Math.min((totalProtein / proteinGoal) * 100, 100);
    const remaining = calGoal - totalCal;

    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (calPct / 100) * circumference;

    const hasPlanMeals = entries.some(e => e.fromPlan);
    const showLoadButton = activePlan && planInfo && !hasPlanMeals;

    const grouped = {};
    entries.forEach(e => {
        const type = e.mealType || 'other';
        if (!grouped[type]) grouped[type] = [];
        grouped[type].push(e);
    });

    function renderFoodItem(e, i) {
        const currentIcon = e.icon || '🍽️';
        return (
            <div className="calorie-item" key={e.id} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="food-icon" style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => setEditingIcon(editingIcon === e.id ? null : e.id)}>
                    {currentIcon}
                    {editingIcon === e.id && (
                        <EmojiPicker
                            currentEmoji={currentIcon}
                            type="food"
                            onSelect={emoji => handleChangeIcon(e.id, emoji)}
                            onClose={() => setEditingIcon(null)}
                        />
                    )}
                </div>
                <div className="food-info">
                    <div className="food-name">{e.name}</div>
                    <div className="food-cal">
                        {e.calories} kcal
                        {(e.protein > 0) && <span style={{ color: 'var(--ios-green)', marginLeft: 8 }}>{e.protein}g prot</span>}
                    </div>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(e.id)} aria-label="Eliminar">
                    <X size={14} />
                </button>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Nutrición</h1>
                <p className="subtitle">Calorías y proteínas del día</p>
            </div>

            {/* Date Navigation */}
            <div className="date-nav">
                <button onClick={() => changeDay(-1)}>‹</button>
                <div className="date-display">
                    <div className="day-name">{dayName}</div>
                    <div>{formatted}</div>
                </div>
                <button onClick={() => changeDay(1)}>›</button>
            </div>

            {/* Active Meal Plan Banner */}
            {activePlan && planInfo && (
                <div className="today-routine-banner">
                    <div className="trb-icon">{activePlan.icon}</div>
                    <div className="trb-info">
                        <div className="trb-label">Menú del día</div>
                        <div className="trb-name">{planInfo.day.name}</div>
                        <div className="trb-exercises">{planInfo.meals.length} comidas · {planInfo.totalCalories} kcal</div>
                    </div>
                </div>
            )}

            {/* Load Plan Button */}
            {showLoadButton && (
                <button className="btn btn-primary" style={{ marginBottom: 22 }} onClick={loadPlanMeals}>
                    <UtensilsCrossed size={16} /> Cargar comidas del menú
                </button>
            )}

            {/* Calorie Summary Ring + Protein Bar */}
            <div className="calorie-summary">
                <div className="calorie-ring-wrap">
                    <svg viewBox="0 0 84 84">
                        <circle className="ring-bg" cx="42" cy="42" r={radius} />
                        <circle
                            className="ring-fill"
                            cx="42"
                            cy="42"
                            r={radius}
                            strokeDasharray={circumference}
                            strokeDashoffset={dashOffset}
                        />
                    </svg>
                    <div className="calorie-ring-center">
                        <div className="cal-number anim-count">{totalCal}</div>
                        <div className="cal-label">kcal</div>
                    </div>
                </div>

                <div className="calorie-meta">
                    <div className="meta-item">
                        <span className="meta-label">Meta</span>
                        <span className="meta-value">{calGoal} kcal</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Consumido</span>
                        <span className="meta-value">{totalCal} kcal</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Restante</span>
                        <span className={`meta-value ${remaining < 0 ? 'over' : 'under'}`}>
                            {remaining >= 0 ? remaining : `+${Math.abs(remaining)}`} kcal
                        </span>
                    </div>

                    {/* Protein Bar */}
                    <div className="protein-bar-wrap">
                        <div className="protein-bar-label">
                            <span>Proteína</span>
                            <span className="protein-value">{totalProtein}g / {proteinGoal}g</span>
                        </div>
                        <div className="protein-bar-track">
                            <div className="protein-bar-fill" style={{ width: `${proteinPct}%` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals Setting */}
            <div className="goal-setting" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <label>Meta kcal:</label>
                    <input
                        type="number"
                        value={calGoal}
                        onChange={e => handleGoalChange('calorieGoal', e.target.value)}
                        inputMode="numeric"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <label>Meta proteína (g):</label>
                    <input
                        type="number"
                        value={proteinGoal}
                        onChange={e => handleGoalChange('proteinGoal', e.target.value)}
                        inputMode="numeric"
                    />
                </div>
            </div>

            {/* Food List */}
            <div className="section-title">Comidas del día</div>
            {entries.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">
                        <UtensilsCrossed size={36} />
                    </div>
                    <div className="empty-text">No hay comidas registradas</div>
                    <div className="empty-hint">
                        {showLoadButton
                            ? 'Pulsa el botón para cargar tu menú del día'
                            : 'Pulsa + para añadir tu primera comida'}
                    </div>
                </div>
            ) : (
                <>
                    {hasPlanMeals ? (
                        MEAL_TYPES.map(mt => {
                            const items = grouped[mt.id];
                            if (!items || items.length === 0) return null;
                            return (
                                <div key={mt.id} style={{ marginBottom: 18 }}>
                                    <div style={{
                                        fontSize: '0.72rem', fontWeight: 600,
                                        color: 'var(--text-tertiary)', textTransform: 'uppercase',
                                        letterSpacing: '0.04em', marginBottom: 8, paddingLeft: 4,
                                    }}>
                                        {mt.name}
                                    </div>
                                    {items.map((e, i) => renderFoodItem(e, i))}
                                </div>
                            );
                        })
                    ) : (
                        entries.map((e, i) => renderFoodItem(e, i))
                    )}

                    {hasPlanMeals && grouped['other'] && grouped['other'].length > 0 && (
                        <div style={{ marginBottom: 18 }}>
                            <div style={{
                                fontSize: '0.72rem', fontWeight: 600,
                                color: 'var(--text-tertiary)', textTransform: 'uppercase',
                                letterSpacing: '0.04em', marginBottom: 8, paddingLeft: 4,
                                display: 'flex', alignItems: 'center', gap: 4,
                            }}>
                                <Plus size={12} /> Extras
                            </div>
                            {grouped['other'].map((e, i) => renderFoodItem(e, i))}
                        </div>
                    )}
                </>
            )}

            {/* FAB */}
            <button className="fab" onClick={() => setShowModal(true)} aria-label="Añadir comida">+</button>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-handle" />
                        <div className="modal-title">Añadir Comida</div>

                        <div className="form-group">
                            <label>Nombre de la comida</label>
                            <input
                                type="text"
                                placeholder="Ej: Pechuga de pollo a la plancha"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                autoFocus
                            />
                        </div>

                        <div style={{ display: 'flex', gap: 12 }}>
                            <div className="form-group" style={{ flex: 1 }}>
                                <label>Calorías (kcal)</label>
                                <input
                                    type="number"
                                    placeholder="350"
                                    value={form.calories}
                                    onChange={e => setForm({ ...form, calories: e.target.value })}
                                    inputMode="numeric"
                                />
                            </div>
                            <div className="form-group" style={{ flex: 1 }}>
                                <label>Proteína (g)</label>
                                <input
                                    type="number"
                                    placeholder="30"
                                    value={form.protein}
                                    onChange={e => setForm({ ...form, protein: e.target.value })}
                                    inputMode="numeric"
                                />
                            </div>
                        </div>

                        <div className="btn-group">
                            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                Cancelar
                            </button>
                            <button className="btn btn-primary" onClick={handleAdd}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
