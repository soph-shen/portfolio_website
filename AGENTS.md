# Architecture

- Keep the Playlists collage in a decorative, aria-hidden component with page-scoped CSS; shared site layout and other pages must remain independent.
- Keep playlist tracks and the Spotify destination in one editable data module; derive the song count and control visibility from that module.
- Require managed OAuth tokens with a client claim for MCP tools; ordinary portfolio pages stay public because assistant access is a separate security boundary.
- Preserve canonical same-origin consent return paths through all sign-in methods so authorization requests survive login.
- Bundle the profile portrait as an imported image so external hosting can serve it without Lovable-only asset endpoints.
