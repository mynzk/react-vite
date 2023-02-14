import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env, "env====zk");
  return {
    server: {
      open: true,
      port: 5000,
    },
    plugins: [react(), eslintPlugin()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  };
});
