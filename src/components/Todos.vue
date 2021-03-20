<template>
  <div class="todos">
    <the-form />
    <!-- <app-nav /> -->
    <todo-list />
  </div>
</template>

<script>
import TheForm from './TheForm';
import TodoList from './TodoList';

export default {
  components: {
    TheForm: TheForm,
    // appNav: Nav,
    TodoList: TodoList,
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
</style>
