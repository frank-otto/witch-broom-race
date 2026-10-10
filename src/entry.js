// Witch Broom Race — main: renderer, game loop, input, chase camera, set piece, UI glue, test hooks.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { createWorld, updateWorld, QUALITY, strike, setBiome } from './world.js';
import { createCourse, resetCourse, updateCourse, biomeAt, scheduleBolt, hazardDist, forcePattern, spawnPickup, spawnStar, spawnRing, spawnStone, clearAhead, XW, YMIN, YMAX } from './course.js';
import { createWitch, updateWitch } from './witch.js';
import { createRaven, updateRaven } from './boss.js';
import * as FX from './fx.js';
import * as A from './audio.js';
import { T, setLang, getLang, applyI18n, rankFor, shareText, fmt } from './i18n.js';
import { rand, clamp, lerp, damp, pick, store } from './util.js';

const $ = id => document.getElementById(id);
const ROUND = 90, RAVEN_AT = 60, RAVEN_INTRO = 3.0, RAVEN_END = 80;
const BIOME_T = [[0, 'grave'], [22, 'forest'], [42, 'village'], [60, 'canyon'], [80, 'storm']];
const CHAP = { grave: 'ch1', forest: 'ch2', village: 'ch3', canyon: 'ch4', storm: 'ch5' };
function biomeAtTime(t) { let n = 'grave'; for (const [t0, b] of BIOME_T) if (t >= t0) n = b; return n; }

// ---------------- state ----------------
const S = {
  state: 'attract', kids: store.get('wbr-kids', false) === true, quality: store.get('wbr-quality', ''), qualityUser: !!store.get('wbr-quality', ''),
  elapsed: 0, clock: 0, score: 0, dist: 0, stars: 0, chain: 0, lastStarT: -9, bestChain: 0, lives: 3, maxLives: 3, invuln: 0,
  shield: 0, magnet: 0, x2: 0, boostT: 0, boostCD: 0, hitSlow: 0, timeScale: 1, slowT: 0, slowCD: 0, auto: false,
  raven: null, ravenDone: false, ravenSurvived: false, ravenHits: 0, best: store.get('wbr-best', 0) || 0, nameV: store.get('wbr-name', 'Frank'),
  shareLang: getLang(), paused: false, zone: 'grave', attractT: 23, endT: 0, crashT: 0, finishT: 0, cine: 0, nextStormBolt: 0, hits: 0, nearCount: 0, gates: 0, rings: 0,
  log: { star: 0, ring: 0, gate: 0, hit: 0, near: 0, pickup: 0, strike: 0, shield: 0, slowmo: 0 }
};
if (!QUALITY[S.quality]) S.quality = '';
const P = new THREE.Vector3(0, 3.2, 0);
const PV = { vx: 0, vy: 0, tx: 0, ty: 3.2, speed: 20 };

