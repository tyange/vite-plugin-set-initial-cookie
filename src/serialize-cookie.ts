import { SerializableCookies } from "./types";

export default function serializeCookies(
  serializableCookies: SerializableCookies
): string[] {
  return serializableCookies.map((serializableCookie): string => {
    const parts = [
      `${serializableCookie.name}=${encodeURIComponent(
        serializableCookie.value
      )}`,
    ];

    if (serializableCookie.domain)
      parts.push(`Domain=${serializableCookie.domain}`);
    if (serializableCookie.path) parts.push(`Path=${serializableCookie.path}`);
    if (serializableCookie.expires)
      parts.push(`Expires=${serializableCookie.expires.toUTCString()}`);
    if (serializableCookie.maxAge)
      parts.push(`Max-Age=${serializableCookie.maxAge}`);
    if (serializableCookie.secure) parts.push("Secure");
    if (serializableCookie.httpOnly) parts.push("HttpOnly");
    if (serializableCookie.sameSite)
      parts.push(`SameSite=${serializableCookie.sameSite}`);
    if (serializableCookie.priority)
      parts.push(`Priority=${serializableCookie.priority}`);
    if (serializableCookie.partitioned) parts.push("Partitioned");

    return parts.join("; ");
  });
}
