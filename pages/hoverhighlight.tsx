import { useState } from 'react';
import Letter from '../components/Letter'

export default function MailClient() {
    const initialLetters = [{
        id: 0,
        subject: 'Ready for adventure?',
        isStarred: true,
    }, {
        id: 1,
        subject: 'Time to check in!',
        isStarred: false,
    }, {
        id: 2,
        subject: 'Festival Begins in Just SEVEN Days!',
        isStarred: false,
    }];

    const [letters, setLetters] = useState(initialLetters);
    const [highlightedId, setHighlightedId] = useState(null);
    const [selectedIds, setSelectedIds] = useState(new Set());

    const selectedCount = selectedIds.size;

    function handleToggle(toggledId: number) {
        const nextIds = new Set(selectedIds);
        if (nextIds.has(toggledId)) {
            nextIds.delete(toggledId);
        } else {
            nextIds.add(toggledId);
        }
        setSelectedIds(nextIds);
    }

    function handleHover(letterId: number) {
        setHighlightedId(letterId);
    }

    function handleStar(starred: { id: number; }) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                        isSelected={selectedIds.has(letter.id)}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
            <br />
            <b>You selected {selectedCount} letters</b>
        </>
    );
}
