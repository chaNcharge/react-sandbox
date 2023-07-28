import { useImmer } from 'use-immer';
import AddTodo from '../components/AddTodo';
import TaskList from '../components/TaskList'
import { todo } from 'node:test';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, updateTodos] = useImmer(initialTodos);
    const [highlightedId, setHighlightedId] = useImmer(null);

    function handleAddTodo(title: string) {
        updateTodos(draft => {
            draft.push({
                id: nextId++,
                title: title,
                done: false
            });
        })
    }

    function handleChangeTodo(nextTodo: { id: number; title: string; done: boolean; }) {
        updateTodos(draft => {
            const todo = draft.find(t =>
                t.id === nextTodo.id
            );
            todo.title = nextTodo.title;
            todo.done = nextTodo.done;
        })
    }

    function handleDeleteTodo(todoId: number) {
        updateTodos(draft => {
            const index = draft.findIndex(t =>
                t.id === todoId
            );
            draft.splice(index, 1);
        })
    }

    function handleHover(todoId: number) {
        setHighlightedId(todoId);
    }

    return (
        <>
            <h1>To Do List</h1>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
                highlightedId={highlightedId}
                onHover={handleHover}
            />
        </>
    );
}
