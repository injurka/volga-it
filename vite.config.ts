import { defineConfig } from "vitest/config"

import react from "@vitejs/plugin-react"
import { resolve } from "path"

import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/variables.scss";`,
      },
    },
  },

  resolve: {
    alias: {
      "#": resolve(__dirname, "src"),
      "#components": resolve(__dirname, "src/components"),
      "#assets": resolve(__dirname, "src/assets"),
      "#types": resolve(__dirname, "src/types"),
      "#hooks": resolve(__dirname, "src/hooks"),
    },
  },
})
