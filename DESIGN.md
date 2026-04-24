# Jesus Reigns Ministries Barcelona — Design Specification
**Style: Sanctuary Modern** | React + Tailwind CSS

---

## 1. Brand Overview

| Property | Value |
|---|---|
| Church name | Jesus Reigns Ministries Barcelona |
| Logo style | Deep navy wordmark · script typeface on "Jesus Reigns" · gold accent |
| Design principle | Elegant, clean, spiritual — never corporate or cold |
| Audience | Multicultural Christian community in Barcelona; families, young adults, seekers |

---

## 2. Color Palette

### Primary tokens (extend in `tailwind.config.js`)

```js
colors: {
  brand: {
    // Blues
    navy:        '#1B3A6B',   // Primary brand color — headings, navbar, hero bg
    'navy-hover':'#2E5FA3',   // Hover state for navy elements
    'navy-light':'#EBF0F9',   // Alternate section backgrounds, tinted blue

    // Golds
    gold:        '#C9A84C',   // Primary accent — borders, icons, highlights
    'gold-light':'#F5E9C8',   // Subtle gold backgrounds, badge fills

    // Neutrals
    cream:       '#FAFAF7',   // Global page background (warm off-white)
    sand:        '#F0EBE1',   // Alternate section background (slightly warmer)

    // Text
    ink:         '#1A1A2E',   // Primary text — headings, body
    muted:       '#4A4A6A',   // Secondary text — paragraphs, descriptions
    subtle:      '#8B8BAA',   // Metadata — dates, labels, placeholders

    // Utility
    white:       '#FFFFFF',
    'gold-divider': '#C9A84C33',  // Gold at 20% opacity — horizontal rules
  }
}
```

### Usage rules
- **Navy** → Navbar, hero backgrounds, primary buttons, footer
- **Gold** → Accent borders, icon fill, CTA underlines, section decorators, hover states on white cards
- **Cream / Sand** → Alternating section backgrounds (never white + white back-to-back)
- **Ink** → All headings and body copy on light backgrounds
- **White** → Card backgrounds, form fields, navbar on scroll

### Accessibility
All navy/white combinations pass **WCAG AA** (contrast ≥ 4.5:1).
Gold on white is decorative only — never use as the sole carrier of text meaning.

---

## 3. Typography

### Font stack

```css
/* Google Fonts import — add to index.html or index.css */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap');
```

```js
// tailwind.config.js
fontFamily: {
  heading: ['"Playfair Display"', 'Georgia', 'serif'],
  body:    ['Inter', 'system-ui', 'sans-serif'],
  accent:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
}
```

### Type scale

| Role | Class | Size | Weight | Font |
|---|---|---|---|---|
| Hero H1 | `font-heading text-5xl lg:text-7xl` | 48–72px | 700 | Playfair Display |
| Section H2 | `font-heading text-3xl lg:text-4xl` | 30–36px | 600 | Playfair Display |
| Card H3 | `font-heading text-xl lg:text-2xl` | 20–24px | 600 | Playfair Display |
| Body large | `font-body text-lg` | 18px | 400 | Inter |
| Body default | `font-body text-base` | 16px | 400 | Inter |
| Body small | `font-body text-sm` | 14px | 400 | Inter |
| Bible quote | `font-accent text-xl italic` | 20px | 400 italic | Cormorant Garamond |
| Label / Badge | `font-body text-xs tracking-widest uppercase` | 12px | 500 | Inter |
| Nav links | `font-body text-sm font-medium tracking-wide` | 14px | 500 | Inter |

### Rules
- Section titles: **always Playfair Display**, navy color
- Section eyebrow (small tag above title): Inter uppercase tracking-widest, gold color
- Bible quotes / spiritual epigrams: Cormorant Garamond italic, muted color
- Max line length for body text: **65ch** on desktop
- Line height body: `leading-relaxed` (1.625)
- Line height headings: `leading-tight` (1.25)

---

## 4. Spacing & Layout

### Spacing conventions
```
Section vertical padding:  py-20 lg:py-28       (80px / 112px)
Section inner container:   max-w-6xl mx-auto px-6 lg:px-8
Card inner padding:        p-6 lg:p-8
Between cards grid gap:    gap-6 lg:gap-8
Between heading & body:    mb-4 (16px)
Between eyebrow & heading: mb-3 (12px)
Section heading bottom:    mb-12 lg:mb-16
```

