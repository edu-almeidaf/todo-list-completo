import { CREATE_TODO, REMOVE_TODO } from '../actions/actions';

const INITIAL_STATE = {
  todoInput: '',
  todoList: [],
};

const todoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case CREATE_TODO:
    return {
      ...state,
      todoList: [...state.todoList, payload.tarefa],
    };
  case REMOVE_TODO:
    return {
      ...state,
      todoList: state.todoList
        .filter((_tarefa, index) => index !== payload.indexToRemove),
    };
  default:
    return state;
  }
};

export default todoReducer;
