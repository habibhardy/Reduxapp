
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK,TOGGLE_TASK2 } from "./../actions/actions";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          isDone: false
        }
      ];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
      case TOGGLE_TASK2:
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDeleted: !task.isDeleted } : task
      );
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.description }
          : task
      );
    default:
      return state;
  }
};

export default taskReducer;
