/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}