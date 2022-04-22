module.exports = {
  // content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['VAG', 'sans-serif'],
        vag: ['VAG'],
      },
    },
  },
  plugins: [],
}
