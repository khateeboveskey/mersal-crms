import { defineStore } from 'pinia';
import axios from 'redaxios';

export const useLocationsData = defineStore('locationsData', {
    state() {
        return {
            locations: null,
        };
    },
    actions: {
        async getLocations() {
            if (this.locations) {
                return this.locations;
            } else {
                try {
                    const res = await axios.get('http://localhost:3000/locations');
                    this.locations = res.data;
                    return this.locations;
                } catch (error) {
                    console.error('Error retrieving contacts:', error);
                }
            }
        },
    },
});
