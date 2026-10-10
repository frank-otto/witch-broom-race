// Environment that travels with the camera: purple starry sky, huge moon, layered fog cards, god rays,
// fireflies/wisps, falling leaves, distant lightning, biome colour grading (fog/sky/ground/lights).
import * as THREE from 'three';
import { rand, canvasTex, glowTexture, clamp } from './util.js';

export const QUALITY = {
  low:   { pr: 0.85, bloom: 0,    stars: 500,  ff: 50,  leaves: 36,  fog: 4,  rays: 3, decor: 0.55, particles: 0.45, msaa: 0 },
  mid:   { pr: 1.0,  bloom: 0.85, stars: 900,  ff: 110, leaves: 80,  fog: 6,  rays: 5, decor: 0.8,  particles: 0.7,  msaa: 0 },
  high:  { pr: 1.5,  bloom: 1.0,  stars: 1400, ff: 170, leaves: 120, fog: 8,  rays: 7, decor: 1.0,  particles: 1.0,  msaa: 4 },
  ultra: { pr: 2.0,  bloom: 1.12, stars: 2200, ff: 260, leaves: 180, fog: 10, rays: 9, decor: 1.25, particles: 1.35, msaa: 4 }
};

export const MOON_DIR = new THREE.Vector3(0.30, 0.25, -1).normalize();

export const BIOMES = {
  grave:   { fog: 0x2d1c4e, dens: 0.019, hor: [0.32, 0.09, 0.36], mid: [0.08, 0.02, 0.18], ground: 0x5a4a78, hs: 0x7a6ac0, hg: 0x1c1024, hemi: 1.15, moon: 1.5, rays: 0.65, leaves: 0.35, ff: [0.55, 1.0, 0.75], ray: [0.75, 0.8, 1.0] },
  forest:  { fog: 0x3e1f26, dens: 0.021, hor: [0.50, 0.17, 0.10], mid: [0.12, 0.03, 0.14], ground: 0x5a3a26, hs: 0x9a6a8a, hg: 0x2c1408, hemi: 1.15, moon: 1.25, rays: 1.0, leaves: 1.0, ff: [1.0, 0.78, 0.32], ray: [1.0, 0.82, 0.6] },
  village: { fog: 0x222548, dens: 0.017, hor: [0.24, 0.13, 0.40], mid: [0.06, 0.03, 0.17], ground: 0x40405e, hs: 0x6a7ac8, hg: 0x161020, hemi: 1.1, moon: 1.6, rays: 0.55, leaves: 0.45, ff: [1.0, 0.85, 0.5], ray: [0.8, 0.85, 1.0] },
  canyon:  { fog: 0x22123a, dens: 0.015, hor: [0.30, 0.07, 0.42], mid: [0.07, 0.02, 0.16], ground: 0x3a2850, hs: 0x7a58c0, hg: 0x140a1c, hemi: 1.0, moon: 1.1, rays: 0.35, leaves: 0.12, ff: [0.7, 0.55, 1.0], ray: [0.8, 0.7, 1.0] },
  storm:   { fog: 0x181430, dens: 0.02, hor: [0.16, 0.08, 0.30], mid: [0.04, 0.02, 0.10], ground: 0x2c2640, hs: 0x6a60b0, hg: 0x100c18, hemi: 0.9, moon: 0.6, rays: 0.15, leaves: 0.25, ff: [0.7, 0.8, 1.0], ray: [0.8, 0.8, 1.0] }
};

