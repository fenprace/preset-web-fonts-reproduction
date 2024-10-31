import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  cli: {
    entry: {
      patterns: ["src/**/*"],
      outFile: "dist/index.css",
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: [
          {
            name: "Roboto Flex",
            weights: ["400", "600"],
          },
        ],
      },
    }),
  ],
});
