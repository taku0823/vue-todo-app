import { createRouter, createWebHistory } from 'vue-router';
import Todolist from '../components/TodoList';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Todolist,
      name: 'all',
    },
    {
      path: '/active',
      component: Todolist,
      name: 'active',
    },
    {
      path: '/completed',
      component: Todolist,
      name: 'completed',
    },
  ],
  linkActiveClass: 'linkActive',
});

export default router;
