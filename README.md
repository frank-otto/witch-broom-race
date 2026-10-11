# 🧹 WITCH BROOM RACE

A 90-second Halloween night flight in the browser (Three.js). Fly a witch on her broom through a moonlit graveyard,
a glowing pumpkin forest, a haunted village and a crystal canyon into the storm finale — collect stars, fly through
magic rings, dodge bats, branches, gravestones and telegraphed lightning, and survive the **Storm Raven** set piece at ~60 s.

## Start
- **Double-click `index.html`** (works via `file://`, everything is bundled as a classic script incl. sounds), or
- **`start.command`** (macOS) → local server on http://localhost:8802

## Controls
| | |
|---|---|
| Mouse / trackpad | witch follows the pointer |
| Arrows / WASD | steer |
| Touch | drag to steer (relative), quick tap = boost |
| Space / click | short boost (cooldown) |
| Esc | pause (mute + pause also as HUD buttons) |

## Features
- Chase camera, flowing cape, hat, black cat, spark trail, banking, speed lines on boost
- 5 biomes with blended colour grading, chapter title cards, progress bar
- Stars & chains (multiplier), rings (boost + bonus), graveyard gates; pickups: shield, magnet, double points
- Hazards: bat swarms, branches, gravestones, chimneys, telegraphed lightning; 3 lives + brief invulnerability
- Near-miss bonus with camera shake and slow-motion; rising speed
- Storm Raven cinematic intro (letterbox) + chase with lightning calls, bonus for surviving
- Moon, purple starry sky, fog, god rays, fireflies, falling leaves, rain, lightning + thunder, bloom
- End screen: score, distance, stars, best chain, best score (localStorage), rank (Broom Apprentice → Grand High Witch),
  name field (default "Player" (EN) / "Spieler" (DE)), share text EN + DE, 1080×1350 PNG end card, Fly again
- Real CC0 samples (warm/low, no beeps), separate music / effects volume, mute — see `LICENSES/SOUNDS.md`
- Kids mode (for younger kids): slower, wider gaps, cute bats, no scary screeches, more stars, 5 lives, friendly "Thunder Bird"
- Quality Low / Medium / High / Ultra with FPS-based suggestion · English default, German toggle

## Build
```
npm install        # three + esbuild (dev only)
npm run build      # → js/game.bundle.js + js/sounds-src.js (sounds base64-embedded)
```

## Tests
```
python3 test/test_game.py   # Playwright + headless Chrome (SwiftShader); 43 checks, screenshots in test/shots/
```
