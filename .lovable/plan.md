# SA Innovations — Landingspagina

Een strakke, luxe one-page site volgens de aangeleverde brand guide.

## Design tokens (src/styles.css)
- `--background` = wit (#FFFFFF), `--foreground` = zwart (#000000)
- `--accent` = zachtroze (#F8E8EA), `--accent-foreground` = zwart
- `--primary` = zwart, `--primary-foreground` = wit
- Fonts via `<link>` in `__root.tsx`: Playfair Display (headings) + Inter (body)
- Tailwind font tokens: `--font-serif`, `--font-sans`

## Assets
- Upload logo via `lovable-assets` CLI → `src/assets/sa-logo.png.asset.json`
- Gebruikt in nav, hero en footer

## Routestructuur
- Alles op `src/routes/index.tsx` (one-pager met anker-secties `#diensten`, `#waarom`, `#contact`)
- Smooth scroll via `scroll-behavior: smooth` op `html`
- SEO meta (title, description, og:*) in `head()` van index-route

## Componenten (`src/components/landing/`)
1. **Navbar** — sticky, transparant; bij scroll wit met subtiele `border-b`. Logo links, links rechts. Hamburger (sheet) op mobiel.
2. **Hero** — gecentreerd; klein logo + H1 serif "Jouw website. Jouw eigendom. Jouw succes.", subtitel, zwarte CTA-knop. Subtiel roze gradient-vlak onderaan + dunne roze decoratielijn.
3. **WatIkDoe** — H2 + intro + 3 cards (lucide icons: Monitor, Pencil, Rocket) met roze icon-achtergrond.
4. **Waarom** — volle-breedte sectie met `bg-accent` (zachtroze), 4 cards (KeyRound, CalendarClock, Handshake, Gift) op witte achtergrond met roze accent-rand.
5. **Contact** — formulier-card (wit, subtiele shadow) met Naam, E-mail, Telefoon, Bericht. Client-side validatie; bij submit een sonner toast "Bericht verzonden" (geen backend gevraagd).
6. **Footer** — klein logo, tagline "Modern. Persoonlijk. Van u.", nav-links, copyright.

## Animaties
- Lichte `IntersectionObserver` hook (`useInView`) → toggelt `opacity`/`translate-y` Tailwind classes voor fade-in-up bij scroll
- Geen framer-motion (spec: licht houden)
- Hover transitions op knoppen/cards via Tailwind `transition`

## Toegankelijkheid & SEO
- Eén `<h1>`, daarna `<h2>`/`<h3>`
- Alt-text op logo, `aria-label` op icon-knoppen
- Zichtbare focus rings (zwart op wit / wit op zwart)
- Meta title: "SA Innovations — Webdesign op maat voor ondernemers"
- Meta description ~155 tekens
- Relatieve `canonical` en `og:url`

## Niet inbegrepen
- Geen backend / Lovable Cloud (formulier is client-side; toast-feedback). Vraag indien gewenst om e-mailverzending toe te voegen.
