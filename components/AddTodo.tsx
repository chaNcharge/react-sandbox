import { useState } from 'react';

export default function AddTodo({ onAddTodo }: { onAddTodo: (title: string) => void }) {
    const [title, setTitle] = useState('');
    return (
        <form onSubmit={e => {
            e.preventDefault();
            setTitle('');
            onAddTodo(title);
        }}>
            <input
                placeholder="Add todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    )
}
