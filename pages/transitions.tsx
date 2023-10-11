import React, { useState } from 'react';
import '../styles/transitions.module.css'; // Import your CSS file

function AnimatedList() {
    const [items, setItems] = useState([1, 2, 3]);
    const [swappingIndices, setSwappingIndices] = useState([]);

    const swapItems = (index1, index2) => {
        setSwappingIndices([index1, index2]);

        setTimeout(() => {
            const newItems = [...items];
            [newItems[index1], newItems[index2]] = [newItems[index2], newItems[index1]];
            setItems(newItems);
            setSwappingIndices([]);
        }, 300); // Duration should match your CSS transition duration
    };

    return (
        <div>
            <ul className="list">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={`list-item ${swappingIndices.includes(index) ? 'move' : ''}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <button onClick={() => swapItems(1, 2)}>Swap Items</button>
        </div>
    );
}

export default AnimatedList;
