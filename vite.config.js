import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { splitVendorChunkPlugin } from "vite";
import simpleHtmlPlugin from "vite-plugin-simple-html";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: "gzip" }),
    splitVendorChunkPlugin(),
    simpleHtmlPlugin({
      minify: true,
    }),
    {
      viteNext: true,
    },
  ],
  server: {
    host: true,
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    minify: true,
    chunkSizeWarningLimit: 250,
  },
});
