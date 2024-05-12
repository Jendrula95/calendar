/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans"],
			},
			gridTemplateColumns: {
				"1/5": "1f 5fr",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};