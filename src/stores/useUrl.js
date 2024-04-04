import { defineStore } from 'pinia';

export const useUrl = defineStore('url', {
    actions: {
        /**
         * Extracts only the website name from a url
         * @example "Twitter" from "https://twitter.com/example"
         * @param {string} url the link to extract the name from
         * @returns Website name
         */
        extractWebsiteName(url) {
            if (url) {
                const regex = /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:([^./]+)\.)?([^./]+\.com)/;
                const matches = url.match(regex);
                const [, subdomain, domain] = matches;
                let socialMediaName = subdomain
                    ? subdomain.charAt(0).toUpperCase() + subdomain.slice(1)
                    : domain.charAt(0).toUpperCase() + domain.slice(1);
                socialMediaName = socialMediaName.replace(/\.[^/.]+$/, '');
                return socialMediaName; // Remove the top-level domain
            } else {
                return '';
            }
        }
    }
});
