import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      compositions: path.resolve(__dirname, "./src/compositions"),
      data: path.resolve(__dirname, "./src/data"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      icons: path.resolve(__dirname, "./src/icons"),
      images: path.resolve(__dirname, "./src/images"),
      layout: path.resolve(__dirname, "./src/layout"),
      primitives: path.resolve(__dirname, "./src/primitives"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  server: {
    port: 8000,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SdsUiReact',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});