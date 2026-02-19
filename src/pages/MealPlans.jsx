import { useState } from 'react';
import {
    DEFAULT_MEAL_PLANS,
    MEAL_TYPES,
    getAllMealPlans,
    getActiveMealPlan,
    setActiveMealPlan,
    clearActiveMealPlan,
    addCustomMealPlan,
    deleteCustomMealPlan,
} from '../utils/mealplans';

const MOTTOS = [
    '¡Come bien, entrena mejor! 🥗',
    'La nutrición es el 80% del resultado',
    'Planifica tu semana y no fallarás',
];

const ICONS = ['🔥', '💪', '⚖️', '🌱', '🎯', '🥗', '🍽️', '🥑', '🧠', '⭐'];
const COLORS = ['orange', 'blue', 'green', 'purple', 'pink', 'teal'];
const DAY_NAMES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export default function MealPlans() {
    const [selected, setSelected] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [active, setActive] = useState(getActiveMealPlan());
    const [editMode, setEditMode] = useState(false);
    const [editedPlan, setEditedPlan] = useState(null);
    const [showCreate, setShowCreate] = useState(false);
    const [allPlans, setAllPlans] = useState(getAllMealPlans());
    const [newPlan, setNewPlan] = useState(getEmptyPlan());
    const [createTab, setCreateTab] = useState(0);

    const motto = MOTTOS[Math.floor(Date.now() / 86400000) % MOTTOS.length];

    function getEmptyPlan() {
        return {
            name: '', description: '', icon: '🍽️', color: 'orange',
            targetCalories: 2000,
            days: DAY_NAMES.map(name => ({
                name,
                meals: [
                    { type: 'breakfast', name: '', calories: 0, icon: '🌅' },
                    { type: 'lunch', name: '', calories: 0, icon: '🍽️' },
                    { type: 'dinner', name: '', calories: 0, icon: '🌙' },
                ],
            })),
        };
    }

    function refreshPlans() { setAllPlans(getAllMealPlans()); }

    function handleSelect(plan) {
        setSelected({ ...plan });
        setEditedPlan(JSON.parse(JSON.stringify(plan)));
        setActiveTab(0);
        setEditMode(false);
    }

    function handleActivate() {
        const planToActivate = editMode ? editedPlan : selected;
        setActiveMealPlan(planToActivate);
        setActive(planToActivate);
        setSelected(null);
        setEditMode(false);
    }

    function handleDeactivate() {
        clearActiveMealPlan();
        setActive(null);
    }

    function handleDeletePlan(id) {
        deleteCustomMealPlan(id);
        refreshPlans();
        if (active && active.id === id) setActive(null);
    }

    function updateMeal(dayIdx, mealIdx, field, value) {
        const updated = { ...editedPlan };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? { ...d, meals: d.meals.map((m, mi) => mi === mealIdx ? { ...m, [field]: field === 'calories' ? parseInt(value) || 0 : value } : m) }
                : d
        );
        setEditedPlan(updated);
    }

    function removeMeal(dayIdx, mealIdx) {
        const updated = { ...editedPlan };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx ? { ...d, meals: d.meals.filter((_, mi) => mi !== mealIdx) } : d
        );
        setEditedPlan(updated);
    }

    function addMeal(dayIdx) {
        const updated = { ...editedPlan };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx ? { ...d, meals: [...d.meals, { type: 'lunch', name: '', calories: 0, icon: '🍽️' }] } : d
        );
        setEditedPlan(updated);
    }

    // Create flow helpers
    function updateNewMeal(dayIdx, mealIdx, field, value) {
        const updated = { ...newPlan };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx
                ? { ...d, meals: d.meals.map((m, mi) => mi === mealIdx ? { ...m, [field]: field === 'calories' ? parseInt(value) || 0 : value } : m) }
                : d
        );
        setNewPlan(updated);
    }

    function addNewMeal(dayIdx) {
        const updated = { ...newPlan };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx ? { ...d, meals: [...d.meals, { type: 'lunch', name: '', calories: 0, icon: '🍽️' }] } : d
        );
        setNewPlan(updated);
    }

    function removeNewMeal(dayIdx, mealIdx) {
        const updated = { ...newPlan };
        updated.days = updated.days.map((d, di) =>
            di === dayIdx ? { ...d, meals: d.meals.filter((_, mi) => mi !== mealIdx) } : d
        );
        setNewPlan(updated);
    }

    function saveNewPlan() {
        if (!newPlan.name.trim()) return;
        const cleaned = {
            ...newPlan,
            tags: [`${newPlan.targetCalories} kcal`, 'Personalizado'],
            days: newPlan.days.map(d => ({
                ...d,
                meals: d.meals.filter(m => m.name.trim()),
            })),
        };
        addCustomMealPlan(cleaned);
        refreshPlans();
        setShowCreate(false);
        setNewPlan(getEmptyPlan());
    }

    // ─── Create Plan View ───
    if (showCreate) {
        const currentDay = newPlan.days[createTab];
        const dayCalories = currentDay.meals.reduce((s, m) => s + m.calories, 0);

        return (
            <div className="page-container">
                <div className="routine-detail-header">
                    <button className="back-btn" onClick={() => setShowCreate(false)}>‹</button>
                    <h1 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.03em', flex: 1 }}>Nuevo Menú</h1>
                </div>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Ej: Mi dieta personalizada" value={newPlan.name}
                        onChange={e => setNewPlan({ ...newPlan, name: e.target.value })} autoFocus />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input type="text" placeholder="Breve descripción del plan" value={newPlan.description}
                        onChange={e => setNewPlan({ ...newPlan, description: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Calorías objetivo/día</label>
                    <input type="number" placeholder="2000" value={newPlan.targetCalories}
                        onChange={e => setNewPlan({ ...newPlan, targetCalories: parseInt(e.target.value) || 0 })} inputMode="numeric" />
                </div>

                {/* Icon + Color pickers */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                    <div style={{ flex: 1 }}>
                        <div className="section-title">Icono</div>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            {ICONS.map(ic => (
                                <button key={ic} onClick={() => setNewPlan({ ...newPlan, icon: ic })}
                                    style={{
                                        width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                                        background: newPlan.icon === ic ? 'var(--accent-gradient)' : 'var(--bg-glass)',
                                        fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>{ic}</button>
                            ))}
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className="section-title">Color</div>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            {COLORS.map(c => (
                                <button key={c} onClick={() => setNewPlan({ ...newPlan, color: c })}
                                    className={`row-icon ${c}`}
                                    style={{
                                        width: 36, height: 36,
                                        border: newPlan.color === c ? '2px solid white' : '2px solid transparent',
                                        borderRadius: 'var(--radius-sm)', fontSize: '0.65rem',
                                    }}>{newPlan.color === c ? '✓' : ''}</button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Day tabs */}
                <div className="day-tabs">
                    {newPlan.days.map((day, i) => (
                        <button key={i} className={`day-tab ${createTab === i ? 'active' : ''}`}
                            onClick={() => setCreateTab(i)}>{day.name.substring(0, 3)}</button>
                    ))}
                </div>

                <div className="section-title">
                    {currentDay.name} — {dayCalories} kcal · {currentDay.meals.length} comidas
                </div>

                <div className="ios-list">
                    {currentDay.meals.map((meal, mi) => {
                        const mealType = MEAL_TYPES.find(mt => mt.id === meal.type);
                        return (
                            <div className="ios-row" key={mi}>
                                <div className={`row-icon ${newPlan.color}`}>
                                    {mealType ? mealType.icon : '🍽️'}
                                </div>
                                <div className="row-body">
                                    <input style={{
                                        width: '100%', background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)',
                                        padding: '5px 8px', fontSize: '0.85rem', fontWeight: 500, marginBottom: 4,
                                    }}
                                        value={meal.name} onChange={e => updateNewMeal(createTab, mi, 'name', e.target.value)}
                                        placeholder="Nombre de la comida" />
                                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                        <select style={{
                                            background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)',
                                            padding: '2px 6px', fontSize: '0.73rem', color: 'var(--text-secondary)',
                                        }}
                                            value={meal.type} onChange={e => updateNewMeal(createTab, mi, 'type', e.target.value)}>
                                            {MEAL_TYPES.map(mt => <option key={mt.id} value={mt.id}>{mt.name}</option>)}
                                        </select>
                                        <input type="number" style={{
                                            width: 55, background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)',
                                            padding: '2px 4px', textAlign: 'center', fontSize: '0.78rem',
                                        }}
                                            value={meal.calories} onChange={e => updateNewMeal(createTab, mi, 'calories', e.target.value)}
                                            inputMode="numeric" />
                                        <span style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>kcal</span>
                                    </div>
                                </div>
                                <button className="delete-btn" onClick={() => removeNewMeal(createTab, mi)}>✕</button>
                            </div>
                        );
                    })}
                </div>

                <button onClick={() => addNewMeal(createTab)} style={{
                    width: '100%', padding: '10px', background: 'var(--bg-glass)',
                    border: '1px dashed var(--bg-glass-border)', borderRadius: 'var(--radius-card)',
                    color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, marginTop: 8,
                }}>+ Añadir comida</button>

                <div className="btn-group" style={{ marginTop: 24 }}>
                    <button className="btn btn-secondary" onClick={() => setShowCreate(false)}>Cancelar</button>
                    <button className="btn btn-primary" onClick={saveNewPlan}>💾 Crear Menú</button>
                </div>
            </div>
        );
    }

    // ─── Detail View ───
    if (selected) {
        const displayPlan = editMode ? editedPlan : selected;
        const currentDay = displayPlan.days[activeTab];
        const dayCalories = currentDay.meals.reduce((s, m) => s + m.calories, 0);

        return (
            <div className="page-container">
                <div className="routine-detail-header">
                    <button className="back-btn" onClick={() => { setSelected(null); setEditMode(false); }}>‹</button>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                            {displayPlan.icon} {displayPlan.name}
                        </h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                            {displayPlan.description}
                        </p>
                    </div>
                </div>

                <div className="day-tabs">
                    {displayPlan.days.map((day, i) => (
                        <button key={i} className={`day-tab ${activeTab === i ? 'active' : ''}`}
                            onClick={() => setActiveTab(i)}>{day.name.substring(0, 3)}</button>
                    ))}
                </div>

                <div className="section-title">
                    {currentDay.name} — {dayCalories} kcal · {currentDay.meals.length} comidas
                </div>

                <div className="ios-list">
                    {currentDay.meals.map((meal, i) => {
                        const mealType = MEAL_TYPES.find(mt => mt.id === meal.type);
                        return (
                            <div className="ios-row" key={i}>
                                <div className={`row-icon ${displayPlan.color}`}>
                                    {meal.icon || (mealType ? mealType.icon : '🍽️')}
                                </div>
                                <div className="row-body">
                                    {editMode ? (
                                        <>
                                            <input style={{ width: '100%', background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)', padding: '6px 10px', fontSize: '0.9rem', fontWeight: 500, marginBottom: 4 }}
                                                value={meal.name} onChange={e => updateMeal(activeTab, i, 'name', e.target.value)} placeholder="Nombre de la comida" />
                                            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                                <select style={{ background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)', padding: '3px 8px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}
                                                    value={meal.type} onChange={e => updateMeal(activeTab, i, 'type', e.target.value)}>
                                                    {MEAL_TYPES.map(mt => <option key={mt.id} value={mt.id}>{mt.name}</option>)}
                                                </select>
                                                <input type="number" style={{ width: 60, background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)', padding: '3px 6px', textAlign: 'center', fontSize: '0.8rem' }}
                                                    value={meal.calories} onChange={e => updateMeal(activeTab, i, 'calories', e.target.value)} inputMode="numeric" />
                                                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem' }}>kcal</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="row-title">{meal.name}</div>
                                            <div className="row-subtitle">{mealType ? mealType.name : meal.type} · {meal.calories} kcal</div>
                                        </>
                                    )}
                                </div>
                                {editMode ? (
                                    <button className="delete-btn" onClick={() => removeMeal(activeTab, i)} aria-label="Eliminar">✕</button>
                                ) : (
                                    <span className="row-value" style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>{meal.calories}</span>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Total bar */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '14px 16px', marginTop: 8, background: 'var(--accent-gradient-soft)',
                    borderRadius: 'var(--radius-card)', border: '1px solid rgba(255, 45, 85, 0.12)',
                }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Total del día</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{dayCalories} kcal</span>
                </div>

                {editMode && (
                    <button style={{
                        width: '100%', padding: '12px', background: 'var(--bg-glass)',
                        border: '1px dashed var(--bg-glass-border)', borderRadius: 'var(--radius-card)',
                        color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginTop: 12,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    }} onClick={() => addMeal(activeTab)}>+ Añadir comida</button>
                )}

                <div className="btn-group" style={{ marginTop: 24 }}>
                    {!editMode && <button className="btn btn-secondary" onClick={() => setEditMode(true)}>✏️ Editar</button>}
                    {editMode && (
                        <button className="btn btn-secondary" onClick={() => { setEditMode(false); setEditedPlan(JSON.parse(JSON.stringify(selected))); }}>
                            Cancelar
                        </button>
                    )}
                    {active && active.id === displayPlan.id ? (
                        <button className="btn btn-secondary" onClick={handleDeactivate}>Desactivar</button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleActivate}>
                            {editMode ? '💾 Guardar y Activar' : '⚡ Activar Menú'}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    // ─── Main Meal Plans List ───
    return (
        <div className="page-container">
            <div className="page-header">
                <h1><span className="gradient-text">Menú Semanal</span></h1>
                <p className="subtitle">{motto}</p>
            </div>

            {active && (
                <div className="today-routine-banner">
                    <div className="trb-icon">{active.icon}</div>
                    <div className="trb-info">
                        <div className="trb-label">Menú activo</div>
                        <div className="trb-name">{active.name}</div>
                        <div className="trb-exercises">{active.targetCalories} kcal/día · 7 días</div>
                    </div>
                    <button className="back-btn" onClick={() => handleSelect(active)} style={{ background: 'var(--bg-glass)' }}>›</button>
                </div>
            )}

            {/* Create button */}
            <button className="btn btn-primary" style={{ marginBottom: 20 }} onClick={() => setShowCreate(true)}>
                + Crear menú personalizado
            </button>

            <div className="section-title">Planes disponibles</div>
            <div className="routine-grid">
                {allPlans.map((plan, i) => (
                    <div
                        className={`routine-card ${active && active.id === plan.id ? 'active-routine' : ''}`}
                        key={plan.id}
                        onClick={() => handleSelect(plan)}
                        style={{ animationDelay: `${i * 0.08}s` }}
                    >
                        <div className="routine-header">
                            <div className={`routine-icon row-icon ${plan.color}`}>{plan.icon}</div>
                            <div style={{ flex: 1 }}>
                                <div className="routine-name">{plan.name}</div>
                                <div className="routine-desc">{plan.description}</div>
                            </div>
                            {plan.custom && (
                                <button className="delete-btn" onClick={e => {
                                    e.stopPropagation();
                                    handleDeletePlan(plan.id);
                                }} aria-label="Eliminar menú" style={{ color: 'var(--ios-red)' }}>✕</button>
                            )}
                        </div>
                        <div className="routine-tags">
                            {(plan.tags || []).map(tag => (
                                <span className={`routine-tag ${tag.includes('kcal') ? 'highlight' : ''}`} key={tag}>{tag}</span>
                            ))}
                            {plan.custom && <span className="routine-tag highlight">✏️ Personalizado</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
