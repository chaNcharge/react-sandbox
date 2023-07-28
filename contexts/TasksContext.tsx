import { createContext } from 'react';
import { useImmerReducer } from 'use-immer';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function tasksReducer(
    draft: { id: any; text: any; done: boolean; }[], 
    action: { type: string; id: number; text: string; task: { id: number; text: string; done: boolean; }; 
}) {
    switch (action.type) {
        case 'added': {
            draft.push({
                id: action.id,
                text: action.text,
                done: false,
            });
            break;
        }
        case 'changed': {
            const index = draft.findIndex((t) => t.id === action.task.id);
            draft[index] = action.task;
            break;
        }
        case 'deleted': {
            return draft.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];