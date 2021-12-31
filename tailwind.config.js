module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        icon: "url('/assets/icon.svg')",
        'icon-twitter': "url('./assets/icon-twitter.svg')",
        'icon-github': "url('./assets/icon-github.svg')",
        'icon-blog': "url('./assets/icon-blog.svg')"
      }
    },
  },
  plugins: [],
}
