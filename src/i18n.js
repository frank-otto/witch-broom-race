// EN (default) / DE strings, rank titles and share texts
const STR = {
  en: {
    kicker: 'A 90-second Halloween night flight', tag: 'Race your broom through haunted graveyards, glowing pumpkin forests and a lightning storm.',
    play: 'FLY!', how: '🖱️ Mouse / trackpad, arrows / WASD or drag to steer &nbsp;·&nbsp; ⚡ Space / tap = boost &nbsp;·&nbsp; ⭐ Stars & rings, dodge bats and lightning',
    howKids: '🖱️ Steer with mouse, arrows or your finger &nbsp;·&nbsp; ⚡ Tap = whoosh! &nbsp;·&nbsp; ⭐ Catch the stars, wave to the friendly bats',
    kids: 'Kids mode', settings: '⚙ Settings', best: 'Best', settingsT: 'Settings', quality: 'Quality', q_low: 'Low', q_mid: 'Medium', q_high: 'High', q_ultra: 'Ultra',
    music: 'Music', sfx: 'Sound effects', mute: 'Mute all', close: 'Done', paused: 'Paused', resume: 'RESUME', quit: 'End flight',
    score: 'Score', dist: 'Distance', stars: 'Stars', rank: 'Rank', boost: 'BOOST',
    endFinish: 'MIDNIGHT REACHED!', endCrash: 'BROOM DOWN!', newBest: 'NEW BEST!', name: 'Name',
    stStars: 'stars', stDist: 'distance', stCombo: 'best chain', stRaven: 'storm raven', survived: 'survived', escaped: 'not reached',
    shareT: 'Share text', share: 'Copy share text', shot: 'Download end card', replay: 'FLY AGAIN',
    go: 'FLY!', goSub: 'Collect stars · dodge everything',
    b_grave: 'THE MOONLIT GRAVEYARD', b_forest: 'THE PUMPKIN FOREST', b_village: 'THE HAUNTED VILLAGE', b_canyon: 'THE STORM CANYON', b_storm: 'THE FINAL STORM',
    ch1: 'CHAPTER I', ch2: 'CHAPTER II', ch3: 'CHAPTER III', ch4: 'CHAPTER IV', ch5: 'FINALE',
    boss: 'THE STORM RAVEN', bossSub: 'Dodge the lightning!', bossKids: 'THE THUNDER BIRD', bossKidsSub: 'Fly around the sparkly flashes!',
    bossWin: 'STORM SURVIVED!', near: 'CLOSE!', gate: 'GATE!', ring: 'BOOST RING!', chain: 'CHAIN',
    shield: 'SHIELD', magnet: 'STAR MAGNET', x2: 'DOUBLE POINTS', shieldPop: 'SHIELD SAVED YOU!', ouch: 'OUCH!', lastLife: 'LAST BROOM!',
    copied: 'Copied! Paste it on X 🧹', copyFail: 'Copy failed – select the text manually', saved: 'End card saved 📸',
    suggested: 'Suggested for this device', fpsLow: 'Running slow – switched quality to', lang: 'Language'
  },
  de: {
    kicker: 'Ein 90-Sekunden-Halloween-Nachtflug', tag: 'Flieg deinen Besen durch Spukfriedhöfe, leuchtende Kürbiswälder und ein Gewitter.',
    play: 'LOSFLIEGEN!', how: '🖱️ Maus / Trackpad, Pfeile / WASD oder Ziehen zum Lenken &nbsp;·&nbsp; ⚡ Leertaste / Tippen = Boost &nbsp;·&nbsp; ⭐ Sterne & Ringe, Fledermäusen und Blitzen ausweichen',
    howKids: '🖱️ Lenken mit Maus, Pfeilen oder Finger &nbsp;·&nbsp; ⚡ Tippen = Wusch! &nbsp;·&nbsp; ⭐ Sterne fangen, den lieben Fledermäusen winken',
    kids: 'Kinder-Modus', settings: '⚙ Einstellungen', best: 'Rekord', settingsT: 'Einstellungen', quality: 'Qualität', q_low: 'Niedrig', q_mid: 'Mittel', q_high: 'Hoch', q_ultra: 'Ultra',
    music: 'Musik', sfx: 'Effekte', mute: 'Alles stumm', close: 'Fertig', paused: 'Pause', resume: 'WEITER', quit: 'Flug beenden',
    score: 'Punkte', dist: 'Strecke', stars: 'Sterne', rank: 'Rang', boost: 'BOOST',
    endFinish: 'MITTERNACHT ERREICHT!', endCrash: 'BESEN ABGESTÜRZT!', newBest: 'NEUER REKORD!', name: 'Name',
    stStars: 'Sterne', stDist: 'Strecke', stCombo: 'beste Kette', stRaven: 'Sturmrabe', survived: 'überlebt', escaped: 'nicht erreicht',
    shareT: 'Text zum Teilen', share: 'Text kopieren', shot: 'Endkarte herunterladen', replay: 'NOCHMAL FLIEGEN',
    go: 'LOS!', goSub: 'Sterne sammeln · allem ausweichen',
    b_grave: 'DER MONDFRIEDHOF', b_forest: 'DER KÜRBISWALD', b_village: 'DAS SPUKDORF', b_canyon: 'DIE STURMSCHLUCHT', b_storm: 'DER LETZTE STURM',
    ch1: 'KAPITEL I', ch2: 'KAPITEL II', ch3: 'KAPITEL III', ch4: 'KAPITEL IV', ch5: 'FINALE',
    boss: 'DER STURMRABE', bossSub: 'Weich den Blitzen aus!', bossKids: 'DER DONNERVOGEL', bossKidsSub: 'Flieg um die Glitzerblitze herum!',
    bossWin: 'STURM ÜBERLEBT!', near: 'KNAPP!', gate: 'TOR!', ring: 'BOOST-RING!', chain: 'KETTE',
    shield: 'SCHILD', magnet: 'STERNENMAGNET', x2: 'DOPPELTE PUNKTE', shieldPop: 'SCHILD HAT DICH GERETTET!', ouch: 'AUTSCH!', lastLife: 'LETZTER BESEN!',
    copied: 'Kopiert! Ab damit auf X 🧹', copyFail: 'Kopieren fehlgeschlagen – Text bitte markieren', saved: 'Endkarte gespeichert 📸',
    suggested: 'Empfohlen für dieses Gerät', fpsLow: 'Läuft langsam – Qualität jetzt', lang: 'Sprache'
  }
};
export const RANKS = [
  { min: 0, en: 'Broom Apprentice', de: 'Besen-Azubi' },
  { min: 2500, en: 'Pumpkin Courier', de: 'Kürbis-Kurierin' },
  { min: 5000, en: 'Bat Dodger', de: 'Fledermaus-Flitzerin' },
  { min: 8000, en: 'Storm Rider', de: 'Sturmreiterin' },
  { min: 11000, en: 'Moon Witch', de: 'Mondhexe' },
  { min: 14000, en: 'Grand High Witch', de: 'Oberhexe' }
];
let lang = 'en';
try { lang = localStorage.getItem('wbr-lang') || 'en'; } catch (e) {}
export function getLang() { return lang; }
export function setLang(l) { lang = l === 'de' ? 'de' : 'en'; try { localStorage.setItem('wbr-lang', lang); } catch (e) {} document.documentElement.lang = lang; }
export function T(k, l = lang) { return (STR[l] && STR[l][k]) || STR.en[k] || k; }
export function rankFor(score, l = lang) { let r = RANKS[0]; for (const x of RANKS) if (score >= x.min) r = x; return r[l]; }
export function applyI18n(kids) {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = T(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.getAttribute('data-i18n-html'); el.innerHTML = T(kids && k === 'how' ? 'howKids' : k); });
}
export function fmt(n, l = lang) { return Math.round(n).toLocaleString(l === 'de' ? 'de-DE' : 'en-US'); }
export function shareText(r, l) {
  const rank = rankFor(r.score, l), s = fmt(r.score, l), d = fmt(r.dist, l);
  if (l === 'de') {
    return `🧹 ${r.name} ist in WITCH BROOM RACE ${d} m durch die Halloween-Nacht geflogen – ${s} Punkte, Rang: ${rank}!\n` +
      `⭐ ${r.stars} Sterne, beste Kette x${r.bestChain}${r.raven ? ', den Sturmraben überlebt ⚡' : ''}.\n` +
      `Fliegst du weiter? 🦇🎃 #WitchBroomRace #Halloween`;
  }
  return `🧹 ${r.name} flew ${d} m through Halloween night in WITCH BROOM RACE — ${s} points, rank: ${rank}!\n` +
    `⭐ ${r.stars} stars, best chain x${r.bestChain}${r.raven ? ', survived the Storm Raven ⚡' : ''}.\n` +
    `Can you fly further? 🦇🎃 #WitchBroomRace #Halloween`;
}
