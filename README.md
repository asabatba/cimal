# Cimal

This SilverBullet plug renders a `.cimal` terrain pack as a 3D terrain preview built from the Copernicus 30 m DEM at `s3://copernicus-dem-30m/`. You can build the pack explicitly into the SilverBullet space, or point a widget at a GPX source and let Cimal generate and cache the `.cimal` artifact under `Library/.cache/cimal`.

## Features

- Builds compact `.cimal` packs from GPX URLs or GPX files in the SilverBullet space.
- Inserts a `cimal` code widget block that points at a `.cimal` pack file.
- Auto-builds and caches `.cimal` packs when a widget body contains a GPX source.
- Loads the surrounding Copernicus DEM tiles from the public AWS bucket.
- Supports per-widget visual styles: `classic`, `hiking-map`, `worldcover`, `vaporwave`, `lava`, `water-world`, `dracula`, `pastel`, and `rainbow`.
- Bakes OpenHikingMap imagery into new `.cimal` packs and uses it on the 3D terrain surface when `style: hiking-map` is selected.
- Bakes ESA WorldCover 2021 v200 land-cover imagery into new `.cimal` packs and uses it on the 3D terrain surface when `style: worldcover` is selected.
- Supports optional WorldCover cleanup modes: `raw` and `no-islands`.
- Supports hiking-map imagery presets: `low`, `standard`, `high`, and `ultra`.
- Supports per-widget terrain shapes: `smooth` and `triangular`.
- Falls back to classic elevation-based terrain shading when a pack has no baked hiking-map imagery.
- Highlights likely water bodies in blue in the non-hiking-map shaded styles using DEM-based detection.
- Renders the route as an interactive Three.js scene with orbit controls.

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
style: classic
```
````

Or use a prebuilt pack with the baked hiking-map texture that was already embedded during pack creation:

````markdown
```cimal
Library/Cimal/track.cimal
style: hiking-map
```
````

Or use a prebuilt pack with the baked ESA WorldCover texture. This style now defaults to faceted terrain unless you override it:

````markdown
```cimal
Library/Cimal/track.cimal
style: worldcover
terrain-shape: triangular
```
````

Or build a WorldCover-backed pack from GPX while removing small isolated land-cover patches:

````markdown
```cimal
Library/Tracks/track.gpx
style: worldcover
worldcover-processing: no-islands
```
````

Or point the widget directly at a GPX source and let Cimal cache the generated pack:

````markdown
```cimal
Library/Tracks/track.gpx
style: hiking-map
hiking-map-resolution: high
```
````

Or use one of the alternative viewer styles on any widget instance:

````markdown
```cimal
Library/Cimal/track.cimal
style: dracula
```
````

The build step fetches the GPX, derives a padded bounding box around the route, pulls the required Copernicus tiles, simplifies and terrain-snaps the track, and writes a compact `.cimal` pack. The widget then reads that pack directly for fast repeat loads.

The first meaningful line in a `cimal` widget body is always the `.cimal` path or GPX source. Add optional `style: classic|hiking-map|worldcover|vaporwave|lava|water-world|dracula|pastel|rainbow`, `terrain-shape: smooth|triangular`, and `worldcover-processing: raw|no-islands` lines below it to choose the look per widget instance. If you omit them, Cimal defaults to `style: classic`, `worldcover-processing: raw`, and then applies the selected theme's default terrain shape. If the theme does not specify one, `terrain-shape: smooth` is used.

When the widget body points at a GPX source and `style: hiking-map` is active, you can also add `hiking-map-resolution: low|standard|high|ultra`. That resolution is baked into the generated `.cimal` pack and cached separately per preset. Higher presets use more network requests and produce larger embedded textures.

When the widget body points at a GPX source and `style: worldcover` is active, you can also add `worldcover-processing: raw|no-islands`. The `no-islands` mode runs a pixel-preserving connected-component cleanup pass over the sampled WorldCover class raster and replaces small isolated class patches with the dominant surrounding class before the PNG is baked into the `.cimal` pack.

`terrain-shape: triangular` changes only the viewer rendering. It keeps the same DEM grid and imagery UV mapping, but renders the top surface as faceted, non-smoothed triangles. An explicit `terrain-shape` in the widget always overrides any theme default.

When the widget body points at an existing `.cimal` pack, `hiking-map-resolution` and `worldcover-processing` are not valid because the baked imagery is already fixed in the pack. Rebuild the pack from the GPX with the desired preset instead.

New `.cimal` packs now attempt to bake OpenHikingMap imagery during pack creation. If that imagery fetch or bake step fails, the pack is still written with terrain and track data only, and the viewer falls back to the built-in classic relief tint for `style: hiking-map`.

When `style: worldcover` is active on a GPX source, Cimal instead bakes ESA WorldCover 2021 v200 land-cover imagery from the AWS Open Data bucket. That raster is sampled to the terrain grid with nearest-neighbor resampling and rendered with nearest-neighbor filtering in the viewer, so the overlay stays intentionally pixelated instead of blurred.

When `style: worldcover` is active on an existing `.cimal` pack, the viewer expects baked ESA WorldCover imagery to already be present in that pack. If it is missing, the widget shows a warning instead of silently switching to another imagery source.

ESA WorldCover attribution in the viewer uses: `© ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021) processed by ESA WorldCover consortium`.

The shaded styles (`classic`, `vaporwave`, `lava`, `water-world`, `dracula`, `pastel`, and `rainbow`) also apply a heuristic water-body detector that looks for large contiguous flat plateaus in the DEM and paints them blue. This is intentionally conservative and may miss some smaller lakes or reservoirs rather than over-painting terraces and other flat terrain. The `hiking-map` style does not add this synthetic blue overlay.

If a `cimal` widget contains a raw GPX URL or GPX space path, Cimal now builds a `.cimal` pack automatically and caches it under `Library/.cache/cimal/packs/`. The cache key includes the GPX content hash plus relevant bake options such as style, hiking-map resolution, and WorldCover processing mode, so editing a space GPX file or changing a bake option produces a fresh cached pack.

## Development

The plug is split into modular TypeScript files under `src/`:

- GPX parsing and input normalization
- Copernicus DEM tile loading and sampling
- Terrain payload generation and `.cimal` pack encoding
- `.cimal` pack decoding
- Three.js iframe viewer generation
- SilverBullet command and widget hooks

The iframe viewer is now authored under `src/viewer/`:

- `src/viewer/index.ts` contains the browser-side viewer app
- `src/viewer/template.html` is the viewer HTML shell
- `src/viewer/styles.css` contains the viewer CSS
- `src/generated/viewerBundle.ts` is generated by `pnpm run build:viewer` and should not be edited by hand

`pnpm run build` now regenerates the embedded viewer bundle first and then writes the compiled plug artifact to `cimal.plug.js`.
