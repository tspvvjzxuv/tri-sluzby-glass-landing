---
version: alpha
name: thedesigns.org
description: Design system pre hub a tri sektory — Signal House, Everlight, Voltwerk.
colors:
  hub-ink: "#ecf2ff"
  hub-bg: "#080a1d"
  hub-accent: "#6b2cff"
  signal-primary: "#1A1C1E"
  signal-accent: "#a78bfa"
  signal-accent2: "#f472b6"
  ever-neutral: "#F7F5F2"
  ever-ink: "#1c1814"
  ever-accent: "#b8860b"
  auto-ink: "#eaf4ff"
  auto-bg: "#05070f"
  auto-accent: "#36f6ff"
typography:
  headline-lg:
    fontFamily: Instrument Serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.14em
  auto-display:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  auto-body:
    fontFamily: Source Sans 3
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  auto-label:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.12em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 32px
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
---

## Overview

thedesigns.org je **hub s tromi rovnocennými vetvami**. Vizuál je profesionálny, grid-based, s dôrazom na **symetriu, zarovnanie a 8px spacing scale**. Každá vetva má vlastnú paletu, ale rovnakú logiku layoutu (container, sekcie, gridy).

## Colors

- **Hub:** tmavé sklo, fialovo-modrý akcent — navigácia medzi vetvami.
- **Signal House:** fialovo-ružový growth studio na tmavom podklade.
- **Everlight:** krémovo-biela papierová báza, teplý zlatohnedý akcent — luxusná svadobná elegancia. Tmavý overlay iba na hero fotografii kvôli čitateľnosti textu.
- **Voltwerk (Automatizácia):** tmavý priemyselný podklad `#05070f`, ink `#eaf4ff`, cyan akcent `#36f6ff` — B2B firemný web pre DE trh, nie IDE demo.

## Typography

- **Hub / Signal House:** DM Sans (UI), Instrument Serif (nadpisy).
- **Everlight:** Outfit (UI), Fraunces (nadpisy — lepšie slovenské mäkčene).
- **Voltwerk:** Space Grotesk (display/nadpisy), Source Sans 3 (body), IBM Plex Mono (technické labely a normy).

## Layout

- **Container:** `min(1120px–1200px, 92%)`, centrovaný, `padding-inline` cez gutter.
- **Sekcie:** vertikálny rytmus `64px` / `32px` medzi blokmi.
- **Gridy:** vždy `repeat(N, minmax(0, 1fr))` — žiadne `1.05fr 0.95fr`.
- **Karty:** na Voltwerk home hero žiadne karty; service grid je zoznam odkazov oddelený 1px linkou, nie floating cards.
- **Galéria:** symetrický grid (2×3 alebo 3×2), nie masonry s rôznymi spanmi.

## Elevation & Depth

Voltwerk používa **tonálne vrstvy** (`--bg` / `--bg-elev` / `--bg-soft`) a 1px linky namiesto ťažkých tieňov. Hero je full-bleed fotografia s gradientovým overlayom.

## Shapes

- Interaktívne prvky Voltwerk: `4px` radius; CTA nie sú pill.
- Hub/Signal môžu používať `8px` / `12px`.

## Components

- **Voltwerk primary button:** pozadie `{colors.auto-accent}`, text tmavý ink, `4px` radius.
- **Voltwerk ghost button:** transparent + hairline border.
- **Language switch:** mono labely DE / SK / EN; default DE.

## Assets (obrázky)

- **Hub:** môže kombinovať náhľady všetkých troch vetiev, ale musí jasne označiť segmenty.
- **Signal House:** tmavé kreatívne štúdio, laptop s čistým code editorom, mirrorless kamera, produktový/commercial BTS, eventové plagáty a print proofy. Nepoužívať svadobné ani priemyselné zábery.
- **Everlight:** `foto/wedding/*.jpg` — teplé, filmové svadobné momenty, golden hour, pohyb, candid emócie. Nepoužívať hardvér, rozvádzače ani code editor.
- **Voltwerk:** `elektro/images/*.jpg` — PLC wiring, rozvádzače, commissioning, inžinieri na linke. Nepoužívať svadby, lifestyle marketing ani webové mockupy.
- Nepoužívať externé Unsplash URL (často 404); vždy relatívne cesty v repozitári alebo CSS mockupy, kým nie sú dodané finálne licencované assety.

## Do's and Don'ts

- Do používať rovnaké medzery v celom riadku gridu.
- Do zarovnávať header: logo vľavo, akcie vpravo, rovnaká výška riadku.
- Do načítavať farby a fonty z `css/tokens.css` (odvodené z YAML v tomto súbore).
- Do na Voltwerk: brand **Voltwerk** ako hero-level signal; DE-first copy; CTA „Projekt anfragen“.
- Don't používať náhodné `1.1fr` stĺpce alebo asymetrické `grid-column: span 2` bez dôvodu.
- Don't mixovať rôzne `max-width` kontajnerov na jednej stránke.
- Don't na Voltwerk: CAD/PLC IDE mockupy ako hlavný produkt, journey scroll, OEM name-drop bez projektu, karty v hero, Inter/JetBrains ako default stack.
