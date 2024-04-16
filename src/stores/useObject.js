import { defineStore } from 'pinia';

export const useObject = defineStore('object', {
    actions: {
        /**
         * Recursively removes null, undefined, and empty string values from an object or array.
         *
         * @param {Object|Array} obj - The object or array to clean.
         * @returns {Object|Array} - A new object or array with null, undefined, and empty string values removed.
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
                            const cleanedValue = clean(value);
                            if (
                                cleanedValue !== undefined &&
                                cleanedValue !== null &&
                                (typeof cleanedValue !== 'object' ||
                                    Object.keys(cleanedValue).length > 0)
                            ) {
                                cleanedObj[key] = cleanedValue;
                            }
                        } else if (value !== undefined && value !== null && value !== '') {
                            cleanedObj[key] = value;
                        }
                    }
                }
                return cleanedObj;
            }
            return clean(obj);
        },
        /**
         * Recursively parses a JSON string, handling nested objects and arrays.
         *
         * @param {string} str - The JSON string to parse.
         * @returns {any} - The parsed value, which can be an object, array, or primitive.
         */
        parseNested(str) {
            try {
                return JSON.parse(str, (_, val) => {
                    if (typeof val === 'string') {
                        if (val.startsWith('{') && val.endsWith('}')) {
                            // eslint-disable-next-line no-undef
                            return parseNested(val);
                        } else {
                            return val;
                        }
                    }
                    return val;
                });
            } catch (exc) {
                return str;
            }
        },
    },
});
