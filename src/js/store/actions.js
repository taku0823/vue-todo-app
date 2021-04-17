export default {
  setNewTodo({ commit }, newTodo) {
    commit('setNewTodo', newTodo);
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
  getLocalStorage({ commit }, value) {
    commit('getLocalStorage', value);
  },
  setInitTodo({ commit }) {
    commit('setInitTodo');
  },
};
