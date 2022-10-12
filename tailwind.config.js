/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:"class", // questo serve a dire che il trigger per la modalità dark non è seguire quello impostato dal sistema operativo(default) ma una classe
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
