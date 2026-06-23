import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    preview: {
      allowedHosts: ["website-backend-cv0w.onrender.com"],
    },
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});