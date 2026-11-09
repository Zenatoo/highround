# Contributing to HighRound

## Tech stack

- **Site & UI:** [Astro](https://astro.build) + TypeScript — static pages, minimal JavaScript.
- **Windows app:** [Tauri v2](https://tauri.app) wraps the same Astro build → `.exe` installer published in GitHub Releases.
- **Mobile:** website only, no store app.
- **Hosting:** GitHub Pages, deployed by GitHub Actions on every push to `main`.
- **Content:** Markdown/MDX in `content/en/` and `content/fr/`, validated by a schema.
- **Package manager:** pnpm.

## Branches

- Contributors work on a branch and open a **Pull Request** to `main`.
- The maintainer may push directly to `main`.
- Branch prefixes: `feat/…`, `fix/…`, `content/…`, `i18n/…`, `docs/…`, `chore/…`
- Merge with **squash merge** only.
- CI (lint + type check + build) must pass before merging. A failed build is never deployed.

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

### Images & memory

A decoded image uses `width × height × 4` bytes of RAM whatever its file format (a 1920×1080 screenshot ≈ 8 MB). So:

- Always serve images at their **displayed size** (`srcset`), never the original.
- Guide pages and grids show **thumbnails**; the full-size image opens only on click (lightbox).
- `loading="lazy"` and `decoding="async"` on every image below the fold.
- Long pages use `content-visibility: auto` per section so off-screen parts are not rendered.

## Security

See also [SECURITY.md](SECURITY.md).

**Site**
- Strict Content Security Policy: only HighRound's own files, no frames at all.
- No inline scripts, no `eval`, no third-party scripts.
- Guides may only use the provided components — no raw `<script>`, `<iframe>` or HTML in content files.
- External links use `rel="noopener noreferrer"`.

**Windows app (Tauri)**
- Minimum permissions: no file system, shell or process access unless a feature truly needs it.
- Loads only its bundled files and images from the official site — never remote code.
- Release `.exe` published only through GitHub Actions, with its SHA-256 checksum.
- If auto-update is added, updates are signed and the private key never enters the repository.

**Dependencies**
- As few dependencies as possible; every new one must be justified in its PR.
- `pnpm-lock.yaml` and `Cargo.lock` are always committed.
- New package versions are not installed until they are a few days old (pnpm `minimumReleaseAge`), to avoid compromised releases.
- Dependabot alerts and security updates enabled; `cargo audit` runs in CI.

**Repository**
- No secret, token or key ever committed. Secret scanning and push protection enabled.
- GitHub Actions pinned to a commit SHA, with minimal `permissions:`.
- Two-factor authentication enabled on the maintainer account.

## Content rules

1. **Bilingual:** every guide exists in English **and** French. A guide missing a language gets the `needs-translation` label and is not published in that language.
2. **Written by us:** the guide itself is our own text — clear, step by step, understandable without watching a video.
3. **Show, don't just tell:** add images of locations, items and steps whenever one is available.
4. **Source always visible:** every image shows its author/source **on the page**, right under it, with a link. If the original author is unknown, credit at least the site where the image was found, with the link. An image with no source at all is rejected.
5. Also add every new source to [CREDITS.md](CREDITS.md).
6. **Videos tab:** each guide has a separate *Videos* tab listing related videos as links (thumbnail, title, creator, language). Videos in the user's language come first. Videos are never embedded, cut or re-uploaded.
7. No heavy media committed to Git: optimize images (WebP/AVIF) before adding them.
8. Verify every step in-game or with at least **two independent reliable sources** before publishing.

## Using sources

**Text — never copied.** Facts (steps, locations, codes) are free to use; someone else's wording is not. Every guide is written in our own words. Wiki text (e.g. Call of Duty Wiki, CC BY-SA 3.0) is used as a reference to check facts, never pasted: its share-alike license is not compatible with our content license.

**Images found online** (wikis, community posts, guide sites) may be used, under these conditions:
- Credit the author or site **and link to the exact source page**, under the image.
- Never remove or crop out a watermark or signature.
- Do not use images from a source that explicitly forbids reuse, nor from paid content.
- When the author is easy to reach (Discord, Reddit, X), ask first.
- Remove immediately on request (see **Removal**).

Community members can also send their own screenshots (issue or PR); they are credited by name.

**Videos:** only linked, never embedded or cut. The thumbnail is downloaded at build time and served by HighRound, so the page never contacts YouTube; the link opens the video on YouTube.

**Reliable sources:** well-known community references and creators with a track record. Avoid auto-generated pages, mirror sites and sites selling in-game items or boosting.

**Removal:** if a creator or rights holder asks for removal, remove first, discuss after.

## No tracking

See [PRIVACY.md](PRIVACY.md). Any change that breaks it is rejected:

- No analytics, ad, social or tracking script — ever.
- No cookies.
- No third-party resource loaded on page load: fonts, icons and images are self-hosted.
- Videos are plain links with self-hosted thumbnails: nothing is loaded from YouTube until the user clicks.
- User data (favorites, language, offline guides) stays on the device.
- Error reports are pre-filled GitHub issue links: no form backend, nothing sent by the site itself.

## Readability

- Short sentences, numbered steps, one action per step.
- Headings that tell you exactly what's in the section.
- Pages must stay fast and readable on mobile.
