export default {
  updateNewTodo({ commit }, newTask) {
    commit('updateNewTodo', newTask);
  },
  addTodo({ commit }) {
    commit('addTodo');
    commit('initForm');
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
};
