# Architecture

- Keep the Playlists collage in a decorative, aria-hidden component with page-scoped CSS; shared site layout and other pages must remain independent.
- Keep playlist tracks and the Spotify destination in one editable data module; derive the song count and control visibility from that module.