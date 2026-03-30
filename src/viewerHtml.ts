import { COPERNICUS_S3_ROOT, THREE_JS_VERSION } from "./constants.ts";
import type { ErrorPayload, TerrainPayload } from "./types.ts";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function toEmbeddedJson(payload: ErrorPayload | TerrainPayload): string {
  return JSON.stringify(payload).replaceAll("<", "\\u003c");
}

export function buildViewerDataUrl(payload: ErrorPayload | TerrainPayload): string {
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
          import("https://unpkg.com/three@${THREE_JS_VERSION}/build/three.module.js"),
          import("https://unpkg.com/three@${THREE_JS_VERSION}/examples/jsm/controls/OrbitControls.js"),
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
        const elevationRange = Math.max(1, grid.maxElevation - grid.minElevation);
        const exaggeration = Math.min(6, Math.max(1.6, Math.max(spanX, spanZ) / (elevationRange * 18)));

        app.innerHTML = \`
          <canvas id="scene"></canvas>
          <aside class="hud">
            <h1>\${escapeText(title)}</h1>
            <p>\${escapeText(sourceUrl)}</p>
            <div class="stats">
              <div class="stat"><strong>\${stats.distanceKm.toFixed(1)} km</strong><span>Track length</span></div>
              <div class="stat"><strong>\${Math.round(stats.totalAscent)} m</strong><span>Total ascent</span></div>
              <div class="stat"><strong>\${grid.minElevation.toFixed(0)}-\${grid.maxElevation.toFixed(0)} m</strong><span>Terrain range</span></div>
              <div class="stat"><strong>\${stats.tileCount}</strong><span>Copernicus tiles</span></div>
            </div>
          </aside>
          <footer class="attribution">
            Terrain: <a href="https://copernicus-dem-30m.s3.amazonaws.com/readme.html" target="_blank" rel="noreferrer">${COPERNICUS_S3_ROOT}</a>.
            Orbit with drag, zoom with the wheel, pan with right-click or two-finger drag.
          </footer>
        \`;

        const canvas = document.getElementById("scene");
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x102029, 0.00024);

        const camera = new THREE.PerspectiveCamera(52, 1, 1, 200000);
        camera.position.set(spanX * 0.6, Math.max(spanX, spanZ) * 0.45, spanZ * 0.8);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.target.set(0, elevationRange * exaggeration * 0.18, 0);

        scene.add(new THREE.HemisphereLight(0xdaf2ff, 0x1b272b, 1.2));
        const sun = new THREE.DirectionalLight(0xfff1d6, 1.2);
        sun.position.set(-spanX * 0.5, Math.max(spanX, spanZ), spanZ * 0.4);
        scene.add(sun);

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

            const low = new THREE.Color(0x355c3d);
            const high = new THREE.Color(0xd2c08f);
            const color = low.lerp(high, Math.pow(normalized, 0.8));
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

        const trackPositions = new Float32Array(track.length * 3);
        for (let index = 0; index < track.length; index += 1) {
          const point = track[index];
          trackPositions[index * 3] = point.x;
          trackPositions[index * 3 + 1] = (point.y - grid.minElevation) * exaggeration + 7;
          trackPositions[index * 3 + 2] = point.z;
        }

        const trackGeometry = new THREE.BufferGeometry();
        trackGeometry.setAttribute("position", new THREE.BufferAttribute(trackPositions, 3));
        const trackLine = new THREE.Line(
          trackGeometry,
          new THREE.LineBasicMaterial({ color: 0xff7b32 }),
        );
        scene.add(trackLine);

        const markerGeometry = new THREE.SphereGeometry(Math.max(6, Math.min(spanX, spanZ) * 0.008), 18, 18);
        const startMaterial = new THREE.MeshStandardMaterial({ color: 0x9fe870 });
        const finishMaterial = new THREE.MeshStandardMaterial({ color: 0xffd35a });
        const start = track[0];
        const end = track[track.length - 1];

        const startMarker = new THREE.Mesh(markerGeometry, startMaterial);
        startMarker.position.set(start.x, (start.y - grid.minElevation) * exaggeration + 16, start.z);
        scene.add(startMarker);

        const endMarker = new THREE.Mesh(markerGeometry, finishMaterial);
        endMarker.position.set(end.x, (end.y - grid.minElevation) * exaggeration + 16, end.z);
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
