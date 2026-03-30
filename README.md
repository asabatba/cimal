# GPX Terrain Plug

This SilverBullet plug renders a remote GPX track on top of a 3D terrain preview built from the Copernicus 30 m DEM at `s3://copernicus-dem-30m/`. The widget fetches the GPX, loads the surrounding Copernicus tiles, samples a terrain mesh, and renders the result with Three.js in an iframe widget.

## Features

- Prompts for a GPX URL and inserts a `gpx-terrain` code widget block.
- Supports direct GPX URLs and rewrites GitHub `blob` URLs to their raw file equivalents.
- Loads the surrounding Copernicus DEM tiles from the public AWS bucket.
- Renders the route as an interactive Three.js scene with orbit controls and basic route stats.

## Usage

1. Build the plug:

```shell
pnpm install
pnpm run build
```

1. In SilverBullet, install the plug from the `PLUG.md` URL or symlink the repo into your `Library/` namespace.
2. Run the `GPX Terrain: Insert 3D widget` command and paste a direct GPX URL.
3. If you just updated the plug, run `Plugs: Update` or `Plugs: Reload` once so SilverBullet refreshes commands and widgets.

You can also write the widget block manually:

````markdown
```gpx-terrain
https://example.com/track.gpx
```
````

Compatibility aliases are also registered for ````gpxterrain```` and ````gpx3d```` fences.

The plug will fetch the GPX, derive a padded bounding box around the route, pull the required Copernicus tiles, and render the terrain preview inline.

## Development

The plug is split into modular TypeScript files under `src/`:

- GPX parsing and input normalization
- Copernicus DEM tile loading and sampling
- Terrain payload generation
- Three.js iframe viewer generation
- SilverBullet command and widget hooks
The compiled plug artifact is `terrain-gpx.plug.js`.