function makeSky() {
  const geo = new THREE.SphereGeometry(400, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { flash: { value: 0 }, time: { value: 0 }, hor: { value: new THREE.Vector3(0.3, 0.08, 0.3) }, mid: { value: new THREE.Vector3(0.08, 0.02, 0.18) }, md: { value: MOON_DIR.clone() } },
    vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vP; uniform float flash; uniform float time; uniform vec3 hor; uniform vec3 mid; uniform vec3 md;
      void main(){
        float h = vP.y;
        vec3 top = vec3(0.016,0.006,0.05);
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.16, h));
        c = mix(c, top, smoothstep(0.16, 0.6, h));
        float m = max(dot(vP, md), 0.0);
        c += vec3(0.6,0.36,0.24) * pow(m, 40.0) * 0.55 + vec3(0.30,0.12,0.36) * pow(m, 5.0) * 0.35;
        // faint aurora-like bands
        float b = sin(vP.x * 6.0 + time * 0.05) * sin(vP.z * 4.0 - time * 0.04);
        c += vec3(0.10,0.03,0.16) * smoothstep(0.4, 1.0, b) * smoothstep(0.05, 0.35, h) * (1.0 - smoothstep(0.35, 0.7, h));
        c += vec3(0.75,0.72,1.0) * flash * (0.35 + 0.65 * smoothstep(0.0, 0.5, h));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`
  });
  const m = new THREE.Mesh(geo, mat); m.renderOrder = -10; return m;
}

function makeStars(n) {
  const pos = new Float32Array(n * 3), sz = new Float32Array(n), ph = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const th = rand(0, Math.PI * 2), y = Math.pow(Math.random(), 0.7) * 0.9 + 0.08;
    const r = Math.sqrt(1 - y * y);
    pos[i * 3] = Math.cos(th) * r * 350; pos[i * 3 + 1] = y * 350; pos[i * 3 + 2] = Math.sin(th) * r * 350;
    sz[i] = Math.random() < 0.06 ? rand(2.6, 4.4) : rand(0.8, 2.0); ph[i] = rand(0, 6.28);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('size', new THREE.BufferAttribute(sz, 1)); g.setAttribute('phase', new THREE.BufferAttribute(ph, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { time: { value: 0 }, pr: { value: 1 }, dim: { value: 1 } },
    vertexShader: `attribute float size; attribute float phase; uniform float time; uniform float pr; varying float vA;
      void main(){ vA = 0.55 + 0.45 * sin(time * (1.3 + phase * 0.4) + phase * 7.0); gl_PointSize = size * pr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `varying float vA; uniform float dim; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * dim; gl_FragColor = vec4(vec3(1.0,0.93,0.98) * a * vA, a * vA); }`
  });
  const p = new THREE.Points(g, m); p.frustumCulled = false; p.renderOrder = -9; return p;
}

function makeMoon() {
  const g = new THREE.Group();
  const tex = canvasTex(512, 512, (c) => {
    const cx = 256, cy = 256, r = 150;
    const mg = c.createRadialGradient(cx - 40, cy - 40, 10, cx, cy, r);
    mg.addColorStop(0, '#fffaf0'); mg.addColorStop(0.6, '#ffe9c0'); mg.addColorStop(1, '#f0c890');
    c.fillStyle = mg; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.fill();
    c.save(); c.beginPath(); c.arc(cx, cy, r, 0, 7); c.clip();
    for (const [x, y, rr, a] of [[200, 200, 34, 0.16], [300, 270, 26, 0.14], [230, 320, 20, 0.12], [320, 180, 14, 0.12], [170, 280, 12, 0.1], [280, 350, 30, 0.1], [350, 300, 10, 0.12]]) {
      const cg = c.createRadialGradient(x + 4, y + 4, 1, x, y, rr); cg.addColorStop(0, `rgba(150,110,80,${a})`); cg.addColorStop(1, 'rgba(150,110,80,0)');
      c.fillStyle = cg; c.beginPath(); c.arc(x, y, rr, 0, 7); c.fill();
    }
    const sh = c.createRadialGradient(cx + 70, cy + 70, r * 0.6, cx, cy, r * 1.15); sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(120,60,40,0.35)');
    c.fillStyle = sh; c.fillRect(0, 0, 512, 512); c.restore();
  });
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, fog: false, depthWrite: false, color: new THREE.Color(1.55, 1.42, 1.25) }));
  moon.scale.set(64, 64, 1); g.add(moon);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,220,170,0.9)', 'rgba(255,140,90,0.22)'), fog: false, depthWrite: false, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5 }));
  halo.scale.set(190, 190, 1); g.add(halo);
  const cloudTex = canvasTex(256, 64, (c) => {
    c.filter = 'blur(6px)';
    for (let i = 0; i < 40; i++) { const x = 40 + i * 4.4 + rand(-6, 6), y = 32 + rand(-5, 5), r = rand(14, 24); const cg = c.createRadialGradient(x, y, 0, x, y, r); cg.addColorStop(0, 'rgba(30,12,48,0.24)'); cg.addColorStop(1, 'rgba(30,12,48,0)'); c.fillStyle = cg; c.fillRect(0, 0, 256, 64); }
  });
  const clouds = [];
  for (let i = 0; i < 4; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex, fog: false, depthWrite: false, transparent: true, opacity: 0.9 }));
    s.scale.set(rand(120, 180), rand(18, 28), 1); s.position.set(rand(-60, 60), rand(-24, 16), 3 + i); s.userData.v = rand(1.5, 3) * (i % 2 ? 1 : -1);
    g.add(s); clouds.push(s);
  }
  g.userData.clouds = clouds; g.userData.halo = halo; g.userData.disc = moon;
  return g;
}

