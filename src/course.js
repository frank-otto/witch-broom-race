// Endless course along -Z: biome scenery (pooled clones) + gameplay patterns (stars, rings, gates, gravestones,
// branches, giant jack-o'-lanterns, chimneys, lantern lines, bat swarms, telegraphed lightning, pickups).
import * as THREE from 'three';
import { rand, srand, pick, clamp, canvasTex, glowTexture } from './util.js';
import { makeFaceMaterial, makePumpkin } from './pumpkins.js';
import { makeBolt } from './world.js';

export const XW = 6.5, YMIN = 0.9, YMAX = 7.4, PR = 0.55;
const V = new THREE.Vector3();

// ---------------- shared assets ----------------
function makeTree(mat, scale = 1, twist = 0, vines = null) {
  const g = new THREE.Group();
  const branch = (from, dir, len, rad, depth) => {
    const to = from.clone().add(dir.clone().multiplyScalar(len));
    const mid = from.clone().lerp(to, 0.5).add(new THREE.Vector3(srand(-0.2, 0.2) - twist * 0.2, srand(-0.05, 0.12), srand(-0.2, 0.2)).multiplyScalar(len));
    const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
    const tube = new THREE.TubeGeometry(curve, 5, rad, 5, false);
    const p = tube.attributes.position, uv = tube.attributes.uv;
    for (let i = 0; i < p.count; i++) { const t = uv.getX(i); const c = curve.getPoint(t); const k = 1 - 0.55 * t; p.setXYZ(i, c.x + (p.getX(i) - c.x) * k, c.y + (p.getY(i) - c.y) * k, c.z + (p.getZ(i) - c.z) * k); }
    tube.computeVertexNormals();
    g.add(new THREE.Mesh(tube, mat));
    if (vines && depth <= 2 && srand() < 0.5) {
      const vl = srand(1.2, 3.2);
      const vc = new THREE.QuadraticBezierCurve3(to, to.clone().add(new THREE.Vector3(srand(-0.3, 0.3), -vl * 0.5, srand(-0.3, 0.3))), to.clone().add(new THREE.Vector3(srand(-0.2, 0.2), -vl, 0)));
      g.add(new THREE.Mesh(new THREE.TubeGeometry(vc, 6, 0.025, 4, false), vines));
    }
    if (depth <= 0) return;
    const n = depth > 2 ? 2 : srand() < 0.5 ? 2 : 3;
    for (let i = 0; i < n; i++) {
      const d = dir.clone().add(new THREE.Vector3(srand(-0.9, 0.9), srand(-0.1, 0.5), srand(-0.5, 0.5))).normalize();
      if (d.y < -0.2) d.y = -0.2;
      branch(to, d.normalize(), len * srand(0.55, 0.8), rad * 0.55, depth - 1);
    }
  };
  branch(new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(srand(-0.15, 0.15), 1, 0).normalize(), 2.6, 0.24, 4);
  g.scale.setScalar(scale);
  return g;
}
function stoneShape(w, h) {
  const s = new THREE.Shape(); s.moveTo(-w / 2, 0); s.lineTo(-w / 2, h - w / 2); s.absarc(0, h - w / 2, w / 2, Math.PI, 0, true); s.lineTo(w / 2, 0); s.lineTo(-w / 2, 0);
  return s;
}
function makeStoneMesh(A, w, h, cross = true) {
  const g = new THREE.Group();
  const geo = new THREE.ExtrudeGeometry(stoneShape(w, h), { depth: 0.3, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 2, curveSegments: 10 });
  geo.translate(0, 0, -0.15);
  g.add(new THREE.Mesh(geo, A.stone));
  if (cross) {
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.1, h * 0.28, 0.05), A.moss); c1.position.set(0, h * 0.6, 0.2); g.add(c1);
    const c2 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.32, w * 0.09, 0.05), A.moss); c2.position.set(0, h * 0.66, 0.2); g.add(c2);
  }
  return g;
}
function windowTex(cols, rows, lit = 0.6, warm = true) {
  const t = canvasTex(256, 256, (g) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, 256, 256);
    const cw = 256 / cols, rh = 256 / rows;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      if (Math.random() > lit) continue;
      const x = c * cw + cw * 0.3, y = r * rh + rh * 0.25, w = cw * 0.4, h = rh * 0.5;
      g.shadowColor = warm ? '#ffa030' : '#a0c0ff'; g.shadowBlur = 14;
      g.fillStyle = warm ? (Math.random() < 0.5 ? '#ffc060' : '#ff9a30') : '#c0d8ff';
      g.fillRect(x, y, w, h); g.fillStyle = 'rgba(0,0,0,0.8)'; g.fillRect(x + w / 2 - 1, y, 2, h); g.fillRect(x, y + h / 2 - 1, w, 2);
    }
  });
  return t;
}
function cloneOf(proto) { return proto.clone(true); }

