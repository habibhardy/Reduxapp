import './../App.css';

import React from "react";

const Task = ({ task, onToggle,onToggle2, onDelete, onEdit }) => {
  return (
    <div className={task.isDone ? "task_done" : [task.isDone ? "task_deleted" : "task_"]}>
      <h3>{task.description}</h3>
      <div className="actions">
        <button onClick={() => onToggle(task.id)}>
          {task.isDone ? "Undone" : "Done"}
        </button>
        <button onClick={() => onEdit(task.id)}>Edit</button>
        <button onClick={() =>{
            onToggle2(task.id) 
            setTimeout(() => {
                onDelete(task.id)
            }, 2000);
            }}>Delete</button>
      </div>
    </div>
  );
};

export default Task;