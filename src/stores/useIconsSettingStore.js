import { defineStore } from 'pinia';

export const useIconsSettingStore = defineStore('settings', {
    state: () => {
        return {
            tailwindSize: 6,
            tailwindColor: 'slate-600'
        };
    }
});
