import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    retries: 0,
    video: false,
    screenshotOnRunFailure: false,
    supportFile: false
  },
});
