import { Plugin, ViteDevServer } from "vite";
import { SerializableCookies } from "./types";
import serializeCookies from "./serialize-cookie";

export default function viteSetInitialCookie(
  serializableCookies: SerializableCookies
): Plugin {
  return {
    name: "set-initial-cookie",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((_, res, next) => {
        res.setHeader("Set-Cookie", [...serializeCookies(serializableCookies)]);
        next();
      });
    },
  };
}
