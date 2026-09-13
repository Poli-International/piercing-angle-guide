# Testing Report: Piercing Angle & Depth Guide V2

Date: 2026-09-13. Tested by Poli International on the files now in this repository, served locally and driven with Playwright (Chromium). No automated test suite ships with the tool; these are the checks that were actually run.

## Verification script

`node build.js`: all required files present, every file under 512 KiB, no external resource URLs, no colour literals in style attributes, 2,133 keys in each of the seven languages.

## Functional checks

| Check | Result |
|---|---|
| Page load in en, fr, de, es, it, pt, nl at 1280 px | No page errors, no console errors, no failed requests |
| Page load at 390 px (en, it) | No horizontal overflow |
| Angle slider and disc drag | Diagram redraws; tilted channel is dashed, pressing edge marked with a triangle, lifting edge with a circle |
| Channel length | 4.0 mm tissue at 105° reads 4.1 mm (+0.1 mm); at 90° equals the tissue |
| Negative tilt badge | 70° shows -20° |
| Compare mode | Hidden on load; both columns and 5 difference rows populate when opened |
| Print placement sheet | Sheet fills (typical length, downsize timing, materials, aftercare pointer); print called once |
| Download JSON | Contains thickness, channel depth and typical jewelry values only |
| Copy summary | Placement reference plus the Jewelry Size Visualizer link |
| Studio house standard | Saves gauge to local storage and updates the status label |
| Site theme message (`poli-theme`) | Switches to light mode |
| embed.html | Loads without errors, renders the angle diagram, no page chrome |

## Translation checks

- Visible text compared between English and each language after the same interactions. What remains identical is placement names kept in English by convention (Helix, Rook, Daith, Christina...), the language names and tool names.
- No raw keys visible in any language.
- Dutch values that were still German were retranslated; core placement strings that were half English in every language were retranslated.

## Not tested

- Real printing to paper and PDF output quality.
- Screen readers.
- Browsers other than Chromium.
