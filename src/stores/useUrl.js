import { defineStore } from 'pinia';

export const useUrl = defineStore('url', {
    state: () => {
        return {
            urlRegEx: /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:([^./]+)\.)?([^./]+\.com)/,
        };
    },
    actions: {
        /**
         * Extracts the website name from a given URL.
         *
         * @param {string} url - The URL to extract the website name from.
         * @returns {string} The website name extracted from the URL, or an empty string if the extraction fails.
         */
        extractWebsiteName(url) {
            const regex = this.urlRegEx;
            const matches = url.match(regex);
            if (url && regex && matches) {
                const [, subdomain, domain] = matches;
                let socialMediaName = subdomain
                    ? subdomain.charAt(0) + subdomain.slice(1)
                    : domain.charAt(0) + domain.slice(1);
                socialMediaName = socialMediaName.replace(/\.[^/.]+$/, '');
                return socialMediaName;
            } else {
                return '';
            }
        },
    },
});
