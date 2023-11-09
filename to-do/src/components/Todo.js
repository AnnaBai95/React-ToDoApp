import EntryBar from './EntryBar';
import List from './List';
import '../styles/todo.css';
import { useState } from 'react';

export default function () {

    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { newTask, completed: false }]);
    };

    const handleRemoveTask = (taskIndex) => {
        const updatedTasks = [...tasks];
        //at the index remove one item
        updatedTasks.splice(taskIndex, 1);
        setTasks(updatedTasks);
    };

    const handleCompleteTask = (taskIndex) => {
        const updatedTasks = [...tasks];
        //handle the toggling of the status
        //if it is current not completed and I check the box, mark it as completed and vice versa
        updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;

        setTasks(updatedTasks);
    };

    const handleToggleAllTasks = () => {
        const completed = true;
        const updatedTasks = tasks.map((task) => ({ ...tasks, completed: true }));
        console.log("This this the the array after", updatedTasks);
        setTasks(updatedTasks);
    }

    return (

        <div className="container">
            <div className="container-bg"></div>
            <div className="centered-container">
                <div className="header">
                    <h1>TODO</h1>
                    <div className="img-state"></div>
                </div>
                <EntryBar onAddTask={handleAddTask} onCompleteAllTask={handleToggleAllTasks} />
                <List tasks={tasks} onRemoveTask={handleRemoveTask} onToggleTaskStatus={handleCompleteTask} />
            </div>
        </div>
    );
}