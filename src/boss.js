// The Storm Raven (set piece at ~60 s): a giant raven made of night and lightning that flies ahead of the witch,
// looks back and calls down telegraphed lightning bolts. Kids mode: same bird with big friendly eyes.
import * as THREE from 'three';
import { glowTexture, rand, clamp } from './util.js';

function featherWing(mat, len, w, n, side) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const fl = len * (0.55 + 0.45 * Math.sin(t * Math.PI * 0.9 + 0.2));
    const s = new THREE.Shape();
    s.moveTo(0, 0); s.quadraticCurveTo(fl * 0.5, w * 0.6, fl, 0.05); s.quadraticCurveTo(fl * 0.5, -w * 0.3, 0, -w * 0.2);
    const geo = new THREE.ShapeGeometry(s, 6);
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2; // lie in xz
    m.rotation.z = 0;
    const holder = new THREE.Group(); holder.add(m);
    holder.position.x = side * (i * len * 0.11);
    const th = 1.25 - t * 1.1; holder.rotation.y = side > 0 ? th : Math.PI - th;
    g.add(holder);
  }
  return g;
}

export function createRaven(kids) {
  const R = { root: new THREE.Group(), kids, t: 0, phase: 'off', pt: 0 };
  const body = new THREE.Group(); R.root.add(body); R.body = body;
  const black = new THREE.MeshStandardMaterial({ color: kids ? 0x2a2050 : 0x15121e, roughness: 0.35, metalness: 0.35, emissive: kids ? 0x201050 : 0x1a0830, emissiveIntensity: 1.0, fog: false });
  const feather = new THREE.MeshStandardMaterial({ color: kids ? 0x3a2a70 : 0x120e1c, roughness: 0.4, metalness: 0.3, emissive: kids ? 0x2a1870 : 0x2c0c50, emissiveIntensity: 1.0, side: THREE.DoubleSide, fog: false });
  const beakM = new THREE.MeshStandardMaterial({ color: kids ? 0xffb030 : 0x3a3440, roughness: 0.3, metalness: 0.5, emissive: kids ? 0x6a3000 : 0x0a0810 });
  const torso = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), black); torso.scale.set(1.25, 1.1, 2.2); body.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.95, 20, 14), black); head.position.set(0, 0.9, 2.1); body.add(head); R.head = head;
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.38, 1.5, 10), beakM); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.7, 3.4); beak.scale.set(1, 1, 0.7); head.parent.add(beak); R.beak = beak;
  // eyes
  const eyeGlow = new THREE.SpriteMaterial({ map: glowTexture(kids ? 'rgba(255,255,255,1)' : 'rgba(255,120,200,1)', kids ? 'rgba(160,200,255,0.4)' : 'rgba(200,40,255,0.45)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  R.eyes = [];
  for (const s of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(kids ? 0.34 : 0.2, 14, 10), new THREE.MeshBasicMaterial({ color: kids ? 0xffffff : new THREE.Color(4, 1.2, 3.2) }));
    e.position.set(s * 0.5, 1.15, 2.75); body.add(e);
    if (kids) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), new THREE.MeshBasicMaterial({ color: 0x120818 })); p.position.set(s * 0.5, 1.13, 3.04); body.add(p); const hl = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff })); hl.position.set(s * 0.45, 1.22, 3.18); body.add(hl); }
    const g = new THREE.Sprite(eyeGlow); g.scale.set(2.2, 2.2, 1); g.position.copy(e.position); body.add(g); R.eyes.push(g);
  }
  // crest feathers
  for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.1, 5), black); c.position.set((i - 1.5) * 0.18, 1.7, 1.8 - i * 0.12); c.rotation.x = -0.9; body.add(c); }
  // wings: shoulder -> arm group -> hand group
  R.wings = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group(); sh.position.set(s * 1.0, 0.45, 0.4); body.add(sh);
    const arm = new THREE.Group(); sh.add(arm);
    const armF = featherWing(feather, 3.8, 1.8, 8, s); arm.add(armF);
    const bone = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.2, 3.8, 8), black); bone.rotation.z = Math.PI / 2; bone.position.x = s * 1.9; arm.add(bone);
    const hand = new THREE.Group(); hand.position.x = s * 3.7; arm.add(hand);
    const handF = featherWing(feather, 5.6, 1.5, 9, s); hand.add(handF);
    const bone2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.08, 3.2, 8), black); bone2.rotation.z = Math.PI / 2; bone2.position.x = s * 1.6; hand.add(bone2);
    const edgeM = new THREE.MeshBasicMaterial({ color: kids ? new THREE.Color(1.2, 1.6, 3) : new THREE.Color(2.2, 1.0, 3.2), transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    const e1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.8, 6), edgeM); e1.rotation.z = Math.PI / 2; e1.position.set(s * 1.9, 0.05, 0.35); arm.add(e1);
    const e2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.02, 5.2, 6), edgeM); e2.rotation.z = Math.PI / 2; e2.position.set(s * 2.6, 0.05, 0.25); hand.add(e2);
    R.wings.push({ sh, arm, hand, s });
  }
  // tail fan
  const tail = new THREE.Group(); tail.position.set(0, 0.1, -2.0); body.add(tail);
  for (let i = 0; i < 7; i++) { const s = new THREE.Shape(); s.moveTo(-0.25, 0); s.lineTo(-0.35, -3.2); s.lineTo(0, -3.6); s.lineTo(0.35, -3.2); s.lineTo(0.25, 0); const m = new THREE.Mesh(new THREE.ShapeGeometry(s), feather); m.rotation.x = Math.PI / 2 + 0.15; m.rotation.y = 0; const h = new THREE.Group(); h.rotation.y = (i - 3) * 0.16; h.add(m); tail.add(h); }
  R.tail = tail;
  // electric aura
  R.aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(200,150,255,0.9)', 'rgba(120,60,255,0.25)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6, fog: false }));
  R.aura.scale.set(26, 16, 1); R.aura.position.z = -1; body.add(R.aura);
  R.light = new THREE.PointLight(kids ? 0x90a0ff : 0xb060ff, 0, 40, 1.2); R.light.position.set(0, 2, 3); body.add(R.light);
  // crackling arcs
  R.arcs = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: new THREE.Color(2.5, 2.2, 4), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, fog: false }));
  R.arcs.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(60 * 3), 3)); body.add(R.arcs);
  R.root.scale.setScalar(1.55); R.root.visible = false;
  return R;
}

