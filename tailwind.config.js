const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "400px",
			...defaultTheme.screens,
		},
		extend: {
			animation: {
				progress: "progress 2s ease-out infinite",
			},
			keyframes: {
				progress: {
					"0%": { width: "0" },
					"100%": { width: "100%" },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
