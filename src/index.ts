import { Plugin, ViteDevServer } from "vite";

export default function viteSetInitialCookie(): Plugin {
  return {
    name: "set-initial-cookie",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        res.setHeader("Set-Cookie", "token=YourCookieValue; Path=/");
        next();
      });
    },
  };
}
