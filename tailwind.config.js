/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "dark-purple": "#0D0B21",
            "light-purple": "#211A75",
            purple: "#16132b",
            violet: "#6418C3",
            iris: "#7879F1",
            white: "#fff",
            black: "#000000",
            "dark-gray": "#464366",
            gray: "#c4c4c4",
            transparent: "transparent",
            skyblue: "#5ecfff",
            orange: "#FFAB2D",
            pink: "#e328af",
            green: "#38E25D",
        },
        fontFamily: {
            cairo: ["Cairo", "sans-serif"],
        },
    },
    plugins: [],
};
