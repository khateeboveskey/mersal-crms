/** @type {import('tailwindcss').Config} */
import * as colors from 'tailwindcss/colors';

export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx,svg}',
        './docs/**/*.{vue,js,ts,jsx,tsx,svg}',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        colors: {
            primary: colors.indigo
        },
        extend: {
            colors: {
                ...colors
            }
        }
    },
    extends: {
        colors: colors
    },
    // eslint-disable-next-line no-undef
    plugins: [require('flowbite/plugin')]
};
