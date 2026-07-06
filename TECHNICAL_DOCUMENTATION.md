# Piercing Angle Placement Guide - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support and Contact](#support-and-contact)

---

## Architecture Overview

### Technology Stack

- **HTML5** - Semantic markup with embedded meta tags and structured data
- **CSS3** - Inline styles and external stylesheet (`/tools/piercing-angle-guide/css/style.css`)
- **Vanilla JavaScript (ES6+)** - No frameworks, libraries, or dependencies
- **JSON-LD** - Schema.org structured data for SEO (WebApplication, BreadcrumbList, FAQPage)

### File Structure

```
piercing-angle-guide/
├── index.html              # Main tool interface with tab system
├── documentation.html      # Full documentation page (loaded in iframe)
├── embed.html              # Embed instructions and code generator
├── css/
│   └── style.css           # External stylesheet
└── js/
    ├── common.js           # Theme toggle, iframe resizing, embed modal logic
    ├── feedback.js         # Community feedback form (Web3Forms integration)
    └── piercing-guide.js   # Core tool logic and piercing data
```

### Component Breakdown

| Component | File | Purpose |
|-----------|------|---------|
| Tool Tabs | `index.html` | Tab navigation (Tool / Documentation / Embed) |
| Piercing Selector | `index.html` | 25+ piercing type buttons with click handlers |
| Results Panel | `index.html` | Dynamic display of piercing specifications |
| Detail Tabs | `index.html` | Sub-navigation (Positioning / Safety / When to Refuse / Aftercare) |
| Embed Modal | `index.html` + `common.js` | Copy embed code to clipboard |
| Documentation | `documentation.html` | Standalone documentation page |
| Embed Guide | `embed.html` | Embed instructions with code snippets |
| Feedback Form | `feedback.js` | User feedback submission via Web3Forms API |

### Data Flow

1. User clicks a piercing button (`.piercing-btn`)
2. Click handler updates button styles and triggers display of results panel
3. JavaScript reads from `piercingData` object (defined in `piercing-guide.js`)
4. Results panel populates with data fields (angle, depth, gauge, etc.)
5. Detail tabs toggle visibility of content sections

---

## Data Schemas

### Piercing Data Object (`piercingData`)

Defined in `/tools/piercing-angle-guide/js/piercing-guide.js` as a constant object with 25+ piercing entries.

**Structure:**

```javascript
const piercingData = {
  'earlobe': {
    name: 'Earlobe Piercing',
    optimalAngle: '90° (perpendicular through lobe)',
    insertionDepth: '6-8mm through soft tissue',
    tissueType: 'Soft tissue (no cartilage)',
    healingTime: '6-8 weeks',
    jewelryGauge: '18g (1.0mm) or 16g (1.2mm) [14g (1.6mm) for stretching]',
    jewelryLength: '6-8mm barbell or stud',
    jewelryType: 'Labret stud, barbell, or CBR',
    downsizeTime: '4-6 weeks',
    positioning: '<p><strong>Optimal Placement:</strong> ...</p>',
    safety: '<ul>...</ul>',
    refuse: '<ul>...</ul>',
    aftercare: '<p>...</p>'
  },
  'helix': { /* same structure */ },
  'forward-helix': { /* same structure */ },
  // ... 22 more piercing entries
}
```

**Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name of the piercing |
| `optimalAngle` | string | Recommended entry/exit angle with degrees |
| `insertionDepth` | string | Depth range through tissue |
| `tissueType` | string | Type of tissue (soft tissue, cartilage, etc.) |
| `healingTime` | string | Estimated healing duration |
| `jewelryGauge` | string | Recommended gauge sizes |
| `jewelryLength` | string | Recommended jewelry length |
| `jewelryType` | string | Recommended jewelry style |
| `downsizeTime` | string | When to downsize jewelry |
| `positioning` | string | HTML content for positioning guidance |
| `safety` | string | HTML content for safety considerations |
| `refuse` | string | HTML content for when to refuse piercing |
| `aftercare` | string | HTML content for aftercare instructions |

