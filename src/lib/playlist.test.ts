import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import {
  formatDuration,
  getPlaylistBySlug,
  hasSpotifyLink,
  playlists,
  playlistSubtitle,
} from "./playlist";

const altRock = playlists.find((p) => p.id === "alt-rock")!;
const french = playlists.find((p) => p.id === "sur-la-plage")!;

describe("Spotify controls visibility", () => {
  it("empty Spotify URL hides controls", () => {
    assert.equal(hasSpotifyLink(""), false);
    assert.equal(hasSpotifyLink("   "), false);
  });
  it("a supplied Spotify URL shows controls", () => {
    assert.equal(hasSpotifyLink("https://open.spotify.com/playlist/example"), true);
  });
});

describe("playlist data", () => {
  it("cards are ordered alt rock, then french", () => {
    assert.deepEqual(playlists.map((p) => p.slug), ["alt-rock", "french"]);
  });
  it("french has 28 tracks and subtitles show song count only", () => {
    assert.equal(french.tracks.length, 28);
    assert.equal(playlistSubtitle(french), "28 songs");
    assert.equal(playlistSubtitle(altRock), "10 songs");
  });
  it("alt rock has no album or duration columns", () => {
    assert.equal(altRock.tracks.some((t) => t.album != null), false);
    assert.equal(altRock.tracks.some((t) => t.duration != null), false);
  });
  it("every playlist has a unique slug for its detail page", () => {
    const slugs = playlists.map((p) => p.slug);
    assert.equal(new Set(slugs).size, slugs.length);
    assert.equal(getPlaylistBySlug("french")?.id, "sur-la-plage");
    assert.equal(getPlaylistBySlug("nope"), undefined);
  });
});

describe("duration formatting", () => {
  it("formats a track duration as m:ss", () => {
    assert.equal(formatDuration(170), "2:50");
    assert.equal(formatDuration(183), "3:03");
  });
});
