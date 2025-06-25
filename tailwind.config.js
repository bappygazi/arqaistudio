/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         tamil: ['TamilMN', 'sans-serif'],
        avenir: ['AvenirLTStd', 'sans-serif'],
        pop:["Poppins", "sans-serif"]
        
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #95774B 29.17%, #B89E76 50.03%, #95774B 70.9%)',
      },
    },
  },
  plugins: [],
};
