// Particles (additive point pool, copied from Pumpkin Smash), shock rings, pooled hit lights, camera shake,
// 2D overlay with score popups and boost speed lines.
import * as THREE from 'three';
import { rand } from './util.js';

class PointPool {
  constructor(scene, n) {
    this.n = n; this.i = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(n * 3); this.col = new Float32Array(n * 3); this.size = new Float32Array(n); this.alpha = new Float32Array(n);
    this.v = new Float32Array(n * 3); this.life = new Float32Array(n); this.max = new Float32Array(n); this.grav = new Float32Array(n); this.drag = new Float32Array(n);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { scale: { value: 500 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vA = alpha * smoothstep(1.5, 5.0, -mv.z); gl_PointSize = min(size * scale / max(0.5, -mv.z), 90.0); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a = a * a; gl_FragColor = vec4(vC * a * vA, a * vA); }`
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 5; scene.add(this.points);
  }
  spawn(x, y, z, vx, vy, vz, size, life, r, g, b, grav = 6, drag = 0.98) {
    const k = this.i; this.i = (this.i + 1) % this.n; const j = k * 3;
    this.pos[j] = x; this.pos[j + 1] = y; this.pos[j + 2] = z; this.v[j] = vx; this.v[j + 1] = vy; this.v[j + 2] = vz;
    this.col[j] = r; this.col[j + 1] = g; this.col[j + 2] = b; this.size[k] = size; this.life[k] = life; this.max[k] = life; this.grav[k] = grav; this.drag[k] = drag; this.alpha[k] = 1;
  }
  update(dt) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) { this.alpha[k] = 0; continue; }
      this.life[k] -= dt; const j = k * 3, d = Math.pow(this.drag[k], dt * 60);
      this.v[j] *= d; this.v[j + 1] = this.v[j + 1] * d - this.grav[k] * dt; this.v[j + 2] *= d;
      this.pos[j] += this.v[j] * dt; this.pos[j + 1] += this.v[j + 1] * dt; this.pos[j + 2] += this.v[j + 2] * dt;
      const t = Math.max(0, this.life[k] / this.max[k]);
      this.alpha[k] = Math.min(1, t * 2.2);
    }
    const a = this.points.geometry.attributes; a.position.needsUpdate = true; a.alpha.needsUpdate = true; a.color.needsUpdate = true; a.size.needsUpdate = true;
  }
  clear() { this.life.fill(0); this.alpha.fill(0); }
}

export function createFx(scene) {
  const F = { scene, scale: 1, shakeAmp: 0 };
  F.points = new PointPool(scene, 3000);
  F.lights = [0, 1, 2].map(() => { const l = new THREE.PointLight(0xffc060, 0, 14, 1.6); scene.add(l); return l; });
  F.li = 0;
  const ringTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d'); const r = g.createRadialGradient(128, 128, 70, 128, 128, 126); r.addColorStop(0, 'rgba(255,200,120,0)'); r.addColorStop(0.8, 'rgba(255,170,80,0.0)'); r.addColorStop(0.9, 'rgba(255,240,210,0.9)'); r.addColorStop(1, 'rgba(255,120,30,0)'); g.fillStyle = r; g.fillRect(0, 0, 256, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  F.rings = [];
  for (let i = 0; i < 8; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0, fog: false })); s.visible = false; scene.add(s); F.rings.push({ s, t: 1, dur: 0.5, size: 3 }); }
  return F;
}
export function sparkle(F, pos, rgb, n = 40, speed = 4, size = 0.25, life = 1.0, grav = 1.5) {
  for (let i = 0; i < n * F.scale; i++) {
    const v = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(rand(0.5, speed));
    F.points.spawn(pos.x, pos.y, pos.z, v.x, v.y, v.z, rand(size * 0.4, size * 1.1), rand(life * 0.5, life * 1.2), rgb[0], rgb[1], rgb[2], grav, 0.95);
  }
}
export function flashLight(F, pos, color = 0xffc060, power = 30) {
  const l = F.lights[F.li = (F.li + 1) % F.lights.length]; l.position.copy(pos); l.intensity = power; l.color.set(color);
}
export function ring(F, pos, size = 3, dur = 0.5, tint) {
  const r = F.rings.find(r => r.t >= 1) || F.rings[0];
  r.s.position.copy(pos); r.t = 0; r.dur = dur; r.size = size; r.s.visible = true; r.s.material.color.set(tint || 0xffffff);
}
export function shake(F, amp) { F.shakeAmp = Math.max(F.shakeAmp, amp); }
export function updateFx(F, dt) {
  F.points.update(dt);
  for (const l of F.lights) l.intensity *= Math.pow(0.002, dt);
  for (const r of F.rings) {
    if (r.t >= 1) continue; r.t = Math.min(1, r.t + dt / r.dur);
    const e = 1 - Math.pow(1 - r.t, 3); r.s.scale.setScalar(r.size * (0.25 + e)); r.s.material.opacity = Math.pow(1 - r.t, 1.5) * 0.5; if (r.t >= 1) r.s.visible = false;
  }
  F.shakeAmp *= Math.pow(0.003, dt);
}
export function clearFx(F) { F.points.clear(); }

// ---------- 2D overlay ----------
export function createOverlay(canvas) { return { canvas, g: canvas.getContext('2d'), pops: [], lines: [], dpr: 1, w: 1, h: 1 }; }
export function resizeOverlay(O, w, h, dpr) { O.dpr = dpr; O.canvas.width = Math.round(w * dpr); O.canvas.height = Math.round(h * dpr); O.w = w; O.h = h; }
export function popup(O, x, y, text, color = '#ffd36a', size = 30, life = 0.9) { if (O.pops.length > 14) O.pops.shift(); O.pops.push({ x, y, text, color, size, t: 0, life }); }
export function drawOverlay(O, dt, speedFx, cx, cy) {
  const g = O.g; g.setTransform(O.dpr, 0, 0, O.dpr, 0, 0); g.clearRect(0, 0, O.w, O.h);
  // speed lines (boost / high speed)
  const want = Math.round(speedFx * 46);
  while (O.lines.length < want) O.lines.push({ a: rand(0, Math.PI * 2), r: rand(0.25, 0.6), v: rand(1.6, 3.2), l: rand(0.05, 0.14), w: rand(1, 2.6) });
  if (O.lines.length > want) O.lines.length = want;
  const R = Math.hypot(O.w, O.h) * 0.6;
  for (const L of O.lines) {
    L.r += L.v * dt; if (L.r > 1.1) { L.r = rand(0.25, 0.45); L.a = rand(0, Math.PI * 2); }
    const r0 = L.r * R, r1 = (L.r + L.l * (0.5 + speedFx)) * R;
    const ca = Math.cos(L.a), sa = Math.sin(L.a);
    const al = Math.min(1, (L.r - 0.25) * 3) * 0.55 * Math.min(1, speedFx);
    g.strokeStyle = `rgba(235,220,255,${al})`; g.lineWidth = L.w;
    g.beginPath(); g.moveTo(cx + ca * r0, cy + sa * r0); g.lineTo(cx + ca * r1, cy + sa * r1); g.stroke();
  }
  for (const p of O.pops) p.t += dt;
  O.pops = O.pops.filter(p => p.t < p.life);
  for (const p of O.pops) {
    const k = p.t / p.life, pop = k < 0.15 ? 0.6 + k / 0.15 * 0.6 : 1.2 - Math.min(0.2, (k - 0.15) * 0.6);
    g.save(); g.translate(p.x, p.y - k * 50); g.scale(pop, pop); g.globalAlpha = Math.min(1, (1 - k) * 2.5);
    g.font = `900 ${p.size}px "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = p.size * 0.22; g.strokeStyle = 'rgba(30,6,40,0.85)'; g.strokeText(p.text, 0, 0);
    g.shadowColor = p.color; g.shadowBlur = 16; g.fillStyle = p.color; g.fillText(p.text, 0, 0); g.restore();
  }
}
