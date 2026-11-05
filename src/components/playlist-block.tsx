import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SPOTIFY_URL, tracks, hasSpotifyLink } from "@/lib/playlist";

export function PlaylistBlock() {
  return (
    <article className="playlist-block mt-10 w-full rounded-lg bg-playlist text-playlist-foreground p-4 sm:p-6" aria-labelledby="playlist-title">
      <header className="px-2 pt-2 pb-6 sm:px-3">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-playlist-muted">PLAYLIST</p>
        <h2 id="playlist-title" className="playlist-title mt-3 text-2xl font-semibold leading-tight sm:text-3xl">alt rock (the moody kind)</h2>
        <p className="mt-3 text-sm text-playlist-muted">{tracks.length} songs</p>
        {hasSpotifyLink(SPOTIFY_URL) && (
          <div className="mt-5 flex items-center gap-3">
            <Button asChild size="icon" className="h-12 w-12 rounded-full bg-spotify text-spotify-foreground hover:bg-spotify/90" title="Listen on Spotify">
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer" aria-label="Play playlist on Spotify"><Play fill="currentColor" aria-hidden="true" /></a>
            </Button>
            <Button asChild variant="link" className="px-0 text-playlist-foreground">
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
            </Button>
          </div>
        )}
      </header>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-4 border-b border-playlist-divider px-2 pb-3 text-sm text-playlist-muted sm:px-3" aria-hidden="true">
        <span className="text-center">#</span><span>Title</span>
      </div>
      <ol className="mt-2 list-none p-0" aria-label="Playlist tracks">
        {tracks.map((track, index) => (
          <li key={`${track.title}-${track.artist}`} className="grid min-h-[72px] grid-cols-[24px_minmax(0,1fr)] items-center gap-4 rounded px-2 py-3 hover:bg-playlist-hover sm:px-3">
            <span className="flex h-6 w-6 items-center justify-center text-sm tabular-nums text-playlist-muted">
              {index + 1}
            </span>
            <div className="min-w-0">
              <span className="block text-base leading-snug text-playlist-foreground">{track.title}</span>
              <span className="mt-1 block text-sm leading-snug text-playlist-muted">{track.artist}</span>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}