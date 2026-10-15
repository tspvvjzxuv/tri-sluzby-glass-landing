---
version: alpha
name: thedesigns.org
description: Design system pre hub a tri sektory — Caviar, Everlight, Voltwerk.
colors:
  hub-ink: "#ecf2ff"
  hub-bg: "#080a1d"
  hub-accent: "#6b2cff"
  caviar-bg: "#070708"
  caviar-elev: "#101014"
  caviar-pearl: "#f4f5f7"
  caviar-silver: "#c5cad3"
  caviar-platinum: "#e8eaee"
  caviar-steel: "#8b939e"
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
  caviar-display:
    fontFamily: Cormorant Garamond
    fontSize: 72px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.02em
  caviar-label:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.28em
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
- **Caviar:** near-black `#070708` s chladným striebrom, platinou a perleťou. Žiadne zlato, šampanské ani teplé žlté. Kovové strieborné prechody na linkách, tlačidlách a hoveroch.
- **Everlight:** krémovo-biela papierová báza, teplý zlatohnedý akcent — luxusná svadobná elegancia. Tmavý overlay iba na hero fotografii kvôli čitateľnosti textu.
- **Voltwerk (Automatizácia):** tmavý priemyselný podklad `#05070f`, ink `#eaf4ff`, cyan akcent `#36f6ff` — B2B firemný web pre DE trh, nie IDE demo.

## Typography

- **Hub:** DM Sans (UI), Instrument Serif (nadpisy).
- **Caviar:** Cormorant Garamond (nadpisy, editoriál, SK/EN/DE glyphy), DM Sans (UI a body). Veľký typ, štedrý letter-spacing na labeloch.
- **Everlight:** Outfit (UI), Fraunces (nadpisy — lepšie slovenské mäkčene).
- **Voltwerk:** Space Grotesk (display/nadpisy), Source Sans 3 (body), IBM Plex Mono (technické labely a normy).

## Layout

- **Container:** `min(1120px–1200px, 92%)`, centrovaný, `padding-inline` cez gutter.
- **Sekcie:** vertikálny rytmus `64px` / `32px` medzi blokmi.
- **Gridy:** vždy `repeat(N, minmax(0, 1fr))` — žiadne `1.05fr 0.95fr`.
- **Karty:** na Voltwerk home hero žiadne karty; service grid je zoznam odkazov oddelený 1px linkou, nie floating cards. Caviar používa editoriálne asynchrónne mriežky (span 2) a 1px strieborné deliace linky namiesto floating cards.
- **Galéria:** Voltwerk/Everlight symetrický grid (2×3 alebo 3×2). Caviar: editoriálny grid s jedným veľkým tile.

## Elevation & Depth

Voltwerk používa **tonálne vrstvy** (`--bg` / `--bg-elev` / `--bg-soft`) a 1px linky namiesto ťažkých tieňov. Hero je full-bleed fotografia s gradientovým overlayom.

Caviar používa near-black, film-grain overlay, full-bleed čiernobiele zábery a 1px platinové hairlines. Žiadne ťažké farebné tiene.

## Shapes

- Interaktívne prvky Voltwerk: `4px` radius; CTA nie sú pill.
- Hub môže používať `8px` / `12px`.
- Caviar: ostré hrany (`0`), žiadne pill CTA. Pearl je 7px kruh, nie clip-art.

## Components

- **Voltwerk primary button:** pozadie `{colors.auto-accent}`, text tmavý ink, `4px` radius.
- **Voltwerk ghost button:** transparent + hairline border.
- **Caviar primary button:** strieborný kovový gradient `{colors.caviar-platinum}` → `{colors.caviar-steel}`, text `{colors.caviar-bg}`, ostré hrany.
- **Caviar ghost button:** transparent + hairline `{colors.caviar-silver}`.
- **Language switch:** Caviar labely SK / EN / DE; default SK. Voltwerk default DE.

## Assets (obrázky)

- **Hub:** môže kombinovať náhľady všetkých troch vetiev, ale musí jasne označiť segmenty.
- **Caviar:** chladné, editoriálne, čiernobiele alebo strieborno-perleťové zábery. Produktový detail, ateliér, pohyb. Nie neon, nie zlato, nie svadobné (okrem označeného odkazu na Everlight) ani priemyselné zábery.
- **Everlight:** `foto/wedding/*.jpg` — teplé, filmové svadobné momenty, golden hour, pohyb, candid emócie. Nepoužívať hardvér, rozvádzače ani code editor.
- **Voltwerk:** `elektro/images/*.jpg` — PLC wiring, rozvádzače, commissioning, inžinieri na linke. Nepoužívať svadby, lifestyle marketing ani webové mockupy.
- Nepoužívať externé Unsplash URL (často 404); vždy relatívne cesty v repozitári alebo CSS mockupy, kým nie sú dodané finálne licencované assety.

## Do's and Don'ts

- Do používať rovnaké medzery v celom riadku gridu.
- Do zarovnávať header: logo vľavo, akcie vpravo, rovnaká výška riadku.
- Do načítavať farby a fonty z `css/tokens.css` (odvodené z YAML v tomto súbore).
- Do na Voltwerk: brand **Voltwerk** ako hero-level signal; DE-first copy; CTA „Projekt anfragen“.
- Do na Caviar: brand **Caviar**; SK-first copy; CTA „Chcem cenovú ponuku“; striebro/platina, žiadne zlato.
- Don't na Caviar: vymyslené recenzie, logá klientov, počty projektov; zlato, šampanské, teplé žlté, neon.
- Don't používať náhodné `1.1fr` stĺpce alebo asymetrické `grid-column: span 2` bez dôvodu.
- Don't mixovať rôzne `max-width` kontajnerov na jednej stránke.
- Don't na Voltwerk: CAD/PLC IDE mockupy ako hlavný produkt, journey scroll, OEM name-drop bez projektu, karty v hero, Inter/JetBrains ako default stack.
