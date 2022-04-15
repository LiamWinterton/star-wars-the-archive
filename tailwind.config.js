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
			}
		},
	},
	plugins: [],
}