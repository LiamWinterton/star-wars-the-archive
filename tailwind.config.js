module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Heebo"', 'sans'],
				'starwars': ['"Star Jedi"']
			},
			colors: {
				'black-off': '#1a1a1a',
				'white-off': '#f1f1f1'
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}