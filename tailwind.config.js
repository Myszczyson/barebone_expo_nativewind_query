/** @type {import('tailwindcss').Config} */
module.exports = {
  // add every file that uses tailwind in src folders
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

