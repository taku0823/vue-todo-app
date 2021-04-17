import { v4 as uuidv4 } from 'uuid';

export default {
  setNewTodo(state, newTodo) {
    state.newTodo = newTodo;
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
  toggleTodo(state, id) {
    const updatedTodos = state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    state.todos = updatedTodos;
  },
  deleteTodo(state, id) {
    const updatedTodos = state.todos.filter((todo) => todo.id !== id);
    state.todos = updatedTodos;
  },
  toggleEditingForm(state, id) {
    const updatedTodos = state.todos.map((todo) =>
      todo.id === id ? { ...todo, showEditingForm: true } : { ...todo, showEditingForm: false }
    );
    state.todos = updatedTodos;
  },
  editTodo(state, id) {
    let updatedTodo;
    if (state.updatedTask === '') {
      updatedTodo = state.todos.map((todo) =>
        todo.id === id ? { ...todo, showEditingForm: false } : todo
      );
    } else {
      updatedTodo = state.todos.map((todo) =>
        todo.id === id ? { ...todo, task: state.updatedTask, showEditingForm: false } : todo
      );
    }
    state.updatedTask = '';
    state.todos = updatedTodo;
  },
  updatedTask(state, value) {
    state.updatedTask = value;
  },
  setRoutes(state, name) {
    state.routes = name;
  },
  getLocalStorage(state, value) {
    state.todos = value;
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