// ---------------- renderer / scene ----------------
const canvas = $('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false, stencil: false, preserveDrawingBuffer: false });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 900);
let composer = null, bloom = null, W = null, C = null, H = null, R = null;
const F = FX.createFx(scene);
const O = FX.createOverlay($('fx2d'));
let baseFov = 62, dprNow = 1;

function qName() { return S.quality || 'high'; }
function buildComposer() {
  const q = QUALITY[qName()];
  if (composer) { composer.dispose && composer.dispose(); composer = null; }
  if (!q.bloom) return;
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: q.msaa });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.75 * q.bloom, 0.55, 0.8);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
}
function resize() {
  const w = window.innerWidth, h = window.innerHeight, q = QUALITY[qName()];
  dprNow = Math.min(window.devicePixelRatio || 1, q.pr);
  renderer.setPixelRatio(dprNow); renderer.setSize(w, h, false);
  camera.aspect = w / h;
  const port = clamp((1.0 - camera.aspect) / 0.5, 0, 1);
  baseFov = 60 + port * 16;
  camera.fov = baseFov; camera.updateProjectionMatrix();
  if (composer) { composer.setPixelRatio(dprNow); composer.setSize(w, h); }
  FX.resizeOverlay(O, w, h, Math.min(window.devicePixelRatio || 1, 2));
  if (W) W.stars.material.uniforms.pr.value = dprNow;
}
function pointScale() { return window.innerHeight * dprNow / (2 * Math.tan(camera.fov * Math.PI / 360)); }
function applyQuality(qn, user = false) {
  S.quality = qn; if (user) { S.qualityUser = true; store.set('wbr-quality', qn); }
  const q = QUALITY[qn];
  let biome = W ? W.biome : 'grave';
  if (W) { scene.remove(W.root); W.root.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
  W = createWorld(scene, qn); W.onThunder = near => A.sfx.thunder(near, rand(-0.5, 0.5));
  setBiome(W, biome, true);
  if (C) C.q = q;
  F.scale = q.particles;
  buildComposer(); resize();
  document.querySelectorAll('#qualSeg button').forEach(b => b.classList.toggle('on', b.dataset.q === qn));
  window.__wbrQuality = qn;
}
function buildActors() {
  if (C) scene.remove(C.root);
  C = createCourse(scene, { kids: S.kids, q: QUALITY[qName()] });
  C.zoneFn = z => biomeAtTime(timeNow() + Math.max(0, (P.z - z)) / Math.max(8, PV.speed));
  if (H) scene.remove(H.root);
  H = createWitch(); scene.add(H.root);
  if (R) scene.remove(R.root);
  R = createRaven(S.kids); scene.add(R.root);
}
function timeNow() { return S.state === 'play' ? S.elapsed : S.attractT; }

// ---------------- helpers ----------------
const V = new THREE.Vector3();
function screenOf(v) { V.copy(v).project(camera); return { x: (V.x * 0.5 + 0.5) * O.w, y: (-V.y * 0.5 + 0.5) * O.h, z: V.z }; }
function addScore(pts, at, color = '#ffd36a', size = 26, text) {
  const k = S.x2 > 0 ? 2 : 1; S.score += pts * k;
  if (at && (text || S.clock - (S._pop || 0) > 0.22)) { S._pop = S.clock; const s = screenOf(at); if (s.z < 1) FX.popup(O, s.x, s.y - 20, text || ('+' + pts * k), color, size); }
  const el = $('score'); el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
}
function comboText(main, sub, hot = false) {
  const el = $('combo'); el.className = ''; el.innerHTML = `<span class="c">${main}</span>${sub ? `<span class="p">${sub}</span>` : ''}`; void el.offsetWidth; el.className = 'show' + (hot ? ' hot' : '');
}
function chapter(kicker, title, purple = false, big = false) {
  const el = $('chapter'); el.className = ''; el.querySelector('.ck').textContent = kicker; el.querySelector('.ct').textContent = title; void el.offsetWidth; el.className = 'show' + (purple ? ' purple' : '') + (big ? ' big' : '');
}
function flash(on = true) { const f = $('flash'); f.style.transition = 'none'; f.style.opacity = on ? 0.55 : 0; void f.offsetWidth; f.style.transition = 'opacity .5s'; f.style.opacity = 0; }
function hurt() { const h = $('hurt'); h.classList.add('on'); setTimeout(() => h.classList.remove('on'), 120); }
function slowmo(k = 0.35, t = 0.55) { if (S.slowCD > 0) return; S.timeScale = k; S.slowT = t; S.slowCD = 2.5; S.log.slowmo++; A.sfx.slowmo(); }
function speedBase() { const d = clamp(S.elapsed / ROUND, 0, 1); return S.kids ? lerp(13, 20, d) : lerp(18, 31, d); }

// ---------------- course events ----------------
function onEvent(type, e) {
  const playing = S.state === 'play';
  switch (type) {
    case 'star': {
      if (S.clock - S.lastStarT < 1.25) S.chain++; else S.chain = 1;
      S.lastStarT = S.clock; S.bestChain = Math.max(S.bestChain, S.chain);
      const mult = Math.min(5, 1 + Math.floor(S.chain / 5));
      const pos = e.obj.position.clone();
      FX.sparkle(F, pos, S.x2 > 0 ? [1.6, 1.1, 0.3] : [1.4, 1.0, 0.45], 16, 4, 0.22, 0.7, 0);
      FX.ring(F, pos, 1.3, 0.3, 0xffd870);
      A.sfx.star(S.chain, clamp((pos.x - P.x) / 6, -0.7, 0.7));
      if (playing) { S.stars++; S.log.star++; addScore(10 * mult, pos, '#ffe28a', 17 + mult * 2); if (S.chain >= 5 && S.chain % 5 === 0) { comboText(`${T('chain')} x${mult}`, `${S.chain} ⭐`, S.chain >= 15); A.sfx.combo(S.chain); } }
      break;
    }
    case 'ring': {
      S.boostT = Math.max(S.boostT, 1.4); FX.ring(F, e.obj.position, 4.5, 0.45, 0x60b0ff); FX.sparkle(F, e.obj.position, [0.5, 0.9, 1.4], 36, 7, 0.22, 0.7, 0);
      FX.flashLight(F, e.obj.position, 0x60d0ff, 30); FX.shake(F, 0.25); A.sfx.ring(); A.sfx.boost();
      if (playing) { S.rings++; S.log.ring++; addScore(100, e.obj.position, '#8af0ff', 30, `${T('ring')} +${100 * (S.x2 > 0 ? 2 : 1)}`); }
      break;
    }
    case 'gate': {
      A.sfx.gate(); FX.sparkle(F, V.set(e.x, 4, e.z), [1.0, 0.6, 1.6], 40, 6, 0.3, 0.9, 0);
      if (playing) { S.gates++; S.log.gate++; addScore(150, V.set(e.x, 3.5, e.z), '#d8a0ff', 30, `${T('gate')} +${150 * (S.x2 > 0 ? 2 : 1)}`); }
      break;
    }
    case 'pickup': {
      const k = e.kind; FX.sparkle(F, e.obj.position, [1.2, 0.8, 1.6], 50, 6, 0.3, 1, 0); FX.ring(F, e.obj.position, 5, 0.45, 0xd090ff); A.sfx.pickup(k);
      if (k === 'shield') S.shield = 15; else if (k === 'magnet') S.magnet = 9; else S.x2 = 10;
      if (playing) { S.log.pickup++; comboText(T(k), k === 'shield' ? '🛡️' : k === 'magnet' ? '🧲' : '✨'); }
      break;
    }
    case 'hit': {
      if (S.state !== 'play' || S.invuln > 0) return;
      if (S.shield > 0) { S.shield = 0; S.invuln = 1.0; S.log.shield++; A.sfx.shieldBreak(); FX.sparkle(F, P, [0.5, 1.0, 1.6], 70, 8, 0.35, 0.9, 0); FX.ring(F, P, 6, 0.5, 0x80d0ff); FX.shake(F, 0.5); comboText(T('shieldPop'), '🛡️'); return; }
      S.lives--; S.hits++; S.log.hit++; S.invuln = S.kids ? 2.2 : 1.6; S.chain = 0; S.hitSlow = 1;
      A.sfx.hit(); FX.shake(F, 1.1); hurt(); FX.sparkle(F, P, [1.6, 0.5, 0.3], 60, 7, 0.3, 0.8, 4);
      const l = $('lives'); l.classList.remove('hit'); void l.offsetWidth; l.classList.add('hit');
      const s = screenOf(P); FX.popup(O, s.x, s.y - 60, S.lives === 1 ? T('lastLife') : T('ouch'), '#ff7a8a', 38, 1.1);
      if (S.lives <= 0) crash();
      break;
    }
    case 'near': {
      if (S.state !== 'play') return;
      S.nearCount++; S.log.near++; addScore(50, P, '#ffffff', 26, `${T('near')} +${50 * (S.x2 > 0 ? 2 : 1)}`);
      FX.shake(F, 0.35); A.sfx.nearMiss(clamp((e.x - P.x) / 5, -0.8, 0.8));
      if (e.type === 'bolt' || e.minM < 0.45) slowmo(S.kids ? 0.5 : 0.33, 0.55);
      break;
    }
    case 'strike': {
      S.log.strike++;
      const d = Math.hypot(e.x - P.x, e.z - P.z);
      strike(W, { near: d < 30, noBolt: true, amp: d < 30 ? 1 : 0.6 });
      FX.flashLight(F, V.set(e.x, 2, e.z), 0xc0a0ff, 120); FX.sparkle(F, V.set(e.x, 0.3, e.z), [1.2, 1.0, 1.8], 60, 9, 0.35, 0.8, 5); FX.ring(F, V.set(e.x, 0.5, e.z), 8, 0.4, 0xd0b0ff);
      FX.shake(F, clamp(1.2 - d / 30, 0.15, 0.9)); flash();
      break;
    }
    case 'telegraph': if (S.state === 'play' && S.clock - (S._tele || 0) > 0.5) { S._tele = S.clock; A.sfx.telegraph(); } break;
    case 'batsNear': A.sfx.bats(clamp(e.vx > 0 ? -0.6 : 0.6, -1, 1)); break;
  }
}

// ---------------- autopilot (attract + tests) ----------------
let apT = 0;
function autopilot(dt) {
  apT -= dt; if (apT > 0) return; apT = 0.08;
  let best = -1e9, bx = P.x, by = P.y;
  const near = C.ents.filter(e => !e.dead && e.z < P.z + 1 && e.z > P.z - 34);
  const tmp = new THREE.Vector3();
  for (let cx = -5.6; cx <= 5.61; cx += 0.8) for (let cy = 1.4; cy <= 6.8; cy += 0.6) {
    let s = -0.03 * ((cx - P.x) ** 2 + (cy - P.y) ** 2) - 0.02 * (cy - 3.5) ** 2;
    for (const e of near) {
      const dz = P.z - e.z;
      if (e.type === 'star') { const d = Math.hypot(cx - e.obj.position.x, cy - e.obj.position.y); s += 5 / (1 + d * d) / (1 + dz * 0.06); }
      else if (e.type === 'ring' && !e.passed) { const d = Math.hypot(cx - e.x, cy - e.y); s += 14 / (1 + d * d) / (1 + dz * 0.05); }
      else if (e.type === 'pickup') { const d = Math.hypot(cx - e.obj.position.x, cy - e.obj.position.y); s += 6 / (1 + d * d) / (1 + dz * 0.06); }
      else if (e.type === 'bolt') { if (e.struck && e._age > 0.35) continue; const arrive = dz / Math.max(8, PV.speed); const tl = e.tStrike - C.time; if (Math.abs(arrive - tl) < 0.9 || (!e.struck && dz < 18)) { const d = Math.abs(cx - e.x) - e.R; if (d < 1.6) s -= 60 * (1.6 - d); } }
      else if (e.hazard) {
        tmp.set(cx, cy, e.z);
        if (e.type === 'bats') { const lead = dz / Math.max(8, PV.speed + e.vz); let m = 99; for (const b of e.bats) { const bx2 = b.position.x + e.vx * lead, by2 = b.position.y; m = Math.min(m, Math.hypot(cx - bx2, cy - by2) - 0.6); } if (m < 1.6) s -= 45 * (1.6 - m) / (1 + dz * 0.02); continue; }
        const d = hazardDist(e, tmp) - 0.55;
        if (d < 1.4) s -= 60 * (1.4 - d) / (1 + dz * 0.015);
      }
    }
    if (s > best) { best = s; bx = cx; by = cy; }
  }
  PV.tx = bx; PV.ty = by;
}

// ---------------- input ----------------
const keys = new Set();
const inp = { mode: 'mouse', touchId: null, sx: 0, sy: 0, t0: 0, lx: 0, ly: 0, moved: 0 };
function boost() {
  if (S.state !== 'play' || S.paused) return false;
  if (S.boostCD > 0) return false;
  S.boostT = Math.max(S.boostT, 1.1); S.boostCD = 2.6; A.sfx.boost(); FX.shake(F, 0.2);
  return true;
}
canvas.addEventListener('pointermove', ev => {
  if (S.state !== 'play' || S.paused) return;
  if (ev.pointerType === 'mouse') {
    inp.mode = 'mouse';
    const nx = ev.clientX / window.innerWidth, ny = ev.clientY / window.innerHeight;
    PV.tx = clamp((nx * 2 - 1) * XW * 1.2, -XW, XW); PV.ty = clamp(lerp(YMAX, YMIN, (ny - 0.12) / 0.76), YMIN, YMAX);
  } else if (ev.pointerId === inp.touchId) {
    const dx = ev.clientX - inp.lx, dy = ev.clientY - inp.ly; inp.lx = ev.clientX; inp.ly = ev.clientY;
    inp.moved += Math.abs(dx) + Math.abs(dy); inp.mode = 'touch';
    const k = (2 * XW) / (Math.min(window.innerWidth, 900) * 0.62);
    PV.tx = clamp(PV.tx + dx * k, -XW, XW); PV.ty = clamp(PV.ty - dy * k * 0.85, YMIN, YMAX);
  }
});
canvas.addEventListener('pointerdown', ev => {
  if (S.state !== 'play') return;
  if (ev.pointerType === 'mouse') { if (ev.button === 0) boost(); return; }
  inp.touchId = ev.pointerId; inp.lx = inp.sx = ev.clientX; inp.ly = inp.sy = ev.clientY; inp.t0 = performance.now(); inp.moved = 0; inp.mode = 'touch';
  try { canvas.setPointerCapture(ev.pointerId); } catch (e) {}
});
const endTouch = ev => { if (ev.pointerId !== inp.touchId) return; inp.touchId = null; if (inp.moved < 14 && performance.now() - inp.t0 < 300) boost(); };
canvas.addEventListener('pointerup', endTouch); canvas.addEventListener('pointercancel', ev => { if (ev.pointerId === inp.touchId) inp.touchId = null; });
const KEYMAP = { ArrowLeft: 'l', a: 'l', A: 'l', ArrowRight: 'r', d: 'r', D: 'r', ArrowUp: 'u', w: 'u', W: 'u', ArrowDown: 'dn', s: 'dn', S: 'dn' };
window.addEventListener('keydown', e => {
  if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
  if (KEYMAP[e.key]) { keys.add(KEYMAP[e.key]); inp.mode = 'keys'; e.preventDefault(); }
  if (e.key === ' ') { e.preventDefault(); if (S.state === 'play') boost(); else if (S.state === 'attract' || (S.state === 'end' && S.endT > 0.8)) startRound(); }
  if (e.key === 'Enter' && (S.state === 'attract' || (S.state === 'end' && S.endT > 0.8))) startRound();
  if (e.key === 'Escape' && S.state === 'play') pause(!S.paused);
});
window.addEventListener('keyup', e => { if (KEYMAP[e.key]) keys.delete(KEYMAP[e.key]); });
window.addEventListener('blur', () => keys.clear());

// ---------------- round flow ----------------
function resetRun(attract) {
  P.set(0, 3.2, 0); PV.vx = PV.vy = 0; PV.tx = 0; PV.ty = 3.2;
  S.elapsed = 0; S.score = 0; S.dist = 0; S.stars = 0; S.chain = 0; S.bestChain = 0; S.maxLives = S.kids ? 5 : 3; S.lives = S.maxLives; S.invuln = 0;
  S.shield = 0; S.magnet = 0; S.x2 = 0; S.boostT = 0; S.boostCD = 0; S.hitSlow = 0; S.timeScale = 1; S.slowT = 0; S.slowCD = 0;
  S.ravenDone = false; S.ravenSurvived = false; S.ravenHits = 0; S.hits = 0; S.nearCount = 0; S.gates = 0; S.rings = 0; S.nextStormBolt = 0; S.cine = 0;
  R.root.visible = false; R.phase = 'off'; C.noPatterns = false;
  const z0 = attract ? biomeAtTime(S.attractT) : 'grave';
  resetCourse(C, P.z, z0); S.zone = z0; setBiome(W, z0, true); W.stormy = 0;
  FX.clearFx(F); O.pops = [];
  for (const k in S.log) S.log[k] = 0;
  A.setMood('main');
}
function startRound() {
  A.unlockAudio();
  $('start').classList.add('hidden'); $('end').classList.add('hidden'); $('hud').classList.remove('hidden'); $('boostWrap').classList.remove('hidden');
  document.body.classList.add('playing'); document.body.classList.remove('cine');
  S.state = 'play'; S.paused = false;
  resetRun(false);
  livesDom();
  A.sfx.start();
  chapter(T('ch1'), T('b_grave'));
  FX.sparkle(F, P, [1.4, 1.0, 0.5], 80, 8, 0.3, 1, 0);
}
function crash() { S.state = 'crash'; S.crashT = 0; A.sfx.crash(); slowmo(0.45, 1.0); document.body.classList.add('cine'); }
function finish() { S.state = 'finish'; S.finishT = 0; A.sfx.finish(); document.body.classList.add('cine'); chapter('', getLang() === 'de' ? 'MITTERNACHT!' : 'MIDNIGHT!', false, true); }
function endRound() { if (S.state === 'play') { S.lives = 0; crash(); } }
function liveResult() { return { score: Math.round(S.score), dist: Math.round(S.dist), stars: S.stars, bestChain: S.bestChain, raven: S.ravenSurvived, finished: S.lives > 0, kids: S.kids }; }
function result() { const r = (S.state === 'end' && S.lastResult) ? S.lastResult : liveResult(); return { ...r, name: ($('name').value || 'Frank').trim() }; }
function showEnd() {
  S.lastResult = liveResult();
  S.state = 'end'; S.endT = 0; document.body.classList.remove('playing', 'cine');
  $('hud').classList.add('hidden'); $('boostWrap').classList.add('hidden');
  const r = result(), isBest = r.score > S.best;
  if (isBest) { S.best = r.score; store.set('wbr-best', S.best); A.sfx.newBest(); }
  $('endTitle').textContent = r.finished ? T('endFinish') : T('endCrash');
  $('endScore').textContent = fmt(r.score); $('newBest').classList.toggle('hidden', !isBest);
  $('rank').textContent = '🧹 ' + rankFor(r.score);
  $('stDist').textContent = fmt(r.dist) + ' m'; $('stStars').textContent = r.stars; $('stChain').textContent = 'x' + r.bestChain;
  $('stRaven').textContent = r.raven ? '⚡ ' + T('survived') : '—'; $('stBest').textContent = fmt(S.best); $('bestStart').textContent = fmt(S.best);
  $('name').value = S.nameV; updateShare();
  $('end').classList.remove('hidden'); $('chapter').className = '';
  // keep flying behind the card (attract)
  S.attractT = 23; resetRun(true); S.auto = false;
}
function livesDom() { const l = $('lives'); l.innerHTML = ''; for (let i = 0; i < S.maxLives; i++) { const s = document.createElement('span'); s.textContent = '🧙‍♀️'; l.appendChild(s); } }

// ---------------- the Storm Raven set piece ----------------
function ravenStart() {
  R.root.visible = true; R.phase = 'intro'; R.pt = 0; R.nextCall = RAVEN_INTRO + 0.6; R.call = 0; R.calls = 0;
  C.noPatterns = true; clearAhead(C, P, -2, 200, true);
  A.sfx.bossIntro(); A.setMood('boss'); A.duck(0.4, 2.5);
  document.body.classList.add('cine');
  setTimeout(() => chapter(S.kids ? T('bossKidsSub') : T('bossSub'), S.kids ? T('bossKids') : T('boss'), true, true), 900);
  R.root.position.set(P.x, -14, P.z - 46);
}
function ravenUpdate(dt) {
  if (R.phase === 'off') return;
  const t = R.pt;
  let call = 0, raise = 0;
  if (R.phase === 'intro') {
    const k = clamp(t / 2.2, 0, 1), e = 1 - Math.pow(1 - k, 3);
    R.root.position.set(lerp(R.root.position.x, P.x * 0.3, 0.05), lerp(-14, 10, e), P.z - lerp(46, 28, e));
    R.root.rotation.set(-0.35 * (1 - e), 0, 0);
    raise = 1 - e; call = t > 1.3 && t < 2.2 ? 1 : 0;
    if (t > 1.35 && !R.introBolt) { R.introBolt = true; strike(W, { near: true }); W.bolt.position.set(R.root.position.x + 6, 50, R.root.position.z - 6); W.boltT = W.t; FX.shake(F, 0.9); flash(); }
    if (t >= RAVEN_INTRO) { R.phase = 'chase'; R.pt = 0; R.nextCall = 0.9; C.noPatterns = false; C.patZ = P.z - 40; document.body.classList.remove('cine'); R.introBolt = false; }
  } else if (R.phase === 'chase') {
    R.root.position.x = damp(R.root.position.x, P.x * 0.45 + Math.sin(S.clock * 0.7) * 2.5, 1.5, dt);
    R.root.position.y = 9.5 + Math.sin(S.clock * 1.1) * 1.2; R.root.position.z = P.z - 27;
    R.root.rotation.set(0.05, Math.sin(S.clock * 0.6) * 0.12, Math.sin(S.clock * 0.8) * 0.08);
    // calls → telegraphed bolts
    R.nextCall -= dt;
    const tele = S.kids ? 2.1 : 1.35;
    if (R.nextCall < 0.5 && !R.calling) { R.calling = true; A.sfx.bossCall(); }
    if (R.calling) call = clamp(1 - Math.abs(R.nextCall) * 2, 0, 1);
    if (R.nextCall <= 0) {
      R.calling = false; R.calls++;
      const sp = PV.speed, d = clamp(t / 16, 0, 1);
      R.nextCall = S.kids ? 2.3 : lerp(1.45, 1.0, d);
      const mode = S.kids ? 'aim' : pick(R.calls < 3 ? ['aim'] : ['aim', 'pair', 'sweep', 'aim']);
      if (mode === 'aim') scheduleBolt(C, P, sp, tele, P.x + PV.vx * 0.4);
      else if (mode === 'pair') { const cx = clamp(P.x, -4, 4); scheduleBolt(C, P, sp, tele, cx - 2.7); scheduleBolt(C, P, sp, tele, cx + 2.7); scheduleBolt(C, P, sp, tele + 0.5, cx); }
      else { const dir = Math.random() < 0.5 ? -1 : 1; for (let i = 0; i < 4; i++) scheduleBolt(C, P, sp, tele + i * 0.28, dir * (-5.2 + i * 3.4)); }
    }
    if (S.elapsed >= RAVEN_END) { R.phase = 'exit'; R.pt = 0; ravenWin(); }
  } else if (R.phase === 'exit') {
    R.root.position.y += dt * 14; R.root.position.z = P.z - 27 - t * 30; R.root.rotation.x = -0.5;
    raise = 0.4;
    if (t > 3) { R.phase = 'off'; R.root.visible = false; }
  }
  R.call = call;
  updateRaven(R, dt, { call, raise, flap: R.phase === 'intro' ? 2.2 : 3.4, amp: R.phase === 'exit' ? 0.8 : 0.55 });
}
function ravenWin() {
  S.ravenDone = true; S.ravenSurvived = S.lives > 0; A.setMood('main'); A.sfx.bossBye();
  strike(W, { near: true }); flash(); FX.shake(F, 0.8);
  addScore(2000, P, '#e0b0ff', 40, `${T('bossWin')} +${2000 * (S.x2 > 0 ? 2 : 1)}`);
  chapter('+2000', T('bossWin'), true, true);
}

// ---------------- main update ----------------
function steer(dt) {
  const maxV = S.kids ? 9 : 12;
  if (S.state === 'attract' || S.state === 'end' || S.auto) autopilot(dt);
  else if (inp.mode === 'keys' || keys.size) {
    const kv = S.kids ? 8 : 10.5;
    if (keys.has('l')) PV.tx = P.x - 3; else if (keys.has('r')) PV.tx = P.x + 3; else if (inp.mode === 'keys') PV.tx = P.x + PV.vx * 0.08;
    if (keys.has('u')) PV.ty = P.y + 3; else if (keys.has('dn')) PV.ty = P.y - 3; else if (inp.mode === 'keys') PV.ty = P.y + PV.vy * 0.08;
    PV.tx = clamp(PV.tx, P.x - kv, P.x + kv);
  }
  PV.tx = clamp(PV.tx, -XW, XW); PV.ty = clamp(PV.ty, YMIN, YMAX);
  const ax = clamp((PV.tx - P.x) * 5.5, -maxV, maxV), ay = clamp((PV.ty - P.y) * 5, -maxV * 0.8, maxV * 0.8);
  PV.vx = damp(PV.vx, ax, 9, dt); PV.vy = damp(PV.vy, ay, 9, dt);
  P.x = clamp(P.x + PV.vx * dt, -XW, XW); P.y = clamp(P.y + PV.vy * dt, YMIN, YMAX);
}
function emitTrail(dt) {
  if (!H) return;
  H.root.updateMatrixWorld(true);
  const bp = H.bristle.getWorldPosition(V);
  const boostK = S.boostT > 0 ? 1 : 0;
  const n = Math.max(1, Math.round((3 + boostK * 4) * F.scale * dt * 60));
  for (let i = 0; i < n; i++) {
    const r = Math.random(); const gold = S.x2 > 0 || r < 0.5;
    const c = gold ? [1.0, 0.72, 0.3] : r < 0.75 ? [1.0, 0.4, 0.85] : [0.6, 0.45, 1.0];
    F.points.spawn(bp.x + rand(-0.15, 0.15), bp.y + rand(-0.15, 0.15), bp.z + rand(-0.1, 0.3), rand(-0.8, 0.8), rand(-0.3, 0.8), -PV.speed * rand(0.55, 0.8), rand(0.09, 0.2) * (1 + boostK * 0.5), rand(0.45, 0.8), c[0], c[1], c[2], -0.4, 0.985);
  }
}
let hudCache = {};
function setText(id, v) { if (hudCache[id] !== v) { hudCache[id] = v; $(id).textContent = v; } }
function updateHud() {
  setText('score', fmt(S.score)); setText('dist', fmt(S.dist)); setText('starsN', String(S.stars));
  const p = clamp(S.elapsed / ROUND, 0, 1);
  $('progFill').style.width = (p * 100).toFixed(2) + '%'; $('progWitch').style.left = (p * 100).toFixed(2) + '%';
  const ls = $('lives').children; for (let i = 0; i < ls.length; i++) ls[i].classList.toggle('lost', i >= S.lives);
  const bf = S.boostT > 0 ? 1 - 0 : 1 - S.boostCD / 2.6;
  $('boostFill').style.width = (clamp(bf, 0, 1) * 100).toFixed(1) + '%'; $('boostWrap').classList.toggle('ready', S.boostCD <= 0);
  const chips = [];
  if (S.shield > 0) chips.push(['shield', '🛡️ ' + T('shield'), S.shield / 15]);
  if (S.magnet > 0) chips.push(['magnet', '🧲 ' + T('magnet'), S.magnet / 9]);
  if (S.x2 > 0) chips.push(['x2', '×2 ' + T('x2'), S.x2 / 10]);
  const key = chips.map(c => c[0] + Math.ceil(c[2] * 20)).join();
  if (hudCache.chips !== key) { hudCache.chips = key; $('chips').innerHTML = chips.map(c => `<span class="chip ${c[0]}">${c[1]}<i style="width:${(c[2] * 100).toFixed(0)}%"></i></span>`).join(''); }
}
function zoneCheck() {
  const z = biomeAt(C, P.z);
  if (z !== S.zone) {
    S.zone = z; setBiome(W, z);
    if (S.state === 'play' && z !== 'canyon') { chapter(T(CHAP[z]), T('b_' + z), z === 'storm'); A.sfx.biome(); }
  }
  W.stormy = damp(W.stormy, (S.zone === 'storm' || S.zone === 'canyon') ? 1 : 0, 0.8, 1 / 60);
}

function step(realDt) {
  if (S.slowT > 0) { S.slowT -= realDt; if (S.slowT <= 0) S.timeScale = 1; }
  if (S.slowCD > 0) S.slowCD -= realDt;
  const dt = realDt * S.timeScale;
  S.clock += dt;
  const playing = S.state === 'play';
  if (playing) {
    S.elapsed += dt;
    if (!S.ravenDone && R.phase === 'off' && S.elapsed >= RAVEN_AT) ravenStart();
    if (S.elapsed >= ROUND) finish();
    if (S.zone === 'storm' && S.elapsed > S.nextStormBolt && S.elapsed < ROUND - 1.5) { S.nextStormBolt = S.elapsed + (S.kids ? rand(2.2, 3) : rand(1.0, 1.6)); scheduleBolt(C, P, PV.speed, S.kids ? 2.1 : 1.5, P.x + rand(-1.5, 1.5)); }
    for (const k of ['invuln', 'shield', 'magnet', 'x2', 'boostT', 'boostCD']) if (S[k] > 0) S[k] = Math.max(0, S[k] - dt);
    S.hitSlow = Math.max(0, S.hitSlow - dt * 1.2);
  } else if (S.state === 'attract' || S.state === 'end') {
    S.attractT += dt; if (S.attractT > 58) S.attractT = 0.5;
    S.endT += realDt;
    if (S.boostT > 0) S.boostT -= dt;
    if (Math.random() < dt * 0.12) S.boostT = 1.0;
  }
  // speed + motion
  const boostK = S.boostT > 0 ? 1 : 0;
  let target = (playing || S.state === 'crash' || S.state === 'finish') ? speedBase() : (S.kids ? 15 : 21);
  target *= (1 + 0.5 * boostK) * (1 - 0.35 * S.hitSlow);
  if (R.phase === 'intro') target *= 0.7;
  PV.speed = damp(PV.speed, target, boostK ? 6 : 2.5, dt);
  if (S.state === 'crash') {
    S.crashT += realDt; PV.vy -= 14 * dt; P.y = Math.max(0.5, P.y + PV.vy * dt); PV.speed *= Math.pow(0.4, dt);
    if (S.crashT > 1.8) showEnd();
  } else if (S.state === 'finish') {
    S.finishT += realDt; P.y += dt * (2 + S.finishT * 3); PV.speed = damp(PV.speed, 34, 2, dt);
    if (S.finishT > 2.8) showEnd();
  } else steer(dt);
  P.z -= PV.speed * dt;
  if (playing) { S.dist += PV.speed * dt; S.score += PV.speed * dt * (S.x2 > 0 ? 2 : 1); }
  // world
  C.time = C.time; // (course keeps its own clock)
  updateCourse(C, dt, P, { speed: PV.speed, magnet: S.magnet > 0, playing, attract: !playing, d: clamp(S.elapsed / ROUND, 0, 1), onEvent });
  zoneCheck();
  ravenUpdate(dt);
  H.root.position.copy(P);
  updateWitch(H, dt, { vx: PV.vx, vy: PV.vy, speedK: PV.speed / 24, boost: boostK, invuln: playing ? S.invuln : 0, shield: S.shield > 0, magnet: S.magnet > 0, x2: S.x2 > 0, crash: S.state === 'crash' ? Math.min(1, S.crashT) * S.crashT : 0 });
  emitTrail(dt);
  FX.updateFx(F, dt);
  A.setWind(PV.speed / 24 + boostK * 0.35, true);
}
// chase camera (+ cinematic raven intro)
const camPos = new THREE.Vector3(0, 5, 8), camLook = new THREE.Vector3(0, 3, -10);
function updateCamera(realDt) {
  const port = clamp((1.0 - camera.aspect) / 0.5, 0, 1);
  const boostK = S.boostT > 0 ? 1 : 0;
  const back = 7.6 + port * 2.4 + boostK * 1.2;
  const want = V.set(P.x * (0.7 - port * 0.2), P.y * 0.7 + 3.0 + port * 0.6, P.z + back);
  const look = new THREE.Vector3(P.x * (0.82 - port * 0.25), P.y * 0.8 + 1.9, P.z - 14);
  // cinematic: raven intro
  let ck = 0;
  if (R.phase === 'intro') { const t = R.pt; ck = t < 0.5 ? t / 0.5 : t > RAVEN_INTRO - 0.6 ? Math.max(0, (RAVEN_INTRO - t) / 0.6) : 1; ck = ck * ck * (3 - 2 * ck); }
  if (ck > 0) {
    const cp = new THREE.Vector3(P.x + 2.6, P.y - 1.0, P.z + 3.4);
    const cl = new THREE.Vector3().copy(P).lerp(R.root.position, 0.8);
    want.lerp(cp, ck); look.lerp(cl, ck);
  }
  if (S.state === 'attract' || S.state === 'end') {
    const a = Math.sin(S.clock * 0.18) * (1 - port * 0.55);
    want.set(P.x - 4.2 * a, P.y + 0.9 + port * 1.2, P.z + 6.6 + port * 2.5 - Math.abs(a) * 1.2);
    look.set(P.x + 2.6 * a, P.y + 2.1 + port * 0.2, P.z - 10);
  }
  if (S.state === 'finish') { want.set(camPos.x, camPos.y + realDt * 0.6, camPos.z - PV.speed * realDt * 0.35); look.copy(P); }
  if (S.state === 'crash') { want.set(P.x * 0.6, Math.max(2.2, P.y + 2.4), P.z + 7.5); look.copy(P); }
  const k = 1 - Math.exp(-realDt * (ck > 0 ? 6 : 7));
  camPos.x += (want.x - camPos.x) * k; camPos.y += (want.y - camPos.y) * k;
  camPos.z = (S.state === 'finish' || ck > 0) ? camPos.z + (want.z - camPos.z) * k : want.z;
  camLook.lerp(look, 1 - Math.exp(-realDt * 8));
  if (window.__wbrCam) { const o = window.__wbrCam; want.set(P.x + o[0], P.y + o[1], P.z + o[2]); look.set(P.x + o[3], P.y + o[4], P.z + o[5]); camPos.copy(want); camLook.copy(look); }
  const sh = F.shakeAmp;
  camera.position.set(camPos.x + (Math.random() - 0.5) * sh * 0.5, camPos.y + (Math.random() - 0.5) * sh * 0.5, camPos.z);
  camera.lookAt(camLook);
  camera.rotation.z += -H.roll * 0.16 * (1 - ck) + (Math.random() - 0.5) * sh * 0.03;
  const fov = baseFov + clamp((PV.speed - 18) / 14, 0, 1) * 6 + boostK * 9 - ck * 8;
  camera.fov = damp(camera.fov, fov, 4, realDt); camera.updateProjectionMatrix();
  const ps = pointScale();
  F.points.mat.uniforms.scale.value = ps; W.ff.material.uniforms.scale.value = ps;
}
function renderNow() { if (composer) composer.render(); else renderer.render(scene, camera); }

// ---------------- share / end card ----------------
function updateShare() {
  $('shareText').textContent = shareText(result(), S.shareLang);
  document.querySelectorAll('#shareLang button').forEach(b => b.classList.toggle('on', b.dataset.sl === S.shareLang));
}
function toast(msg, ms = 2200) { const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), ms); }
async function copyShare() {
  const txt = shareText(result(), S.shareLang); let ok = false;
  try { if (navigator.clipboard && window.isSecureContext !== false) { await navigator.clipboard.writeText(txt); ok = true; } } catch (e) {}
  if (!ok) { try { const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove(); } catch (e) {} }
  window.__wbrLastShare = txt;
  toast(ok ? T('copied') : T('copyFail')); A.sfx.ui();
  return ok;
}
function makeShot() {
  renderNow();
  const c = document.createElement('canvas'); c.width = 1080; c.height = 1350; const g = c.getContext('2d');
  const src = renderer.domElement, sw = src.width, sh = src.height, k = Math.max(1080 / sw, 1350 / sh);
  g.drawImage(src, (1080 - sw * k) / 2, (1350 - sh * k) / 2, sw * k, sh * k);
  const vg = g.createLinearGradient(0, 0, 0, 1350); vg.addColorStop(0, 'rgba(10,2,20,0.2)'); vg.addColorStop(0.45, 'rgba(10,2,20,0.5)'); vg.addColorStop(1, 'rgba(10,2,20,0.85)');
  g.fillStyle = vg; g.fillRect(0, 0, 1080, 1350);
  const r = result(), L = getLang();
  const SERIF = 'Didot, "Bodoni 72", Georgia, "Times New Roman", serif', SANS = '"Arial Black", Impact, sans-serif';
  const txt = (s, x, y, size, fill, glow, font = SANS, weight = '900', spacing = 0) => { g.font = `${weight} ${size}px ${font}`; g.textAlign = 'center'; g.textBaseline = 'middle'; if ('letterSpacing' in g) g.letterSpacing = spacing + 'px'; g.shadowColor = glow; g.shadowBlur = size * 0.45; g.fillStyle = fill; g.fillText(s, x, y); g.shadowBlur = 0; if ('letterSpacing' in g) g.letterSpacing = '0px'; };
  const grad = (y0, y1, a, b, c3) => { const gr = g.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, a); gr.addColorStop(0.5, b); gr.addColorStop(1, c3); return gr; };
  txt('WITCH', 540, 170, 170, grad(90, 250, '#fffbe6', '#ffd070', '#c25a10'), 'rgba(255,140,30,0.9)', SERIF, '900', 6);
  txt('BROOM RACE', 540, 300, 84, grad(260, 340, '#ffffff', '#e2b8ff', '#8a3cff'), 'rgba(176,77,255,0.95)', SERIF, '900', 14);
  g.save(); g.fillStyle = 'rgba(34,12,52,0.62)'; g.strokeStyle = 'rgba(255,190,120,0.5)'; g.lineWidth = 3;
  const rr = (x, y, w, h, Rr) => { g.beginPath(); g.moveTo(x + Rr, y); g.arcTo(x + w, y, x + w, y + h, Rr); g.arcTo(x + w, y + h, x, y + h, Rr); g.arcTo(x, y + h, x, y, Rr); g.arcTo(x, y, x + w, y, Rr); g.closePath(); };
  rr(100, 420, 880, 740, 48); g.shadowColor = 'rgba(176,77,255,0.5)'; g.shadowBlur = 50; g.fill(); g.shadowBlur = 0; g.stroke(); g.restore();
  txt(r.name.toUpperCase(), 540, 495, 44, '#f2d0ff', 'rgba(176,77,255,0.9)');
  txt(fmt(r.score, L), 540, 625, 160, grad(550, 700, '#fff3c4', '#ffb547', '#ff6a0a'), 'rgba(255,120,20,0.95)');
  txt('🧹 ' + rankFor(r.score, L), 540, 755, 52, '#ffd9a8', 'rgba(255,140,30,0.9)');
  const st = [[fmt(r.dist, L) + ' m', T('stDist', L)], ['⭐ ' + r.stars, T('stStars', L)], [r.raven ? '⚡' : '—', T('stRaven', L)]];
  st.forEach(([v, l], i) => { const x = 250 + i * 290; g.fillStyle = 'rgba(255,255,255,0.08)'; rr(x - 125, 840, 250, 170, 26); g.fill(); txt(v, x, 905, 54, '#fff0d0', 'rgba(255,160,60,0.6)'); txt(l.toUpperCase(), x, 975, 22, 'rgba(255,240,230,0.8)', 'rgba(0,0,0,0)', SANS, '800'); });
  txt(L === 'de' ? 'Fliegst du weiter?' : 'Can you fly further?', 540, 1085, 42, '#ffffff', 'rgba(255,120,240,0.8)', SANS, '800');
  txt('#WitchBroomRace', 540, 1265, 40, '#ffb547', 'rgba(255,120,20,0.8)');
  return c;
}
function saveShot() {
  const c = makeShot(); const url = c.toDataURL('image/png');
  const a = document.createElement('a'); a.href = url; a.download = `witch-broom-race-${result().score}.png`; document.body.appendChild(a); a.click(); a.remove();
  window.__wbrLastShot = url.length; toast(T('saved')); A.sfx.ui();
  return url;
}

