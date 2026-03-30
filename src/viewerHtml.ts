import { COPERNICUS_S3_ROOT, THREE_JS_VERSION } from "./constants.ts";
import type { ErrorPayload, TerrainPayload } from "./types.ts";

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function toEmbeddedJson(payload: ErrorPayload | TerrainPayload): string {
	return JSON.stringify(payload).replaceAll("<", "\\u003c");
}

export function buildViewerDataUrl(
	payload: ErrorPayload | TerrainPayload,
): string {
	const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(payload.title)}</title>
    <style>
      :root {
        color-scheme: dark;
        --bg-1: #0d151b;
        --bg-2: #1d2c38;
        --card: rgba(11, 18, 23, 0.78);
        --card-border: rgba(255, 255, 255, 0.12);
        --accent: #ff7b32;
        --accent-soft: #ffd08f;
        --text: #eaf2f5;
        --muted: #9db0bb;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
        color: var(--text);
        background:
          radial-gradient(circle at top, rgba(255, 123, 50, 0.16), transparent 30%),
          linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 70%);
        overflow: hidden;
      }

      #app {
        position: relative;
        width: 100vw;
        height: 100vh;
      }

      #scene {
        width: 100%;
        height: 100%;
        display: block;
        outline: none;
      }

      .hud,
      .attribution,
      .error-card {
        position: absolute;
        backdrop-filter: blur(16px);
        background: var(--card);
        border: 1px solid var(--card-border);
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.34);
      }

      .hud {
        top: 16px;
        left: 16px;
        max-width: min(380px, calc(100vw - 32px));
        padding: 14px 16px;
        border-radius: 18px;
      }

      .hud h1 {
        margin: 0 0 4px;
        font-size: 1rem;
        line-height: 1.2;
      }

      .hud p {
        margin: 0;
        font-size: 0.88rem;
        color: var(--muted);
      }

      .stats {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-top: 14px;
      }

      .stat {
        padding: 10px 12px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.04);
      }

      .stat strong {
        display: block;
        font-size: 1rem;
        color: var(--accent-soft);
      }

      .stat span {
        display: block;
        margin-top: 2px;
        font-size: 0.78rem;
        color: var(--muted);
      }

      .attribution {
        right: 16px;
        bottom: 16px;
        max-width: min(420px, calc(100vw - 32px));
        padding: 10px 12px;
        border-radius: 14px;
        font-size: 0.78rem;
        line-height: 1.4;
        color: var(--muted);
      }

      .attribution a {
        color: var(--accent-soft);
      }

      .error-shell {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
      }

      .error-card {
        width: min(560px, 100%);
        padding: 22px 24px;
        border-radius: 22px;
      }

      .error-card h1 {
        margin: 0 0 10px;
        font-size: 1.2rem;
      }

      .error-card p {
        margin: 0 0 10px;
        color: var(--muted);
        line-height: 1.5;
      }

      code {
        font-family: "IBM Plex Mono", Consolas, monospace;
      }

      @media (max-width: 720px) {
        .hud {
          left: 12px;
          top: 12px;
          right: 12px;
          max-width: none;
        }

        .stats {
          grid-template-columns: 1fr 1fr;
        }

        .attribution {
          left: 12px;
          right: 12px;
          bottom: 12px;
          max-width: none;
        }
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script id="payload" type="application/json">${toEmbeddedJson(payload)}</script>
    <script type="module">
      const payload = JSON.parse(document.getElementById("payload").textContent);
      const app = document.getElementById("app");
      const escapeText = (value) => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");

      if (payload.message) {
        app.innerHTML = \`
          <div class="error-shell">
            <article class="error-card">
              <h1>\${escapeText(payload.title)}</h1>
              <p>\${escapeText(payload.message)}</p>
              \${payload.details ? \`<p><code>\${escapeText(payload.details)}</code></p>\` : ""}
              <p>Use a direct <code>.gpx</code> URL in the widget body, for example:</p>
              <p><code>https://example.com/track.gpx</code></p>
            </article>
          </div>
        \`;
      } else {
        const [THREE, { OrbitControls }] = await Promise.all([
          import("https://esm.sh/three@${THREE_JS_VERSION}"),
          import("https://esm.sh/three@${THREE_JS_VERSION}/examples/jsm/controls/OrbitControls.js"),
        ]);

        const {
          title,
          sourceUrl,
          bounds,
          metersPerDegree,
          grid,
          track,
          stats,
        } = payload;

        const spanX = (bounds.maxLon - bounds.minLon) * metersPerDegree.lon;
        const spanZ = (bounds.maxLat - bounds.minLat) * metersPerDegree.lat;
        const sceneSpan = Math.max(spanX, spanZ);
        const elevationRange = Math.max(1, grid.maxElevation - grid.minElevation);
        const exaggeration = Math.min(6, Math.max(1.6, Math.max(spanX, spanZ) / (elevationRange * 18)));
        const fogDensity = THREE.MathUtils.clamp(0.075 / Math.max(sceneSpan, 1), 0.000045, 0.00014);

        app.innerHTML = \`
          <canvas id="scene"></canvas>
          <aside class="hud">
            <h1>\${escapeText(title)}</h1>
            <p>\${escapeText(sourceUrl)}</p>
            <div class="stats">
              <div class="stat"><strong>\${stats.distanceKm.toFixed(1)} km</strong><span>Track length</span></div>
              <div class="stat"><strong>\${Math.round(stats.totalAscent)} m</strong><span>Total ascent</span></div>
              <!--<div class="stat"><strong>\${grid.minElevation.toFixed(0)}-\${grid.maxElevation.toFixed(0)} m</strong><span>Terrain range</span></div>
              <div class="stat"><strong>\${stats.tileCount}</strong><span>Copernicus tiles</span></div>-->
            </div>
          </aside>
          <footer class="attribution" style="display: none;">
            Terrain: <a href="https://copernicus-dem-30m.s3.amazonaws.com/readme.html" target="_blank" rel="noreferrer">${COPERNICUS_S3_ROOT}</a>.
            Click the map to focus it. Drag to orbit, wheel to zoom, right-click to pan. Keyboard: arrows orbit, WASD pan, R/F zoom.
          </footer>
        \`;

        const canvas = document.getElementById("scene");
        canvas.tabIndex = 0;
        canvas.setAttribute("aria-label", "3D terrain map");
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x102029, fogDensity);

        const camera = new THREE.PerspectiveCamera(52, 1, 1, 200000);
        camera.position.set(spanX * 0.6, Math.max(spanX, spanZ) * 0.45, spanZ * 0.8);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.target.set(0, elevationRange * exaggeration * 0.18, 0);
        controls.keyPanSpeed = Math.max(20, Math.min(spanX, spanZ) * 0.03);

        function panCamera(deltaX, deltaZ) {
          const forward = new THREE.Vector3();
          camera.getWorldDirection(forward);
          forward.y = 0;
          if (forward.lengthSq() < 1e-6) {
            forward.set(0, 0, -1);
          } else {
            forward.normalize();
          }

          const right = new THREE.Vector3();
          right.crossVectors(forward, camera.up).normalize();

          const panOffset = right.multiplyScalar(deltaX).add(forward.multiplyScalar(deltaZ));
          camera.position.add(panOffset);
          controls.target.add(panOffset);
        }

        function zoomCamera(delta) {
          const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
          const currentDistance = offset.length();
          const nextDistance = Math.max(80, currentDistance + delta);
          offset.setLength(nextDistance);
          camera.position.copy(controls.target).add(offset);
        }

        function handleKeyboard(event) {
          if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
            return;
          }

          const orbitStep = 0.14;
          const panStep = Math.max(12, Math.min(spanX, spanZ) * 0.018);
          const zoomStep = Math.max(30, Math.min(spanX, spanZ) * 0.04);

          switch (event.key) {
            case "ArrowLeft":
              controls.rotateLeft(orbitStep);
              break;
            case "ArrowRight":
              controls.rotateLeft(-orbitStep);
              break;
            case "ArrowUp":
              controls.rotateUp(orbitStep * 0.75);
              break;
            case "ArrowDown":
              controls.rotateUp(-orbitStep * 0.75);
              break;
            case "w":
            case "W":
              panCamera(0, panStep);
              break;
            case "s":
            case "S":
              panCamera(0, -panStep);
              break;
            case "a":
            case "A":
              panCamera(panStep, 0);
              break;
            case "d":
            case "D":
              panCamera(-panStep, 0);
              break;
            case "r":
            case "R":
              zoomCamera(-zoomStep);
              break;
            case "f":
            case "F":
              zoomCamera(zoomStep);
              break;
            default:
              return;
          }

          event.preventDefault();
          controls.update();
        }

        canvas.addEventListener("pointerdown", () => canvas.focus());
        canvas.addEventListener("keydown", handleKeyboard);

        scene.add(new THREE.HemisphereLight(0xdaf2ff, 0x1b272b, 1.2));
        const sun = new THREE.DirectionalLight(0xfff1d6, 1.2);
        sun.position.set(-spanX * 0.5, Math.max(spanX, spanZ), spanZ * 0.4);
        scene.add(sun);

        const terrainStops = [
          { t: 0.0, color: new THREE.Color(0x2f5a38) },
          { t: 0.24, color: new THREE.Color(0x5f8148) },
          { t: 0.52, color: new THREE.Color(0xae8d5a) },
          { t: 0.78, color: new THREE.Color(0x757982) },
          { t: 1.0, color: new THREE.Color(0xe6e2d9) },
        ];

        function sampleTerrainColor(normalized) {
          if (normalized <= terrainStops[0].t) {
            return terrainStops[0].color.clone();
          }

          for (let index = 1; index < terrainStops.length; index += 1) {
            const previous = terrainStops[index - 1];
            const current = terrainStops[index];
            if (normalized <= current.t) {
              const localT = (normalized - previous.t) / Math.max(0.0001, current.t - previous.t);
              return previous.color.clone().lerp(current.color, THREE.MathUtils.smoothstep(localT, 0, 1));
            }
          }

          return terrainStops[terrainStops.length - 1].color.clone();
        }

        function buildTrackRibbon(points, width, heightOffset) {
          if (points.length < 2) {
            return null;
          }

          const halfWidth = width / 2;
          const up = new THREE.Vector3(0, 1, 0);
          const centerPoints = points.map((point) =>
            new THREE.Vector3(
              point.x,
              (point.y - grid.minElevation) * exaggeration + heightOffset,
              point.z,
            )
          );

          const positions = new Float32Array(centerPoints.length * 2 * 3);
          const indices = [];
          const tangent = new THREE.Vector3();
          const side = new THREE.Vector3();
          const lateral = new THREE.Vector3();

          for (let index = 0; index < centerPoints.length; index += 1) {
            const previous = centerPoints[Math.max(0, index - 1)];
            const next = centerPoints[Math.min(centerPoints.length - 1, index + 1)];

            tangent.subVectors(next, previous);
            tangent.y = 0;
            if (tangent.lengthSq() < 1e-6) {
              tangent.set(0, 0, -1);
            } else {
              tangent.normalize();
            }

            side.crossVectors(up, tangent);
            if (side.lengthSq() < 1e-6) {
              side.set(1, 0, 0);
            } else {
              side.normalize();
            }

            const center = centerPoints[index];
            lateral.copy(side).multiplyScalar(halfWidth);
            const left = center.clone().add(lateral);
            const right = center.clone().sub(lateral);

            const baseOffset = index * 6;
            positions[baseOffset] = left.x;
            positions[baseOffset + 1] = left.y;
            positions[baseOffset + 2] = left.z;
            positions[baseOffset + 3] = right.x;
            positions[baseOffset + 4] = right.y;
            positions[baseOffset + 5] = right.z;

            if (index < centerPoints.length - 1) {
              const baseIndex = index * 2;
              indices.push(baseIndex, baseIndex + 1, baseIndex + 2);
              indices.push(baseIndex + 2, baseIndex + 1, baseIndex + 3);
            }
          }

          const ribbonGeometry = new THREE.BufferGeometry();
          ribbonGeometry.setIndex(indices);
          ribbonGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
          ribbonGeometry.computeVertexNormals();
          return ribbonGeometry;
        }

        const geometry = new THREE.BufferGeometry();
        const vertexCount = grid.width * grid.height;
        const positions = new Float32Array(vertexCount * 3);
        const colors = new Float32Array(vertexCount * 3);
        const indices = [];

        let pointer = 0;
        for (let row = 0; row < grid.height; row += 1) {
          const z = ((row / (grid.height - 1)) - 0.5) * spanZ;
          for (let column = 0; column < grid.width; column += 1) {
            const x = ((column / (grid.width - 1)) - 0.5) * spanX;
            const elevation = grid.elevations[row * grid.width + column];
            const normalized = (elevation - grid.minElevation) / elevationRange;
            const y = (elevation - grid.minElevation) * exaggeration;

            positions[pointer] = x;
            positions[pointer + 1] = y;
            positions[pointer + 2] = z;

            const color = sampleTerrainColor(Math.pow(normalized, 0.92));
            colors[pointer] = color.r;
            colors[pointer + 1] = color.g;
            colors[pointer + 2] = color.b;

            pointer += 3;
          }
        }

        for (let row = 0; row < grid.height - 1; row += 1) {
          for (let column = 0; column < grid.width - 1; column += 1) {
            const topLeft = row * grid.width + column;
            const topRight = topLeft + 1;
            const bottomLeft = topLeft + grid.width;
            const bottomRight = bottomLeft + 1;
            indices.push(topLeft, bottomLeft, topRight);
            indices.push(topRight, bottomLeft, bottomRight);
          }
        }

        geometry.setIndex(indices);
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.computeVertexNormals();

        const terrainMaterial = new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 0.94,
          metalness: 0.04,
        });
        const terrain = new THREE.Mesh(geometry, terrainMaterial);
        scene.add(terrain);

        const trackRibbonWidth = THREE.MathUtils.clamp(sceneSpan * 0.012, 14, 60);
        const trackHeightOffset = THREE.MathUtils.clamp(sceneSpan * 0.0035, 12, 24);
        const trackGeometry = buildTrackRibbon(track, trackRibbonWidth, trackHeightOffset);
        if (trackGeometry) {
          const trackRibbon = new THREE.Mesh(
            trackGeometry,
            new THREE.MeshStandardMaterial({
              color: 0xff7b32,
              roughness: 0.42,
              metalness: 0.05,
              emissive: 0x4a220c,
              emissiveIntensity: 0.35,
              side: THREE.DoubleSide,
            }),
          );
          scene.add(trackRibbon);
        }

        const markerGeometry = new THREE.SphereGeometry(Math.max(6, Math.min(spanX, spanZ) * 0.008), 18, 18);
        const startMaterial = new THREE.MeshStandardMaterial({ color: 0x9fe870 });
        const finishMaterial = new THREE.MeshStandardMaterial({ color: 0xffd35a });
        const start = track[0];
        const end = track[track.length - 1];

        const startMarker = new THREE.Mesh(markerGeometry, startMaterial);
        startMarker.position.set(
          start.x,
          (start.y - grid.minElevation) * exaggeration + trackHeightOffset + 10,
          start.z,
        );
        scene.add(startMarker);

        const endMarker = new THREE.Mesh(markerGeometry, finishMaterial);
        endMarker.position.set(
          end.x,
          (end.y - grid.minElevation) * exaggeration + trackHeightOffset + 10,
          end.z,
        );
        scene.add(endMarker);

        const ringGeometry = new THREE.RingGeometry(Math.max(10, Math.min(spanX, spanZ) * 0.01), Math.max(16, Math.min(spanX, spanZ) * 0.016), 48);
        const ring = new THREE.Mesh(
          ringGeometry,
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18, side: THREE.DoubleSide }),
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 2;
        scene.add(ring);

        function resize() {
          const width = canvas.clientWidth || window.innerWidth;
          const height = canvas.clientHeight || window.innerHeight;
          renderer.setSize(width, height, false);
          camera.aspect = width / Math.max(height, 1);
          camera.updateProjectionMatrix();
        }

        function animate() {
          requestAnimationFrame(animate);
          ring.rotation.z += 0.0025;
          controls.update();
          renderer.render(scene, camera);
        }

        window.addEventListener("resize", resize);
        resize();
        animate();
      }
    </script>
  </body>
</html>`;

	return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}
