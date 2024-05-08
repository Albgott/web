/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#f59f0b",
        customSecondary: "#02061b",
        customAmber1:"#f5b20f",
        customAmber2: "#f59f0b",
        customAmber3: "#f58f08",
        customDark1: "#172762",
        customDark2: "#0f1e56",
        customDark3: "#040f40", 
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};
