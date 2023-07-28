import { useState } from 'react';
import styles from '../styles/todolist.module.css'

export default function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo,
    highlightedId,
    onHover
}: {
    todos: { id: number; title: string; done: boolean; }[];
    onChangeTodo: (nextTodo: { id: number; title: string; done: boolean; }) => void;
    onDeleteTodo: (todoId: number) => void;
    highlightedId: number;
    onHover: (todoId: number) => void;
}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}
                    className={todo.id === highlightedId ? styles.highlighted : ''}
                    onFocus={() => {
                        onHover(todo.id);
                    }}
                    onPointerMove={() => {
                        onHover(todo.id);
                    }}
                    onPointerLeave={() => {
                        onHover(null);
                    }}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ 
    todo, 
    onChange, 
    onDelete 
} : { 
    todo: { id: number; title: string; done: boolean; }; 
    onChange: (nextTodo: { id: number; title: string; done: boolean; }) => void;
    onDelete: (todoId: number) => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent: JSX.Element;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    });
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    );
}
