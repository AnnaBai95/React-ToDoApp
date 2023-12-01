import '../styles/list.css';
import DraggableTask from './DraggableTask';



export default function List({ tasks, onShowActiveTasks, onShowAllTask, onShowCompletedTasks,
    onClearCompletedTasks, onToggleTaskStatus, onRemoveTask }) {

    return (
        <>
            <div className="list-box">
                <div className="item-list">
                    <DraggableTask 
                        tasksList={tasks} 
                        onToggleTaskToggling={onToggleTaskStatus}
                        onTaskRemoving={onRemoveTask}
                         />
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