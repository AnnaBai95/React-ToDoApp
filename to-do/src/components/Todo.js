import EntryBar from './EntryBar';
import List from './List';
import '../styles/todo.css';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';


export default function () {

    const [tasks, setTasks] = useState([]);
    const [allTasksCompleted, setAllTasksCompleted] = useState(false);
    const [filterOption, setFilterOption] = useState('all');

    const handleAddTask = (newTask) => {
        const newTaskItem = { id: Math.random().toString(), newTask, completed: false };
        //setTasks([...tasks, { newTask, completed: false }]);
        setTasks([...tasks, newTaskItem]);
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
        if (filterOption === 'active') {
            return !task.completed;
        }
        else if (filterOption === 'completed') {
            return task.completed;
        }
        else {
            return task;
        }
    });

    console.log("Filtered tasks", filteredTasks);

    const handleClearCompleted = () => {
        const incompleteTasks = tasks.filter((task) => !task.completed);
        setTasks(incompleteTasks);

        // Check if all tasks are completed after clearing completed tasks
        const completed = tasks.every((task) => task.completed);
        setAllTasksCompleted(completed);
    }

    const onDragEnd = (result) => {
        if (!result.destination)
            return;

        const updatedTasks = Array.from(tasks);
        const [reorderedItem] = updatedTasks.splice(result.source.index, 1);
        updatedTasks.splice(result.destination.index, 0, reorderedItem);
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
                <EntryBar
                    onAddTask={handleAddTask}
                    onCompleteAllTask={handleToggleAllTasks}
                    allTasksAreCompleted={allTasksCompleted}
                />
                {/* Area where the dragging and dropping will take place is indicated by the DragDropContext */}
                <DragDropContext onDragEnd={onDragEnd}>
                    <List
                        tasks={filteredTasks}
                        onRemoveTask={handleRemoveTask}
                        onToggleTaskStatus={handleCompleteTask}
                        onShowActiveTasks={handleShowActiveTasksOnly}
                        onShowAllTask={handleShowAllTasks}
                        onShowCompletedTasks={handleShowCompletedTasksOnly}
                        onClearCompletedTasks={handleClearCompleted}
                    />
                </DragDropContext>
            </div>
        </div>
    );
}