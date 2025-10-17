import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      compositions: path.resolve(__dirname, "./packages/ui-react/src/compositions"),
      data: path.resolve(__dirname, "./packages/ui-react/src/data"),
      hooks: path.resolve(__dirname, "./packages/ui-react/src/hooks"),
      icons: path.resolve(__dirname, "./packages/ui-react/src/icons"),
      images: path.resolve(__dirname, "./packages/ui-react/src/images"),
      layout: path.resolve(__dirname, "./packages/ui-react/src/layout"),
      primitives: path.resolve(__dirname, "./packages/ui-react/src/primitives"),
      utils: path.resolve(__dirname, "./packages/ui-react/src/utils"),
    },
  },
  server: {
    port: 8000,
  },
});
