<template>
  <nav class="nav">
    <router-link to="/vue-todo-app/" class="nav__link">All</router-link>
    <router-link to="/vue-todo-app/active" class="nav__link">Active</router-link>
    <router-link to="/vue-todo-app/completed" class="nav__link">Completed</router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  &__link {
    padding: 0.8rem;
    width: 20%;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    background-color: #ebecf0;
    color: #1dd53d;
    border: 0;
    outline: 0;
    border-radius: 2.5rem;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    }
    &:active {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    }
    &.linkActive {
      background-color: #1dd53d;
      color: #ebecf0;
    }
  }
}

@media screen and (max-width: 599px) {
  .nav {
    justify-content: space-between;
    &__link {
      width: 30%;
      font-size: 1.2rem;
    }
  }
}
</style>
