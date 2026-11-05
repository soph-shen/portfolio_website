import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { hasSpotifyLink } from "./playlist";

describe("Spotify controls visibility", () => {
  it("empty Spotify URL hides controls", () => {
    assert.equal(hasSpotifyLink(""), false);
    assert.equal(hasSpotifyLink("   "), false);
  });
  it("a supplied Spotify URL shows controls", () => {
    assert.equal(hasSpotifyLink("https://open.spotify.com/playlist/example"), true);
  });
});