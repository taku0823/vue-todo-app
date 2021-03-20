import { v4 as uuidv4 } from 'uuid';

export default {
  initForm(state) {
    state.newTodo = {
      task: '',
      id: uuidv4(),
      completed: false,
      showEditingForm: false,
    };
  },
  updateNewTodo(state, payload) {
    state.newTodo = { ...state.newTodo, task: payload };
  },
  addTodo(state) {
    state.todos.push(state.newTodo);
  },
  deleteTodo(state, payload) {
    const updateTodos = state.todos.filter((todo) => todo.id !== payload);
    state.todos = updateTodos;
  },
};