// ---------------- UI wiring ----------------
function refreshTexts() {
  applyI18n(S.kids);
  document.querySelectorAll('#langSeg button, #langSeg2 button').forEach(b => b.classList.toggle('on', b.dataset.lang === getLang()));
  if (S.state === 'end') { updateShare(); const r = result(); }
  qualHint();
}
function setKids(on) {
  S.kids = !!on; store.set('wbr-kids', S.kids); $('chkKids').checked = S.kids; $('chkKids2').checked = S.kids;
  A.setKids(S.kids); buildActors(); resetRun(S.state !== 'play'); if (S.state === 'play') livesDom();
  refreshTexts();
}
$('btnPlay').onclick = () => startRound();
$('btnReplay').onclick = () => startRound();
$('chkKids').onchange = e => setKids(e.target.checked);
$('chkKids2').onchange = e => setKids(e.target.checked);
document.querySelectorAll('#langSeg button, #langSeg2 button').forEach(b => b.onclick = () => { setLang(b.dataset.lang); S.shareLang = getLang(); refreshTexts(); A.sfx.ui(); });
document.querySelectorAll('#shareLang button').forEach(b => b.onclick = () => { S.shareLang = b.dataset.sl; updateShare(); A.sfx.ui(); });
document.querySelectorAll('#qualSeg button').forEach(b => b.onclick = () => { applyQuality(b.dataset.q, true); qualHint(); A.sfx.ui(); });
$('btnSettings').onclick = () => $('settings').classList.remove('hidden');
$('btnCloseSettings').onclick = () => $('settings').classList.add('hidden');
$('settings').onclick = e => { if (e.target.id === 'settings') $('settings').classList.add('hidden'); };
$('volMusic').oninput = e => { A.setMusicVolume(e.target.value / 100); store.set('wbr-vm', +e.target.value); };
$('volSfx').oninput = e => { A.setSfxVolume(e.target.value / 100); store.set('wbr-vs', +e.target.value); };
function setMute(m) { A.setMuted(m); $('chkMute').checked = m; $('btnMute').textContent = m ? '🔇' : '🔊'; store.set('wbr-mute', !!m); }
$('chkMute').onchange = e => setMute(e.target.checked);
$('btnMute').onclick = () => setMute(!A.isMuted());
function pause(on) { if (S.state !== 'play') return; S.paused = on; $('pauseScr').classList.toggle('hidden', !on); keys.clear(); }
$('btnPause').onclick = () => pause(true);
$('btnResume').onclick = () => pause(false);
$('btnQuit').onclick = () => { pause(false); endRound(); };
$('btnShare').onclick = () => copyShare();
$('btnShot').onclick = () => saveShot();
$('name').oninput = e => { S.nameV = e.target.value; store.set('wbr-name', S.nameV); updateShare(); };
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(true); });
window.addEventListener('resize', resize);