export function makeFogTex() {
  return canvasTex(512, 256, (c) => {
    for (let i = 0; i < 80; i++) {
      const x = rand(0, 512), y = rand(80, 225), r = rand(30, 95);
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(215,190,240,0.20)'); g.addColorStop(1, 'rgba(215,190,240,0)');
      c.fillStyle = g; c.fillRect(0, 0, 512, 256);
    }
    c.globalCompositeOperation = 'destination-in';
    const v = c.createLinearGradient(0, 0, 0, 256); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(0.45, 'rgba(0,0,0,0.6)'); v.addColorStop(0.85, 'rgba(0,0,0,1)'); v.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = v; c.fillRect(0, 0, 512, 256);
    const h = c.createLinearGradient(0, 0, 512, 0); h.addColorStop(0, 'rgba(0,0,0,0)'); h.addColorStop(0.15, 'rgba(0,0,0,1)'); h.addColorStop(0.85, 'rgba(0,0,0,1)'); h.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = h; c.fillRect(0, 0, 512, 256);
  });
}
function rayTex() {
  return canvasTex(128, 512, (c) => {
    const id = c.createImageData(128, 512);
    for (let y = 0; y < 512; y++) for (let x = 0; x < 128; x++) {
      const u = (x - 64) / 64, v = y / 512;
      const a = Math.exp(-u * u * 5) * Math.pow(1 - v, 0.6) * Math.min(1, v * 8) * (0.75 + 0.25 * Math.sin(x * 0.4 + y * 0.01));
      const k = (y * 128 + x) * 4; id.data[k] = 255; id.data[k + 1] = 255; id.data[k + 2] = 255; id.data[k + 3] = Math.round(255 * a);
    }
    c.putImageData(id, 0, 0);
  });
}
function groundTex() {
  const t = canvasTex(512, 512, (c) => {
    c.fillStyle = '#9a90a8'; c.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 2600; i++) {
      const x = rand(0, 512), y = rand(0, 512), r = rand(2, 22), l = rand(0.25, 0.9);
      c.fillStyle = `rgba(${Math.round(90 * l)},${Math.round(84 * l)},${Math.round(100 * l)},0.35)`;
      c.beginPath(); c.ellipse(x, y, r, r * rand(0.4, 1), rand(0, 3), 0, 7); c.fill();
    }
    c.strokeStyle = 'rgba(40,30,40,0.35)'; c.lineWidth = 1.2;
    for (let i = 0; i < 900; i++) { const x = rand(0, 512), y = rand(0, 512); c.beginPath(); c.moveTo(x, y); c.lineTo(x + rand(-3, 3), y - rand(4, 10)); c.stroke(); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}
function makeBolt(len = 46, w = 0.14) {
  const pts = []; let x = 0, y = 0; const steps = 14;
  for (let i = 0; i <= steps; i++) { pts.push(new THREE.Vector3(x, y, rand(-0.6, 0.6))); x += rand(-1.6, 1.6) * (len / 46); y -= len / steps; }
  const geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 70, w, 4, false);
  return new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 3.0, 4.2), transparent: true, opacity: 0, fog: false, depthWrite: false, blending: THREE.AdditiveBlending }));
}
export { makeBolt };

