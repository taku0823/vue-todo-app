<template>
  <div class="todos">
    <the-form />
    <the-nav />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheForm from './TheForm';
import TheNav from './TheNav';

export default {
  components: {
    TheForm: TheForm,
    TheNav: TheNav,
  },
};
</script>

<style lang="scss" scoped>
.todos {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
}
.route {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 450ms;
  }
  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
</style>
