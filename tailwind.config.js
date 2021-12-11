module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                pic: {
                    DEFAULT: '#746E70'
                },
                dark: {
                    DEFAULT: "#282828",
                    card: "#333333"
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
