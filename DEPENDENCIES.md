# Dependency review — 2026-10-15

Use Node **24.22.0 LTS** (`.nvmrc`), then `npm ci`. The system Node 23 is unsupported; validation used a cached Node 24 executable without changing the system installation.

## Selected versions

| Package | Previous installed | Selected |
| --- | --- | --- |
| SvelteKit | 2.49.2 | 2.70.3 |
| Svelte | 5.46.1 | 5.57.2 |
| Vite | 6.4.1 | 6.4.4 |
| Tailwind / Vite integration | 4.1.18 | 4.3.3 |
| Typography | 0.5.10 | 0.5.20 |
| daisyUI | 5.5.14 | 5.7.50 |
| svelte-check | 4.3.5 | 4.7.6 |
| markdown-it | 14.0.0 | 14.3.2 |
| sqlite3 | 5.1.6 | 6.0.1 |

The existing static adapter 3.0.10, Svelte Vite plugin 5.1.1, sqlite 5.1.1, and TypeScript 5.9.3 remain compatible. Vite and TypeScript are restricted to their selected minor lines; the lockfile records exact installations.

This is a conservative security update, not an upgrade to every latest major. [Vite 6.4 still receives security patches](https://vite.dev/releases). [SvelteKit 3 requires configuration migration, Vite 8, and TypeScript 6](https://svelte.dev/docs/kit/migrating-to-sveltekit-3); that broader migration was deferred while the current application already fails checks. Markdown 14's latest patch preserves its existing major API.

## Security and reproducibility

- `npm audit`: **28 findings before → 0 after**, including development dependencies, verified after `npm ci`. This describes known npm advisories at review time, not a guarantee of safety.
- Explicit overrides select PostCSS 8.5.30, Rollup 4.64.7, cookie 0.7.2 under SvelteKit, and postcss-selector-parser 7.1.6 under typography. Remove these overrides when parent packages reliably select patched versions. The parser override crosses a major boundary; representative generated typography CSS was compared byte-for-byte before and after and was identical.
- Removed unused adapter-auto, Autoprefixer, and direct PostCSS declarations. Tailwind 4 uses its Vite integration; typography remains because the editor and articles use it.
- Replaced the unpinned `npx svelte-sitemap` build command with a dependency-free Node script. The latest sitemap package introduced an unpatched `braces` dependency chain. The script discovers built HTML, encodes URLs, and excludes 404 pages; `npm test` checks this behavior.
- GitHub Actions are pinned to verified release commits: checkout 7.0.1, setup-node 7.1.0, upload-pages-artifact 5.0.0, deploy-pages 5.0.1. CI uses `.nvmrc`, `npm ci`, and `npm test`, with read-only repository permissions.
- Pinned the external dotLottie script to 2.7.12 instead of `@latest`.

## Validation and remaining issues

Passed: clean installation, npm audit, sitemap test, SQLite in-memory parameterized insert/read, Markdown rendering, and typography CSS compatibility comparison. The existing `site.db` file was unchanged.

The initial application checks failed before updating. These historical failures were repaired in the follow-ups below:

- `npm run check`: the same nine errors remain (scroll state typing, missing navigation label, and SimpleMDE editor types). Warnings increased from nine to ten with the newer checker.
- `npm run build`: Tailwind 4 integration is incomplete. The baseline failed on component `@apply top-0`; the final run stops earlier on `@apply prose` in `src/routes/edit/preview.css`. Typography is not registered in the global CSS, and component styles lack the required Tailwind references. No successful full production build or deployment was verified.

These application changes were left for a separate repair rather than rewriting the user's existing work during a dependency update. The new sitemap was tested with fixture HTML; it could not run as the production postbuild step because the build fails first.

Remaining maintenance risks outside npm audit: [node-sqlite3 is archived](https://github.com/TryGhost/node-sqlite3) and its installer is deprecated; the vendored SimpleMDE 1.11.2 bundle and external dotLottie player are not covered by the npm lockfile audit. The player package is deprecated in favor of `@lottiefiles/dotlottie-wc`. Replacing these requires separate API and browser validation.

## Local-run follow-up

Fixed the Tailwind compilation errors by placing daisyUI component classes directly on markup, registering typography in `src/app.css`, and referencing that stylesheet from the editor preview CSS. Removed the unused homepage button rule. The homepage, `/blog`, and `/edit?post=new` now return HTTP 200 in development; `/edit` requires a post parameter and intentionally returns 404 without one. `npm test` passes. The production build compiles the CSS and JavaScript, then fails during prerendering on `/blog/a`: the existing placeholder post loader compares newly created objects using `includes`, so it always returns 404. That separate route bug remains unresolved.

## Release 0.1.0

The release preparation resolves the remaining failures described above: the fake post list and placeholder article route were removed at the user's request, scroll state is reactive, navigation has accessible labels, and the editor has types and cleans up its polling interval. The homepage navigation is restored. The static adapter uses `404.html` as its fallback so it preserves the prerendered homepage and JSON-LD; the custom domain is included in the build through `static/CNAME`. The local database is excluded from Git.

Final release validation: `npm run check` reports zero errors and zero warnings; the sitemap test passes; `npm run build` completes including sitemap generation; `npm audit` reports zero vulnerabilities. The generated homepage retains the current Inter metadata and navigation, and the sitemap uses `https://kevincampos.com.br/` while excluding 404 pages. The posts API returns an empty list, and the placeholder `/blog/a` article is absent. These successful results supersede the earlier validation failures.
