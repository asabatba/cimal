# AGENTS

## Purpose

This repository contains the `cimal` SilverBullet plug. It builds and renders `.cimal` terrain packs from GPX inputs using Copernicus 30 m DEM data and a Three.js-based viewer.

## Repo Layout

- `src/` contains the TypeScript source.
- `src/index.ts` is the plug entrypoint referenced by `cimal.plug.yaml`.
- `cimal.plug.yaml` defines commands, slash commands, widget registration, and lifecycle hooks.
- `cimal.plug.js` and `cimal.plug.js.map` are generated build artifacts.
- `PLUG.md` is the SilverBullet plug manifest page.
- `README.md` documents user-facing behavior and development commands.

## Working Rules

- Prefer targeted edits inside `src/`; avoid editing generated bundle files by hand.
- Treat `cimal.plug.js` and `cimal.plug.js.map` as build outputs. Regenerate them with the build step after source changes.
- Preserve the existing module split. This repo already separates GPX parsing, DEM loading, pack encoding/decoding, runtime hooks, and viewer HTML.
- Keep changes consistent with the SilverBullet plug model declared in `cimal.plug.yaml`.
- Avoid introducing new dependencies unless the change clearly requires them.

## Commands

- Install dependencies: `pnpm install`
- Build the plug: `pnpm run build`
- Format checked files in `src/`: `pnpm run format`

## Validation

- After code changes, run `pnpm run build`.
- If formatting is affected, run `pnpm run format`.
- There is currently no dedicated automated test suite in this repo, so build success is the primary validation unless you add tests.

## Implementation Notes

- The plug requires network fetch access at runtime to retrieve GPX sources and Copernicus DEM tiles.
- Widget behavior supports both prebuilt `.cimal` files and raw GPX sources that are converted into cached packs.
- If you change command names, widget behavior, or setup flow, update both `README.md` and `PLUG.md` when needed.

## When Making Changes

- Favor minimal, surgical edits over broad refactors.
- Maintain backwards compatibility for existing `cimal` widget blocks unless the task explicitly calls for a breaking change.
- If a change affects generated output shape or caching behavior, document the impact in `README.md`.
