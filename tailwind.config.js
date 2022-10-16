/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Georgia','system-ui','ui-sans-serif', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