### Grid system
```
Mobile:   1 column
Tablet:   2 columns  (md:grid-cols-2)
Desktop:  3 columns  (lg:grid-cols-3)

Hero / About: 1 full-width column or 2-col split
Schedule:     2 or 3 cards on desktop
Events:       3 cards on desktop
Gallery:      2 cols mobile → 3 cols tablet → 4 cols desktop
Contact:      2-col split (info left, form right) on desktop
```

---

## 5. Component Patterns

### Buttons

```
Primary (filled navy):
  bg-brand-navy text-white rounded-full px-8 py-3 font-body font-medium
  hover:bg-brand-navy-hover transition-colors
  shadow-sm hover:shadow-md

Secondary (outlined navy):
  border-2 border-brand-navy text-brand-navy rounded-full px-8 py-3 font-body font-medium
  hover:bg-brand-navy hover:text-white transition-colors

Gold accent (for hero CTAs on dark bg):
  bg-brand-gold text-white rounded-full px-8 py-3 font-body font-medium
  hover:brightness-110 transition

Ghost (text link with arrow):
  text-brand-navy font-medium inline-flex items-center gap-2
  hover:text-brand-gold transition-colors
  After content: → (arrow icon)
```

### Cards

```
Standard card:
  bg-white rounded-2xl p-6 lg:p-8
  shadow-sm hover:shadow-md transition-shadow
  border border-transparent hover:border-brand-gold/20

Schedule card:
  bg-white rounded-2xl p-6
  border-l-4 border-brand-gold
  shadow-sm

Event / Blog card:
  bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md
  [Image top — aspect-video] + [Padding content]
  Date badge: bg-brand-gold-light text-brand-navy font-body text-xs uppercase tracking-widest
```

### Section title block

```
[Eyebrow label — gold, uppercase, tracking-widest, Inter text-xs]
[H2 — Playfair Display, navy, text-3xl lg:text-4xl]
[Optional short paragraph — muted, max-w-2xl, Inter]
[Optional gold divider line — w-16 h-0.5 bg-brand-gold mt-4]
```

### Dividers / decorative elements
```
Gold thin rule:  <div class="w-16 h-0.5 bg-brand-gold mx-auto my-6" />
Gold dot row:    Three dots · · · in gold — between eyebrow and title (optional)
Section separator: subtle bg color change (cream ↔ sand ↔ navy-light)
```

### Badges

```
bg-brand-gold-light text-brand-navy
rounded-full px-3 py-1 text-xs font-medium tracking-wide font-body
```

### Form fields

```
Input / Textarea:
  w-full rounded-xl border border-gray-200 bg-white
  px-4 py-3 font-body text-base text-brand-ink
  placeholder:text-brand-subtle
  focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold
  transition-shadow

Submit button: Primary button (filled navy), full-width on mobile
```

---

## 6. Page Sections

### 6.1 Navbar
**Behavior:** Fixed/sticky. Transparent on hero → white with `shadow-sm` after scroll.

**Layout:**
```
[Logo left]   [Nav links center]   [CTA button right]
```

**Links:** Inicio · Sobre nosotros · Horarios · Eventos · Contacto

**CTA button:** "Visítanos" — Primary filled navy, `rounded-full`

**Mobile:** Hamburger menu. Full-screen overlay or slide-in drawer. Links stacked.

---

### 6.2 Hero
**Full viewport height** (`min-h-screen`). Dark navy background with community photo overlay (`bg-blend-overlay opacity-30`).

**Layout (desktop):** Centered text, 2 CTAs side by side.
**Layout (mobile):** Stacked, text centered.

**Content:**
```
[Eyebrow — gold]     "Barcelona · España"
[H1 — white]         "Un lugar donde todos
                       son bienvenidos"
[Subtitle — white/80] "Somos una iglesia cristiana en el corazón de Barcelona.
                        Aquí encontrarás comunidad, esperanza y la presencia de Dios."
[CTA row]            [Ver Horarios ▶]   [Contáctanos]
                      (gold filled)      (outlined white)
```

**Optional Bible verse strip at bottom:**
```
font-accent italic text-white/70 text-lg — "Porque donde dos o tres se reúnen en mi nombre,
allí estoy yo en medio de ellos." — Mateo 18:20
```

---

### 6.3 About Us
**Background:** `bg-brand-cream`

**Layout:** Intro paragraph (full width) → 3 cards below.

