/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            dolar: ["Noto Sans Georgian"],
         },
      },
   },
   plugins: [require("tailwindcss-animated")],
};
