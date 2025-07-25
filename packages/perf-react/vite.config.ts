import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  plugins: [react(), nxViteTsPaths()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
});