export function createWorld(scene, qualityName) {
  const q = QUALITY[qualityName] || QUALITY.high;
  const W = { root: new THREE.Group(), t: 0, q, nextBolt: 3, boltT: -10, flash: 0, flashT: -10, flashAmp: 0, onThunder: null, biome: 'grave', mix: {}, stormy: 0 };
  scene.add(W.root);
  W.fog = new THREE.FogExp2(BIOMES.grave.fog, BIOMES.grave.dens); scene.fog = W.fog;
  W.sky = makeSky(); W.root.add(W.sky);
  W.stars = makeStars(q.stars); W.root.add(W.stars);
  W.moon = makeMoon(); W.root.add(W.moon);
  // lights
  W.hemi = new THREE.HemisphereLight(0x7a6ac0, 0x1c1024, 1.1); W.root.add(W.hemi);
  W.moonLight = new THREE.DirectionalLight(0xc8d0ff, 1.5); W.root.add(W.moonLight); W.root.add(W.moonLight.target);
  W.rim = new THREE.DirectionalLight(0xff8a50, 0.5); W.root.add(W.rim); W.root.add(W.rim.target);
  W.flashLight = new THREE.DirectionalLight(0xd8dcff, 0); W.root.add(W.flashLight); W.root.add(W.flashLight.target);
  // ground
  const gt = groundTex(); gt.repeat.set(20, 20);
  W.ground = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), new THREE.MeshStandardMaterial({ color: BIOMES.grave.ground, map: gt, roughness: 1, metalness: 0, emissive: 0x1a1030, emissiveIntensity: 1 }));
  W.ground.rotation.x = -Math.PI / 2; W.root.add(W.ground);
  // fog cards
  const fogT = makeFogTex();
  W.fogCards = [];
  for (let i = 0; i < q.fog; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(90, 13), new THREE.MeshBasicMaterial({ map: fogT, transparent: true, depthWrite: false, opacity: 0.5, color: 0xc8b8e8, fog: false }));
    m.position.set(rand(-20, 20), rand(1.5, 4.5), -i * (110 / q.fog) - 10); m.userData.base = rand(0.22, 0.42); m.renderOrder = 2;
    W.root.add(m); W.fogCards.push(m);
  }
  // god rays
  const rt = rayTex();
  W.rays = [];
  for (let i = 0; i < q.rays; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: rt, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, fog: false, color: 0xffe0b0 }));
    m.userData = { w: rand(4, 9), h: rand(34, 48), ph: rand(0, 6), base: rand(0.12, 0.2) };
    m.scale.set(m.userData.w, m.userData.h, 1);
    m.position.set((i % 2 ? 1 : -1) * rand(3, 26), 0, -rand(20, 120)); m.rotation.z = -0.42; m.renderOrder = 3;
    W.root.add(m); W.rays.push(m);
  }
  // fireflies / wisps
  {
    const n = q.ff, pos = new Float32Array(n * 3), ph = new Float32Array(n), sz = new Float32Array(n);
    for (let i = 0; i < n; i++) { pos[i * 3] = rand(-22, 22); pos[i * 3 + 1] = rand(0.4, 9); pos[i * 3 + 2] = rand(-75, 5); ph[i] = rand(0, 6.28); sz[i] = rand(0.08, 0.2); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('phase', new THREE.BufferAttribute(ph, 1)); g.setAttribute('size', new THREE.BufferAttribute(sz, 1));
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { time: { value: 0 }, scale: { value: 500 }, col: { value: new THREE.Vector3(1, 0.8, 0.35) } },
      vertexShader: `attribute float phase; attribute float size; uniform float time; uniform float scale; varying float vA;
        void main(){ vec3 p = position + vec3(sin(time*0.7+phase*3.0)*0.6, sin(time*1.1+phase)*0.4, cos(time*0.6+phase*2.0)*0.6);
          vec4 mv = modelViewMatrix * vec4(p,1.0); vA = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(time * 2.3 + phase * 5.0), 2.0);
          vA *= smoothstep(4.0, 12.0, -mv.z);
          gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying float vA; uniform vec3 col; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; gl_FragColor = vec4(col * a * vA * 1.6, a * vA); }`
    });
    W.ff = new THREE.Points(g, m); W.ff.frustumCulled = false; W.root.add(W.ff);
  }
  // falling leaves
  {
    const n = q.leaves;
    const lg = new THREE.PlaneGeometry(0.26, 0.17); 
    const lm = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 0.8, emissive: 0x401808, emissiveIntensity: 0.6 });
    W.leaves = new THREE.InstancedMesh(lg, lm, n); W.leaves.frustumCulled = false;
    const cols = [0xd2601a, 0xb83a12, 0xe08a20, 0x8a3a10, 0xc8a030];
    W.leafData = [];
    for (let i = 0; i < n; i++) {
      W.leaves.setColorAt(i, new THREE.Color(cols[i % cols.length]));
      W.leafData.push({ x: rand(-16, 16), y: rand(0, 11), z: rand(-60, 4), r: rand(0, 6), w: rand(1, 4), ph: rand(0, 6), fall: rand(0.6, 1.3) });
    }
    W.root.add(W.leaves);
  }
  // rain streaks (storm / canyon)
  {
    const n = Math.round(q.ff * 2.2), pos = new Float32Array(n * 6);
    W.rainData = []; for (let i = 0; i < n; i++) W.rainData.push({ x: rand(-18, 18), y: rand(0, 16), z: rand(-50, 4), v: rand(24, 32) });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    W.rain = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xb8b0ff, transparent: true, opacity: 0, depthWrite: false, fog: false }));
    W.rain.frustumCulled = false; W.root.add(W.rain);
  }
  // distant / scripted bolts
  W.bolt = makeBolt(); W.bolt.visible = false; W.root.add(W.bolt);
  W.cur = { fog: new THREE.Color(BIOMES.grave.fog), dens: BIOMES.grave.dens, hor: new THREE.Vector3(...BIOMES.grave.hor), mid: new THREE.Vector3(...BIOMES.grave.mid), ground: new THREE.Color(BIOMES.grave.ground), hs: new THREE.Color(BIOMES.grave.hs), hg: new THREE.Color(BIOMES.grave.hg), hemi: 1.1, moon: 1.5, rays: 0.6, leaves: 0.3, ff: new THREE.Vector3(...BIOMES.grave.ff), ray: new THREE.Color(...BIOMES.grave.ray) };
  setBiome(W, 'grave', true);
  return W;
}

