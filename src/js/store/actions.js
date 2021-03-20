export default {
  updateNewTodo({ commit }, newTask) {
    commit('updateNewTodo', newTask);
  },
  addTodo({ commit }) {
    commit('addTodo');
    commit('initForm');
  },
  deleteTodo({ commit }, id) {
    commit('deleteTodo', id);
  },
};
