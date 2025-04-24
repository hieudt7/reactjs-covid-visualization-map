/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"], // Add Roboto font here
			},
			colors: {
				"dark-green": "#004D40",
				"custom-purple": "#4A148C",
			},
		},
	},
	plugins: [],
};
