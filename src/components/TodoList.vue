<template>
  <transition-group tag="ul" name="todolist">
    <todo-items />
  </transition-group>
</template>

<script>
import TodoItems from './TodoItems';
export default {
  components: {
    TodoItems: TodoItems,
  },
};
</script>

<style lang="scss" scoped></style>
