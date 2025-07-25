import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/packages/scribe",
  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      rollupTypes: true,
      exclude: ["src/App.tsx", "src/main.tsx"],
      aliasesExclude: ["@eten-tech-foundation/scripture-utilities"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
