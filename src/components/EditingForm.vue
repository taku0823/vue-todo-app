<template>
  <form class="editingForm" @submit.prevent="editTodo(todo.id)">
    <input class="editingForm__input" type="text" v-model="updatedTask" v-focus />
    <button class="editingForm__button" type="submit">
      <i class="fas fa-edit"></i>
    </button>
  </form>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    todo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  setup(props) {
    const store = useStore();

    const editTodo = (id) => {
      store.dispatch('editTodo', id);
    };

    const updatedTask = computed({
      get: () => props.todo.task,
      set: (value) => store.dispatch('updatedTask', value),
    });

    return { editTodo, updatedTask };
  },
};
</script>

<style lang="scss" scoped>
.editingForm {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__input,
  &__button {
    font-size: 1.6rem;
    border-radius: 2.5rem;
    border: 0;
    outline: 0;
    background-color: #ebecf0;
  }
  &__input {
    width: 94%;
    padding: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    color: #666;
    -webkit-box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    -moz-box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    -webkit-appearance: none;
    box-sizing: border-box;
    text-shadow: 1px 1px 0 #fff;
    transition: all 0.2s ease-in-out;
    &:focus {
      -webkit-box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      -moz-box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      -webkit-appearance: none;
    }
  }
  &__button {
    width: 38px;
    padding: 1rem;
    font-size: 1.6rem;
    background-color: #ebecf0;
    color: #838aa0;
    border: 0;
    outline: 0;
    border-radius: 1.2rem;
    text-shadow: 1px 1px 0 #fff;
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    .fa-edit {
      transform: scale(0.9);
    }
  }
}

@media (min-width: 600px) and (max-width: 1024px) {
  .editingForm {
    &__input,
    &__button {
      padding: 1.4rem;
      font-size: 1.4rem;
    }
    &__input {
      width: 92%;
    }
    &__button {
      width: 42px;
    }
  }
}

@media screen and (max-width: 599px) {
  .editingForm {
    &__input,
    &__button {
      padding: 0.8rem;
      width: 30px;
      font-size: 1.2rem;
    }
    &__input {
      width: 88%;
    }
  }
}
</style>
