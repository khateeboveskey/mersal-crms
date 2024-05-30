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
        async login(credentials) {
            const request = useData();
            const resData = await request.post('/login', credentials);
            if (!resData.error) {
                const AUTH_TOKEN = resData.token;
                localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
                location.reload();
            } else {
                return resData;
            }
        },
    },
});
