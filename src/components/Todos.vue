<template>
  <div class="todos">
    <the-form />
    <the-nav />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" :key="activeRoutes" :todos="todos" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import TheForm from './TheForm';
import TheNav from './TheNav';

export default {
  components: {
    TheForm,
    TheNav,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const activeRoutes = computed(() => {
      return store.state.routes;
    });

    const todos = computed(() => {
      if (activeRoutes.value === 'all') return store.state.todos;
      return store.getters[activeRoutes.value];
    });

    watch(route, (to) => {
      store.dispatch('setRoutes', to.name);
    });

    watch(
      () => [...store.state.todos],
      (todos) => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
      }
    );

    onMounted(() => {
      const val = JSON.parse(window.localStorage.getItem('todos'));
      try {
        val.length ? store.dispatch('getLocalStorage', val) : store.dispatch('setInitTodo');
      } catch (err) {
        store.dispatch('setInitTodo');
      }
    });

    return { todos, activeRoutes };
  },
};
</script>

<style lang="scss" scoped>
.todos {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  .route {
    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
    &-enter-active,
    &-leave-active {
      transition: opacity 300ms;
    }
    &-enter-to,
    &-leave-from {
      opacity: 1;
    }
  }
}
</style>