function buildAssets(kids) {
  const A = {};
  A.bark = new THREE.MeshStandardMaterial({ color: 0x2a1a24, roughness: 1, emissive: 0x0c0410, emissiveIntensity: 1 });
  A.vine = new THREE.MeshStandardMaterial({ color: 0x1e3a1a, roughness: 0.9, emissive: 0x0a1a06 });
  A.stone = new THREE.MeshStandardMaterial({ color: 0x7a7488, roughness: 0.95, emissive: 0x141020, emissiveIntensity: 1 });
  A.moss = new THREE.MeshStandardMaterial({ color: 0x5a6a4a, roughness: 1 });
  A.iron = new THREE.MeshStandardMaterial({ color: 0x2a2434, metalness: 0.7, roughness: 0.4, emissive: 0x0e0814, emissiveIntensity: 1 });
  A.ironGlow = new THREE.MeshStandardMaterial({ color: 0x8a50ff, emissive: 0x7a30ff, emissiveIntensity: 2.2, roughness: 0.4 });
  A.wall = new THREE.MeshStandardMaterial({ color: 0x3e3044, roughness: 0.95, emissive: 0xffffff, emissiveIntensity: 1.6, emissiveMap: windowTex(4, 3, 0.55) });
  A.wall2 = new THREE.MeshStandardMaterial({ color: 0x34303e, roughness: 0.95, emissive: 0xffffff, emissiveIntensity: 1.6, emissiveMap: windowTex(3, 4, 0.5) });
  A.roof = new THREE.MeshStandardMaterial({ color: 0x2a1a30, roughness: 0.8, emissive: 0x0a0410 });
  A.castle = new THREE.MeshStandardMaterial({ color: 0x2a2236, roughness: 1, emissive: 0xffffff, emissiveIntensity: 1.5, emissiveMap: windowTex(6, 10, 0.25) });
  A.rock = new THREE.MeshStandardMaterial({ color: 0x2e2640, roughness: 0.95, flatShading: true, emissive: 0x0a0614, emissiveIntensity: 1 });
  A.crystal = new THREE.MeshStandardMaterial({ color: 0x9a70ff, emissive: 0x7a40ff, emissiveIntensity: 2.4, roughness: 0.2 });
  A.crystal2 = new THREE.MeshStandardMaterial({ color: 0x60e0ff, emissive: 0x20b0ff, emissiveIntensity: 2.2, roughness: 0.2 });
  A.lampGlow = new THREE.SpriteMaterial({ map: glowTexture('rgba(255,210,130,1)', 'rgba(255,130,40,0.35)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  A.purpleGlow = new THREE.SpriteMaterial({ map: glowTexture('rgba(220,160,255,1)', 'rgba(140,60,255,0.35)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  A.lampCore = new THREE.MeshStandardMaterial({ color: 0xffd080, emissive: 0xffa040, emissiveIntensity: 3 });
  // pumpkins
  A.jackMats = (kids ? ['cute', 'happy', 'grin'] : ['evil', 'grin', 'wild']).map(f => makeFaceMaterial(f, { W: 512, ei: 2.6 }));
  A.jacks = A.jackMats.map((m, i) => { const p = makePumpkin(m, 1, i === 1 ? 'tall' : 'n'); return p; });
  // trees (graveyard thin, forest twisted with vines)
  A.trees = []; for (let i = 0; i < 4; i++) A.trees.push(makeTree(A.bark, 1, 0));
  A.ftrees = []; for (let i = 0; i < 5; i++) A.ftrees.push(makeTree(A.bark, 1, 1, A.vine));
  // decor stones
  A.stones = []; for (let i = 0; i < 5; i++) A.stones.push(makeStoneMesh(A, srand(0.8, 1.3), srand(1.2, 2.0), srand() < 0.6));
  // crypt
  A.crypt = (() => {
    const g = new THREE.Group();
    const b = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.8, 3.4), A.stone); b.position.y = 1.4; g.add(b);
    const r = new THREE.Mesh(new THREE.ConeGeometry(2.6, 1.6, 4), A.roof); r.position.y = 3.6; r.rotation.y = Math.PI / 4; r.scale.z = 1.1; g.add(r);
    const door = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.8), new THREE.MeshBasicMaterial({ color: 0xb070ff })); door.position.set(0, 0.9, 1.71); g.add(door);
    const gl = new THREE.Sprite(A.purpleGlow); gl.scale.set(4, 4, 1); gl.position.set(0, 1, 2); g.add(gl);
    const cx = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.9, 0.15), A.stone); cx.position.y = 4.7; g.add(cx);
    const cy = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.15, 0.15), A.stone); cy.position.y = 4.85; g.add(cy);
    return g;
  })();
  A.lantern = (() => {
    const g = new THREE.Group();
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 3.2, 8), A.iron); post.position.y = 1.6; g.add(post);
    const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.4, 6), A.lampCore); cage.position.y = 3.3; g.add(cage);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.25, 6), A.iron); cap.position.y = 3.6; g.add(cap);
    const gl = new THREE.Sprite(A.lampGlow); gl.scale.set(3.2, 3.2, 1); gl.position.y = 3.3; g.add(gl);
    return g;
  })();
  A.fence = (() => { // 4 m fence segment along x
    const g = new THREE.Group();
    for (let i = 0; i < 9; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.6, 5), A.iron); b.position.set(-2 + i * 0.5, 1.3, 0); g.add(b); const sp = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.25, 5), A.iron); sp.position.set(-2 + i * 0.5, 2.7, 0); g.add(sp); }
    for (const y of [0.4, 2.2]) { const r = new THREE.Mesh(new THREE.BoxGeometry(4, 0.07, 0.07), A.iron); r.position.y = y; g.add(r); }
    return g;
  })();
  A.house = [0, 1, 2].map(i => {
    const g = new THREE.Group();
    const w = 3 + i * 0.6, h = 3.2 + i * 0.7, d = 3.2;
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), i % 2 ? A.wall2 : A.wall); b.position.y = h / 2; g.add(b);
    const s = new THREE.Shape(); s.moveTo(-w / 2 - 0.3, 0); s.lineTo(0, 1.8 + i * 0.3); s.lineTo(w / 2 + 0.3, 0); s.lineTo(-w / 2 - 0.3, 0);
    const rg = new THREE.ExtrudeGeometry(s, { depth: d + 0.6, bevelEnabled: false }); rg.translate(0, 0, -(d + 0.6) / 2);
    const r = new THREE.Mesh(rg, A.roof); r.position.y = h; g.add(r);
    const ch = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.6, 0.5), A.stone); ch.position.set(w * 0.25, h + 1.2, 0); g.add(ch);
    return g;
  });
  A.tower = (() => {
    const g = new THREE.Group();
    const b = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.6, 9, 12), A.wall2); b.position.y = 4.5; g.add(b);
    const r = new THREE.Mesh(new THREE.ConeGeometry(1.9, 3.6, 12), A.roof); r.position.y = 10.8; g.add(r);
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.8, 4), A.ironGlow); fl.position.y = 13; g.add(fl);
    return g;
  })();
  A.castleBig = (() => {
    const g = new THREE.Group();
    const wall = new THREE.Mesh(new THREE.BoxGeometry(30, 14, 6), A.castle); wall.position.y = 7; g.add(wall);
    for (const [x, h, r] of [[-15, 26, 3], [-6, 34, 2.6], [4, 40, 3.2], [15, 28, 3]]) {
      const t = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.1, h, 12), A.castle); t.position.set(x, h / 2, 0); g.add(t);
      const c = new THREE.Mesh(new THREE.ConeGeometry(r * 1.35, r * 3, 12), A.roof); c.position.set(x, h + r * 1.5, 0); g.add(c);
      const gl = new THREE.Sprite(A.purpleGlow); gl.scale.set(6, 6, 1); gl.position.set(x, h + r * 3, 0); g.add(gl);
    }
    return g;
  })();
  A.rocks = [0, 1, 2, 3].map(i => {
    const g = new THREE.Group();
    const m = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 1), A.rock); m.scale.set(srand(2.5, 4.5), srand(9, 18), srand(2.5, 4.5)); m.position.y = m.scale.y * 0.55; m.rotation.y = srand(0, 3); g.add(m);
    for (let k = 0; k < 3; k++) { const c = new THREE.Mesh(new THREE.OctahedronGeometry(srand(0.4, 0.9)), k % 2 ? A.crystal : A.crystal2); c.scale.y = 2.2; c.position.set(srand(-1.5, 1.5), srand(0.5, 6), srand(1.5, 3)); c.rotation.z = srand(-0.6, 0.6); g.add(c); }
    return g;
  });
  // gameplay assets
  const sShape = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + Math.PI / 2, r = i % 2 ? 0.2 : 0.48; i ? sShape.lineTo(Math.cos(a) * r, Math.sin(a) * r) : sShape.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
  A.starGeo = new THREE.ExtrudeGeometry(sShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.07, bevelSize: 0.05, bevelSegments: 2 }); A.starGeo.center();
  A.starMat = new THREE.MeshStandardMaterial({ color: 0xffd860, emissive: 0xffa010, emissiveIntensity: 1.5, roughness: 0.25, metalness: 0.5 });
  A.starGlow = new THREE.SpriteMaterial({ map: glowTexture('rgba(255,235,160,1)', 'rgba(255,170,40,0.35)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 });
  A.ringGeo = new THREE.TorusGeometry(1.6, 0.13, 12, 56);
  A.ringMat = new THREE.MeshStandardMaterial({ color: 0x80f0ff, emissive: 0x40d0ff, emissiveIntensity: 2.6, roughness: 0.3 });
  A.ringMat2 = new THREE.MeshStandardMaterial({ color: 0xe090ff, emissive: 0xb050ff, emissiveIntensity: 2.4, roughness: 0.3 });
  A.portal = new THREE.SpriteMaterial({ map: canvasTex(256, 256, (g) => { const r = g.createRadialGradient(128, 128, 30, 128, 128, 120); r.addColorStop(0, 'rgba(120,220,255,0)'); r.addColorStop(0.75, 'rgba(140,120,255,0.22)'); r.addColorStop(1, 'rgba(120,220,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 256, 256); g.strokeStyle = 'rgba(200,240,255,0.35)'; g.lineWidth = 3; for (let i = 0; i < 6; i++) { g.beginPath(); g.arc(128, 128, 40 + i * 13, i, i + 2.4); g.stroke(); } }), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  A.batMat = new THREE.MeshStandardMaterial({ color: kids ? 0x7a4ab0 : 0x16101c, roughness: 0.6, emissive: kids ? 0x3a1860 : 0x0c0612, side: THREE.DoubleSide });
  A.batEye = new THREE.MeshBasicMaterial({ color: kids ? 0xffffff : 0xff3a2a });
  A.batPupil = new THREE.MeshBasicMaterial({ color: 0x140818 });
  A.bubble = new THREE.MeshStandardMaterial({ color: 0x9ad8ff, emissive: 0x3070c0, emissiveIntensity: 0.9, transparent: true, opacity: 0.35, roughness: 0.05, metalness: 0.2, depthWrite: false });
  A.icons = {};
  for (const [k, e] of [['shield', '🛡️'], ['magnet', '🧲'], ['x2', '×2']]) {
    A.icons[k] = new THREE.SpriteMaterial({ map: canvasTex(128, 128, (g) => { g.textAlign = 'center'; g.textBaseline = 'middle'; if (k === 'x2') { g.font = '900 70px Arial Black, Arial'; g.fillStyle = '#ffd860'; g.shadowColor = '#ff9a20'; g.shadowBlur = 12; g.fillText('×2', 64, 68); } else { g.font = '84px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.fillText(e, 64, 70); } }), depthWrite: false, transparent: true });
  }
  A.marker = new THREE.MeshBasicMaterial({ map: canvasTex(256, 256, (g) => { const r = g.createRadialGradient(128, 128, 10, 128, 128, 126); r.addColorStop(0, 'rgba(255,255,255,0.9)'); r.addColorStop(0.5, 'rgba(200,160,255,0.35)'); r.addColorStop(0.82, 'rgba(255,255,255,0.95)'); r.addColorStop(0.9, 'rgba(200,120,255,0.5)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 256, 256); }), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false, color: 0xd0a0ff });
  A.column = new THREE.MeshBasicMaterial({ color: 0xb080ff, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  A.scorch = new THREE.MeshBasicMaterial({ map: A.marker.map, color: 0xff9040, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  return A;
}

function makeBat(A, kids) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), A.batMat); body.scale.set(1, 0.9, 1.2); g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), A.batMat); head.position.set(0, 0.12, 0.17); g.add(head);
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 5), A.batMat); ear.position.set(s * 0.08, 0.28, 0.14); g.add(ear);
    const e = new THREE.Mesh(new THREE.SphereGeometry(kids ? 0.06 : 0.035, 8, 6), A.batEye); e.position.set(s * 0.065, 0.15, 0.3); g.add(e);
    if (kids) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 5), A.batPupil); p.position.set(s * 0.065, 0.15, 0.355); g.add(p); }
  }
  const ws = new THREE.Shape(); ws.moveTo(0, 0); ws.lineTo(0.75, 0.28); ws.lineTo(0.95, -0.04); ws.lineTo(0.74, -0.08); ws.lineTo(0.6, -0.22); ws.lineTo(0.42, -0.1); ws.lineTo(0.24, -0.22); ws.lineTo(0, -0.08);
  const wg = new THREE.ShapeGeometry(ws);
  const wL = new THREE.Group(), wR = new THREE.Group();
  const mL = new THREE.Mesh(wg, A.batMat); mL.rotation.x = -Math.PI / 2; wL.add(mL);
  const mR = new THREE.Mesh(wg, A.batMat); mR.rotation.x = -Math.PI / 2; mR.scale.x = -1; wR.add(mR);
  wL.position.x = 0.1; wR.position.x = -0.1; g.add(wL, wR); g.userData.wings = [wL, wR];
  return g;
}

// ---------------- course ----------------
export function createCourse(scene, opts) {
  const C = {
    scene, kids: !!opts.kids, q: opts.q, A: buildAssets(!!opts.kids), root: new THREE.Group(),
    decor: [], pools: {}, ents: [], zones: [{ z: 1e9, name: 'grave' }], decoZ: 20, patZ: -30, time: 0,
    zoneFn: () => 'grave', events: [], noPatterns: false, lastZone: 'grave', boltCD: 0
  };
  scene.add(C.root);
  return C;
}
export function resetCourse(C, startZ, zoneName = 'grave') {
  for (const d of C.decor) release(C, d);
  C.decor = [];
  for (const e of C.ents) removeEnt(C, e);
  C.ents = []; C.zones = [{ z: 1e9, name: zoneName }]; C.lastZone = zoneName;
  C.decoZ = startZ + 20; C.patZ = startZ - 34; C.time = 0; C.events = []; C.boltCD = 2;
}
function getDecor(C, key, build) {
  const pool = C.pools[key] || (C.pools[key] = []);
  const o = pool.pop() || build(); o.userData.key = key; o.visible = true; C.root.add(o); return o;
}
function release(C, o) { C.root.remove(o); (C.pools[o.userData.key] || (C.pools[o.userData.key] = [])).push(o); }
export function biomeAt(C, z) { let n = C.zones[0].name; for (const zz of C.zones) if (z <= zz.z) n = zz.name; return n; }
function zoneFor(C, z) {
  const n = C.zoneFn(z);
  if (n !== C.lastZone) { C.zones.push({ z, name: n }); C.lastZone = n; if (C.zones.length > 12) C.zones.splice(1, 1); }
  return n;
}

function placeDecor(C, z) {
  const A = C.A, dens = C.q.decor, b = zoneFor(C, z);
  const put = (key, build, x, y, zz, s = 1, ry = 0) => { const o = getDecor(C, key, build); o.position.set(x, y, zz); o.scale.setScalar(s); o.rotation.set(0, ry, 0); C.decor.push(o); return o; };
  for (const side of [-1, 1]) {
    const sx = (a, b2) => side * rand(a, b2);
    if (b === 'grave') {
      for (let i = 0; i < Math.round(rand(1, 3) * dens); i++) { const k = (Math.random() * 5) | 0; put('stone' + k, () => cloneOf(A.stones[k]), sx(8, 24), 0, z + rand(-3, 3), rand(1.1, 1.8), rand(-0.4, 0.4)); }
      if (Math.random() < 0.18 * dens) put('crypt', () => cloneOf(A.crypt), sx(14, 26), 0, z, rand(0.9, 1.3), side > 0 ? -0.5 : 0.5);
      if (Math.random() < 0.5 * dens) { const k = (Math.random() * 4) | 0; put('tree' + k, () => cloneOf(A.trees[k]), sx(10, 34), 0, z + rand(-3, 3), rand(1.6, 2.6), rand(0, 6)); }
      if (Math.random() < 0.3) put('lantern', () => cloneOf(A.lantern), side * rand(8, 9.5), 0, z, 1);
    } else if (b === 'forest') {
      for (let i = 0; i < Math.round(rand(1.4, 2.6) * dens); i++) { const k = (Math.random() * 5) | 0; put('ftree' + k, () => cloneOf(A.ftrees[k]), sx(9, 30), 0, z + rand(-3, 3), rand(2.2, 3.4), rand(0, 6)); }
      if (Math.random() < 0.7 * dens) { const k = (Math.random() * 3) | 0; const far = Math.random() < 0.5; const s = far ? rand(2.4, 4.2) : rand(0.8, 1.8); put('jack' + k, () => cloneOf(A.jacks[k]), side * (far ? rand(14, 26) : rand(8, 12)), s * 0.78, z + rand(-2, 2), s, -side * rand(0.2, 0.6)); }
    } else if (b === 'village') {
      if (Math.random() < 0.7 * dens) { const k = (Math.random() * 3) | 0; put('house' + k, () => cloneOf(A.house[k]), sx(10, 18), 0, z + rand(-2, 2), rand(0.9, 1.3), side > 0 ? -Math.PI / 2 + rand(-0.2, 0.2) : Math.PI / 2 + rand(-0.2, 0.2)); }
      if (Math.random() < 0.18 * dens) put('tower', () => cloneOf(A.tower), sx(16, 26), 0, z, rand(0.9, 1.3));
      if (Math.random() < 0.35) put('lantern', () => cloneOf(A.lantern), side * rand(8, 9.5), 0, z, 1);
      if (Math.random() < 0.05) put('castle', () => cloneOf(A.castleBig), side * rand(45, 60), 0, z - 40, rand(1, 1.3), side > 0 ? -0.6 : 0.6);
    } else if (b === 'canyon') {
      for (let i = 0; i < 2; i++) { const k = (Math.random() * 4) | 0; put('rock' + k, () => cloneOf(A.rocks[k]), side * rand(9.5, 13 + i * 6), 0, z + rand(-3, 3), rand(0.9, 1.4), rand(0, 6)); }
    } else {
      if (Math.random() < 0.6 * dens) { const k = (Math.random() * 4) | 0; put('rock' + k, () => cloneOf(A.rocks[k]), sx(12, 30), 0, z + rand(-3, 3), rand(0.6, 1.1), rand(0, 6)); }
      if (Math.random() < 0.4 * dens) { const k = (Math.random() * 4) | 0; put('tree' + k, () => cloneOf(A.trees[k]), sx(9, 28), 0, z, rand(1.8, 2.8), rand(0, 6)); }
    }
  }
}

// ---------------- entities ----------------
function addEnt(C, e) { C.root.add(e.obj); C.ents.push(e); return e; }
function removeEnt(C, e) {
  if (e.obj) C.root.remove(e.obj);
  if (e.extra) for (const o of e.extra) C.root.remove(o);
  e.dead = true;
}
function addStar(C, x, y, z) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(C.A.starGeo, C.A.starMat); g.add(m);
  const s = new THREE.Sprite(C.A.starGlow); s.scale.set(1.9, 1.9, 1); g.add(s);
  g.position.set(x, y, z);
  return addEnt(C, { type: 'star', obj: g, mesh: m, x, y, z, ph: Math.random() * 6 });
}
function starLine(C, z, n, x0, y0, x1, y1, step = 2.4, arc = 0) {
  for (let i = 0; i < n; i++) { const t = n > 1 ? i / (n - 1) : 0; addStar(C, x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + Math.sin(t * Math.PI) * arc, z - i * step); }
}
function addRing(C, x, y, z) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(C.A.ringGeo, Math.random() < 0.5 ? C.A.ringMat : C.A.ringMat2); g.add(m);
  const p = new THREE.Sprite(C.A.portal.clone()); p.scale.set(4.2, 4.2, 1); g.add(p);
  g.position.set(x, y, z);
  return addEnt(C, { type: 'ring', obj: g, mesh: m, portal: p, x, y, z, r: 1.6 });
}
function addPickup(C, kind, x, y, z) {
  const g = new THREE.Group();
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.8, 24, 16), C.A.bubble); g.add(b);
  const ic = new THREE.Sprite(C.A.icons[kind]); ic.scale.set(1.05, 1.05, 1); g.add(ic);
  const gl = new THREE.Sprite(C.A.purpleGlow); gl.scale.set(3, 3, 1); g.add(gl);
  g.position.set(x, y, z);
  return addEnt(C, { type: 'pickup', kind, obj: g, x, y, z });
}
function addHazard(C, e) { e.hazard = true; e.minM = 99; return addEnt(C, e); }
function gravestone(C, x, z, w, h) {
  const g = makeStoneMesh(C.A, w, h, true); g.position.set(x, 0, z); g.rotation.z = rand(-0.05, 0.05);
  return addHazard(C, { type: 'stone', obj: g, x, y: 0, z, box: [x - w / 2 - 0.05, 0, z - 0.3, x + w / 2 + 0.05, h, z + 0.3] });
}
function gate(C, x0, z, gap) {
  const A = C.A, g = new THREE.Group(); g.position.set(0, 0, z);
  const H = 6.4, top = 5.5;
  for (const s of [-1, 1]) {
    const px = x0 + s * gap;
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, H, 0.5), A.stone); post.position.set(px, H / 2, 0); g.add(post);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.8, 4), A.stone); cap.position.set(px, H + 0.4, 0); cap.rotation.y = Math.PI / 4; g.add(cap);
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), A.ironGlow); orb.position.set(px, H + 0.95, 0); g.add(orb);
    const gl = new THREE.Sprite(A.purpleGlow); gl.scale.set(2.6, 2.6, 1); gl.position.set(px, H + 0.95, 0); g.add(gl);
    // fence outwards
    for (let fx = px + s * 2.25; Math.abs(fx) < 18; fx += s * 4) { const f = cloneOf(A.fence); f.position.set(fx, 0, 0); f.scale.y = 1.15; g.add(f); }
  }
  // wrought-iron arch
  const arc = new THREE.TorusGeometry(gap, 0.09, 6, 28, Math.PI);
  const a = new THREE.Mesh(arc, A.iron); a.position.set(x0, top, 0); a.scale.y = 0.45; g.add(a);
  const beam = new THREE.Mesh(new THREE.BoxGeometry(gap * 2, 0.16, 0.16), A.iron); beam.position.set(x0, top, 0); g.add(beam);
  const sign = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.06, 6, 20), A.ironGlow); sign.position.set(x0, top + gap * 0.3, 0); g.add(sign);
  const boxes = [];
  for (const s of [-1, 1]) { const px = x0 + s * gap; boxes.push([px - 0.3, 0, z - 0.35, px + 0.3, H + 1.2, z + 0.35]); const fx0 = s > 0 ? px : -20, fx1 = s > 0 ? 20 : px; boxes.push([fx0, 0, z - 0.3, fx1, 3.25, z + 0.3]); }
  boxes.push([x0 - gap, top - 0.12, z - 0.25, x0 + gap, top + 0.12 + gap * 0.45, z + 0.25]);
  return addHazard(C, { type: 'gate', obj: g, x: x0, y: 2.7, z, boxes, gap, top });
}
function branchH(C, side, xEnd, y, z) {
  const A = C.A, g = new THREE.Group();
  const xs = side * 11;
  const pts = [new THREE.Vector3(xs, y - 0.6, 0), new THREE.Vector3((xs + xEnd) / 2, y + 0.35, rand(-0.3, 0.3)), new THREE.Vector3(xEnd, y, 0)];
  const curve = new THREE.CatmullRomCurve3(pts);
  const tube = new THREE.TubeGeometry(curve, 16, 0.28, 6, false);
  const p = tube.attributes.position, uv = tube.attributes.uv;
  for (let i = 0; i < p.count; i++) { const t = uv.getX(i); const c = curve.getPoint(t); const k = 1 - 0.6 * t; p.setXYZ(i, c.x + (p.getX(i) - c.x) * k, c.y + (p.getY(i) - c.y) * k, c.z + (p.getZ(i) - c.z) * k); }
  tube.computeVertexNormals();
  g.add(new THREE.Mesh(tube, A.bark));
  for (let i = 0; i < 5; i++) { const t = 0.25 + i * 0.15; const c = curve.getPoint(t); const tw = new THREE.Mesh(new THREE.ConeGeometry(0.07, 1.1, 4), A.bark); tw.position.copy(c); tw.rotation.z = rand(-1.2, 1.2) + (i % 2 ? 2.6 : 0.4); g.add(tw); const vl = rand(0.8, 2); const v = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, vl, 4), A.vine); v.position.set(c.x, c.y - vl / 2, c.z); g.add(v); }
  // trunk
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.8, 14, 8), A.bark); trunk.position.set(xs + side * 0.4, 6, 0); g.add(trunk);
  // a little glowing lantern hanging from the tip
  const lan = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), A.lampCore); lan.position.set(xEnd - side * 0.6, y - 0.55, 0); g.add(lan);
  const gl = new THREE.Sprite(A.lampGlow); gl.scale.set(2.2, 2.2, 1); gl.position.copy(lan.position); g.add(gl);
  g.position.z = z;
  const seg = []; for (let i = 0; i <= 10; i++) { const c = curve.getPoint(i / 10); seg.push([c.x, c.y, 0.32 * (1 - 0.6 * i / 10) + 0.1]); }
  return addHazard(C, { type: 'branch', obj: g, x: xEnd, y, z, seg });
}
function giantJack(C, x, z, r) {
  const k = (Math.random() * C.A.jacks.length) | 0;
  const o = cloneOf(C.A.jacks[k]); o.scale.setScalar(r); o.position.set(x, r * 0.78, z); o.rotation.y = rand(-0.25, 0.25);
  return addHazard(C, { type: 'jack', obj: o, x, y: r * 0.78, z, r: r * 0.92 });
}
function chimney(C, x, z, h) {
  const A = C.A, g = new THREE.Group();
  const b = new THREE.Mesh(new THREE.BoxGeometry(1.3, h, 1.3), A.wall2); b.position.y = h / 2; g.add(b);
  const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.3, 1.6), A.stone); top.position.y = h; g.add(top);
  const r = new THREE.Mesh(new THREE.ConeGeometry(1.3, 1.6, 4), A.roof); r.position.y = h + 0.95; r.rotation.y = Math.PI / 4; g.add(r);
  const gl = new THREE.Sprite(A.lampGlow); gl.scale.set(2.5, 2.5, 1); gl.position.set(0, h * 0.6, 0.8); g.add(gl);
  g.position.set(x, 0, z);
  return addHazard(C, { type: 'chimney', obj: g, x, y: 0, z, box: [x - 0.7, 0, z - 0.7, x + 0.7, h + 1.6, z + 0.7] });
}
function lanternLine(C, y, z) {
  const A = C.A, g = new THREE.Group();
  const pts = []; for (let i = 0; i <= 20; i++) { const x = -12 + i * 1.2; pts.push(new THREE.Vector3(x, y - Math.cos((x / 12) * Math.PI / 2) * 0.6 + 0.6, 0)); }
  const curve = new THREE.CatmullRomCurve3(pts);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.035, 4, false), A.iron));
  const cols = [0xff7a20, 0xb050ff, 0x40d0ff, 0xffc040];
  for (let i = 1; i < 20; i += 2) { const p = curve.getPoint(i / 20); const m = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), new THREE.MeshStandardMaterial({ color: cols[i % 4], emissive: cols[i % 4], emissiveIntensity: 2.2 })); m.scale.y = 1.25; m.position.set(p.x, p.y - 0.3, 0); g.add(m); }
  for (const s of [-1, 1]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, y + 1.5, 6), A.bark); post.position.set(s * 12, (y + 1.5) / 2, 0); g.add(post); }
  g.position.z = z;
  const seg = []; for (let i = 0; i <= 20; i++) { const p = curve.getPoint(i / 20); seg.push([p.x, p.y - 0.15, 0.42]); }
  return addHazard(C, { type: 'line', obj: g, x: 0, y, z, seg });
}
function batSwarm(C, z, y, dir, n) {
  const g = new THREE.Group();
  const bats = [];
  for (let i = 0; i < n; i++) {
    const b = makeBat(C.A, C.kids); const s = C.kids ? rand(1.4, 1.8) : rand(1.5, 2.1); b.scale.setScalar(s);
    b.userData = { ...b.userData, ox: rand(-1.6, 1.6), oy: rand(-1.1, 1.1), oz: rand(-2, 2), ph: rand(0, 6), sp: rand(7, 11), s };
    g.add(b); bats.push(b);
  }
  const cx = -dir * 11;
  g.position.set(0, 0, 0);
  return addHazard(C, { type: 'bats', obj: g, bats, cx, cy: y, z, x: cx, y, vx: dir * rand(3.2, 4.6), vz: C.kids ? 2.5 : rand(4, 6), heard: false, r: C.kids ? 0.42 : 0.5 });
}
function lightning(C, x, z, tele) {
  const A = C.A;
  const mk = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), A.marker); mk.rotation.x = -Math.PI / 2; mk.position.set(x, 0.06, z); mk.scale.setScalar(3.2);
  const col = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 26, 16, 1, true), A.column.clone()); col.position.set(x, 13, z);
  const R = C.kids ? 1.1 : 1.35;
  const e = addHazard(C, { type: 'bolt', obj: mk, extra: [col], col, x, y: 3.5, z, t0: C.time, tStrike: C.time + tele, struck: false, R, bolt: null });
  C.root.add(col);
  C.events.push({ ev: 'telegraph', e });
  return e;
}
export function scheduleBolt(C, P, speed, tele, aimX = null) {
  const x = clamp(aimX != null ? aimX : P.x + rand(-1, 1), -XW + 0.5, XW - 0.5);
  const z = P.z - speed * tele;
  return lightning(C, x, z, tele);
}

