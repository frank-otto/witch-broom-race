// The witch on her broom: robe, striped stockings, ginger hair, bent hat, a flowing two-tone cape (vertex animated),
// a tiny black cat riding pillion, glowing bristles, shield bubble and magnet aura.
import * as THREE from 'three';
import { canvasTex, glowTexture, clamp } from './util.js';

function limb(from, to, r0, r1, mat, seg = 8) {
  const d = new THREE.Vector3().subVectors(to, from), len = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg); g.translate(0, len / 2, 0);
  const m = new THREE.Mesh(g, mat); m.position.copy(from);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  return m;
}

export function createWitch() {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const H = { root, body, t: 0, roll: 0, pitch: 0, yaw: 0 };

  const wood = new THREE.MeshStandardMaterial({ color: 0x6a3c1c, roughness: 0.65, emissive: 0x1a0800, emissiveIntensity: 0.6 });
  const strawTex = canvasTex(64, 256, (g) => {
    g.fillStyle = '#c98a2c'; g.fillRect(0, 0, 64, 256);
    for (let i = 0; i < 90; i++) { g.strokeStyle = ['#f0c060', '#a8661c', '#e0a848', '#80501a'][i % 4]; g.lineWidth = Math.random() * 2 + 0.5; const x = Math.random() * 64; g.beginPath(); g.moveTo(x, 0); g.lineTo(x + (Math.random() - 0.5) * 6, 256); g.stroke(); }
  });
  const straw = new THREE.MeshStandardMaterial({ map: strawTex, roughness: 0.8, emissive: 0x6a3008, emissiveIntensity: 0.55, side: THREE.DoubleSide });
  const robe = new THREE.MeshStandardMaterial({ color: 0x5a2a9a, roughness: 0.6, emissive: 0x1e0838, emissiveIntensity: 0.9 });
  const robeDark = new THREE.MeshStandardMaterial({ color: 0x3a1868, roughness: 0.7, emissive: 0x140428, emissiveIntensity: 0.8 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xf6cfb0, roughness: 0.55, emissive: 0x3a1a10, emissiveIntensity: 0.5 });
  const hatMat = new THREE.MeshStandardMaterial({ color: 0x2a1640, roughness: 0.55, emissive: 0x120420, emissiveIntensity: 1, metalness: 0.1 });
  const bandMat = new THREE.MeshStandardMaterial({ color: 0xff8a1a, roughness: 0.4, emissive: 0xc04a00, emissiveIntensity: 0.9 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xffd060, roughness: 0.25, metalness: 0.7, emissive: 0xa06000, emissiveIntensity: 0.8 });
  const stockTex = canvasTex(32, 64, (g) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#1a0c1e' : '#ff7a1a'; g.fillRect(0, i * 8, 32, 8); } });
  stockTex.wrapS = stockTex.wrapT = THREE.RepeatWrapping; stockTex.repeat.set(1, 1.5);
  const stock = new THREE.MeshStandardMaterial({ map: stockTex, roughness: 0.7, emissive: 0x401000, emissiveIntensity: 0.5 });
  const boot = new THREE.MeshStandardMaterial({ color: 0x150a12, roughness: 0.35, metalness: 0.2 });
  const hairMat = new THREE.MeshStandardMaterial({ color: 0xd8501a, roughness: 0.6, emissive: 0x6a1a04, emissiveIntensity: 0.8 });

  // --- broom (front is -z)
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.055, 2.5, 8), wood); handle.rotation.x = Math.PI / 2; handle.position.set(0, 0, -0.35); body.add(handle);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), wood); knob.position.set(0, 0.02, -1.6); body.add(knob);
  const prof = []; for (let i = 0; i <= 12; i++) { const t = i / 12; prof.push(new THREE.Vector2(0.06 + Math.pow(t, 0.8) * 0.19 + Math.sin(t * 40) * 0.006, t * 0.8)); }
  const brush = new THREE.Mesh(new THREE.LatheGeometry(prof, 20), straw); brush.rotation.x = Math.PI / 2; brush.position.set(0, 0, 0.78); body.add(brush);
  const brushCap = new THREE.Mesh(new THREE.CircleGeometry(0.25, 20), straw); brushCap.position.set(0, 0, 1.58); body.add(brushCap);
  for (const z of [0.84, 0.97]) { const b = new THREE.Mesh(new THREE.TorusGeometry(0.085 + (z - 0.84) * 0.5, 0.022, 6, 16), bandMat); b.position.z = z; body.add(b); }
  H.bristle = new THREE.Object3D(); H.bristle.position.set(0, 0, 1.6); body.add(H.bristle);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,220,140,1)', 'rgba(255,120,40,0.4)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.85 }));
  glow.scale.set(1.3, 1.3, 1); glow.position.set(0, 0, 1.65); body.add(glow); H.glow = glow;

  // --- witch body (sits around z=0.05)
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.25, 0.62, 14), robe); torso.position.set(0, 0.45, 0.12); torso.rotation.x = -0.5; body.add(torso);
  const skirt = new THREE.Mesh(new THREE.ConeGeometry(0.46, 0.62, 16, 1, true), robeDark); skirt.position.set(0, 0.2, 0.2); skirt.scale.set(1.05, 1, 1.35); skirt.rotation.x = -0.25; body.add(skirt);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.04, 6, 16), bandMat); collar.position.set(0, 0.72, -0.02); collar.rotation.x = Math.PI / 2 - 0.5; body.add(collar);
  for (const s of [-1, 1]) {
    const hip = new THREE.Vector3(s * 0.13, 0.12, 0.08), knee = new THREE.Vector3(s * 0.2, -0.05, -0.32), foot = new THREE.Vector3(s * 0.16, -0.38, -0.4);
    body.add(limb(hip, knee, 0.075, 0.06, stock)); body.add(limb(knee, foot, 0.06, 0.05, stock));
    const bt = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.32, 8), boot); bt.rotation.x = -Math.PI / 2 - 0.2; bt.position.set(s * 0.16, -0.42, -0.5); body.add(bt);
    const sh = new THREE.Vector3(s * 0.17, 0.66, -0.06), el = new THREE.Vector3(s * 0.24, 0.42, -0.42), hand = new THREE.Vector3(s * 0.06, 0.08, -0.82);
    body.add(limb(sh, el, 0.065, 0.06, robe)); body.add(limb(el, hand, 0.06, 0.09, robe));
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), skin); h.position.copy(hand); body.add(h);
  }
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.19, 20, 16), skin); head.position.set(0, 0.93, -0.16); body.add(head);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.12, 8), skin); nose.rotation.x = -Math.PI / 2; nose.position.set(0, 0.92, -0.38); body.add(nose);
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.205, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), hairMat); hairCap.position.set(0, 0.95, -0.12); hairCap.rotation.x = 0.5; body.add(hairCap);
  H.hair = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 8 - 0.5) * 2.2;
    const g = new THREE.ConeGeometry(0.06, 0.62, 6); g.translate(0, 0.31, 0); g.rotateX(Math.PI / 2 + 0.45);
    const piv = new THREE.Group(); piv.position.set(Math.sin(a) * 0.17, 0.86 + Math.cos(a) * 0.05, -0.02);
    const m = new THREE.Mesh(g, hairMat); m.scale.set(1, 1, 1 - Math.abs(a) * 0.12); piv.add(m); body.add(piv);
    piv.userData = { a, ph: i * 0.8 }; H.hair.push(piv);
  }
  // hat
  const hat = new THREE.Group(); hat.position.set(0, 1.06, -0.12); hat.rotation.x = 0.28; body.add(hat); H.hat = hat;
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.6, 0.025, 36), hatMat); hat.add(brim);
  const bp = []; for (let i = 0; i <= 16; i++) { const t = i / 16; bp.push(new THREE.Vector2(Math.max(0.002, 0.25 * Math.pow(1 - t, 1.15)), t * 0.95)); }
  const coneG = new THREE.LatheGeometry(bp, 22); const cp = coneG.attributes.position;
  for (let i = 0; i < cp.count; i++) { const y = cp.getY(i), t = y / 0.95; cp.setZ(i, cp.getZ(i) + 0.42 * t * t * t); cp.setY(i, y - 0.18 * t * t * t); cp.setX(i, cp.getX(i) + 0.05 * t * t); }
  coneG.computeVertexNormals();
  const cone = new THREE.Mesh(coneG, hatMat); hat.add(cone);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.245, 0.255, 0.08, 24, 1, true), bandMat); band.position.y = 0.06; hat.add(band);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.02), gold); buckle.position.set(0, 0.06, 0.255); hat.add(buckle);
  const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.05), gold); star.position.set(0.12, 0.3, 0.17); star.scale.set(1, 1, 0.4); hat.add(star);

  // cape (two-sided: purple outside, ember-orange lining)
  const CW = 0.78, CL = 1.35, sx = 7, sy = 16;
  const capeG = new THREE.PlaneGeometry(CW, CL, sx, sy);
  const outer = new THREE.MeshStandardMaterial({ color: 0x6a1fb0, roughness: 0.55, emissive: 0x2a0850, emissiveIntensity: 1.0, side: THREE.FrontSide });
  const inner = new THREE.MeshStandardMaterial({ color: 0xd8401a, roughness: 0.5, emissive: 0x501000, emissiveIntensity: 0.6, side: THREE.BackSide });
  const capeA = new THREE.Mesh(capeG, outer), capeB = new THREE.Mesh(capeG, inner);
  capeA.frustumCulled = capeB.frustumCulled = false;
  body.add(capeA, capeB); H.cape = { geo: capeG, sx, sy, CW, CL, uv: capeG.attributes.uv.array.slice() };

  // black cat riding pillion
  const catM = new THREE.MeshStandardMaterial({ color: 0x0e0a14, roughness: 0.45, emissive: 0x1a0c28, emissiveIntensity: 0.8 });
  const cat = new THREE.Group(); cat.position.set(0, 0.06, 0.62); body.add(cat); H.cat = cat;
  const cb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10), catM); cb.scale.set(0.9, 1.0, 1.25); cb.position.y = 0.12; cat.add(cb);
  const ch = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 10), catM); ch.position.set(0, 0.3, -0.06); cat.add(ch);
  for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 6), catM); e.position.set(s * 0.055, 0.39, -0.05); e.rotation.z = -s * 0.25; cat.add(e); }
  const tailC = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.08, 0.14), new THREE.Vector3(0, 0.1, 0.32), new THREE.Vector3(0, 0.28, 0.42), new THREE.Vector3(0.03, 0.42, 0.38)]);
  const tail = new THREE.Mesh(new THREE.TubeGeometry(tailC, 12, 0.025, 6), catM); cat.add(tail); H.tail = tail;

  // shield bubble
  const shield = new THREE.Mesh(new THREE.SphereGeometry(1.35, 32, 20), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { time: { value: 0 }, a: { value: 1 } },
    vertexShader: `varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float time; uniform float a; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.5); float hex = 0.5 + 0.5 * sin(vP.y * 18.0 + time * 3.0) * sin(vP.x * 18.0) ; vec3 c = mix(vec3(0.3,0.8,1.0), vec3(0.8,0.5,1.0), 0.5 + 0.5 * sin(time + vP.y * 2.0)); gl_FragColor = vec4(c * (f * 1.4 + hex * 0.06) * a, 1.0); }`
  }));
  shield.position.set(0, 0.4, 0); shield.visible = false; root.add(shield); H.shield = shield;
  const magTex = canvasTex(256, 256, (g) => { g.strokeStyle = 'rgba(255,120,255,0.9)'; g.lineWidth = 6; g.shadowColor = '#f0f'; g.shadowBlur = 16; for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(128, 128, 70 + i * 18, i, i + 3.6); g.stroke(); } });
  const mag = new THREE.Sprite(new THREE.SpriteMaterial({ map: magTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.0 }));
  mag.scale.set(3.4, 3.4, 1); mag.position.set(0, 0.4, 0); root.add(mag); H.mag = mag;

  // lights travelling with her
  H.warm = new THREE.PointLight(0xffa050, 6, 7, 1.6); H.warm.position.set(0, 0.6, 2.2); root.add(H.warm);
  H.key = new THREE.PointLight(0xc0a8ff, 5, 8, 1.4); H.key.position.set(0.6, 2.4, 2.6); root.add(H.key);
  return H;
}

