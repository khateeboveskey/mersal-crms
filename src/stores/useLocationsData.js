import { defineStore } from 'pinia';
import axios from 'redaxios';

export const useLocationsData = defineStore('locationsData', {
    actions: {
        async getLocations() {
            try {
                const res = await axios.get('http://localhost:3000/locations');
                return res.data;
            } catch (error) {
                console.error('Error retrieving contacts:', error);
            }
        },
    },
});
