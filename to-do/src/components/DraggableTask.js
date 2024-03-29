import CloseIcon from "../images/icon-cross.svg";

export default function DraggableTask({
  tasksList,
  index,
  onToggleTaskToggling,
  onTaskRemoving,
  isDarkMode,
}) {
  const task = tasksList[index];

  return (
    <div className={`item ${isDarkMode ? "item-dark" : "item-light"}`}>
      <div className="flex-row center-align">
        <div
          className={`rounded-check ${isDarkMode ? "rounded-check-dark" : ""}`}
        >
          <input
            type="checkbox"
            id={`item${index}`}
            checked={task.completed ? true : false}
            onChange={() => onToggleTaskToggling(index)}
          ></input>
          <label htmlFor={`item${index}`}></label>
        </div>
        <p
          className={`task 
            ${task.completed && isDarkMode ? "strike strike-dark" : ""} 
            ${task.completed && !isDarkMode ? " strike strike-light" : ""} 
            `}
        >
          {task.newTask}
        </p>
      </div>
      <img
        src={CloseIcon}
        alt=""
        className="close-icon"
        onClick={() => onTaskRemoving(index)}
      />
    </div>
  );
}
