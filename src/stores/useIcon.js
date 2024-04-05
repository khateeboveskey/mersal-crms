import { markRaw } from 'vue';
import { defineStore } from 'pinia';

import InternetEarth from '../components/icons/InternetEarth.vue';
import LogoInstagram from '../components/icons/LogoInstagram.vue';
import LogoFacebook from '../components/icons/LogoFacebook.vue';
import LogoGithub from '../components/icons/LogoGithub.vue';
import LogoTwitter from '../components/icons/LogoTwitter.vue';
import LogoTelegram from '../components/icons/LogoTelegram.vue';
import LogoSnapchat from '../components/icons/LogoSnapchat.vue';

export const useIcon = defineStore('icon', {
    state: () => {
        return {
            sizeInRem: 1.5,
            tailwindColor: 'slate-600'
        };
    },
    actions: {
        /**
         * Returns the appropriate social media icon component based on the provided website name.
         *
         * @param {string} websiteName - The name of the social media website.
         * @returns {Vue.Component} The corresponding social media icon component.
         * @else InternetEarth icon
         */
        getSocialMediaIconComponent(websiteName) {
            switch (websiteName) {
                case 'Instagram':
                    return markRaw(LogoInstagram);
                case 'Facebook':
                    return markRaw(LogoFacebook);
                case 'Github':
                    return markRaw(LogoGithub);
                case 'Twitter':
                    return markRaw(LogoTwitter);
                case 'Telegram':
                    return markRaw(LogoTelegram);
                case 'Snapchat':
                    return markRaw(LogoSnapchat);
                default:
                    return markRaw(InternetEarth);
            }
        }
    }
});
