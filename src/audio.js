// Witch Broom Race audio (adapted copy of Pumpkin Smash audio) — recorded CC0 samples (LICENSES/SOUNDS.md), embedded as base64 (js/sounds-src.js) so file:// works.
// Layered SFX with random pitch/volume per play; deep & warm (no synth beeps); two seamless music loops (main / boss).
let ctx = null, limiter = null, master = null, comp = null, sfxBus = null, musicBus = null, musicTone = null;
let sfxOn = true, musicOn = true, muted = false;
let sfxVol = 0.9, musicVol = 0.6;
let kids = false;
let unlocked = false;
const MUSIC_GAIN = 0.55;
const buffers = {};
let decodePromise = null;

function now() { return ctx ? ctx.currentTime : 0; }
function ac() {
  if (!ctx && !unlocked) return null;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try { ctx = new AC({ latencyHint: 'interactive' }); } catch (e) { ctx = new AC(); }
    buildGraph(ctx);
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}
function buildGraph(c) {
  const lim = c.createDynamicsCompressor(); lim.threshold.value = -3; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.002; lim.release.value = 0.12;
  lim.connect(c.destination); limiter = lim;
  master = c.createGain(); master.gain.value = muted ? 0 : 0.85; master.connect(lim);
  comp = c.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3; comp.attack.value = 0.005; comp.release.value = 0.25;
  comp.connect(master);
  sfxBus = c.createGain(); sfxBus.gain.value = sfxVol; sfxBus.connect(comp);
  musicTone = c.createBiquadFilter(); musicTone.type = 'lowpass'; musicTone.frequency.value = 9000; musicTone.Q.value = 0.5;
  musicBus = c.createGain(); musicBus.gain.value = 0; musicTone.connect(musicBus); musicBus.connect(comp);
  decodeAll(c);
}
function b64ToArrayBuffer(b64) {
  const bin = atob(b64), n = bin.length, u = new Uint8Array(n);
  for (let i = 0; i < n; i++) u[i] = bin.charCodeAt(i);
  return u.buffer;
}
function decodeOne(c, name, b64) {
  return new Promise(res => {
    let done = false;
    const ok = b => { if (done) return; done = true; buffers[name] = b; res(true); if (name.startsWith('music_')) refreshMusic(); };
    const bad = () => { if (done) return; done = true; res(false); };
    try { const p = c.decodeAudioData(b64ToArrayBuffer(b64), ok, bad); if (p && p.then) p.then(ok, bad); } catch (e) { bad(); }
  });
}
function decodeAll(c) {
  if (decodePromise) return decodePromise;
  const S = window.WBR_SOUNDS || {};
  const names = Object.keys(S).sort((a, b) => (a.startsWith('music_') ? 1 : 0) - (b.startsWith('music_') ? 1 : 0));
  decodePromise = names.reduce((p, n) => p.then(() => decodeOne(c, n, S[n])), Promise.resolve()).then(() => Object.keys(buffers).length);
  return decodePromise;
}

const rnd = a => 1 + (Math.random() * 2 - 1) * a;
function play(name, { vol = 1, rate = 1, delay = 0, pan = 0, vary = 1 } = {}) {
  if (!sfxOn) return null;
  const c = ac(); if (!c) return null;
  const buf = buffers[name]; if (!buf) return null;
  const src = c.createBufferSource(); src.buffer = buf;
  src.playbackRate.value = rate * rnd(0.035 * vary);
  const g = c.createGain(); g.gain.value = Math.max(0, vol * rnd(0.1 * vary));
  let node = src.connect(g);
  if (pan && c.createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); node = node.connect(p); }
  node.connect(sfxBus);
  src.start(now() + delay);
  return src;
}
const pick = (...n) => n[(Math.random() * n.length) | 0];
let lastChime = -1, lastSwish = -1, lastBat = -1, chimeIdx = 0;

