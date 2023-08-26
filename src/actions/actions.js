
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const TOGGLE_TASK2 = "TOGGLE_TASK2";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: { id, description }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

export const toggleTask2 = (id) => ({
  type: TOGGLE_TASK2,
  payload: id
});


export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description }
});