function weightedPick(table) { let s = 0; for (const k in table) s += table[k]; let r = Math.random() * s; for (const k in table) { r -= table[k]; if (r <= 0) return k; } return Object.keys(table)[0]; }
const PATTERNS = {
  grave: { stars: 3, stones: 2.2, gate: 2, bats: 1.1, ring: 1, pickup: 0.45, bolt: 0.3 },
  forest: { stars: 3, branch: 2.6, jacks: 2.2, bats: 1.1, ring: 1, pickup: 0.45 },
  village: { stars: 3, chimneys: 2.2, line: 2, bats: 1.3, ring: 1, pickup: 0.45, bolt: 0.5 },
  canyon: { stars: 3, ring: 1.2 },
  storm: { stars: 3, ring: 1.6, bats: 1, pickup: 0.5 }
};
function spawnPattern(C, z, b, d, opts) {
  const kids = C.kids;
  let type = weightedPick(PATTERNS[b] || PATTERNS.grave);
  if (opts.forceType) type = opts.forceType;
  if (!opts.forceType && type === C.lastPat && type !== 'stars' && Math.random() < 0.6) type = 'stars';
  C.lastPat = type;
  const yMid = rand(2, 5.5);
  let len = 16;
  switch (type) {
    case 'stars': {
      const n = kids ? 10 : 8; const x0 = rand(-5, 5), x1 = clamp(x0 + rand(-6, 6), -5.5, 5.5);
      starLine(C, z, n, x0, rand(1.6, 6), x1, rand(1.6, 6), 2.2, rand(-1.5, 2)); len = n * 2.2; break;
    }
    case 'ring': {
      const x = rand(-4, 4), y = rand(2.4, 5.4);
      starLine(C, z, kids ? 6 : 4, x + rand(-3, 3), y, x, y, 2.2); addRing(C, x, y, z - (kids ? 6 : 4) * 2.2 - 1.5); len = 16; break;
    }
    case 'pickup': {
      const kinds = ['shield', 'magnet', 'x2']; addPickup(C, pick(kinds), rand(-4, 4), rand(2, 5.5), z); len = 6; break;
    }
    case 'stones': {
      const n = kids ? 2 : (d > 0.3 ? 3 : 2); const used = [];
      for (let i = 0; i < n; i++) { let x; let tries = 0; do { x = rand(-5.5, 5.5); tries++; } while (used.some(u => Math.abs(u - x) < 3.2) && tries < 20); used.push(x); gravestone(C, x, z - i * rand(3, 6), rand(1.3, 1.9), kids ? rand(1.8, 2.6) : rand(2.2, 3.6)); }
      starLine(C, z + 2, 5, used[0], 4.8, used[0], 4.8, 2.2); len = 14; break;
    }
    case 'gate': {
      const x0 = rand(-3, 3), gap = kids ? 3.0 : 2.4;
      starLine(C, z + 9, 4, x0 + rand(-2, 2), 2.6, x0, 2.6, 2.2); gate(C, x0, z, gap); addStar(C, x0, 2.6, z - 2); len = 14; break;
    }
    case 'branch': {
      const side = Math.random() < 0.5 ? -1 : 1; const reach = kids ? rand(-2, 1) : rand(-3.5, 1.5);
      const y = rand(2.4, 5.6); branchH(C, side, -side * reach, y, z);
      if (!kids && d > 0.25 && Math.random() < 0.6) branchH(C, -side, side * rand(-1, 2), clamp(y + (Math.random() < 0.5 ? -2.4 : 2.4), 2, 6.2), z - 7);
      starLine(C, z + 4, 5, side * 3, y > 4 ? 2 : 6, side * 2, y > 4 ? 2 : 6, 2.2); len = 16; break;
    }
    case 'jacks': {
      const n = kids ? 1 : 2; const xs = [];
      for (let i = 0; i < n; i++) { let x; do { x = rand(-5, 5); } while (xs.some(u => Math.abs(u - x) < 4.5)); xs.push(x); giantJack(C, x, z - i * 6, kids ? rand(1.4, 1.8) : rand(1.7, 2.3)); }
      starLine(C, z + 4, 7, xs[0] - 2, 3.5, xs[0] + 2, 3.5, 1.5, 2.6); len = 16; break;
    }
    case 'chimneys': {
      const n = kids ? 2 : 3; const used = [];
      for (let i = 0; i < n; i++) { let x; let tr = 0; do { x = rand(-5.5, 5.5); tr++; } while (used.some(u => Math.abs(u - x) < 3) && tr < 20); used.push(x); chimney(C, x, z - i * rand(3, 5), kids ? rand(2.4, 3.2) : rand(3, 4.8)); }
      starLine(C, z + 2, 5, -3, 6.2, 3, 6.2, 2.2); len = 15; break;
    }
    case 'line': {
      const y = rand(2.8, 4.6); lanternLine(C, y, z);
      const above = Math.random() < 0.5; starLine(C, z + 6, 4, rand(-3, 3), above ? y + 2 : y - 1.6, 0, above ? y + 2 : y - 1.6, 2); len = 12; break;
    }
    case 'bats': {
      const dir = Math.random() < 0.5 ? -1 : 1; batSwarm(C, z - 10, rand(2.5, 5), dir, kids ? 5 : Math.round(7 + d * 5));
      starLine(C, z, 4, rand(-4, 4), rand(2, 6), rand(-4, 4), rand(2, 6), 2.4); len = 14; break;
    }
    case 'bolt': { C.pendingBolt = true; starLine(C, z, 6, rand(-4, 4), 3, rand(-4, 4), 4, 2.2); len = 13; break; }
  }
  return len;
}

