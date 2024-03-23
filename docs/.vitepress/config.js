import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mersal Docs',
    description: 'Mersal Customer Relationship Management System Documentation',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Installation', link: '/installation' },
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],

        // outline: {
        //     level: 'deep'
        // },
        socialLinks: [{ icon: 'github', link: 'https://github.com/khateeboveskey/mersal-crms' }]
    }
});
