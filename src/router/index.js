import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactsView from '@/views/ContactsView.vue';
import DealsView from '@/views/DealsView.vue';
import InterestsView from '@/views/InterestsView.vue';
import TagsView from '@/views/TagsView.vue';
import LocationsView from '@/views/LocationsView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - الرئيسية`,
            },
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - جهات الاتصال`,
            },
        },
        {
            path: '/deals',
            name: 'deals',
            component: DealsView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - العروض`,
            },
        },
        {
            path: '/locations',
            name: 'locations',
            component: LocationsView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - العناوين`,
            },
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - الوسوم`,
            },
        },
        {
            path: '/interests',
            name: 'interests',
            component: InterestsView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - الاهتمامات`,
            },
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                title: `${import.meta.env.VITE_APP_TITLE} - تسجيل الدخول`,
            },
        },
    ],
});

export default router;
