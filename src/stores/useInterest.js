import { defineStore } from 'pinia';
import axios from 'redaxios';

export const useInterest = defineStore('interest', {
    state() {
        return {
            interests: null,
        };
    },
    actions: {
        async getInterests() {
            if (this.interests) {
                return this.interests;
            } else {
                try {
                    const res = await axios.get('http://localhost:3000/interests');
                    this.interests = res.data;
                    return this.interests;
                } catch (error) {
                    console.error('Error retrieving contacts:', error);
                }
            }
        },
    },
});
