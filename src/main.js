// #region imports
import './assets/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'redaxios';
// #endregion imports

const app = createApp(App);
app.use(createPinia());
app.use(router);

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

app.mount('#app');
