const colors = require("tailwindcss/colors");

const base = (colorOption, fontOption) => ({
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: fontOption,
      },
      colors: {
        indigo: colorOption,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
});

module.exports = (displayFont, colorMode) => {
  let colorOption;
  let fontOption;
  switch (colorMode) {
    case "black":
      colorOption = colors.coolGray;
      break;
    case "steel":
      colorOption = colors.blueGray;
      break;
    case "indigo":
      colorOption = colors.indigo;
      break;
    default:
      colorOption = colors.indigo;
      break;
  }
  switch (displayFont) {
    case "a":
      fontOption = ["Nunito"];
      break;
    case "b":
      fontOption = ["Adren"];
      break;
    case "c":
      fontOption = ["Moneta"];
      break;
    case "d":
      fontOption = ["Brooklyn"];
      break;
    case "e":
      fontOption = ["Berlin"];
      break;
    case "f":
      fontOption = ["Quart"];
      break;
    default:
      fontOption = ["Wensley"];
      break;
  }
  console.log(fontOption, colorOption);
  return base(colorOption, fontOption);
};
