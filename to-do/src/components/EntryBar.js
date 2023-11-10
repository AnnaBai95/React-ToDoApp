import '../styles/entrybar.css';
import { useState } from 'react';

export default function EntryBar({ onAddTask, onCompleteAllTask, allTasksAreCompleted }) {

    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim() != '') {
            onAddTask(taskInput);
            setTaskInput('');
        }
    };

    const handleEnterKeyUp = (e) => {
        if (e.key == "Enter") {
            handleAddTask();
        }
    }


    return (
        <div className="input-group">
            <div className="rounded-check">
                <input type="checkbox" id="allcheck" onChange={onCompleteAllTask}></input>
                <label htmlFor="allcheck"></label>
            </div>

            <input type="text" placeholder="Create a new todo..." className="input-box"
                value={taskInput}
                onKeyUp={handleEnterKeyUp}
                onChange={(e) => setTaskInput(e.target.value)}
                checked={allTasksAreCompleted}
            ></input>
        </div>

    );
}