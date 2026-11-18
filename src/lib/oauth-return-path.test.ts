import { describe, expect, it } from "vitest";
import { oauthReturnPath } from "./oauth-return-path";

describe("OAuth return paths", () => {
  it("preserves consent parameters and fragments", () => {
    const path = "/.lovable/oauth/consent?authorization_id=example#request";
    expect(oauthReturnPath(path)).toBe(path);
  });
  it("rejects external and ambiguous destinations", () => {
    for (const value of [
      undefined,
      "https://outside.invalid",
      "//outside.invalid",
      "/\\outside.invalid",
      "/\noutside.invalid",
    ]) {
      expect(oauthReturnPath(value)).toBe("/");
    }
  });
});
