import AddTask from '../components/ImmerReducerContexts/AddTask'
import TaskList from '../components/ImmerReducerContexts/TaskList';
import TasksProvider from '../contexts/TasksContext'

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
