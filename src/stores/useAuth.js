import { defineStore } from 'pinia';

import { useData } from './useData';

export const useAuth = defineStore('auth', {
    state: () => {
        return {
            isAuthenticated: !!localStorage.getItem('AUTH_TOKEN'),
        };
    },
    actions: {
        /**
         * Logs the user out by making a POST request to the '/logout' endpoint and removing the 'AUTH_TOKEN' from local storage.
         */
        async logout() {
            const request = useData();
            await request.post('/logout');
            localStorage.removeItem('AUTH_TOKEN');
            location.reload();
        },
        /**
         * Logs in the user with the provided credentials.
         *
         * @param {Object} credentials - The user's login credentials.
         * @param {string} credentials.username - The user's username.
         * @param {string} credentials.password - The user's password.
         * @returns {Promise<Object>} - The response data from the login request. If successful, the response will contain a token that should be stored in localStorage.
         */
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