export function updateWitch(H, dt, s) {
  // s: { vx, vy, speedK (0..1.5), boost (0..1), time, invuln, shield, magnet, x2, crash }
  H.t += dt; const t = H.t;
  const tr = clamp(-s.vx * 0.06, -0.75, 0.75), tp = clamp(s.vy * 0.05, -0.35, 0.35);
  H.roll += (tr - H.roll) * (1 - Math.exp(-dt * 6)); H.pitch += (tp - H.pitch) * (1 - Math.exp(-dt * 6));
  H.yaw += (clamp(-s.vx * 0.02, -0.25, 0.25) - H.yaw) * (1 - Math.exp(-dt * 5));
  const bob = Math.sin(t * 2.2) * 0.06;
  H.body.position.y = bob;
  H.body.rotation.set(H.pitch + Math.sin(t * 1.7) * 0.03, H.yaw, H.roll + Math.sin(t * 1.3) * 0.03);
  if (s.crash) { H.body.rotation.z += s.crash * 9; H.body.rotation.x += s.crash * 2; }
  // cape
  const C = H.cape, p = C.geo.attributes.position, uv = C.uv;
  const sp = clamp(s.speedK, 0, 1.6), droop = 1.05 - sp * 0.42 - s.boost * 0.25;
  for (let i = 0; i < p.count; i++) {
    const u = uv[i * 2], v = 1 - uv[i * 2 + 1];
    const L = v * C.CL;
    const w = (0.58 + 0.5 * v) * C.CW;
    const wave = Math.sin(t * (9 + sp * 5) - v * 6 + u * 2.4) * 0.16 * v * (0.6 + sp * 0.5);
    const flap = Math.sin(t * 5.3 - v * 3.2 + u * 5) * 0.06 * v;
    const ang = droop + wave * 0.5;
    const x = (u - 0.5) * w + Math.sin(t * 6 - v * 4) * 0.06 * v - H.roll * 0.35 * v;
    const y = 0.74 - Math.sin(ang) * L * 0.85 + wave + flap - v * 0.05;
    const z = 0.02 + Math.cos(ang) * L + v * 0.12 - Math.abs(u - 0.5) * 0.1 * v;
    p.setXYZ(i, x, y, z);
  }
  p.needsUpdate = true; C.geo.computeVertexNormals();
  for (const h of H.hair) h.rotation.set(-0.1 + Math.sin(t * 8 + h.userData.ph) * 0.12 - sp * 0.15, h.userData.a * 0.25, Math.sin(t * 6 + h.userData.ph) * 0.15);
  H.hat.rotation.z = Math.sin(t * 3.1) * 0.05 - H.roll * 0.1;
  H.tail.rotation.z = Math.sin(t * 2.5) * 0.3;
  H.glow.material.opacity = 0.7 + 0.25 * Math.sin(t * 20) + s.boost * 0.4;
  const gs = 1.2 + s.boost * 1.2 + Math.sin(t * 13) * 0.1; H.glow.scale.set(gs, gs, 1);
  H.glow.material.color.setRGB(1, s.x2 ? 0.9 : 0.75, s.x2 ? 0.4 : 0.55);
  H.warm.intensity = 5 + s.boost * 6 + Math.sin(t * 17) * 0.8;
  H.shield.visible = !!s.shield; H.shield.material.uniforms.time.value = t;
  H.shield.material.uniforms.a.value = s.shield ? 0.9 + Math.sin(t * 6) * 0.1 : 0;
  H.mag.material.opacity = s.magnet ? 0.55 + 0.2 * Math.sin(t * 5) : 0; H.mag.material.rotation = t * 2.5;
  H.root.visible = !(s.invuln > 0 && Math.floor(s.invuln * 14) % 2 === 1);
}
