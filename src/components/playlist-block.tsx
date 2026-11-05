import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  formatDuration,
  hasSpotifyLink,
  playlistSubtitle,
  type Playlist,
} from "@/lib/playlist";

const COLLAPSED_COUNT = 10;

export function PlaylistBlock({ playlist }: { playlist: Playlist }) {
  const [expanded, setExpanded] = useState(false);
  const { tracks } = playlist;
  const hasAlbum = tracks.some((track) => track.album != null);
  const hasDuration = tracks.some((track) => track.duration != null);
  const collapsible = tracks.length > COLLAPSED_COUNT;
  const visibleTracks = collapsible && !expanded ? tracks.slice(0, COLLAPSED_COUNT) : tracks;

  // Album shows from md up; duration is always visible when present.
  const gridCols = hasAlbum
    ? "grid-cols-[24px_minmax(0,1fr)_3rem] md:grid-cols-[24px_minmax(0,1fr)_minmax(0,1fr)_3rem]"
    : hasDuration
      ? "grid-cols-[24px_minmax(0,1fr)_3rem]"
      : "grid-cols-[24px_minmax(0,1fr)]";

  const titleId = `playlist-title-${playlist.id}`;

  return (
    <article className="playlist-block mt-10 w-full rounded-lg bg-playlist text-playlist-foreground p-4 sm:p-6" aria-labelledby={titleId}>
      <header className="px-2 pt-2 pb-6 sm:px-3">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-playlist-muted">PLAYLIST</p>
        <h2 id={titleId} className="playlist-title mt-3 text-2xl font-semibold leading-tight sm:text-3xl">{playlist.title}</h2>
        <p className="mt-3 text-sm text-playlist-muted">{playlistSubtitle(playlist)}</p>
        {hasSpotifyLink(playlist.spotifyUrl) && (
          <div className="mt-5 flex items-center gap-3">
            <Button asChild size="icon" className="h-12 w-12 rounded-full bg-spotify text-spotify-foreground hover:bg-spotify/90" title="Listen on Spotify">
              <a href={playlist.spotifyUrl} target="_blank" rel="noopener noreferrer" aria-label={`Play ${playlist.title} on Spotify`}><Play fill="currentColor" aria-hidden="true" /></a>
            </Button>
            <Button asChild variant="link" className="px-0 text-playlist-foreground">
              <a href={playlist.spotifyUrl} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
            </Button>
          </div>
        )}
      </header>
      <div className={`grid ${gridCols} gap-4 border-b border-playlist-divider px-2 pb-3 text-sm text-playlist-muted sm:px-3`} aria-hidden="true">
        <span className="text-center">#</span>
        <span>Title</span>
        {hasAlbum && <span className="hidden md:block">Album</span>}
        {hasDuration && (
          <span className="flex justify-end">
            <Clock className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
      </div>
      <ol className="mt-2 list-none p-0" aria-label={`${playlist.title} tracks`}>
        {visibleTracks.map((track, index) => (
          <li key={`${track.title}-${track.artist}`} className={`grid min-h-[72px] ${gridCols} items-center gap-4 rounded px-2 py-3 hover:bg-playlist-hover sm:px-3`}>
            <span className="flex h-6 w-6 items-center justify-center text-sm tabular-nums text-playlist-muted">
              {index + 1}
            </span>
            <div className="min-w-0">
              <span className="block truncate text-base leading-snug text-playlist-foreground">{track.title}</span>
              <span className="mt-1 block truncate text-sm leading-snug text-playlist-muted">{track.artist}</span>
            </div>
            {hasAlbum && (
              <span className="hidden min-w-0 truncate text-sm text-playlist-muted md:block">{track.album}</span>
            )}
            {hasDuration && (
              <span className="text-right text-sm tabular-nums text-playlist-muted">
                {track.duration != null ? formatDuration(track.duration) : ""}
              </span>
            )}
          </li>
        ))}
      </ol>
      {collapsible && (
        <div className="mt-2 flex justify-center border-t border-playlist-divider pt-4">
          <Button
            variant="link"
            className="gap-1.5 px-0 text-sm text-playlist-muted hover:text-playlist-foreground"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            {expanded ? (
              <>Show less<ChevronUp className="h-4 w-4" aria-hidden="true" /></>
            ) : (
              <>Show all {tracks.length} songs<ChevronDown className="h-4 w-4" aria-hidden="true" /></>
            )}
          </Button>
        </div>
      )}
    </article>
  );
}
