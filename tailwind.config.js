/** @type {import('tailwindcss').Config} */
import * as colors from 'tailwindcss/colors';

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
    plugins: []
};
