import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { v4 as uuidv4 } from 'uuid';

const store = createStore({
  state() {
    return {
      todos: [
        {
          task: "I don't know what to do...",
          id: uuidv4(),
          completed: false,
          showEditingForm: false,
        },
      ],
      newTodo: {
        task: '',
        id: uuidv4(),
        completed: false,
        showEditingForm: false,
      },
      updatedTask: '',
      routes: '',
    };
  },
  getters,
  mutations,
  actions,
});

export default store;
