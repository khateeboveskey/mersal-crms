/** @type {import('tailwindcss').Config} */
import * as colors from 'tailwindcss/colors';

export default {
    darkMode: ['selector', '.dark'],
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx,svg}',
        './docs/**/*.{vue,js,ts,jsx,tsx,svg}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        colors: {
            primary: colors.indigo,
        },
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    extends: {
        colors: colors,
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
};
