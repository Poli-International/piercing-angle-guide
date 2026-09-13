# Piercing Angle & Depth Guide: Technical Documentation

## Architecture

A static, client-side page. No build step, no framework, no server calls, no external hosts (the site's Content Security Policy would block them). Every diagram is inline SVG generated in the page.

```
index.html              full tool
embed.html              the tool without page chrome, for iframes
css/style.css           all styles; light/dark themes via body.light-mode / body.dark-mode
js/i18n/<lang>.js       flat key/value dictionaries: en, fr, de, it, es, pt, nl
js/i18n.js              translate(key, params, fallback), data-i18n* attribute binding
js/piercing-data.js     placement data (angle, tissue range, jewelry, positioning, refusal)
js/jewelry-options.js   jewelry profiles per placement
js/anatomy-3d-model.js  SVG anatomy explorer
js/modules/             storage-manager.js, calculator.js (units), ui-controller.js
js/visualizer.js        SVG renderers: angle cross-section, error modes, symmetry, jewelry profile
js/common.js            theme, iframe height messages, embed modal
js/piercing-guide.js    application controller
build.js                verification: required files, file size, external URLs, key parity
```

Scripts load in the order above; the dictionaries must load before `i18n.js`.

## Geometry

The cross-section uses a fixed tissue block (110 px tall) and the angle between the bar and the skin surface.

- Channel length: `thickness / sin(angle)`, with `sin` clamped at 0.2 for the metrics card.
- Entry and exit points: where the bar crosses the two surfaces.
- The discs are drawn at those points, square to the bar. When the bar is tilted, the disc end below the entry surface (or above the exit surface) is marked as pressing in, the other end as lifting off.

No pressure, stress or tissue-damage figures are computed: they cannot be derived from an angle and a thickness.

Deviation bands used by the cards: 0° straight, 1-5° slight, above 5° tilted.

## Internationalisation

- All visible strings go through `translate(key, params, fallback)`. A returned key is treated as missing and the English fallback is shown.
- `{placeholders}` are interpolated from `params`.
- Fixed SVG labels use generated keys `ui.<slug-of-english-text>`.
- `node build.js` fails if any language has a different key set from English.

## Storage

| Key | Storage | Content |
|---|---|---|
| `poli_piercing_active_key`, `poli_piercing_recents` | local | last placement, recent list |
| `poli_piercing_unit` | local | `metric` or `imperial` |
| `poli_piercing_compare_mode`, `_compare_a`, `_compare_b` | local | compare workspace |
| `poli_piercing_studio_prefs` | local | house standard per placement: gauge, jewelry style, notes |
| `poli_piercing_sym_pair`, `poli_piercing_sym_tab`, `poli_piercing_error_mode` | local | view state |
| `poli_tools_language`, `theme` | local | language and theme |
| `poli_piercing_notes_<placement>` | session | professional notes |

## Site integration

- Served at `/tools/piercing-angle-guide/` inside the site's tool frame; `index.html` carries `noindex` because the site page is the indexed one.
- The frame posts `{ type: 'poli-theme', light: boolean }`; the tool answers theme changes and posts `{ height }` so the frame can resize.
- Links to other Poli tools use `https://poliinternational.com/<slug>/` with `target="_top"`.

## Verification

```
node build.js
```

Checks required files, every file under 512 KiB, no external resource URLs (links to poliinternational.com and the public repo are allowed), no colour literals in style attributes, and identical key sets in all seven languages.
