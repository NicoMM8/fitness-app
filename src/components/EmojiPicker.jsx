import { useState, useRef, useEffect } from 'react';

const FITNESS_EMOJI = ['💪', '🏋️', '🏃', '🚴', '🧘', '⚡', '🔥', '🎯', '🦾', '🏆', '🚀', '💎', '⭐', '🥇', '🎖️', '❤️'];
const FOOD_EMOJI = ['🍗', '🥗', '🍳', '🥪', '🍝', '🍎', '🥤', '🍕', '🥩', '🍌', '🥚', '🫐', '🧀', '🍖', '🐟', '🥣', '🍽️', '🌅', '🌙', '🍰', '🥑', '🍞', '🥜', '🫒'];

export default function EmojiPicker({ currentEmoji, onSelect, type = 'fitness', onClose }) {
    const ref = useRef(null);
    const emojis = type === 'food' ? FOOD_EMOJI : FITNESS_EMOJI;

    useEffect(() => {
        function handleOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('touchstart', handleOutside);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, [onClose]);

    return (
        <div className="emoji-picker" ref={ref}>
            <div className="emoji-picker-grid">
                {emojis.map(em => (
                    <button
                        key={em}
                        className={`emoji-option ${em === currentEmoji ? 'selected' : ''}`}
                        onClick={() => { onSelect(em); onClose(); }}
                    >
                        {em}
                    </button>
                ))}
            </div>
        </div>
    );
}
