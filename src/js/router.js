import { createRouter, createWebHistory } from 'vue-router';
import Todolist from '../components/TodoList';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/vue-todo-app/',
      component: Todolist,
      name: 'all',
    },
    {
      path: '/vue-todo-app/active',
      component: Todolist,
      name: 'active',
    },
    {
      path: '/vue-todo-app/completed',
      component: Todolist,
      name: 'completed',
    },
  ],
  linkActiveClass: 'linkActive',
});

export default router;
