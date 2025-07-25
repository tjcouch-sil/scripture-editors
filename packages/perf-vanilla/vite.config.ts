import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/packages/perf-vanilla",
  plugins: [nxViteTsPaths()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
});
