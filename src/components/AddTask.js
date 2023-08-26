
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/actions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim() !== "") {
      const id = new Date().getTime().toString(); // Generate a unique ID
      dispatch(addTask(id, description));
      setDescription("");
    }
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
