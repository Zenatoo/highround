# Contributing to HighRound

## Tech stack

- **Site & UI:** [Astro](https://astro.build) + TypeScript — static pages, minimal JavaScript.
- **Windows app:** [Tauri v2](https://tauri.app) wraps the same Astro build → `.exe` installer published in GitHub Releases.
- **Mobile:** website only, no store app.
- **Hosting:** GitHub Pages, deployed by GitHub Actions on every merge to `main`.
- **Content:** Markdown/MDX in `content/en/` and `content/fr/`, validated by a schema.
- **Package manager:** pnpm.

## Branches

- `main` is protected: **no direct push**, everything goes through a Pull Request.
- Branch prefixes: `feat/…`, `fix/…`, `content/…`, `i18n/…`, `docs/…`, `chore/…`
- Merge with **squash merge** only.
- CI (lint + type check + build) must pass before merging.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/), written in English, present tense, lowercase.

```
<type>(<scope>): <short description>
```

| Type | Use for |
|---|---|
| `feat` | New feature visible to users |
| `fix` | Bug that **users have already seen** (it shipped) |
| `content` | New or updated guide |
| `i18n` | Translation |
| `docs` | README, credits, contributing |
| `style` | Visual / formatting only |
| `refactor` | Code change with no visible effect |
| `perf` | Performance |
| `chore` | Tooling, deps, config |

**Scopes:** `web`, `app`, `shared`, `content`, or a game: `waw`, `bo1`, `bo2`, `bo3`, `bo4`, `bocw`, `bo6`, `bo7`, `aw`, `iw`, `ww2`, `vg`, `mw3`.

Examples:

```
feat(shared): add map filter
content(bo2): add Origins Easter Egg guide
i18n(fr): translate Kino der Toten guide
fix(app): guide images not loading offline
```

No co-author lines and no tool mentions in commit messages.

## Changelog & patch notes — users only

The changelog and patch notes describe **only what users can see**.

- A bug introduced **and** fixed before a release never existed for users: it does not appear in the changelog or patch notes. Fix it inside the same PR (squashed), or use `refactor` / `chore` — never `fix`.
- `fix` is reserved for bugs that were present in a released version.
- Write patch notes from the user's point of view ("Images now load offline"), not the code's.

## Versioning

[SemVer](https://semver.org/): `MAJOR.MINOR.PATCH`. The changelog is generated from commits.

## Web & app parity

The site and the Windows app **do the same thing with the same layout**. Any feature or UI change must work on both before merging. No platform-only feature unless it is technically impossible on the other.

## Every screen

The layout must be checked on every screen size before merging:

- Phone (from 320 px wide), portrait and landscape
- Tablet
- Laptop and desktop
- Large / ultrawide screens (content width is capped so lines stay readable)

Mobile-first CSS, fluid sizes, touch targets of at least 44 px, no horizontal scroll.

## Performance budget

- Pages work with **zero JavaScript**; JS is only added where interaction needs it.
- Images in AVIF/WebP, sized per screen, lazy-loaded below the fold.
- Lighthouse performance and accessibility scores ≥ 95 on mobile.
- Windows installer kept as small as possible (no bundled browser — Tauri uses the system WebView).

## Content rules

1. **Bilingual:** every guide exists in English **and** French. A guide missing a language gets the `needs-translation` label and is not published in that language.
2. **Show, don't just tell:** use screenshots directly in the guide as much as possible.
3. **Source always visible:** every screenshot and video shows its author/source **on the page**, right under the media. A media item without a source is rejected.
4. Also add every new source to [CREDITS.md](CREDITS.md).
5. Videos are **embedded** (YouTube, etc.), never re-uploaded.
6. No heavy media committed to Git: optimize images (WebP/AVIF) before adding them.
7. Verify every step in-game or with a reliable source before publishing.

## No tracking

See [PRIVACY.md](PRIVACY.md). Any change that breaks it is rejected:

- No analytics, ad, social or tracking script — ever.
- No cookies.
- No third-party resource loaded on page load: fonts, icons and images are self-hosted.
- Videos use a click-to-load thumbnail, then `youtube-nocookie.com`.
- User data (favorites, language, offline guides) stays on the device.
- Error reports are pre-filled GitHub issue links: no form backend, nothing sent by the site itself.

## Readability

- Short sentences, numbered steps, one action per step.
- Headings that tell you exactly what's in the section.
- Pages must stay fast and readable on mobile.
