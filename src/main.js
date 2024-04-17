// #region imports
import './assets/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'redaxios';
// #endregion imports

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('AUTH_TOKEN');
    if (to.name !== 'login' && !isAuthenticated) {
        next({ name: 'login' }); // Redirect to the login page if not logged in
        /**
         * this hides sidebar in home becaude of v-if="!isInLogin" in App.vue
         */
        // todo: fix that sidebar hides in redirected home
        // } else if (to.name === 'login' && isAuthenticated) {
        //     next({ name: 'home' });
    } else {
        // Update the title
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next();
    }
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
