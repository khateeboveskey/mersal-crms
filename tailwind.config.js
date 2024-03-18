/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors');

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: {
                50: '#fff0f3',
                100: '#ffdee4',
                200: '#ffc2cd',
                300: '#ff98aa',
                400: '#ff5c78',
                500: '#ff2a4f',
                600: '#f80a33',
                700: '#d90429',
                800: '#ac0824',
                900: '#8e0e24',
                950: '#4e010e'
            }
        },
        extend: {
            colors: {
                ...colors
            }
        }
    },
    plugins: []
};
