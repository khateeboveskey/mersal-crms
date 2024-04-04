import { defineStore } from 'pinia';
import axios from 'redaxios';

export const useHttp = defineStore('http', {
    actions: {
        async get(url) {
            try {
                const res = await axios(url);
                const data = res.data;
                return data;
            } catch (error) {
                console.error('Axios error: ' + error);
            }
        }
    }
});
