import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactsView from '@/views/ContactsView.vue';
import DealsView from '@/views/DealsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - الرئيسية`
            }
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - جهات الاتصال`
            }
        },
        {
            path: '/deals',
            name: 'deals',
            component: DealsView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - العروض`
            }
        }
    ]
});

export default router;
