import { useState, useRef, useEffect } from 'react';
import { EXERCISE_DATABASE } from '../utils/exercises';

export default function ExerciseAutocomplete({ value, onChange, onSelectExercise, placeholder }) {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        function handleOutside(e) {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('touchstart', handleOutside);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, []);

    function handleChange(val) {
        onChange(val);
        if (val.trim().length >= 2) {
            const q = val.toLowerCase().trim();
            const matches = EXERCISE_DATABASE.filter(ex =>
                ex.name.toLowerCase().includes(q)
            ).slice(0, 6);
            setSuggestions(matches);
            setShowSuggestions(matches.length > 0);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }

    function handleSelect(ex) {
        onChange(ex.name);
        setShowSuggestions(false);
        if (onSelectExercise) onSelectExercise(ex);
    }

    return (
        <div className="autocomplete-wrap" ref={wrapRef}>
            <input
                type="text"
                value={value}
                onChange={e => handleChange(e.target.value)}
                onFocus={() => {
                    if (value.trim().length >= 2 && suggestions.length > 0) {
                        setShowSuggestions(true);
                    }
                }}
                placeholder={placeholder || 'Nombre del ejercicio'}
                style={{
                    width: '100%', background: 'var(--bg-input)', borderRadius: 'var(--radius-xs)',
                    padding: '5px 8px', fontSize: '0.85rem', fontWeight: 500, marginBottom: 4,
                    border: 'none', outline: 'none', color: 'var(--text-primary)',
                }}
            />
            {showSuggestions && (
                <div className="autocomplete-dropdown">
                    {suggestions.map(ex => (
                        <button
                            key={ex.id}
                            className="autocomplete-item"
                            onClick={() => handleSelect(ex)}
                        >
                            <span className="ac-name">{ex.name}</span>
                            <span className="ac-muscle">{ex.primaryMuscle}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
