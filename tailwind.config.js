/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './screens/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'cloudboard-orange': {
                    DEFAULT: '#fbbf24'
                }
            },
        },
    },
    plugins: [],
}
