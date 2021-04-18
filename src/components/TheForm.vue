<template>
  <form class="form" @submit.prevent="addTodo">
    <input
      class="form__input"
      type="text"
      v-model="setNewTodo"
      placeholder="What do you need to do?"
      required
    />
    <button class="form__button" type="submit">
      <span>
        <i class="fas fa-plus"></i>
      </span>
      Add New Todo
    </button>
  </form>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const addTodo = () => {
      store.dispatch('addTodo');
    };

    const setNewTodo = computed({
      get: () => store.state.newTodo,
      set: (value) => store.dispatch('setNewTodo', value),
    });

    return { addTodo, setNewTodo };
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  &__input,
  &__button {
    padding: 1.4rem;
    font-size: 1.6rem;
    background-color: #ebecf0;
    border: 0;
    outline: 0;
    border-radius: 2.5rem;
  }
  &__input {
    width: 100%;
    margin-bottom: 3rem;
    color: #666;
    font-family: 'Montserrat', sans-serif;
    -webkit-box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    -moz-box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    -webkit-appearance: none;
    box-sizing: border-box;
    text-shadow: 1px 1px 0 #fff;
    transition: all 0.2s ease-in-out;
    &::placeholder {
      color: #838aa0;
    }
    &:focus {
      -webkit-box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      -moz-box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      -webkit-appearance: none;
    }
  }
  &__button {
    width: 40%;
    margin: 0 auto;
    color: #1dd53d;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    span {
      margin-right: 1rem;
    }
    &:hover {
      box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    }
    &:active {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    }
  }
}

@media (min-width: 600px) and (max-width: 1024px) {
  .form {
    margin-bottom: 2.5rem;
    &__input,
    &__button {
      padding: 1.4rem;
    }
    &__input {
      width: 100%;
    }
  }
}

@media screen and (max-width: 599px) {
  .form {
    margin-bottom: 1.8rem;
    &__input,
    &__button {
      padding: 1.3rem;
      font-size: 1.4rem;
    }
    &__input {
      margin-bottom: 1.8rem;
      width: 100%;
    }
    &__button {
      width: 65%;
    }
  }
}
</style>
