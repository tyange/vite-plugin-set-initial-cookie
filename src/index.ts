import { Plugin, ViteDevServer } from "vite";
import { Cookies } from "./types";

export default function viteSetInitialCookie(cookies: Cookies): Plugin {
  return {
    name: "set-initial-cookie",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((_, res, next) => {
        res.setHeader("Set-Cookie", [...cookies]);
        next();
      });
    },
  };
}
