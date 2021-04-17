<template>
  <transition-group tag="ul" name="fade" appear>
    <todo-items v-for="todo in todos" :todo="todo" :key="todo.id" />
  </transition-group>
</template>

<script>
import TodoItems from './TodoItems';

export default {
  components: {
    TodoItems,
  },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.fade {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 500ms;
  }
  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
</style>
