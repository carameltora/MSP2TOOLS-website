/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '2': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '100px minmax(100px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}
