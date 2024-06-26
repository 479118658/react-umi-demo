import { defineConfig } from "umi";
import routes from "./config/route";
export default defineConfig({
  routes,
  npmClient: "pnpm",
});
