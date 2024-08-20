import { expect, test } from "vitest";
import serializeCookies from "../src/serialize-cookie";

test("returns array of strings in name equals value format", () => {
  expect(serializeCookies([{ name: "test", value: "test cookie" }])).toEqual([
    `test=${encodeURIComponent("test cookie")}`,
  ]);
});
