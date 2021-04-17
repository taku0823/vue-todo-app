<template>
  <main class="app">
    <h1>Vue Todo App</h1>
    <todos />
  </main>
</template>

<script>
import Todos from './Todos';

export default {
  components: {
    Todos,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 10px;
}
body {
  position: relative;
  margin: 0;
  padding: 4rem 0 5rem;
  height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  background-color: #ebecf0;
}
.app {
  text-align: center;
  h1 {
    margin: 0 0 2rem;
    color: #1dd53d;
    font-size: 4.8rem;
    letter-spacing: 0.1rem;
    line-height: 1.2;
    text-shadow: 2px 3px 0px rgba(200, 200, 200, 1);
  }
}
</style>
