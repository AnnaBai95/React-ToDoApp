import EntryBar from './EntryBar';
import List from './List';
import '../styles/todo.css';
import { useState } from 'react';


export default function () {

    const [tasks, setTasks] = useState([]);
    const [allTasksCompleted, setAllTasksCompleted] = useState(false);
    const [filterOption, setFilterOption] = useState('all');

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
        const completed = !allTasksCompleted;
        setAllTasksCompleted(completed);
        const updatedTasks = tasks.map((task) => ({ ...task, completed: completed }));
        setTasks(updatedTasks);
    }

    const handleShowAllTasks = () => {
        setFilterOption('all');
    }

    const handleShowActiveTasksOnly = () => {
        setFilterOption('active');
    }

    const handleShowCompletedTasksOnly = () => {
        setFilterOption('completed');
    }

    const filteredTasks = tasks.filter((task) => {

        if (filterOption == 'active') {
            return !task.completed;
        }
        else if (filterOption == 'completed') {
            return task.completed;
        }
        else {
            return task;
        }
    });

    const handleClearCompleted = () => {
        const incompleteTasks = tasks.filter((task) => !task.completed);
        setTasks(incompleteTasks);

    }

    return (
       
            <div className="container">
                <div className="container-bg"></div>
                <div className="centered-container">
                    <div className="header">
                        <h1>TODO</h1>
                        <div className="img-state"></div>
                    </div>
                    <EntryBar
                        onAddTask={handleAddTask}
                        onCompleteAllTask={handleToggleAllTasks}
                        allTasksAreCompleted={allTasksCompleted}
                    />
                    <List
                        tasks={filteredTasks}
                        onRemoveTask={handleRemoveTask}
                        onToggleTaskStatus={handleCompleteTask}
                        onShowActiveTasks={handleShowActiveTasksOnly}
                        onShowAllTask={handleShowAllTasks}
                        onShowCompletedTasks={handleShowCompletedTasksOnly}
                        onClearCompletedTasks={handleClearCompleted}
                    />
                </div>
            </div>
    );
}