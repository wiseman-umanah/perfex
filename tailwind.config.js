/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		fontSize: {
			'xxs': '0.6rem', // 8px
		},
	},
  },
  plugins: [],
}

