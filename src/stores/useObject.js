import { defineStore } from 'pinia';

export const useObject = defineStore('object', {
    actions: {
        /**
         * Returns a new object with only the non-empty properties from the input object.
         *
         * @param {Object} obj - The input object to filter.
         * @returns {Object} A new object with only the non-empty properties from the input object.
         */
        getOnlyFilled(obj) {
            const filledObj = { ...obj };
            for (const key in filledObj) {
                if (filledObj[key].length === 0) {
                    delete filledObj[key];
                }
            }
            return filledObj;
        },
    },
});
