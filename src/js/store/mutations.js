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
  toggleTodo(state, payload) {
    const updateTodos = state.todos.map((todo) =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    );
    state.todos = updateTodos;
  },
  deleteTodo(state, payload) {
    const updateTodos = state.todos.filter((todo) => todo.id !== payload);
    state.todos = updateTodos;
  },
  toggleEditingForm(state, payload) {
    const updateTodos = state.todos.map((todo) =>
      todo.id === payload ? { ...todo, showEditingForm: true } : { ...todo, showEditingForm: false }
    );
    state.todos = updateTodos;
  },
  editTodo(state, payload) {
    let updateTodo;
    if (state.updatedTask === '') {
      updateTodo = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, showEditingForm: false } : todo
      );
    } else {
      updateTodo = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, task: state.updatedTask, showEditingForm: false } : todo
      );
    }
    state.todos = updateTodo;
  },
  updatedTask(state, payload) {
    state.updatedTask = payload;
  },
  setRoutes(state, payload) {
    state.routes = payload;
  },
};