const _box = (b, x, y, z) => { const dx = Math.max(b[0] - x, 0, x - b[3]), dy = Math.max(b[1] - y, 0, y - b[4]), dz = Math.max(b[2] - z, 0, z - b[5]); return Math.sqrt(dx * dx + dy * dy + dz * dz); };
function segDist(seg, zc, x, y, z) {
  let best = 99;
  for (let i = 0; i < seg.length - 1; i++) {
    const a = seg[i], b = seg[i + 1];
    const abx = b[0] - a[0], aby = b[1] - a[1], l2 = abx * abx + aby * aby;
    let t = l2 > 0 ? ((x - a[0]) * abx + (y - a[1]) * aby) / l2 : 0; t = clamp(t, 0, 1);
    const px = a[0] + abx * t, py = a[1] + aby * t, r = a[2] + (b[2] - a[2]) * t;
    const d = Math.hypot(x - px, y - py, z - zc) - r; if (d < best) best = d;
  }
  return best;
}
// distance from player centre to the hazard surface (negative/small = touching)
export function hazardDist(e, P) {
  switch (e.type) {
    case 'stone': case 'chimney': return _box(e.box, P.x, P.y, P.z);
    case 'gate': { let m = 99; for (const b of e.boxes) m = Math.min(m, _box(b, P.x, P.y, P.z)); return m; }
    case 'branch': case 'line': return segDist(e.seg, e.z, P.x, P.y, P.z);
    case 'jack': return Math.hypot(P.x - e.x, P.y - e.y, P.z - e.z) - e.r;
    case 'bats': { let m = 99; for (const b of e.bats) { V.copy(b.position); m = Math.min(m, V.distanceTo(P) - e.r * b.userData.s / 1.8); } return m; }
    case 'bolt': { if (!e.struck || C_time(e) > 0.32) return 99; return Math.max(Math.hypot(P.x - e.x, P.z - e.z) - e.R, 0); }
  }
  return 99;
}
function C_time(e) { return e._age || 0; }

