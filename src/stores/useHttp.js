import { defineStore } from 'pinia';
import axios from 'redaxios';

export const useHttp = defineStore('http', {
    actions: {
        /**
         * Sends a GET request to the specified URL and returns the response data.
         *
         * @param {string} url The URL to send the GET request to.
         * @returns {Promise<any>} The response data from the GET request.
         */
        async get(url) {
            try {
                const res = await axios(url);
                const data = res.data;
                return data;
            } catch (error) {
                console.error('Axios GET error: ' + error);
            }
        },
        /**
         * Sends a POST request to the specified URL with the provided data.
         *
         * @param {string} url - The URL to send the POST request to.
         * @param {object} data - The data to be sent in the POST request.
         * @returns {Promise<void>} - A Promise that resolves when the POST request is complete.
         */
        async post(url, data) {
            try {
                const res = await axios.post(url, data);
                console.log(res);
            } catch (error) {
                console.error('Axios POST error: ' + error);
            }
        }
    }
});