export function updateRaven(R, dt, opts = {}) {
  R.t += dt; R.pt += dt; const t = R.t;
  const flapSpd = opts.flap ?? 3.2, amp = opts.amp ?? 0.55;
  for (const w of R.wings) {
    const f = Math.sin(t * flapSpd);
    w.sh.rotation.z = w.s * (0.32 + f * amp + (opts.raise || 0) * 0.6);
    w.sh.rotation.x = 0.25;
    w.hand.rotation.z = w.s * (-0.15 + Math.sin(t * flapSpd - 0.9) * amp * 0.9);
    w.sh.rotation.y = w.s * -0.1;
  }
  R.body.position.y = -Math.sin(t * flapSpd) * 0.5;
  R.body.rotation.x = -0.95 + Math.sin(t * 0.8) * 0.06;
  R.tail.rotation.x = Math.sin(t * 1.7) * 0.1;
  R.head.rotation.y = Math.sin(t * 0.9) * 0.2;
  const call = opts.call || 0;
  for (const e of R.eyes) { const s = 2.2 + call * 3 + Math.sin(t * 9) * 0.2; e.scale.set(s, s, 1); }
  R.aura.material.opacity = 0.35 + call * 0.5 + Math.sin(t * 7) * 0.08;
  R.light.intensity = 30 + call * 220;
  R.beak.rotation.x = Math.PI / 2 - call * 0.0;
  // arcs: regenerate a few jagged segments around wings
  const p = R.arcs.geometry.attributes.position, a = p.array;
  const on = call > 0.2 || Math.random() < 0.3;
  let v = 0;
  for (let arc = 0; arc < 5; arc++) {
    const s = arc % 2 ? 1 : -1; let x = s * rand(1, 8), y = rand(-0.5, 1.5), z = rand(-1, 1.5);
    for (let k = 0; k < 4; k++) {
      a[v++] = x; a[v++] = y; a[v++] = z;
      x += rand(-1.1, 1.1); y += rand(-1, 1); z += rand(-0.6, 0.6);
      a[v++] = x; a[v++] = y; a[v++] = z;
    }
  }
  p.needsUpdate = true; R.arcs.visible = on; R.arcs.geometry.setDrawRange(0, 40);
}
