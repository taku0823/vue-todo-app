export default {
  setNewTodo({ commit }, newTask) {
    commit('setNewTodo', newTask);
  },
  addTodo({ commit }) {
    commit('addTodo');
  },
  toggleTodo({ commit }, id) {
    commit('toggleTodo', id);
  },
  deleteTodo({ commit }, id) {
    commit('deleteTodo', id);
  },
  toggleEditingForm({ commit }, id) {
    commit('toggleEditingForm', id);
  },
  editTodo({ commit }, id) {
    commit('editTodo', id);
  },
  updatedTask({ commit }, value) {
    commit('updatedTask', value);
  },
  setRoutes({ commit }, name) {
    commit('setRoutes', name);
  },
  getLocalStorage({ commit }) {
    commit('getLocalStorage');
  },
  setInitTodo({ commit }) {
    commit('setInitTodo');
  },
};