**Complete List of Piercing Keys:**

`earlobe`, `helix`, `forward-helix`, `tragus`, `anti-tragus`, `conch`, `rook`, `daith`, `industrial`, `nostril`, `septum`, `bridge`, `eyebrow`, `labret`, `monroe`, `medusa`, `tongue`, `navel`, `nipple`, `surface`, `dermal`, `prince-albert`, `vch`, `christina`, `frenum`

### Feedback Form Data

```javascript
{
  email: string,          // User email address
  role: string,           // User role (piercer, apprentice, etc.)
  feedback: string,       // Free-text feedback
  toolName: string,       // Document title
  toolUrl: string,        // Current page URL
  timestamp: string       // ISO 8601 timestamp
}
```

### Embed Modal Data

```javascript
// Generated dynamically in common.js
const cleanUrl = window.location.href.split('?')[0].split('#')[0];
// Produces: <iframe src="[cleanUrl]" width="100%" height="800" frameborder="0" style="border:1px solid #333; border-radius:12px;"></iframe>
```

---

## Calculation / Logic Algorithms

### Piercing Selection Handler

**File:** `index.html` (inline script)

**Function:** Anonymous click handler on `.piercing-btn` elements

**Algorithm:**
1. Remove `active` class and reset styles on all piercing buttons
2. Apply active styles to clicked button (background: `#8B5CF6`, border: `#8B5CF6`, color: `#fff`)
3. Hide all detail sections (`positioningContent`, `safetyContent`, `refuseContent`, `aftercareContent`)
4. Show `positioningContent` section by default
5. Reset all detail tab button styles to inactive (background: `#333`, color: `#ccc`)
6. Set first detail tab to active state

### Detail Tab Toggle

**File:** `index.html` (inline script)

**Function:** `showSection(btn, sectionId)`

**Algorithm:**
1. Hide all `.detail-section` elements
2. Reset all `.detail-tab` buttons to inactive styles
3. Show the section matching `sectionId`
4. Apply active styles to clicked `btn`

### Theme Management

**File:** `js/common.js`

**Function:** `setTheme(theme, save = true)`

**Algorithm:**
1. If `theme === 'light'`: add `light-mode` class to body, remove `dark-mode` class, set toggle icon to `☀️`
2. If `theme === 'dark'`: add `dark-mode` class to body, remove `light-mode` class, set toggle icon to `◐`
3. If `save` is true, store theme in `localStorage` under key `'theme'`

### Iframe Auto-Resize

**File:** `js/common.js`

**Function:** `sendHeight()`

**Algorithm:**
1. Calculate `height = document.body.scrollHeight + 50` (buffer)
2. Post message to parent window: `window.parent.postMessage({ height: height }, '*')`
3. Attach to `resize` event, `click` event, and `change` event
4. Use `MutationObserver` to detect DOM changes and re-send height

### Feedback Form Submission

**File:** `js/feedback.js`

**Function:** Async form submit handler

**Algorithm:**
1. Prevent default form submission
2. Collect form data into `formData` object
3. Hide success/error messages
4. Disable submit button, show loading state
5. POST to `https://api.web3forms.com/submit` with:
   - `access_key` (hardcoded: `ebd0e138-c7aa-4290-b028-74d1c3fa8faa`)
   - `subject` (tool name)
   - `from_name` (user email)
   - `email` (user email)
   - `message` (formatted feedback text)
6. On success: show success message, reset form, auto-hide after 10 seconds
7. On failure: show error message

### Embed Code Generation

**File:** `js/common.js`

**Algorithm:**
1. Get current URL: `window.location.href`
2. Strip query parameters and hash fragments
3. Generate iframe HTML string with cleaned URL
4. Set as value of embed code textarea

---

## API Reference

### Public Functions

#### `showSection(btn, sectionId)`
- **File:** `index.html` (inline)
- **Parameters:**
  - `btn` (HTMLElement) - The clicked detail tab button
  - `sectionId` (string) - ID of the content section to display
