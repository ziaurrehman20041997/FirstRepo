module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_4c: "#ffffff4c",
          A700_71: "#ffffff71",
          A700_87: "#ffffff87",
          A700_33: "#ffffff33",
          A700_00: "#ffffff00",
          A700_19: "#ffffff19",
          A700: "#ffffff",
          A700_9e: "#ffffff9e",
        },
        blue_gray: {
          100: "#d9d9d9",
          "100_00": "#d5d9e500",
          "100_01": "#d5d8e5",
          "100_02": "#d5d9e5",
        },
        gray: {
          900: "#10102a",
          "900_87": "#10102a87",
          "900_00": "#10102a00",
          "900_9e": "#10102a9e",
        },
        cyan: { 200: "#92deed" },
      },
      fontFamily: { poppins: "Poppins", spacegrotesk: "Space Grotesk" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#10102a,#10102a00)",
        gradient1: "linear-gradient(180deg ,#ffffff4c,#ffffff19)",
        gradient2: "linear-gradient(180deg ,#d5d9e5,#d5d9e500)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
