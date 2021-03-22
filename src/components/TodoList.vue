<template>
  <transition-group tag="ul" name="fade">
    <todo-items v-for="todo in todos" :todo="todo" :key="todo.id" />
  </transition-group>
</template>

<script>
import TodoItems from './TodoItems';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    TodoItems: TodoItems,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const todos = computed(() => {
      if (store.state.routes === 'all') return store.state.todos;
      return store.getters[store.state.routes];
    });

    watch(route, (to) => {
      store.dispatch('setRoutes', to.name);
    });

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
  &-enter-active {
    transition: opacity 300ms;
  }
  &-leave-active {
    transition: opacity 200ms;
  }
  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
</style>
