import CloseIcon from '../images/icon-cross.svg';

export default function Task({tasksList, onToggleTaskToggling, onTaskRemoving}){
    console.log("These are the tasks", tasksList); 
    {tasksList.map((task, index) => (
        <div className="item" key={index}>
            <div className="flex-row center-align">
                <div className="rounded-check">
                    <input type="checkbox" id={`item${index}`} onChange={() => onToggleTaskToggling(index)}></input>
                    <label htmlFor={`item${index}`}></label>
                </div>
                <p className={task.completed ? 'task strike' : 'task'}>{task.newTask}</p>
            </div>
            <img src={CloseIcon} alt="Image of an x" className="close-icon" onClick={() => onTaskRemoving(index)} />
        </div>

    ))}

}