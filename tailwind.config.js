/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Sora'],
        },
        extend: {
            colors: {
                navbar: '#1a2634',
                sidebar: '#3b4956',
                body: '#24323F',
                primary: '#57c3bc',
            },
        },
    },
    plugins: [],
};
