import { createApp } from 'vue';
import store from './store/index';
import router from './router';
import App from '../components/App';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
