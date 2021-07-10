const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const fs = require("fs");
const path = require("path");
const tailwindConfig = require("../tailwind.config");

const theme = {
  displayFonts: ["a", "b", "c", "d", "e", "f"],
  colorModes: ["steel", "black", "indigo"],
};

// fs.readFile(require.resolve("tailwindcss/tailwind.css"), async (err, css) => {
fs.readFile(require.resolve("../styles/main.css"), async (err, css) => {
  await Promise.all(
    theme.displayFonts.map(async (df) => {
      return await Promise.all(
        theme.colorModes.map(async (cm) => {
          await postcss([tailwindcss(tailwindConfig(df, cm)), autoprefixer])
            .process(css)
            .then((result) => {
              fs.writeFile(`public/${df}-${cm}.css`, result.css, () => true);
            });
        })
      );
    })
  );
});
