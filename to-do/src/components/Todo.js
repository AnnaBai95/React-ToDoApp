import EntryBar from "./EntryBar";
import List from "./List";
import "../styles/todo.css";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import darkModeImage from "../images/bg-desktop-dark.jpg";
import lightModeImage from "../images/bg-desktop-light.jpg";
import darkModeButtonImage from "../images/icon-moon.svg";
import lightModeButtonImage from "../images/icon-sun.svg";

export default function () {
  const [tasks, setTasks] = useState([]);
  const [allTasksCompleted, setAllTasksCompleted] = useState(false);
  const [filterOption, setFilterOption] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false); //set light mode by default

  const handleAddTask = (newTask) => {
    const newTaskItem = {
      id: Math.random().toString(),
      newTask,
      completed: false,
    };
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
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: completed,
    }));
    setTasks(updatedTasks);
  };

  const handleShowAllTasks = () => {
    setFilterOption("all");
  };

  const handleShowActiveTasksOnly = () => {
    setFilterOption("active");
  };

  const handleShowCompletedTasksOnly = () => {
    setFilterOption("completed");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterOption === "active") {
      return !task.completed;
    } else if (filterOption === "completed") {
      return task.completed;
    } else {
      return task;
    }
  });

  const handleClearCompleted = () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    setTasks(incompleteTasks);

    // Check if all tasks are completed after clearing completed tasks
    const completed = tasks.every((task) => task.completed);
    setAllTasksCompleted(completed);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [reorderedItem] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedItem);
    setTasks(updatedTasks);
  };

  //handling the toggling between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.documentElement.style.background = isDarkMode
      ? "hsl(235, 21%, 11%)"
      : "white";
  });

  //toggle the background images
  const containerBackgroundImage = isDarkMode ? darkModeImage : lightModeImage;
  const buttonImage = isDarkMode ? lightModeButtonImage : darkModeButtonImage;
  const buttonImageAlt = isDarkMode
    ? "Sun image used to switch to dark mode"
    : "Moon image used to switch to light mode";

  return (
    <div className="container">
      <div
        className="container-bg"
        style={{
          backgroundImage: `url(${containerBackgroundImage})`,
        }}
      ></div>
      <div className="centered-container">
        <div className="header">
          <h1>TODO</h1>
          <button className="button-state" onClick={toggleDarkMode}>
            <img src={buttonImage} alt={buttonImageAlt}></img>
          </button>
        </div>
        <EntryBar
          onAddTask={handleAddTask}
          onCompleteAllTask={handleToggleAllTasks}
          allTasksAreCompleted={allTasksCompleted}
          isDarkMode={isDarkMode}
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
            isDarkMode={isDarkMode}
          />
        </DragDropContext>
      </div>
    </div>
  );
}
