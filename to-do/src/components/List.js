import '../styles/list.css';

import CloseIcon from '../images/icon-cross.svg';

export default function List({ tasks, onRemoveTask, onToggleTaskStatus, onShowActiveTasks, onShowAllTask, onShowCompletedTasks,
    onClearCompletedTasks }) {

    return (
        <>
            <div className="list-box">
                <div className="item-list">
                    {tasks.map((task, index) => (
                        <div className="item" key={index}>
                            <div className="flex-row center-align">
                                <div className="rounded-check">
                                    <input type="checkbox" id={`item${index}`} onChange={() => onToggleTaskStatus(index)}></input>
                                    <label htmlFor={`item${index}`}></label>
                                </div>
                                <p className={task.completed ? 'task strike' : 'task'}>{task.newTask}</p>
                            </div>
                            <img src={CloseIcon} alt="Image of an x" className="close-icon" onClick={() => onRemoveTask(index)} />
                        </div>

                    ))}
                </div>
                <div className="list-footer">
                    {tasks.length > 0 ?
                        <>
                            <span>{tasks.length > 0 ? tasks.length : 0} items left</span>
                            <div className="flex-gap text-bold">
                                <a className="active-link links" onClick={onShowAllTask}>All</a>
                                <a className="links" onClick={onShowActiveTasks}>Active</a>
                                <a className="links" onClick={onShowCompletedTasks}>Completed</a>
                            </div>
                            <a className="links" onClick={() => onClearCompletedTasks()}>Clear Completed</a>
                        </>
                        :
                        <p className='notify'>Your todo list is empty. Add a task to your todo list</p>
                    }
                </div>

            </div>
            {tasks.length > 0 ?
                <p className="instructions">Drag and drop to reorder list</p>
                :
                ''
            }
        </>
    );
}