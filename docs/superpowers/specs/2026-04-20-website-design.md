# Revand Physical Training — Website Design Spec

**Date:** 2026-04-20  
**Project:** revandtraining.nl  
**Scope:** Informational SPA with NL/EN language toggle and contact form

---

## 1. Goals

Provide a clean, fast, mobile-friendly single-page website that:
- Informs both youth/parent and adult/corporate visitors about Revand Physical Training
- Presents services clearly for both audience types
- Lets visitors contact Ruben via a form (email) or phone number
- Supports Dutch and English via an in-page language toggle

---

## 2. Architecture

**Type:** Single Page Application — plain HTML, CSS, vanilla JS. No framework, no build step.

**Single entry point:** `index.html` — the router and view loader handle all navigation client-side using the History API (`pushState`). Netlify is configured with a redirect rule (`/* → /index.html 200`) to support direct URL access.

**File structure:**
```
revand-training.nl/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js              # router, view mounting, transitions
│   ├── lang.js             # language toggle and i18n string loading
│   └── views/
│       ├── home.js
│       ├── about.js
│       ├── services.js
│       └── contact.js
├── lang/
│   ├── nl.json             # all Dutch UI strings
│   └── en.json             # all English UI strings
├── Revand logo.png
└── _redirects              # Netlify SPA routing rule
```

---

## 3. Pages / Views

### Home
- Hero section: logo, tagline (NL/EN), prominent CTA button → Contact
- Brief intro paragraph about Revand Physical Training
- Two teaser blocks: Youth programs / Adult & Corporate programs → link to Services

### About
- Logo displayed (photo can be added later), Ruben's background summary
- Mission statement
- Teaching experience timeline (condensed from revand.md)

### Services
- Two sections: Youth (age groups, channels) and Adults (personal training, workshops, Wing Chun)
- Each service as a card or labeled block with short description

### Contact
- Contact form: Name, Email, Message fields — submitted via Formspree (free tier, up to 50/month)
- Phone number displayed below the form
- Location: Haarlem Noord

---

## 4. Routing

Client-side router in `app.js` maps URL paths to view modules:

| Path | View |
|------|------|
| `/` | home.js |
| `/about` | about.js |
| `/services` | services.js |
| `/contact` | contact.js |

Navigation updates the URL via `history.pushState` and mounts the matching view. The browser back/forward buttons work via `popstate` listener. Direct URL loads are handled by the Netlify `_redirects` rule.

---

## 5. Internationalisation (i18n)

- Two JSON files (`lang/nl.json`, `lang/en.json`) hold all user-facing strings keyed by identifier.
- HTML elements carry `data-i18n="key"` attributes.
- `lang.js` loads the active language JSON and replaces `textContent` (or `placeholder`/`value` for inputs) on every render.
- Language preference is stored in `localStorage` and applied on load.
- The toggle (NL | EN) lives in the nav bar, visible on all views.
- Switching language re-renders the active view instantly — no page reload.

---

## 6. Visual Design

**Color palette:**

| Role | Value |
|------|-------|
| Background | `#0a0a0a` |
| Surface (nav, cards) | `#1a1a1a` |
| Red accent | `#cc0000` |
| Primary text | `#ffffff` |
| Secondary text | `#aaaaaa` |
| Yellow highlight | `#c8a84b` |
| Border / divider | `#2a2a2a` |

**Typography:** Inter (Google Fonts) — clean, modern sans-serif. Headings bold, body regular.

**Logo:** `Revand logo.png` — red/black yin-yang circle. Displayed in nav (left) and hero section.

**Tone:** Clean and minimalistic. Generous whitespace, sharp contrast, red used sparingly for CTAs and accents.

---

## 7. Navigation

- **Desktop:** Horizontal nav bar — logo left, page links center/right, language toggle far right.
- **Mobile:** Logo left, hamburger icon right. Tap opens full-width dropdown menu with all links and language toggle.
- Active page link highlighted with red underline or accent color.
- Nav is fixed/sticky so it remains visible while scrolling.

---

## 8. Animations & Transitions

- **View transitions:** Fade out current view → fade in new view (~150ms each). Achieved with CSS opacity transitions triggered by JS class toggling.
- **Hover states:** Links and buttons have smooth color transitions (no jarring jumps).
- **No heavy animations** — keeps the site fast and focused.

---

## 9. Contact Form

- Fields: Name, Email, Message (all required)
- Submits to Formspree endpoint (Ruben registers at formspree.io, gets a form ID)
- Success/error feedback shown inline (no page reload — fetch API submission)
- Phone number displayed below the form as plain text
- Location (Haarlem Noord) shown as context

---

## 10. Mobile Responsiveness

- CSS written mobile-first; desktop layout added via `min-width` media queries
- Single-column layout on mobile, wider content areas on desktop
- Nav collapses to hamburger on screens < 768px
- Touch targets (buttons, links) minimum 44px height
- Form fields full-width on mobile

---

## 11. Hosting & Deployment

- **Host:** Netlify (free tier)
- **Deploy:** Connect GitHub repo → auto-deploy on push to `main`
- **SPA routing:** `_redirects` file with `/* /index.html 200`
- **Domain:** revandtraining.nl — configured via Netlify DNS or CNAME

---

## 12. Out of Scope (v1)

- Booking / scheduling system
- Payment integration
- Blog or news section
- Backend server / CMS
- Multi-language SEO (separate URL paths per language)
