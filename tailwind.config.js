/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22f45d",

          secondary: "#f99781",

          accent: "#030363",

          neutral: "#32293D",

          "base-100": "#F5F6FA",

          info: "#149FF0",

          success: "#0E8168",

          warning: "#C6A306",

          error: "#F17365",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
