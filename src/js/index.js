import { createApp } from 'vue';
import store from './store/index';
import App from '../components/App';

createApp(App)
  .use(store)
  .mount('#app');
