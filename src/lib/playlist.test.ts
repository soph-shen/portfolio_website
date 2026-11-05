import { describe, expect, test } from "bun:test";
import { hasSpotifyLink } from "./playlist";

describe("Spotify controls visibility", () => {
  test("empty Spotify URL hides controls", () => {
    expect(hasSpotifyLink("")).toBe(false);
    expect(hasSpotifyLink("   ")).toBe(false);
  });
  test("a supplied Spotify URL shows controls", () => {
    expect(hasSpotifyLink("https://open.spotify.com/playlist/example")).toBe(true);
  });
});