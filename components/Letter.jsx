import styles from '../styles/hoverhighlight.module.css'

export default function Letter({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
    onToggle,
    isSelected,
}) {
    return (
        <li
            className={
                isHighlighted ? styles.highlighted : ''
            }
            onFocus={() => {
                onHover(letter.id);
            }}
            onPointerMove={() => {
                onHover(letter.id);
            }}
        >
            <input 
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(letter.id)}
            />
            <button onClick={() => {
                onToggleStar(letter);
            }}>
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
        </li>
    )
}
