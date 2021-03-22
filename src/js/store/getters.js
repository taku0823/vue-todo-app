export default {
  active: (state) => state.todos.filter((todo) => !todo.completed),
  completed: (state) => state.todos.filter((todo) => todo.completed),
};
