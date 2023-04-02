/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff8800",

          secondary: "#d5baf4",

          accent: "#1d40c1",

          neutral: "#2F1C30",

          info: "#8EDCEC",

          success: "#0D7234",

          warning: "#B46E13",

          error: "#F5634D",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
