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
         * @param {string} endpoint The endpoint to send the POST request to.
         * @param {Object} data The data to be sent in the POST request.
         * @returns {Promise<any>} The response data from the POST request.
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
         * Sends a GET request to the specified endpoint and stores the response data in the corresponding state property.
         *
         * @param {string} endpoint The endpoint to send the GET request to.
         * @param {boolean} [requestData=false] Whether to fetch data from the API or use the cached data.
         * @returns {Promise<any>} The response data from the GET request.
         */
        async get(endpoint, requestData = false) {
            const noSlashEndpoint = endpoint.slice(1);
            if (requestData) {
                try {
                    const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}${endpoint}`);
                    // slice(1) to delete the leading '/'
                    this[noSlashEndpoint] = res.data;
                    return this[noSlashEndpoint];
                } catch (error) {
                    console.error(`Error in ${endpoint} GET: ${error}`);
                }
            } else {
                if (this[noSlashEndpoint].length) {
                    return this[noSlashEndpoint];
                } else {
                    return this.get(endpoint, true);
                }
            }
        },
        /**
         * Sends a DELETE request to the specified endpoint with the provided ID.
         *
         * @param {string} endpoint The endpoint to send the DELETE request to.
         * @param {string} id The ID of the resource to delete.
         * @returns {Promise<any>} The response data from the DELETE request.
         */
        async delete(endpoint, id) {
            try {
                const res = await axios.delete(
                    `${import.meta.env.VITE_APP_API_URL}${endpoint}/${id}`,
                );
                this.get(endpoint, true);
                return res.data;
            } catch (error) {
                console.error(`Error in ${endpoint} DELETE: ${error}`);
            }
        },
    },
});
