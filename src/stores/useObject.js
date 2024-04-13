import { defineStore } from 'pinia';

export const useObject = defineStore('object', {
    actions: {
        /**
         * Returns a new object with only the non-empty properties from the input object
         * and removes circular references.
         *
         * @param {Object} obj - The input object to filter.
         * @returns {Object} A new object with only the non-empty properties from the input object
         *                   and without circular references.
         */
        getOnlyFilled(obj) {
            const seen = new WeakSet();
            function clean(obj) {
                if (typeof obj !== 'object' || obj === null) {
                    return obj;
                }
                if (seen.has(obj)) {
                    return;
                }
                seen.add(obj);
                const cleanedObj = Array.isArray(obj) ? [] : {};
                for (const key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        const value = obj[key];
                        if (typeof value === 'object' && value !== null) {
                            cleanedObj[key] = clean(value);
                        } else if (value !== undefined && value !== null && value !== '') {
                            cleanedObj[key] = value;
                        }
                    }
                }
                return cleanedObj;
            }
            return clean(obj);
        },
    },
});
