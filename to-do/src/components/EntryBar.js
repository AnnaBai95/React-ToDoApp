import "../styles/entrybar.css";
import { useState } from "react";

export default function EntryBar({
  onAddTask,
  onCompleteAllTask,
  allTasksAreCompleted,
  isDarkMode,
}) {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      setTaskInput("");
    }
  };

  const handleEnterKeyUp = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <div
        className={`input-group ${
          isDarkMode ? "input-group-dark" : "input-group-light"
        }`}
      >
        <div className={`rounded-check ${isDarkMode ? "rounded-check-dark" : ""}`}>
          <input
            type="checkbox"
            id="allcheck"
            onChange={onCompleteAllTask}
          ></input>
          <label htmlFor="allcheck"></label>
        </div>

        <input
          type="text"
          placeholder="Create a new todo..."
          className="input-box"
          value={taskInput}
          onKeyUp={handleEnterKeyUp}
          onChange={(e) => setTaskInput(e.target.value)}
          checked={allTasksAreCompleted}
        ></input>
      </div>
    </>
  );
}
