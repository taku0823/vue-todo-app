<template>
  <transition-group tag="ul" name="fade">
    <todo-items v-for="todo in todos" :todo="todo" :key="todo.id" />
  </transition-group>
</template>

<script>
import TodoItems from './TodoItems';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    TodoItems: TodoItems,
  },
  setup() {
    const store = useStore();

    const todos = computed(() => store.state.todos);

    return { todos };
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
