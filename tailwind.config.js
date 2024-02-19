/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js}"],
    theme: {
        fontFamily: {},
        extend: {},
    },
    plugins: [require("daisyui")],
};
