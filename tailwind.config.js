/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#800020",
          dark: "#5c0017",
          light: "#9c1f3d",
        },
        emerald: {
          DEFAULT: "#043927",
          light: "#0a5c3f",
        },
        cream: {
          DEFAULT: "#FFFDD0",
          soft: "#FFF9E8",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E9CE73",
          dark: "#A9852B",
        },
        rosegold: "#B76E79",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        script: ["'Great Vibes'", "cursive"],
        body: ["'Poppins'", "sans-serif"],
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "float-particle": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-120px) rotate(180deg)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      boxShadow: {
        gold: "0 0 25px rgba(212,175,55,0.35)",
        card: "0 10px 40px -10px rgba(128,0,32,0.25)",
      },
    },
  },
  plugins: [],
};
