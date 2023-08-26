
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask,toggleTask2 } from "./../actions/actions";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => dispatch(toggleTask(task.id))}
          onToggle2={() => dispatch(toggleTask2(task.id))}
          onDelete={() =>{ 
            dispatch(deleteTask(task.id))}}
          onEdit={(newDescription) =>
            dispatch(editTask(task.id, newDescription))
          }
        />
      ))}
    </div>
  );
};

export default ListTask;