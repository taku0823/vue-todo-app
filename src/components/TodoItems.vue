<template>
  <li class="todoitems" :class="{ showEditingForm: todo.showEditingForm }">
    <editing-form v-if="todo.showEditingForm" :todo="todo" />
    <template v-else>
      <div class="todoitems__left">
        <button
          class="todoitems__check"
          :class="{ isChecked: todo.completed }"
          @click="toggleTodo(todo.id)"
        >
          <i class="fas fa-check"></i>
        </button>
        <p class="todoitems__task" :class="{ isChecked: todo.completed }">{{ todo.task }}</p>
      </div>
      <div class="todoitems__right">
        <button class="todoitems__delete" @click="deleteTodo(todo.id)">
          <i class="fas fa-trash"></i>
        </button>
        <button class="todoitems__edit" @click="toggleEditingForm(todo.id)">
          <i class="fas fa-edit"></i>
        </button>
      </div>
    </template>
  </li>
</template>

<script>
import EditingForm from './EditingForm';
import { useStore } from 'vuex';

export default {
  components: {
    EditingForm,
  },
  props: {
    todo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const store = useStore();

    const toggleTodo = (id) => {
      store.dispatch('toggleTodo', id);
    };

    const deleteTodo = (id) => {
      store.dispatch('deleteTodo', id);
    };

    const toggleEditingForm = (id) => {
      store.dispatch('toggleEditingForm', id);
    };

    return { toggleTodo, deleteTodo, toggleEditingForm };
  },
};
</script>

<style lang="scss" scoped>
.todoitems {
  margin-bottom: 2.5rem;
  padding: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  color: #666;
  background-color: #ebecf0;
  border: 0;
  outline: 0;
  border-radius: 2.5rem;
  text-shadow: 1px 1px 0 #fff;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  &:last-child {
    margin-bottom: 0;
  }
  &.showEditingForm {
    padding: 0.7rem 1.4rem;
  }
  button {
    width: 38px;
    padding: 1rem;
    font-size: 1.6rem;
    color: #838aa0;
    background-color: #ebecf0;
    border: 0;
    outline: 0;
    border-radius: 1.2rem;
    text-shadow: 1px 1px 0 #fff;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
    cursor: pointer;
    &:hover {
      box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    }
  }
  &__left,
  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__check {
    margin-right: 1rem;
  }
  .todoitems__check {
    &.isChecked {
      box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
      .fa-check {
        transform: scale(0.9);
      }
    }
  }
  &__task {
    display: inline-block;
    position: relative;
    word-break: break-all;
    &::after {
      content: '';
      position: absolute;
      bottom: 40%;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #666;
      transition: all 0.3s ease;
    }
    &.isChecked {
      &::after {
        width: 100%;
      }
    }
  }
  &__delete {
    margin: 0 1rem;
  }
}
</style>
