module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        icon: "url('/assets/icon.svg')"
      }
    },
  },
  plugins: [],
}
