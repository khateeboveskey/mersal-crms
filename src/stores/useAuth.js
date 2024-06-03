import { defineStore } from 'pinia';

export const useAuth = defineStore('auth', {
  state: () => {
    return {
      isAuthenticated: !!localStorage.getItem('AUTH_TOKEN'),
    };
  }
});
