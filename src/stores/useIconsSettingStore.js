import { defineStore } from 'pinia';

export const useIconsSettingStore = defineStore('settings', {
    state: () => {
        return {
            sizeInRem: 1.5,
            tailwindColor: 'slate-600'
        };
    }
});