export function updateCourse(C, dt, P, G) {
  // G: { speed, magnet, playing, elapsed, d, onEvent(type, data) }
  C.time += dt;
  const A = C.A;
  if (C.events.length) { const ev = C.events; C.events = []; for (const x of ev) G.onEvent(x.ev, x.e); }
  // scenery
  while (C.decoZ > P.z - 150) { placeDecor(C, C.decoZ); C.decoZ -= 7; }
  for (let i = C.decor.length - 1; i >= 0; i--) { const o = C.decor[i]; if (o.position.z > P.z + 16) { release(C, o); C.decor.splice(i, 1); } }
  // patterns
  if (!C.noPatterns) {
    while (C.patZ > P.z - 120) {
      const b = zoneFor(C, C.patZ);
      const len = spawnPattern(C, C.patZ, b, G.d, G);
      const gap = (C.kids ? 16 : 11 - G.d * 4) + rand(0, 4);
      C.patZ -= len + gap;
    }
  } else if (C.patZ > P.z - 120) C.patZ = P.z - 120;
  if (C.pendingBolt) { C.pendingBolt = false; if (G.playing || G.attract) scheduleBolt(C, P, G.speed, C.kids ? 2.2 : 1.6); }
  // entities
  const t = C.time;
  for (const e of C.ents) {
    if (e.dead) continue;
    switch (e.type) {
      case 'star': {
        e.mesh.rotation.y = t * 3 + e.ph; e.obj.position.y = e.y + Math.sin(t * 2.5 + e.ph) * 0.12;
        const dz = P.z - e.obj.position.z;
        if (G.magnet && dz < 16 && dz > -1) { e.obj.position.lerp(V.set(P.x, P.y + 0.3, P.z), 1 - Math.exp(-dt * 7)); e.y = e.obj.position.y; }
        const d = e.obj.position.distanceTo(V.set(P.x, P.y + 0.2, P.z));
        if (d < (C.kids ? 1.7 : 1.3) + (G.magnet ? 0.6 : 0)) { G.onEvent('star', e); removeEnt(C, e); }
        break;
      }
      case 'ring': {
        e.mesh.rotation.z = t * 0.8; e.portal.material.rotation = -t * 1.5; e.obj.rotation.y = Math.sin(t * 1.3 + e.x) * 0.15;
        if (!e.passed && P.z <= e.z) { e.passed = true; e.pt = 0; const d = Math.hypot(P.x - e.x, P.y - e.y); if (d < e.r + (C.kids ? 0.6 : 0.2)) G.onEvent('ring', e); }
        if (e.passed) { e.pt += dt; const k = Math.min(1, e.pt / 0.22); e.obj.scale.setScalar(1 + k * 0.8); e.obj.visible = k < 1; e.portal.material.opacity = 1 - k; }
        break;
      }
      case 'pickup': {
        e.obj.position.y = e.y + Math.sin(t * 2 + e.x) * 0.25; e.obj.children[0].rotation.y = t;
        if (G.magnet && P.z - e.z < 14 && P.z - e.z > -1) { e.obj.position.lerp(V.set(P.x, P.y, P.z), 1 - Math.exp(-dt * 5)); e.y = e.obj.position.y; e.x = e.obj.position.x; e.z = e.obj.position.z; }
        if (e.obj.position.distanceTo(V.set(P.x, P.y, P.z)) < 1.6) { G.onEvent('pickup', e); removeEnt(C, e); }
        break;
      }
      case 'bats': {
        e.x += e.vx * dt; e.z += e.vz * dt;
        const k = clamp((e.cx === undefined ? 0 : 1), 0, 1);
        let i = 0;
        for (const b of e.bats) {
          const u = b.userData;
          const bx = e.x + u.ox + Math.sin(t * 2.2 + u.ph) * 0.9, by = e.cy + u.oy + Math.sin(t * 3.1 + u.ph * 2) * 0.6, bz = e.z + u.oz + Math.cos(t * 2 + u.ph) * 0.8;
          b.position.set(bx, by, bz);
          b.rotation.set(0.15, Math.atan2(e.vx, e.vz) * 0.6 + Math.PI * 0 + 0, Math.sin(t * 4 + u.ph) * 0.3);
          const f = Math.sin(t * u.sp * 1.6 + u.ph);
          u.wings[0].rotation.z = f * 0.9; u.wings[1].rotation.z = -f * 0.9;
          i++;
        }
        e.obj.rotation.y = 0;
        if (!e.heard && P.z - e.z < 34) { e.heard = true; G.onEvent('batsNear', e); }
        break;
      }
      case 'bolt': {
        const left = e.tStrike - t;
        if (!e.struck) {
          const k = 1 - clamp(left / (e.tStrike - e.t0), 0, 1);
          e.obj.scale.setScalar(3.2 + Math.sin(t * 20) * 0.25 * k + k * 0.6);
          e.obj.material.opacity = 0.5 + 0.5 * k;
          e.col.material.opacity = 0.05 + 0.22 * k * (0.6 + 0.4 * Math.sin(t * 30));
          if (left <= 0) {
            e.struck = true; e._age = 0;
            const b = makeBolt(30, 0.22); b.position.set(e.x, 30, e.z); b.scale.set(0.6, 1, 0.6); C.root.add(b); e.bolt = b; e.extra.push(b);
            b.material.opacity = 1;
            e.col.material.opacity = 0.6;
            G.onEvent('strike', e);
          }
        } else {
          e._age += dt;
          const a = e._age;
          if (e.bolt) { e.bolt.material.opacity = a < 0.08 || (a > 0.12 && a < 0.22) ? 1 : a < 0.35 ? 0.3 : 0; e.bolt.visible = a < 0.35; }
          e.col.material.opacity = Math.max(0, 0.6 - a * 1.5);
          e.obj.material = A.scorch; e.obj.scale.setScalar(3.2 + a * 2); 
        }
        break;
      }
    }
    // hazards: collision + near miss
    if (e.hazard && !e.dead && !e.hit) {
      const dz = Math.abs(P.z - e.z);
      if (dz < (e.type === 'bats' ? 6 : 3.5) || e.type === 'gate' || e.type === 'branch' || e.type === 'line') {
        if (dz < 4) {
          const d = hazardDist(e, P) - PR;
          if (d < 0) { e.hit = true; G.onEvent('hit', e); }
          else if (d < e.minM) e.minM = d;
        }
      }
      if (e.type === 'gate' && !e.scored && P.z < e.z - 0.4) { e.scored = true; if (!e.hit && Math.abs(P.x - e.x) < e.gap && P.y < e.top) G.onEvent('gate', e); }
      if (!e.nmDone && P.z < e.z - 2 && e.type !== 'bolt') { e.nmDone = true; if (!e.hit && e.minM < 0.85) G.onEvent('near', e); }
      if (e.type === 'bolt' && e.struck && !e.nmDone && e._age > 0.3) { e.nmDone = true; if (!e.hit && Math.abs(P.z - e.z) < 5 && Math.hypot(P.x - e.x, 0) - e.R < 1.6) G.onEvent('near', e); }
    }
  }
  // cull behind
  for (let i = C.ents.length - 1; i >= 0; i--) {
    const e = C.ents[i];
    const z = e.type === 'bats' ? e.z + 4 : e.z;
    const behind = (e.type === 'star' || e.type === 'pickup') ? 1.2 : e.type === 'ring' ? 5 : 14;
    if (!e._glowOff && e.obj && z > P.z + 2.5) { e._glowOff = true; e.obj.traverse((o) => { if (o.isSprite || o.isPoints) o.visible = false; }); } // no blown-out bokeh between witch and camera
    if (e.dead || z > P.z + behind || (e.type === 'bolt' && e.struck && e._age > 1.2)) { if (!e.dead) { if (e.type === 'star') G.onEvent('missStar', e); removeEnt(C, e); } C.ents.splice(i, 1); }
  }
}
export function forcePattern(C, type, z, d = 0.3) { return spawnPattern(C, z, biomeAt(C, z), d, { forceType: type }); }
export function spawnPickup(C, kind, x, y, z) { return addPickup(C, kind, x, y, z); }
export function spawnStar(C, x, y, z) { return addStar(C, x, y, z); }
export function spawnRing(C, x, y, z) { return addRing(C, x, y, z); }
export function spawnStone(C, x, z) { return gravestone(C, x, z, 1.6, 3); }
export function clearAhead(C, P, from = 0, to = 60, all = false) {
  for (const e of C.ents) if ((e.hazard || all) && !e.dead && e.z < P.z - from && e.z > P.z - to && e.type !== 'bolt') removeEnt(C, e);
}