- **Behavior:** Toggles visibility of detail sections (Positioning, Safety, When to Refuse, Aftercare)
- **Returns:** void

#### `setTheme(theme, save)`
- **File:** `js/common.js`
- **Parameters:**
  - `theme` (string) - `'light'` or `'dark'`
  - `save` (boolean, optional) - Whether to persist to localStorage (default: `true`)
- **Behavior:** Applies theme class to body and updates toggle icon
- **Returns:** void

#### `sendHeight()`
- **File:** `js/common.js`
- **Parameters:** none
- **Behavior:** Posts iframe height to parent window for responsive embedding
- **Returns:** void

#### `copyEmbedCode()`
- **File:** `index.html` (inline, referenced in embed tab)
- **Parameters:** none
- **Behavior:** Copies embed code textarea content to clipboard
- **Returns:** void

### Event Handlers

| Event | Target | Handler | File |
|-------|--------|---------|------|
| `click` | `.piercing-btn` | Piercing selection + results display | `index.html` |
| `click` | `.detail-tab` | `showSection()` | `index.html` |
| `click` | `#darkModeToggle` | Theme toggle | `common.js` |
| `click` | `#embedBtn` / `#embed-button` | Open embed modal | `common.js` |
| `click` | `.modal-close` | Close embed modal | `common.js` |
| `click` | `#copyEmbedCode` | Copy embed code to clipboard | `common.js` |
| `submit` | `#feedbackForm` | Submit feedback via Web3Forms | `feedback.js` |
| `submit` | `.email-form` | Simulate email subscription | `common.js` |
| `message` | `window` | Theme change from parent iframe | `common.js` |
| `resize` | `window` | `sendHeight()` | `common.js` |
| `mouseenter` | `.piercing-btn` | Hover style change | `index.html` |
| `mouseleave` | `.piercing-btn` | Hover style reset | `index.html` |

---

## Integration Guide

### Standalone Embedding

The tool is a dependency-free static HTML/CSS/JS application. Embed it on any website using an iframe:

**Standard (recommended):**
```html
<iframe
  src="https://poliinternational.com/tools/piercing-angle-guide/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Piercing Angle Guide by Poli International">
</iframe>
```

**Compact:**
```html
<iframe
  src="https://poliinternational.com/tools/piercing-angle-guide/index.html"
  width="100%"
  height="600"
  frameborder="0"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Piercing Angle Guide by Poli International">
</iframe>
```

**Large:**
```html
<iframe
  src="https://poliinternational.com/tools/piercing-angle-guide/index.html"
  width="100%"
  height="1000"
  frameborder="0"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Piercing Angle Guide by Poli International">
</iframe>
```

### Embed Features

- **Responsive:** Adapts to container width automatically
- **Auto-resize:** Posts height to parent iframe for dynamic sizing
- **Theme-aware:** Listens for `poli-theme` messages from parent for dark/light mode consistency
- **No dependencies:** No external libraries, API keys, or configuration needed
- **No tracking:** No cookies, analytics, or data collection

### Embed Customization

Customize the iframe appearance by modifying the `style` attribute:

```html
<iframe
  src="https://poliinternational.com/tools/piercing-angle-guide/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: 2px solid #8B5CF6; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="Piercing Angle Guide by Poli International">
</iframe>
```

### Parent-Child Communication

The tool sends and receives `postMessage` events:

- **Receives:** `{ type: 'poli-theme', light: boolean }` - Theme change from parent
- **Sends:** `{ height: number }` - Iframe height for auto-resizing

---

## Customization

### Styling

The tool uses a combination of:
- **External stylesheet:** `/tools/piercing-angle-guide/css/style.css`
- **Inline styles:** Defined directly in `index.html` for component-specific styling
- **JavaScript theme management:** Dark/light mode via class toggling

Key CSS custom properties (from inline styles):
- Primary accent: `#8B5CF6` (purple)
- Background: `#1a1a2e` (dark panels), `#0f0f1a` (spec cards)
- Text: `#e2e8f0` (light), `#ccc` (secondary), `#666` (labels)

