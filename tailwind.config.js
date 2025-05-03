/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            keyframes: {
                blink: {
                    "50%": { opacity: "0" },
                },
            },
            animation: {
                blink: "blink 0.7s infinite",
            },
        },
    },
    plugins: [],
}