// ---------------- FPS → quality suggestion ----------------
const fps = { n: 0, t0: 0, ema: 60, slow: 0, decided: false, samples: 0 };
const qLabel = q => q === 'low' ? T('q_low') : q === 'mid' ? T('q_mid') : q === 'high' ? T('q_high') : T('q_ultra');
function qualHint() { $('qualHint').textContent = `${T('suggested')}: ${qLabel(suggest())} (${Math.round(fps.ema)} fps)`; }
function suggest() { const e = fps.ema; return e >= 56 ? (Math.max(window.screen.width, window.screen.height) >= 1400 && (window.devicePixelRatio || 1) <= 2 ? 'ultra' : 'high') : e >= 42 ? 'high' : e >= 28 ? 'mid' : 'low'; }
function trackFps(now) {
  fps.n++;
  if (!fps.t0) fps.t0 = now;
  if (now - fps.t0 >= 1000) {
    const f = fps.n * 1000 / (now - fps.t0); fps.ema = fps.decided ? fps.ema * 0.6 + f * 0.4 : f; fps.n = 0; fps.t0 = now; fps.samples++; qualHint();
    if (!fps.decided && fps.samples >= 3) { fps.decided = true; if (!S.qualityUser && !window.__wbrNoAutoQ) { const s = suggest(); if (s !== qName()) { applyQuality(s); toast(`${T('suggested')}: ${qLabel(s)} (${Math.round(fps.ema)} fps)`); } } }
    if (fps.decided && S.state === 'play' && fps.ema < 26 && qName() !== 'low' && !window.__wbrNoAutoQ) { fps.slow++; if (fps.slow >= 4) { fps.slow = 0; const order = ['low', 'mid', 'high', 'ultra']; const nq = order[Math.max(0, order.indexOf(qName()) - 1)]; if (!S.qualityUser) { applyQuality(nq); toast(`${T('fpsLow')} ${qLabel(nq)}`); } else toast(`${T('suggested')}: ${qLabel(nq)}`); } } else fps.slow = 0;
  }
}

