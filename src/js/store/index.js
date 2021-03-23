import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
  state() {
    return {
      todos: [],
      newTodo: '',
      updatedTask: '',
      routes: '',
    };
  },
  getters,
  mutations,
  actions,
});

export default store;