**Content:**
```
[Eyebrow]   "Quiénes somos"
[H2]        "Una iglesia para toda Barcelona"
[Paragraph] "Jesus Reigns Ministries Barcelona es una iglesia cristiana multicultural
             que celebra la fe, la diversidad y el amor de Dios. Creemos que cada persona
             tiene un propósito y que juntos podemos crecer en comunidad."

[Card 1 — icon: church]
  Title:    "Nuestra historia"
  Text:     "Nacimos con el corazón de ver a Barcelona transformada por el evangelio.
             Desde nuestros inicios, hemos sido una familia diversa unida por la fe
             en Jesucristo."

[Card 2 — icon: target/compass]
  Title:    "Nuestra misión"
  Text:     "Llevar el mensaje de Jesús con autenticidad, amor y poder a cada persona
             en Barcelona y más allá."

[Card 3 — icon: eye/vision]
  Title:    "Nuestra visión"
  Text:     "Ver a la ciudad de Barcelona llena del conocimiento de la gloria de Dios,
             familia a familia, barrio a barrio."
```

---

### 6.4 Service Schedule
**Background:** `bg-brand-navy-light`

**Layout:** 2–3 cards in a row. Each card has gold left-border.

**Content:**
```
[Eyebrow]   "Únete a nosotros"
[H2]        "Horarios de culto"

[Card 1]
  Icon:     ☀ (sun / Sunday)
  Day:      "Domingo"
  Time:     "11:00h"
  Title:    "Culto dominical"
  Text:     "Nuestro culto principal. Adoración, predicación y comunión.
             Toda la familia es bienvenida."

[Card 2]
  Icon:     📖 (book)
  Day:      "Miércoles"
  Time:     "19:00h"
  Title:    "Estudio bíblico"
  Text:     "Profundizamos en la Palabra de Dios en un ambiente
             íntimo y participativo."

[Card 3]
  Icon:     ✦ (star / youth)
  Day:      "Viernes"
  Time:     "19:30h"
  Title:    "Reunión de jóvenes"
  Text:     "Un espacio pensado para jóvenes que quieren
             vivir su fe con pasión."
```

---

### 6.5 Events / Latest Posts
**Background:** `bg-brand-cream`

**Layout:** 3 horizontal cards with image on top. Prepared for blog integration.

**Content:**
```
[Eyebrow]   "Próximos eventos"
[H2]        "Lo que viene"
[CTA link]  "Ver todos los eventos →"

[Card 1]
  Image:    placeholder — conference/worship setting
  Badge:    "15 Mayo 2025"
  Title:    "Conferencia de Adoración"
  Text:     "Una noche especial de adoración con artistas invitados.
             Ven a encontrarte con Dios."
  Link:     "Más información →"

[Card 2]
  Image:    placeholder — outdoor/nature
  Badge:    "12–14 Julio 2025"
  Title:    "Retiro de Verano 2025"
  Text:     "Un fin de semana para reconectar con Dios y con la comunidad
             en un entorno natural."
  Link:     "Más información →"

[Card 3]
  Image:    placeholder — baptism/water
  Badge:    "1 Junio 2025"
  Title:    "Bautismos"
  Text:     "Celebramos con alegría a quienes dan este paso de fe.
             ¡No te lo pierdas!"
  Link:     "Más información →"
```

---

### 6.6 Gallery
**Background:** `bg-brand-sand`

**Layout:** Responsive grid — 2 cols mobile → 3 cols tablet → 4 cols desktop.
Images: `aspect-square`, `object-cover`, `rounded-xl`, hover overlay with subtle navy tint.

**Content:**
```
[Eyebrow]   "Comunidad"
[H2]        "Nuestra familia en imágenes"
[Subtitle]  "Momentos que nos definen como familia"

9 images: worship service, community groups, youth, baptisms, outdoor events, etc.
(User to provide real photos)
```

---

### 6.7 Location
**Background:** `bg-brand-cream`

**Layout (desktop):** 2 columns — left: address info; right: Google Maps embed.

**Content:**
```
[Eyebrow]   "Dónde estamos"
[H2]        "Encuéntranos en Barcelona"

[Address block]
  Icon: 📍
  Text: [ADDRESS PLACEHOLDER — user to fill]

[Hours reminder]
  "Domingos · 11:00h | Miércoles · 19:00h | Viernes · 19:30h"

[CTA]       "Abrir en Google Maps →"   (opens maps.google.com link)

[Right col]  Google Maps <iframe> embed  — rounded-2xl, shadow-md
```

---

### 6.8 Contact
**Background:** `bg-brand-navy` (dark section — white text)

**Layout (desktop):** 2 columns — left: contact info; right: form.

