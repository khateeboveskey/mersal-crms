import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/stores/useAuth';

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

export default router;
