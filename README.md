# Cimal

This SilverBullet plug renders a `.cimal` terrain pack as a 3D terrain preview built from the Copernicus 30 m DEM at `s3://copernicus-dem-30m/`. You can build the pack explicitly into the SilverBullet space, or point a widget at a GPX source and let Cimal generate and cache the `.cimal` artifact under `Library/.cache/cimal`.

## Features

- Builds compact `.cimal` packs from GPX URLs or GPX files in the SilverBullet space.
- Inserts a `cimal` code widget block that points at a `.cimal` pack file.
- Auto-builds and caches `.cimal` packs when a widget body contains a GPX source.
- Loads the surrounding Copernicus DEM tiles from the public AWS bucket.
- Renders the route as an interactive Three.js scene with orbit controls and basic route stats.

## Usage

1. Build the plug:

```shell
pnpm install
pnpm run build
```

1. In SilverBullet, install the plug from the `PLUG.md` URL or symlink the repo into your `Library/` namespace.
2. Either run `Cimal: Build pack from GPX` and choose a GPX source plus output `.cimal` path, or insert a widget that points directly at a GPX source.
3. If you built an explicit pack, run `Cimal: Insert widget` and point it at the generated `.cimal` file.
4. If you just updated the plug, run `Plugs: Update` or `Plugs: Reload` once so SilverBullet refreshes commands and widgets.

You can also write the widget block manually:

````markdown
```cimal
Library/Cimal/track.cimal
```
````

Or point the widget directly at a GPX source and let Cimal cache the generated pack:

````markdown
```cimal
Library/Tracks/track.gpx
```
````

The build step fetches the GPX, derives a padded bounding box around the route, pulls the required Copernicus tiles, simplifies and terrain-snaps the track, and writes a compact `.cimal` pack. The widget then reads that pack directly for fast repeat loads.

If a `cimal` widget contains a raw GPX URL or GPX space path, Cimal now builds a `.cimal` pack automatically and caches it under `Library/.cache/cimal/packs/`. The cache key includes the GPX content hash, so editing a space GPX file produces a fresh cached pack.

## Development

The plug is split into modular TypeScript files under `src/`:

- GPX parsing and input normalization
- Copernicus DEM tile loading and sampling
- Terrain payload generation and `.cimal` pack encoding
- `.cimal` pack decoding
- Three.js iframe viewer generation
- SilverBullet command and widget hooks
The compiled plug artifact is `cimal.plug.js`.
