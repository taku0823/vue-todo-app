<template>
  <li class="todoitems" v-for="todo in todos" :key="todo.id">
    <div class="todoitems__left">
      <button class="todoitems__check">
        <i class="fas fa-check"></i>
      </button>
      <p class="todoitems__task">{{ todo.task }}</p>
    </div>
    <div class="todoitems__right">
      <button class="todoitems__delete" @click="deleteTodo(todo.id)">
        <i class="fas fa-trash"></i>
      </button>
      <button class="todoitems__edit">
        <i class="fas fa-edit"></i>
      </button>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const deleteTodo = (id) => {
      store.dispatch('deleteTodo', id);
    };

    const todos = computed(() => store.state.todos);

    return { deleteTodo, todos };
  },
};
</script>

<style lang="scss" scoped>
.todoitems {
  margin-bottom: 2.5rem;
  padding: 1.6rem;
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
  }
  &__delete {
    margin: 0 1rem;
  }
}
</style>