### Content

All piercing data is stored in the `piercingData` object in `piercing-guide.js`. To customize content:
1. Edit the relevant piercing entry in the `piercingData` object
2. Update any of the 10 string fields (name, optimalAngle, insertionDepth, etc.)
3. HTML content in positioning, safety, refuse, and aftercare fields supports basic HTML tags

### Adding New Piercings

1. Add a new key-value pair to `piercingData` in `piercing-guide.js`
2. Add a new button in `index.html` with `data-piercing` attribute matching the key
3. The button will automatically populate the results panel on click

---

## Performance

### Load Time

- **Total size:** ~50KB (HTML + CSS + JS combined)
- **External resources:** None (zero external dependencies)
- **Fonts:** System fonts (no web font loading)
- **Images:** None (text-only tool with CSS styling)

### Rendering

- **DOM manipulation:** Minimal - only updates text content of 8 spec fields and toggles visibility of 4 content sections
- **No animations:** No CSS animations, transitions, or JavaScript animation loops
- **No reflows:** Content updates are simple text replacements, not structural DOM changes

### Memory

- **Data storage:** Single `piercingData` object with 25 entries (approximately 15KB of string data)
- **localStorage:** One key (`theme`) for dark/light mode preference
- **No memory leaks:** No timers, intervals, or persistent event listeners beyond DOM lifecycle

---

## Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | Full support |
| Edge | 90+ | Full support |
| iOS Safari | 14+ | Full support |
| Android Chrome | 90+ | Full support |

### Requirements

- **JavaScript:** Required (tool is non-functional without JS)
- **HTML5:** Required for semantic elements and APIs
- **localStorage:** Required for theme persistence (degrades gracefully)
- **Clipboard API:** Required for embed code copy (degrades gracefully)
- **postMessage:** Required for iframe parent communication (degrades gracefully)

### Known Limitations

- No fallback for browsers with JavaScript disabled
- No print stylesheet (tool is interactive only)
- No keyboard navigation for piercing selection buttons (mouse/touch only)

---

## Security

### Input Handling

- **No user input fields** in the main tool interface (piercing selection only)
- **Feedback form** (`feedback.js`):
  - Email field: Standard text input (no validation beyond HTML5 `type="email"`)
  - Role field: Text input (no validation)
  - Feedback field: Textarea (no validation)
  - All fields submitted to Web3Forms API via POST
  - No server-side processing on Poli infrastructure
  - No storage of submitted data on Poli servers

### XSS Prevention

- **No innerHTML injection from user input:** All dynamic content comes from the hardcoded `piercingData` object
- **No URL parameters processed:** Tool does not read or process any URL query parameters
- **No DOM manipulation from external sources:** All content is static and predefined
- **Iframe sandboxing:** Embedding sites can add `sandbox` attribute to iframe for additional security

### Data Privacy

- **No cookies:** Tool does not set or read any cookies
- **No analytics:** No tracking scripts, analytics, or telemetry
- **No third-party requests:** Only outbound request is the feedback form submission to Web3Forms
- **localStorage:** Only stores theme preference (`'light'` or `'dark'`)

### Content Security

- **No external scripts:** All JavaScript is inline or from same-origin files
- **No external stylesheets:** CSS is inline or from same-origin file
- **No iframes within tool:** Tool does not load any external content in iframes
- **No eval() or dynamic code execution:** All JavaScript is static and predefined

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-07 | Initial release |

---

## Support and Contact

For technical support, bug reports, or integration assistance:

- **Email:** support@poliinternational.com
- **Website:** https://poliinternational.com
- **Documentation:** https://poliinternational.com/tools/piercing-angle-guide/documentation.html
- **Feedback Form:** Available within the tool interface

### Attribution

This tool is provided by **Poli International**, a manufacturer of professional body piercing jewelry and supplies. The embed includes a "Powered by Poli International" attribution that must remain intact per the tool's license terms.
