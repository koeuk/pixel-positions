import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#3490dc',
                'secondary': '#2ecc71',
                'success': '#2ecc71',
                info: '#3490dc',
                warning: '#f1c40f',
                danger: '#e74c3c',
                light: '#ecf0f1',
                dark: '#34495e',
                'black': '#000000',
                gray: {
                    100: '#f8f9fa',
                    200: '#e9ecef',
                    300: '#dee2e6',
                    400: '#ced4da',
                    500: '#b0bec5',
                    600: '#757575',
                    700: '#495057',
                    800: '#343a40',
                    900: '#212121',
                },
            }
        },
    },
    plugins: [],
};