**Content:**
```
[Eyebrow — gold]  "Contáctanos"
[H2 — white]      "Hablemos"
[Subtitle — white/70] "Estamos aquí para cualquier consulta, oración o
                        simplemente para conocerte mejor."

[Left column]
  📞  [PHONE PLACEHOLDER]
  ✉   [EMAIL PLACEHOLDER]
  📍  [ADDRESS PLACEHOLDER]

  Social links:
  Instagram · Facebook · YouTube · WhatsApp

[Right column — form]
  Field: Nombre completo    (text input)
  Field: Email              (email input)
  Field: Mensaje            (textarea, 4 rows)
  CTA:   "Enviar mensaje"   (gold filled button, full-width)
```

---

### 6.9 Footer
**Background:** `bg-brand-ink` (darkest navy)

**Layout:**
```
[Row 1]
  Left:   Logo (white version) + tagline
  Center: Nav links (Inicio · Sobre nosotros · Horarios · Eventos · Contacto)
  Right:  Social icons (Instagram, Facebook, YouTube, WhatsApp)

[Divider line — gold/20 opacity]

[Row 2]
  Left:   "© 2025 Jesus Reigns Ministries Barcelona. Todos los derechos reservados."
  Right:  "Política de privacidad · Aviso legal"
```

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Tailwind prefix |
|---|---|---|
| Mobile | < 768px | (default) |
| Tablet | ≥ 768px | `md:` |
| Desktop | ≥ 1024px | `lg:` |
| Wide | ≥ 1280px | `xl:` |

**Mobile-first approach** — start with mobile layout, layer up with `md:` and `lg:` prefixes.

Key responsive behaviors:
- Navbar → hamburger on mobile, full links on `lg:`
- Hero H1 → `text-4xl` mobile, `text-6xl lg:text-7xl` desktop
- All grids → 1 col mobile, 2 col `md:`, 3 col `lg:`
- Contact section → stacked on mobile, 2-col on `lg:`
- Footer → stacked on mobile, 3-col on `lg:`

---

## 8. Shadows & Borders

```
shadow-sm     →  Resting cards (very subtle)
shadow-md     →  Hover state / elevated cards
shadow-lg     →  Modals, dropdowns
rounded-xl    →  Form inputs, small elements
rounded-2xl   →  Cards
rounded-full  →  Buttons (pill), badges, avatar thumbnails
border-l-4 border-brand-gold  →  Schedule cards (left gold accent)
```

---

## 9. Transitions & Micro-interactions

```css
/* Apply globally */
transition-all duration-200 ease-in-out

/* Specific patterns */
Cards:      hover:shadow-md hover:-translate-y-0.5  — subtle lift
Buttons:    hover:brightness-110 or hover:bg-navy-hover
Nav links:  hover:text-brand-gold with underline grow animation
Images:     hover:scale-105 inside overflow-hidden container (gallery)
Form focus: ring-2 ring-brand-gold/40
```

---

## 10. Component Architecture (React)

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          sticky, transparent→white on scroll
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Schedule.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Location.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Button.jsx          variant prop: 'primary' | 'secondary' | 'gold' | 'ghost'
│       ├── Card.jsx            variant prop: 'default' | 'schedule' | 'event'
│       ├── SectionTitle.jsx    eyebrow + h2 + optional subtitle + gold rule
│       └── Badge.jsx
├── pages/
│   └── Home.jsx               assembles all sections
├── assets/
│   └── images/                user photos go here
└── App.jsx
```

---

## 11. tailwind.config.js Summary

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:         '#1B3A6B',
          'navy-hover': '#2E5FA3',
          'navy-light': '#EBF0F9',
          gold:         '#C9A84C',
          'gold-light': '#F5E9C8',
          cream:        '#FAFAF7',
          sand:         '#F0EBE1',
          ink:          '#1A1A2E',
          muted:        '#4A4A6A',
          subtle:       '#8B8BAA',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        accent:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
```

---

## 12. Google Fonts Import

Add to `index.html` `<head>` or `src/index.css`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
```

---

## 13. Placeholders to Fill In

| Item | Notes |
|---|---|
| Church address | User to provide |
| Phone number | User to provide |
| Email address | User to provide |
| Google Maps embed URL | Generate from maps.google.com |
| Hero photo | Real community photo (landscape, 1920×1080 min) |
| Gallery photos (9) | User to provide — worship, community, youth, events |
| Event images (3) | User to provide or use Unsplash placeholder |
| Social media links | Instagram, Facebook, YouTube, WhatsApp URLs |
| Logo file | `src/assets/logo.png` (or .svg preferred) |

---

*Document version: 1.0 — April 2025*
*Design style: Sanctuary Modern — Jesus Reigns Ministries Barcelona*
