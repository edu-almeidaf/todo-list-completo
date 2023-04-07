export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const createTodo = (tarefa) => ({
  type: CREATE_TODO,
  payload: {
    tarefa,
  },
});

export const removeTodo = (indexToRemove) => ({
  type: REMOVE_TODO,
  payload: {
    indexToRemove,
  },
});
