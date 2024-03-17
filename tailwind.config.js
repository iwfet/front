/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        chat: 'rgba(139, 139, 139, 0.24) 0px 3px 3px 6px;',
      },
    },
  },
  plugins: [],
}
