import { describe, expect, test } from "vitest";
import serializeCookies from "../src/serialize-cookie";

describe("serialize cookies", () => {
  test("returns array of strings in name equals value format", () => {
    expect(serializeCookies([{ name: "test", value: "test cookie" }])).toEqual([
      `test=${encodeURIComponent("test cookie")}`,
    ]);

    expect(
      serializeCookies([
        { name: "test", value: "test cookie" },
        { name: "test1", value: "test cookie1" },
      ])
    ).toEqual([
      `test=${encodeURIComponent("test cookie")}`,
      `test1=${encodeURIComponent("test cookie1")}`,
    ]);
  });

  test("to test the properties that can be added as key-value pairs", () => {
    expect(
      serializeCookies([
        {
          name: "test",
          value: "test cookie",
          domain: "test.com",
          path: "/test",
          maxAge: 1234567890,
          sameSite: "Lax",
        },
      ])
    ).toEqual([
      `test=${encodeURIComponent(
        "test cookie"
      )}; Domain=test.com; Path=/test; Max-Age=1234567890; SameSite=Lax`,
    ]);
  });

  test("to test expires property", () => {
    expect(
      serializeCookies([
        {
          name: "test",
          value: "test cookie",
          expires: new Date(2024, 8, 21),
        },
      ])
    ).toEqual([
      `test=${encodeURIComponent("test cookie")}; Expires=${new Date(
        2024,
        8,
        21
      ).toUTCString()}`,
    ]);
  });

  test("should add correct flags to cookie string based on cookie properties", () => {
    expect(
      serializeCookies([
        {
          name: "test",
          value: "test cookie",
          secure: true,
          httpOnly: true,
          partitioned: true,
        },
      ])
    ).toEqual([
      `test=${encodeURIComponent(
        "test cookie"
      )}; Secure; HttpOnly; Partitioned`,
    ]);
  });
});
