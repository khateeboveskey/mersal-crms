// #region imports
import './assets/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'redaxios';
// #endregion imports

const app = createApp(App);
app.use(router);
app.use(createPinia());

import { useAuth } from './stores/useAuth';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

router.beforeEach((to, from, next) => {
    const auth = useAuth();
    if (auth.isAuthenticated) {
        if (to.name === 'login') {
            next({ name: 'home' });
        } else if (to.name === 'logout') {
            auth.logout();
            location.reload();
        } else {
            if (to.meta.title) {
                document.title = to.meta.title;
            }
            next();
        }
    } else {
        if (to.name !== 'login') {
            next({ name: 'login' });
        } else {
            next();
        }
    }
});

app.mount('#app');
