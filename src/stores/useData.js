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
                const res = await axios.post(endpoint, JSON.stringify(data), {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if (endpoint !== '/login') {
                    this.get(endpoint, true);
                }
                return res.data;
            } catch (error) {
                console.error(error);
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
            // slice(1) to delete the leading '/'
            const noSlashEndpoint = endpoint.slice(1);
            if (!requestData) {
                if (this[noSlashEndpoint].length) {
                    return this[noSlashEndpoint];
                } else {
                    return this.get(endpoint, true);
                }
            } else {
                try {
                    const res = await axios.get(endpoint, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
                            common: {},
                        },
                    });
                    this[noSlashEndpoint] = res.data.data;
                    return this[noSlashEndpoint];
                } catch (error) {
                    console.log(error.data);
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
                const res = await axios.delete(`${endpoint}/${id}`);
                this.get(endpoint, true);
                return res.data;
            } catch (error) {
                console.error(`Error in ${endpoint} DELETE: ${error}`);
            }
        },
    },
});
