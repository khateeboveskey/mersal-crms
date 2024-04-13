import { defineStore } from 'pinia';
import axios from 'redaxios';

export const useData = defineStore('data', {
    state: () => {
        return {
            locations: [],
            interests: [],
            contacts: [],
        };
    },
    actions: {
        /**
         * Sends a POST request to the specified endpoint with the provided data.
         *
         * @param {string} endpoint - The endpoint to send the POST request to.
         * @param {Object} data - The data to be sent in the POST request.
         * @returns {Promise<any>} - The response data from the POST request.
         */
        async post(endpoint, data) {
            try {
                const res = await axios.post(
                    `${import.meta.env.VITE_APP_API_URL}${endpoint}`,
                    JSON.stringify(data),
                );
                this.get(endpoint, true);
                return res.data;
            } catch (error) {
                console.error(`Error in ${endpoint} POST: ${error}`);
            }
        },
        /**
         * Sends a GET request to the specified endpoint and returns the response data.
         *
         * @param {string} endpoint - The endpoint to send the GET request to.
         * @returns {Promise<any>} - The response data from the GET request.
         */
        async get(endpoint, requestData = false) {
            if (requestData) {
                try {
                    const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}${endpoint}`);
                    this[endpoint] = res.data;
                    return this[endpoint];
                } catch (error) {
                    console.error(`Error in ${endpoint} GET: ${error}`);
                }
            } else {
                if (this[endpoint].length) {
                    return this[endpoint];
                } else {
                    return this.get(endpoint, true);
                }
            }
        },
        async delete(endpoint) {
            try {
                const res = await axios.delete(`${import.meta.env.VITE_APP_API_URL}${endpoint}`);
                this.get(endpoint, true);
                return res.data;
            } catch (error) {
                console.error(`Error in ${endpoint} DELETE: ${error}`);
            }
        },
    },
});