export function setBiome(W, name, snap = false) {
  W.biome = name; W.target = BIOMES[name] || BIOMES.grave;
  if (snap) blendBiome(W, 1);
}
const _c = new THREE.Color(), _v = new THREE.Vector3();
function blendBiome(W, k) {
  const B = W.target, C = W.cur;
  C.fog.lerp(_c.set(B.fog), k); C.dens += (B.dens - C.dens) * k;
  C.hor.lerp(_v.set(...B.hor), k); C.mid.lerp(_v.set(...B.mid), k);
  C.ground.lerp(_c.set(B.ground), k); C.hs.lerp(_c.set(B.hs), k); C.hg.lerp(_c.set(B.hg), k);
  C.hemi += (B.hemi - C.hemi) * k; C.moon += (B.moon - C.moon) * k; C.rays += (B.rays - C.rays) * k; C.leaves += (B.leaves - C.leaves) * k;
  C.ff.lerp(_v.set(...B.ff), k); C.ray.lerp(_c.setRGB(...B.ray), k);
}

// distant lightning (soft) or a scripted near flash
export function strike(W, opts = {}) {
  const near = !!opts.near;
  if (!opts.noBolt) {
    W.root.remove(W.bolt); W.bolt.geometry.dispose(); W.bolt.material.dispose();
    W.bolt = makeBolt(); W.root.add(W.bolt);
    const cz = W.camZ || 0, cx = W.camX || 0;
    W.bolt.position.set(cx + rand(-60, 60), 50, cz - rand(80, 130));
    W.boltT = W.t;
  }
  W.flashT = W.t; W.flashAmp = near ? 1 : opts.amp || 0.55;
  if (W.onThunder && !opts.silent) setTimeout(() => W.onThunder(near), near ? 30 : rand(250, 900));
}

