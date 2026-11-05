import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import {
  formatDuration,
  formatTotalDuration,
  hasSpotifyLink,
  playlists,
  playlistSubtitle,
  totalDurationSeconds,
} from "./playlist";

const altRock = playlists.find((p) => p.id === "alt-rock")!;
const surLaPlage = playlists.find((p) => p.id === "sur-la-plage")!;

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
  it("sur la plage has 28 tracks totaling 1 hr 32 min", () => {
    assert.equal(surLaPlage.tracks.length, 28);
    assert.equal(playlistSubtitle(surLaPlage), "28 songs, 1 hr 32 min");
  });
  it("alt rock has no album or duration columns", () => {
    assert.equal(altRock.tracks.some((t) => t.album != null), false);
    assert.equal(altRock.tracks.some((t) => t.duration != null), false);
    assert.equal(playlistSubtitle(altRock), "10 songs");
  });
});

describe("duration formatting", () => {
  it("formats a track duration as m:ss", () => {
    assert.equal(formatDuration(170), "2:50");
    assert.equal(formatDuration(183), "3:03");
  });
  it("formats totals with hours and minutes", () => {
    assert.equal(formatTotalDuration(totalDurationSeconds(surLaPlage.tracks)), "1 hr 32 min");
    assert.equal(formatTotalDuration(2100), "35 min");
  });
});