// ---------------- main loop ----------------
let lastT = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const realDt = Math.min(0.05, Math.max(0, (now - lastT) / 1000)); lastT = now;
  trackFps(now);
  if (window.__wbrHold) return;
  if (S.paused) { renderNow(); return; }
  tick(realDt);
}
function tick(realDt) {
  step(realDt);
  updateCamera(realDt);
  updateWorld(W, realDt, camera, { fogMul: 1 });
  if (S.state === 'play') updateHud();
  renderNow();
  const sc = screenOf(P);
  FX.drawOverlay(O, realDt, ((S.boostT > 0 ? 1 : 0) + clamp((PV.speed - 26) / 12, 0, 0.5)) * (S.state === 'play' ? 1 : 0.45), O.w / 2, O.h * 0.45);
}

// ---------------- boot ----------------
function boot() {
  buildActors();
  applyQuality(S.quality || 'high');
  setLang(getLang()); S.shareLang = getLang();
  $('chkKids').checked = S.kids; $('chkKids2').checked = S.kids; A.setKids(S.kids);
  const vm = store.get('wbr-vm', 60), vs = store.get('wbr-vs', 90);
  $('volMusic').value = vm; $('volSfx').value = vs; A.setMusicVolume(vm / 100); A.setSfxVolume(vs / 100);
  setMute(store.get('wbr-mute', false) === true);
  $('bestStart').textContent = fmt(S.best); $('name').value = S.nameV;
  refreshTexts();
  resize();
  // frame 0 = action: pre-fly ~2.4 s on autopilot so the trail, stars and scenery are already in motion
  S.attractT = 22.6; resetRun(true);
  const pre = 150;
  for (let i = 0; i < pre; i++) { step(1 / 60); updateCamera(1 / 60); updateWorld(W, 1 / 60, camera); }
  S.boostT = 0.9;
  renderNow(); FX.drawOverlay(O, 0, 0.6, O.w / 2, O.h * 0.45);
  document.body.classList.add('ready');
  requestAnimationFrame(t => { lastT = t; frame(t); });
}

