// Edit playlists here: title, Spotify URL (leave "" to hide the Spotify
// controls), and tracks. Album and duration (in seconds) are optional —
// a playlist only shows those columns when its tracks have them.
export interface Track {
  title: string;
  artist: string;
  album?: string;
  /** Duration in seconds. */
  duration?: number;
}

export interface Playlist {
  id: string;
  /** URL slug for the detail page, e.g. /on-repeat/alt-rock */
  slug: string;
  title: string;
  spotifyUrl: string;
  tracks: Track[];
}

export const playlists: Playlist[] = [
  {
    id: "alt-rock",
    slug: "alt-rock",
    title: "alt rock (the moody kind)",
    spotifyUrl: "",
    tracks: [
      { title: "Sweater Weather", artist: "The Neighbourhood" },
      { title: "Snow", artist: "Miley Cyrus" },
      { title: "She's Just a Friend", artist: "Cardinal Bloom" },
      { title: "Paris", artist: "The 1975" },
      { title: "Zombie", artist: "YUNGBLUD" },
      { title: "War", artist: "YUNGBLUD" },
      { title: "3AM", artist: "Halsey" },
      { title: "The Time of My Life", artist: "Benson Boone" },
      { title: "Viva La Vida", artist: "Coldplay" },
      { title: "Scary Love", artist: "The Neighbourhood" },
    ],
  },
  {
    id: "sur-la-plage",
    slug: "french",
    title: "french",
    spotifyUrl: "https://open.spotify.com/playlist/4iaTtsxpMzKyCkOEpm1ygO",
    tracks: [
      { title: "conduire", artist: "Louane", album: "Conduire", duration: 170 },
      { title: "soleil", artist: "Louane, P3GASE", album: "solo", duration: 159 },
      { title: "Secret", artist: "Louane", album: "Sentiments", duration: 191 },
      { title: "maman", artist: "Louane", album: "solo", duration: 180 },
      { title: "États d'amour", artist: "Amir", album: "Addictions (Ultimate Version)", duration: 219 },
      { title: "Avant toi", artist: "Vitaa, Slimane", album: "VersuS", duration: 223 },
      { title: "Pas beaux", artist: "Vitaa, Slimane", album: "VersuS", duration: 161 },
      { title: "XY", artist: "Vitaa, Slimane", album: "VersuS", duration: 160 },
      { title: "Des milliers de je t'aime", artist: "Slimane", album: "Chroniques d'un cupidon", duration: 212 },
      { title: "Rétine", artist: "Amir", album: "Ressources (Nouvelle Edition)", duration: 210 },
      { title: "Ce soir", artist: "Amir", album: "Ressources (Nouvelle Edition)", duration: 213 },
      { title: "Longtemps", artist: "Amir", album: "Addictions (Ultimate Version)", duration: 219 },
      { title: "Grandir", artist: "Black M, Amir", album: "Grandir", duration: 202 },
      { title: "Sacré Bordel", artist: "Bigflo & Oli", album: "Sacré Bordel", duration: 266 },
      { title: "Je partirai", artist: "Hoshi", album: "Cœur parapluie", duration: 195 },
      { title: "Crush", artist: "Nuit Incolore", album: "La loi du papillon", duration: 194 },
      { title: "Pardonne-moi", artist: "Louane", album: "Sentiments Heureux", duration: 187 },
      { title: "La recette", artist: "Slimane", album: "Chroniques d'un cupidon", duration: 197 },
      { title: "Aimer à mort", artist: "Louane", album: "Joie de vivre", duration: 176 },
      { title: "King of the Jungle", artist: "SHANGUY", album: "King of the Jungle", duration: 159 },
      { title: "Et Bam", artist: "Mentissa", album: "La vingtaine", duration: 219 },
      { title: "Coup de vieux", artist: "Bigflo & Oli, Julien Doré", album: "Les autres c'est nous", duration: 232 },
      { title: "Et même après je t'aimerai", artist: "Hoshi", album: "Étoile flippante (Version deluxe)", duration: 195 },
      { title: "La fille", artist: "Louane", album: "Sentiments", duration: 236 },
      { title: "Premier Rendez-Vous", artist: "Joseph Kamel", album: "Miroirs", duration: 163 },
      { title: "Picasso", artist: "Bigflo & Oli", album: "Karma", duration: 163 },
      { title: "Karma", artist: "Bigflo & Oli", album: "Karma", duration: 258 },
      { title: "Je me déteste", artist: "Nuit Incolore", album: "La loi du papillon : La note noire", duration: 183 },
    ],
  },
];

export function hasSpotifyLink(url: string) {
  return url.trim().length > 0;
}

/** 170 -> "2:50" */
export function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function getPlaylistBySlug(slug: string) {
  return playlists.find((playlist) => playlist.slug === slug);
}

/** "28 songs" */
export function playlistSubtitle(playlist: Playlist) {
  return `${playlist.tracks.length} songs`;
}