export function updateWorld(W, dt, camera, opts = {}) {
  W.t += dt;
  const cx = camera.position.x, cz = camera.position.z; W.camX = cx; W.camZ = cz;
  blendBiome(W, 1 - Math.exp(-dt * 0.9));
  const C = W.cur;
  W.fog.color.copy(C.fog); W.fog.density = C.dens * (opts.fogMul || 1);
  const su = W.sky.material.uniforms; su.time.value = W.t; su.hor.value.copy(C.hor); su.mid.value.copy(C.mid);
  W.sky.position.set(cx, 0, cz); W.stars.position.set(cx, 0, cz); W.stars.material.uniforms.time.value = W.t;
  W.stars.material.uniforms.dim.value = 1 - W.stormy * 0.5;
  W.moon.position.set(cx + MOON_DIR.x * 330, MOON_DIR.y * 330 + 4, cz + MOON_DIR.z * 330);
  for (const c of W.moon.userData.clouds) { c.position.x += c.userData.v * dt; if (c.position.x > 110) c.position.x = -110; if (c.position.x < -110) c.position.x = 110; c.material.opacity = 0.75 + W.stormy * 0.25; }
  W.moon.userData.halo.material.opacity = 0.42 + 0.06 * Math.sin(W.t * 0.7);
  W.hemi.color.copy(C.hs); W.hemi.groundColor.copy(C.hg);
  W.moonLight.position.set(cx + MOON_DIR.x * 50, 40, cz + MOON_DIR.z * 50); W.moonLight.target.position.set(cx, 0, cz - 10);
  W.rim.position.set(cx - 20, 8, cz + 30); W.rim.target.position.set(cx, 2, cz - 10);
  W.flashLight.position.set(cx - 10, 40, cz - 30); W.flashLight.target.position.set(cx, 0, cz);
  // ground follows camera, snapped so the texture stays world-anchored
  W.ground.position.set(Math.round(cx / 16) * 16, 0, Math.round(cz / 16) * 16 - 100);
  W.ground.material.color.copy(C.ground);
  // fog cards in front
  for (const m of W.fogCards) {
    if (m.position.z > cz + 2) { m.position.z -= 112; m.position.x = cx + rand(-20, 20); m.position.y = rand(1.2, 4.5); }
    const d = cz - m.position.z;
    m.material.opacity = m.userData.base * clamp((d - 3) / 14, 0, 1) * (opts.fogCards ?? 1) * (1 - W.stormy * 0.4);
    m.material.color.copy(C.fog).multiplyScalar(2.2).lerp(_c.set(0xd0c0f0), 0.22 * (1 - W.stormy));
  }
  // god rays
  for (const m of W.rays) {
    if (m.position.z > cz - 8) { m.position.z -= rand(100, 130); m.position.x = cx + (Math.random() < 0.5 ? -1 : 1) * rand(4, 26); }
    m.position.y = m.userData.h * 0.45;
    const d = cz - m.position.z;
    const fade = clamp((d - 10) / 25, 0, 1) * clamp((140 - d) / 40, 0, 1);
    m.material.opacity = m.userData.base * C.rays * fade * (0.75 + 0.25 * Math.sin(W.t * 0.8 + m.userData.ph)) * (opts.raysMul || 1);
    m.material.color.copy(C.ray);
  }
  // fireflies
  {
    const p = W.ff.geometry.attributes.position, a = p.array;
    for (let i = 0; i < a.length; i += 3) {
      if (a[i + 2] > cz + 4) { a[i + 2] -= 80; a[i] = cx + rand(-22, 22); a[i + 1] = rand(0.4, 9); }
      if (a[i + 2] < cz - 80) a[i + 2] += 80;
      if (a[i] < cx - 24) a[i] += 48; if (a[i] > cx + 24) a[i] -= 48;
    }
    p.needsUpdate = true;
    W.ff.material.uniforms.time.value = W.t; W.ff.material.uniforms.col.value.copy(C.ff);
  }
  // leaves
  {
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler(), S = new THREE.Vector3(), P = new THREE.Vector3();
    const n = W.leafData.length, active = Math.round(n * clamp(C.leaves, 0, 1));
    for (let i = 0; i < n; i++) {
      const L = W.leafData[i];
      L.y -= L.fall * dt; L.x += Math.sin(W.t * 1.3 + L.ph) * dt * 0.8; L.r += L.w * dt;
      if (L.y < 0 || L.z > cz + 3) { L.y = rand(5, 12); L.z = cz - rand(5, 60); L.x = cx + rand(-16, 16); }
      if (L.x < cx - 18) L.x += 36; if (L.x > cx + 18) L.x -= 36;
      E.set(L.r, L.r * 0.7 + L.ph, Math.sin(L.r) * 0.8); Q.setFromEuler(E);
      P.set(L.x, L.y, L.z); const cd = P.distanceTo(camera.position); S.setScalar(i < active ? clamp((cd - 2.5) / 4, 0, 1) : 0);
      M.compose(P, Q, S); W.leaves.setMatrixAt(i, M);
    }
    W.leaves.instanceMatrix.needsUpdate = true;
  }
  // rain
  {
    const on = W.stormy > 0.05;
    W.rain.visible = on; W.rain.material.opacity = 0.32 * W.stormy * (1 + W.flash);
    if (on) {
      const a = W.rain.geometry.attributes.position.array; let k = 0;
      for (const r of W.rainData) {
        r.y -= r.v * dt; if (r.y < 0 || r.z > cz + 3) { r.y = rand(8, 16); r.z = cz - rand(2, 50); r.x = cx + rand(-18, 18); }
        if (r.z < cz - 52) r.z += 52;
        a[k++] = r.x; a[k++] = r.y; a[k++] = r.z; a[k++] = r.x - 0.12; a[k++] = r.y + 0.9; a[k++] = r.z - 0.35;
      }
      W.rain.geometry.attributes.position.needsUpdate = true;
    }
  }
  // ambient lightning
  if (!opts.noAmbient && W.t > W.nextBolt) { strike(W, { amp: 0.4 + W.stormy * 0.4 }); W.nextBolt = W.t + (W.stormy > 0.5 ? rand(2.5, 5) : rand(9, 16)); }
  const ft = W.t - W.flashT;
  const f = ft < 0.6 ? W.flashAmp * (ft < 0.07 ? 1 : ft < 0.13 ? 0.25 : ft < 0.22 ? 0.9 : Math.max(0, 1 - (ft - 0.22) / 0.38) * 0.6) : 0;
  W.flash = f;
  su.flash.value = f * 0.55;
  W.flashLight.intensity = f * 2.2;
  W.hemi.intensity = C.hemi * (1 + f * 0.8);
  W.moonLight.intensity = C.moon;
  const bt = W.t - W.boltT;
  W.bolt.visible = bt < 0.32; W.bolt.material.opacity = bt < 0.32 ? (bt < 0.1 || (bt > 0.16 && bt < 0.26) ? 1 : 0.25) : 0;
}