// ---------- wind loop (rises with speed) ----------
let wind = null;
const WLOOP = { start: 0.5, end: 8.5 };
function ensureWind() {
  const c = ac(); if (!c || wind || !buffers.wind) return;
  const src = c.createBufferSource(); src.buffer = buffers.wind; src.loop = true; src.loopStart = WLOOP.start; src.loopEnd = WLOOP.end;
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.4;
  const g = c.createGain(); g.gain.value = 0;
  src.connect(lp).connect(g).connect(sfxBus); src.start(now(), WLOOP.start);
  wind = { src, lp, g };
}
export function setWind(level, on = true) { // level 0..1.6
  if (!ctx) return; ensureWind(); if (!wind) return;
  const t = now(), l = Math.max(0, Math.min(1.6, level));
  wind.g.gain.setTargetAtTime(on && sfxOn ? (0.10 + 0.32 * l) * (kids ? 0.8 : 1) : 0, t, 0.25);
  wind.src.playbackRate.setTargetAtTime(0.85 + 0.3 * l, t, 0.3);
  wind.lp.frequency.setTargetAtTime(700 + 1700 * l, t, 0.3);
}

export const sfx = {
  star(combo = 1, pan = 0) {
    const c = ac(); if (!c) return;
    const dense = now() - lastChime < 0.07; lastChime = now();
    const step = [0, 2, 4, 7, 9, 12, 14, 16][Math.min(7, Math.max(0, combo - 1))];
    const rate = Math.pow(2, step / 12) * 0.92;
    const names = ['chime_a', 'chime_b', 'chime_c'];
    play(names[chimeIdx++ % 3], { vol: dense ? 0.3 : 0.48, rate, pan, vary: 0.25 });
    if (combo >= 5 && !dense) play('harp', { vol: 0.16 + 0.02 * Math.min(combo, 10), rate: 0.9 + 0.02 * Math.min(combo, 10), vary: 0.2 });
  },
  combo(n) { if (n >= 10) { play('choir', { vol: 0.35, rate: 1.05 }); play('magic', { vol: 0.3 }); } },
  ring() { play('ring', { vol: 0.65 }); play('magic', { vol: 0.35, rate: 1.05, delay: 0.04 }); play('harp', { vol: 0.25, rate: 1.0, delay: 0.08 }); },
  gate() { play('bell', { vol: 0.35, rate: 0.9 }); play('swish_a', { vol: 0.3 }); },
  boost() { play('boost', { vol: 0.7 }); play('fwoosh', { vol: 0.35, rate: 1.1 }); play('sub', { vol: 0.25, vary: 0.3 }); },
  nearMiss(pan = 0) { if (now() - lastSwish < 0.25) return; lastSwish = now(); play(pick('swish_a', 'swish_b'), { vol: 0.55, rate: 0.85, pan }); },
  bats(pan = 0) {
    if (now() - lastBat < 0.8) return; lastBat = now();
    play('bats', { vol: kids ? 0.22 : 0.4, pan });
    if (kids) play('squeak_kids', { vol: 0.22, pan, delay: 0.15, rate: 1.05 });
    else if (Math.random() < 0.6) play('screech', { vol: 0.28, pan, delay: 0.2, rate: 1.1 });
  },
  telegraph() { play('riser', { vol: kids ? 0.12 : 0.18, rate: 1.6, vary: 0.2 }); },
  thunder(near = false, pan = 0) {
    if (kids) { play('thunder_soft', { vol: near ? 0.45 : 0.3, pan }); if (near) play('sub', { vol: 0.2 }); return; }
    play(near ? 'thunder_a' : 'thunder_soft', { vol: near ? 0.6 : 0.35, pan, vary: 0.5 });
    if (near) { play('boom', { vol: 0.35, rate: 1.1 }); play('impact', { vol: 0.25, rate: 0.7 }); }
  },
  hit() {
    const k = kids ? 0.6 : 1;
    play('impact', { vol: 0.8 * k, rate: 0.85 }); play('hit', { vol: 0.6 * k }); play('sub', { vol: 0.5 * k }); play('boom', { vol: 0.25 * k, rate: 1.2 });
    if (kids) play('laugh_kids', { vol: 0.35, delay: 0.35, rate: 1.1 });
  },
  shieldBreak() { play('explode', { vol: 0.35, rate: 1.4 }); play('magic', { vol: 0.4, rate: 0.85 }); },
  pickup(kind) { play('magic', { vol: 0.5 }); play('harp', { vol: 0.42, rate: kind === 'x2' ? 1.12 : kind === 'magnet' ? 1.0 : 0.9, delay: 0.05 }); if (Math.random() < 0.5) sfx.laugh(0.45); },
  laugh(v = 0.6) { play(kids ? 'laugh_kids' : 'laugh', { vol: kids ? v * 0.8 : v, vary: 0.4 }); },
  start() { play('fwoosh', { vol: 0.7 }); play('stinger', { vol: kids ? 0.3 : 0.45 }); play('sub', { vol: 0.35 }); sfx.laugh(0.6); },
  biome() { play('fwoosh', { vol: 0.4, rate: 0.8 }); play('soft', { vol: 0.3, rate: 0.8 }); },
  bossIntro() {
    play('riser', { vol: kids ? 0.4 : 0.65, vary: 0.2 });
    if (kids) { play('choir', { vol: 0.35, delay: 1.2 }); play('laugh_kids', { vol: 0.35, delay: 1.6 }); play('bats', { vol: 0.25, delay: 1.4 }); return; }
    play('hit', { vol: 0.55, delay: 1.45 }); play('roar', { vol: 0.85, delay: 1.5, vary: 0.2 }); play('screech', { vol: 0.35, delay: 1.6, rate: 0.7 });
    play('thunder_a', { vol: 0.55, delay: 1.5 }); play('roar_b', { vol: 0.3, delay: 1.7, rate: 0.85, vary: 0.2 });
  },
  bossCall() { if (kids) { play('squeak_kids', { vol: 0.2, rate: 0.8 }); return; } play('screech', { vol: 0.3, rate: 0.62 }); play('roar_b', { vol: 0.25, rate: 0.9 }); },
  bossBye() {
    if (kids) { play('harp', { vol: 0.5 }); play('choir', { vol: 0.5, delay: 0.2 }); play('laugh_kids', { vol: 0.4, delay: 0.5 }); return; }
    play('epic', { vol: 0.75 }); play('thunder_a', { vol: 0.5 }); play('roar', { vol: 0.55, rate: 1.15, delay: 0.1 }); play('choir', { vol: 0.5, delay: 0.5 }); sfx.laugh(0.6);
  },
  slowmo() { play('sub', { vol: 0.35, rate: 0.7 }); play('swish_b', { vol: 0.4, rate: 0.6 }); },
  lifeLost() { play('soft', { vol: 0.4, rate: 0.7 }); },
  crash() { play('boom', { vol: kids ? 0.3 : 0.6 }); play('impact', { vol: 0.5, rate: 0.7 }); play('choir', { vol: 0.35, delay: 0.4, rate: 0.8 }); },
  finish() { play('epic', { vol: kids ? 0.4 : 0.6 }); play('bell', { vol: 0.5 }); play('choir', { vol: 0.45, delay: 0.3 }); play('harp', { vol: 0.45, delay: 0.5 }); sfx.laugh(0.6); },
  ui() { play('soft', { vol: 0.35, rate: 1.2, vary: 0.2 }); },
  newBest() { play('choir', { vol: 0.5 }); play('harp', { vol: 0.5, delay: 0.2 }); play('magic', { vol: 0.35, delay: 0.1 }); }
};

