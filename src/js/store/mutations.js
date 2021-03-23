import { v4 as uuidv4 } from 'uuid';

export default {
  setNewTodo(state, payload) {
    state.newTodo = payload;
  },
  addTodo(state) {
    state.todos.push({
      task: state.newTodo,
      id: uuidv4(),
      completed: false,
      showEditingForm: false,
    });
    state.newTodo = '';
  },
  toggleTodo(state, payload) {
    const updatedTodos = state.todos.map((todo) =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    );
    state.todos = updatedTodos;
  },
  deleteTodo(state, payload) {
    const updatedTodos = state.todos.filter((todo) => todo.id !== payload);
    state.todos = updatedTodos;
  },
  toggleEditingForm(state, payload) {
    const updatedTodos = state.todos.map((todo) =>
      todo.id === payload ? { ...todo, showEditingForm: true } : { ...todo, showEditingForm: false }
    );
    state.todos = updatedTodos;
  },
  editTodo(state, payload) {
    let updatedTodo;
    if (state.updatedTask === '') {
      updatedTodo = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, showEditingForm: false } : todo
      );
    } else {
      updatedTodo = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, task: state.updatedTask, showEditingForm: false } : todo
      );
    }
    state.updatedTask = '';
    state.todos = updatedTodo;
  },
  updatedTask(state, payload) {
    state.updatedTask = payload;
  },
  setRoutes(state, payload) {
    state.routes = payload;
  },
  getLocalStorage(state) {
    state.todos = JSON.parse(window.localStorage.getItem('todos'));
  },
  setInitTodo(state) {
    state.todos.push({
      task: "I don't know what to do...",
      id: uuidv4(),
      completed: false,
      showEditingForm: false,
    });
  },
};
