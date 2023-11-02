import EntryBar from './EntryBar';
import List from './List';
import '../styles/todo.css';
import { useState } from 'react';

export default function () {

    const [tasks, setTasks] = useState(null);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { newTask, completed: false }]);
    };

    const handleRemoveTask = (taskIndex) => {

    };

    const handleCompleteTask = () => {

    };

    return (

        <div className="container">
            <div className="container-bg"></div>
            <div className="centered-container">
                <div className="header">
                    <h1>TODO</h1>
                    <div className="img-state"></div>
                </div>
                <EntryBar />
                <List />
            </div>
        </div>
    );
}