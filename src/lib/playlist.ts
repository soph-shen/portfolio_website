// Add the playlist's Spotify URL here when it is ready.
export const SPOTIFY_URL = "";

export const tracks = [
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
];

export function hasSpotifyLink(url: string) {
  return url.trim().length > 0;
}