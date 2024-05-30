import { defineStore } from 'pinia';

import { useData } from './useData';

export const useAuth = defineStore('auth', {
    state: () => {
        return {
            isAuthenticated: !!localStorage.getItem('AUTH_TOKEN'),
        };
    },
    actions: {
        async logout() {
            const request = useData();
            await request.post('/logout');
            localStorage.removeItem('AUTH_TOKEN');
        },
    },
});
