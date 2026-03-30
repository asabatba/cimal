# Cimal

This SilverBullet plug renders a prebuilt `.cimal` terrain pack as a 3D terrain preview built from the Copernicus 30 m DEM at `s3://copernicus-dem-30m/`. You build the pack once from a GPX source, store it in the SilverBullet space, and then load that compact artifact quickly in an iframe widget.

## Features

- Builds compact `.cimal` packs from GPX URLs or GPX files in the SilverBullet space.
- Inserts a `cimal` code widget block that points at a `.cimal` pack file.
- Loads the surrounding Copernicus DEM tiles from the public AWS bucket.
- Renders the route as an interactive Three.js scene with orbit controls and basic route stats.

## Usage

1. Build the plug:

```shell
pnpm install
pnpm run build
```

1. In SilverBullet, install the plug from the `PLUG.md` URL or symlink the repo into your `Library/` namespace.
2. Run `Cimal: Build pack from GPX` and choose a GPX source plus output `.cimal` path.
3. Run `Cimal: Insert widget` and point it at the generated `.cimal` file.
4. If you just updated the plug, run `Plugs: Update` or `Plugs: Reload` once so SilverBullet refreshes commands and widgets.

You can also write the widget block manually:

````markdown
```cimal
Library/Cimal/track.cimal
```
````

The build step fetches the GPX, derives a padded bounding box around the route, pulls the required Copernicus tiles, simplifies and terrain-snaps the track, and writes a compact `.cimal` pack. The widget then reads that pack directly for fast repeat loads.

## Development

The plug is split into modular TypeScript files under `src/`:

- GPX parsing and input normalization
- Copernicus DEM tile loading and sampling
- Terrain payload generation and `.cimal` pack encoding
- `.cimal` pack decoding
- Three.js iframe viewer generation
- SilverBullet command and widget hooks
The compiled plug artifact is `cimal.plug.js`.