// test / automation hooks
const rel = (dx, dy, dz) => [P.x + dx, P.y + dy, P.z - dz];
window.__wbr = {
  S, P, PV, get C() { return C; }, get W() { return W; },
  start: startRound, applyQuality, setKids, setLang: l => { setLang(l); refreshTexts(); },
  steer(x, y) { PV.tx = x; PV.ty = y; inp.mode = 'mouse'; }, auto(on) { S.auto = !!on; },
  spawnStar: (dx = 0, dy = 0, dz = 12) => { const [x, y, z] = rel(dx, dy, dz); spawnStar(C, x, y, z); },
  spawnRing: (dx = 0, dy = 0, dz = 14) => { const [x, y, z] = rel(dx, dy, dz); spawnRing(C, x, y, z); },
  spawnStone: (dx = 0, dz = 14) => { const [x, y, z] = rel(dx, 0, dz); spawnStone(C, x, z); },
  spawnPickup: (kind, dx = 0, dy = 0, dz = 12) => { const [x, y, z] = rel(dx, dy, dz); spawnPickup(C, kind, x, y, z); },
  pattern: (type, dz = 30) => forcePattern(C, type, P.z - dz, 0.5),
  bolt: (dx = 0, tele = 1.2) => scheduleBolt(C, P, PV.speed, tele, P.x + dx),
  clear: () => { for (const e of C.ents) e.obj && (e.dead = true, C.root.remove(e.obj), (e.extra || []).forEach(o => C.root.remove(o))); C.noPatterns = true; },
  patterns: on => { C.noPatterns = !on; },
  jumpTo(t) {
    S.elapsed = t; resetCourse(C, P.z, biomeAtTime(t)); S.zone = biomeAtTime(t); setBiome(W, S.zone, true); W.stormy = (S.zone === 'storm' || S.zone === 'canyon') ? 1 : 0;
    if (S.zone !== 'canyon') chapter(T(CHAP[S.zone]), T('b_' + S.zone), S.zone === 'storm');
    S.ravenDone = t >= RAVEN_END;
    if (t >= RAVEN_AT && t < RAVEN_END) { if (R.phase === 'off') ravenStart(); } else { R.phase = 'off'; R.root.visible = false; C.noPatterns = false; document.body.classList.remove('cine'); }
  },
  boost, hit: () => onEvent('hit', { x: P.x, z: P.z }), endRound, showEnd, finish,
  shareText: l => shareText(result(), l || S.shareLang), copyShare, makeShot: () => makeShot().toDataURL('image/png'),
  raven: () => ({ phase: R.phase, visible: R.root.visible, pos: R.root.position.toArray() }),
  ents: () => C.ents.filter(e => !e.dead).map(e => ({ type: e.type, x: e.x, y: e.y, z: e.z, dz: P.z - e.z })),
  snap: () => ({ state: S.state, elapsed: S.elapsed, score: Math.round(S.score), dist: Math.round(S.dist), stars: S.stars, lives: S.lives, invuln: S.invuln, shield: S.shield, magnet: S.magnet, x2: S.x2, boostT: S.boostT, speed: PV.speed, zone: S.zone, x: P.x, y: P.y, z: P.z, roll: H.roll, log: { ...S.log }, timeScale: S.timeScale, raven: R.phase, kids: S.kids, quality: qName(), maxLives: S.maxLives }),
  tick: (n = 1, dt = 1 / 60) => { for (let i = 0; i < n; i++) tick(dt); },
  sim: (n = 1, dt = 1 / 60) => { for (let i = 0; i < n; i++) { step(dt); updateCamera(dt); updateWorld(W, dt, camera); if (S.state === 'play') updateHud(); for (const p of O.pops) p.t += dt; O.pops = O.pops.filter(p => p.t < p.life); } return true; },
  render: () => { renderNow(); FX.drawOverlay(O, 1 / 60, (S.boostT > 0 ? 1 : 0) + clamp((PV.speed - 26) / 12, 0, 0.5), O.w / 2, O.h * 0.45); return true; },
  hold: on => { window.__wbrHold = !!on; },
  sounds: () => A.soundsReady().then(n => ({ n, names: A.soundNames() })), sfx: A.sfx, audio: A, fps: () => fps.ema, quality: () => qName(), renderer
};
boot();
