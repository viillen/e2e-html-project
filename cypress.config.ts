import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://html-project-gustavo-lohan.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
