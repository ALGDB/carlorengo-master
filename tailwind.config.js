/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        100: "100%",
      },
      // colors: {
      //   primary: "#0085af",
      //   primaryLight: "#0070ad",
      //   primaryDark: "#0099b0",
      //   accent: "#ecc94b",
      // },
    },
  },
  plugins: [],
};
