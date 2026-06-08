import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getApiKey", () => {
  test("returns null when no authorization header", () => {
    expect(getAPIKey({})).toBe(null);
  });
  test("returns null when scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer sometoken" })).toBe(null);
  });
  test("returns the key when header is valid ApiKey format", () => {
    expect(getAPIKey({ authorization: "ApiKey mysecretkey" })).toBe(
      "mysecretkey",
    );
  });
});
