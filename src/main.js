import './assets/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

router.beforeEach((to, from, next) => {
    // Update the title
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
