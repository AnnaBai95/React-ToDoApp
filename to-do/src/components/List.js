import { Draggable, Droppable } from "react-beautiful-dnd";
import "../styles/list.css";
import DraggableTask from "./DraggableTask";
import { useState } from "react";

export default function List({
  tasks,
  onShowActiveTasks,
  onShowAllTask,
  onShowCompletedTasks,
  onClearCompletedTasks,
  onToggleTaskStatus,
  onRemoveTask,
  isDarkMode,
}) {
  const [activeLink, setActiveLink] = useState("all"); // initialize with all as the default link

  var uniqueId = Math.random();

  const addItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? "hsl(236, 33%, 92%)" : "white",
    width: isDragging ? "50%" : "initial",
    textWrap: isDragging ? "wrap" : "nowrap",
    ...draggableStyle,
  });

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };


  return (
    <>
      <Droppable
        droppableId={`droppable-${uniqueId}`}
        direction="vertical"
        type="TASK"
      >
        {(provided, snapshot) => (
          <div
            className={`list-box ${isDarkMode ? "box-dark" : ""}`}
          >
            <div>
              <div
                className="item-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} index={index} draggableId={task.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={addItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <DraggableTask
                          tasksList={tasks}
                          onToggleTaskToggling={onToggleTaskStatus}
                          onTaskRemoving={onRemoveTask}
                          key={task.id}
                          index={index}
                          isDarkMode={isDarkMode}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
              <div className="list-footer">
                {tasks.length > 0 ? (
                  <>
                    <div className="flex-item">
                      <span>
                        {tasks.length > 0 ? tasks.length : 0} items left
                      </span>
                      <div className="flex-gap text-bold filter-lg">
                        <button
                          className={`links ${
                            activeLink === "all" ? "active-link" : ""
                          }${isDarkMode ? "links-dark" : ""}
                          `}
                          onClick={() => {
                            onShowAllTask();
                            handleSetActiveLink("all");
                          }}
                        >
                          All
                        </button>
                        <button
                          className={`links ${
                            activeLink === "active" ? "active-link" : ""
                          }  ${isDarkMode ? "links-dark" : ""}`}
                          onClick={() => {
                            onShowActiveTasks();
                            handleSetActiveLink("active");
                          }}
                        >
                          Active
                        </button>
                        {/* show the completed button only if there is atleast one completed task in the list to fix the issue
                                                where if the completed button is clicked and there are no completed tasks the array is cleared */}
                        {tasks.some((tasks) => tasks.completed) && (
                          <button
                            className={`links ${
                              activeLink === "completed" ? "active-link" : ""
                            }  ${isDarkMode ? "links-dark" : ""}`}
                            onClick={() => {
                              onShowCompletedTasks();
                              handleSetActiveLink("completed");
                            }}
                          >
                            Completed
                          </button>
                        )}
                      </div>
                    </div>
                    <button
                      className={`links clear ${
                        isDarkMode ? "links-dark" : ""
                      }`}
                      onClick={() => onClearCompletedTasks()}
                    >
                      Clear Completed
                    </button>
                  </>
                ) : (
                  <p className={isDarkMode ? "notify-dark" : "notify"}>
                    Your todo list is empty. Add a task to your todo list
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </Droppable>

      {tasks.length > 0 ? (
        <>
          <div className={`flex-gap text-bold filter-mob list-box ${isDarkMode ? "box-dark" : ""}`}>
            <button
              className={`links ${activeLink === "all" ? "active-link" : ""} ${
                isDarkMode ? "links-dark" : ""
              }`}
              onClick={() => {
                onShowAllTask();
                handleSetActiveLink("all");
              }}
            >
              All
            </button>
            <button
              className={`links ${
                activeLink === "active" ? "active-link" : ""
              } ${isDarkMode ? "links-dark" : ""}`}
              onClick={() => {
                onShowActiveTasks();
                handleSetActiveLink("active");
              }}
            >
              Active
            </button>
            {/* show the completed button only if there is atleast one completed task in the list to fix the issue
                                                where if the completed button is clicked and there are no completed tasks the array is cleared */}
            {tasks.some((tasks) => tasks.completed) && (
              <button
                className={`links ${
                  activeLink === "completed" ? "active-link" : ""
                } ${isDarkMode ? "links-dark" : ""}`}
                onClick={() => {
                  onShowCompletedTasks();
                  handleSetActiveLink("completed");
                }}
              >
                Completed
              </button>
            )}
          </div>

          <p
            className="instructions"
            style={{ color: isDarkMode ? "white" : "hsl(236, 9%, 61%)" }}
          >
            Drag and drop to reorder list
          </p>
        </>
      ) : (
        ""
      )}
    </>
  );
}
