/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-down": "fadeInDown 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-left": "fadeInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-right": "fadeInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
