import CloseIcon from '../images/icon-cross.svg';

export default function DraggableTask({ tasksList, index, onToggleTaskToggling, onTaskRemoving }) {

    const task = tasksList[index];
    return (
            <div className="item">
                <div className="flex-row center-align">
                    <div className="rounded-check">
                        <input type="checkbox" id={`item${index}`} checked={task.completed ?  true: false} onChange={() => onToggleTaskToggling(index)}></input>
                        <label htmlFor={`item${index}`}></label>
                    </div>
                    <p className={task.completed ? 'task strike' : 'task'}>{task.newTask}</p>
                </div>
                <img src={CloseIcon} alt='' className="close-icon" onClick={() => onTaskRemoving(index)} />
            </div>
    );
}