// ---------- music ----------
const LOOP = { start: 0.5, end: 32.5 };
let cur = null, mood = 'main';
function refreshMusic() {
  if (!ctx) return;
  const want = musicOn && !muted;
  musicBus.gain.cancelScheduledValues(now());
  musicBus.gain.setTargetAtTime(want ? musicVol * MUSIC_GAIN * (kids ? 0.7 : 1) : 0, now(), 0.3);
  musicTone.frequency.setTargetAtTime(kids ? 3500 : 9000, now(), 0.3);
  if (want) startLoop(mood);
}
function startLoop(m) {
  const c = ac(); if (!c) return;
  const buf = buffers['music_' + m]; if (!buf) return;
  if (cur && cur.mood === m) return;
  const t = now();
  const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
  src.loopStart = LOOP.start; src.loopEnd = Math.min(LOOP.end, buf.duration);
  const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(1, t + (cur ? 1.2 : 0.4));
  src.connect(g).connect(musicTone);
  // keep the beat grid when switching (both loops are 120 bpm, 32 s)
  const off = cur ? ((t - cur.t0) % (LOOP.end - LOOP.start)) : 0;
  src.start(t, LOOP.start + off);
  if (cur) { const o = cur; o.gain.gain.cancelScheduledValues(t); o.gain.gain.setValueAtTime(o.gain.gain.value, t); o.gain.gain.linearRampToValueAtTime(0.0001, t + 1.2); try { o.src.stop(t + 1.3); } catch (e) {} }
  cur = { src, gain: g, mood: m, t0: cur ? cur.t0 : t };
}
export function setMood(m) { mood = m === 'boss' ? 'boss' : 'main'; if (ctx && musicOn && !muted) startLoop(mood); }
export function setMusicOn(on) { musicOn = !!on; refreshMusic(); }
export function setSfxOn(on) { sfxOn = !!on; }
export function setMuted(m) { muted = !!m; if (master) master.gain.setTargetAtTime(muted ? 0 : 0.85, now(), 0.05); refreshMusic(); }
export function isMuted() { return muted; }
export function setSfxVolume(v) { sfxVol = Math.max(0, Math.min(1, v)); if (sfxBus) sfxBus.gain.setTargetAtTime(sfxVol, now(), 0.05); }
export function setMusicVolume(v) { musicVol = Math.max(0, Math.min(1, v)); refreshMusic(); }
export function setKids(on) { kids = !!on; refreshMusic(); }
export function duck(amount = 0.35, dur = 1.5) {
  if (!ctx || !musicOn || muted) return;
  const t = now(), full = musicVol * MUSIC_GAIN * (kids ? 0.7 : 1);
  musicBus.gain.cancelScheduledValues(t); musicBus.gain.setValueAtTime(musicBus.gain.value, t);
  musicBus.gain.linearRampToValueAtTime(full * amount, t + 0.08); musicBus.gain.setValueAtTime(full * amount, t + dur);
  musicBus.gain.linearRampToValueAtTime(full, t + dur + 1.2);
}
export function unlockAudio() { unlocked = true; const c = ac(); if (c) refreshMusic(); }
export function soundsReady() { const c = ac(); return c ? decodeAll(c) : Promise.resolve(0); }
export function soundNames() { return Object.keys(buffers); }
export function suspendAudio(h) { if (!ctx) return; if (h) ctx.suspend().catch(() => {}); else ctx.resume().catch(() => {}); }
let tap = null;
export function getAnalyser() {
  const c = ac(); if (!c) return null;
  if (!tap) { tap = c.createAnalyser(); tap.fftSize = 2048; limiter.connect(tap); }
  return tap;
}
if (typeof window !== 'undefined') {
  const u = () => { unlockAudio(); window.removeEventListener('pointerdown', u, true); window.removeEventListener('keydown', u, true); window.removeEventListener('touchend', u, true); };
  window.addEventListener('pointerdown', u, true); window.addEventListener('keydown', u, true); window.addEventListener('touchend', u, true);
  document.addEventListener('visibilitychange', () => suspendAudio(document.hidden));
}
