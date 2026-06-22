# Design Guidelines — We Love Meepo x QuantumByte

## Philosophy
Radical minimalism. Bold typography is the entire UI. Dark background, single high-contrast headline centered on screen.

## Layout
- Full viewport height and width
- Single centered section
- Headline vertically and horizontally centered
- No header, no footer, no sidebar, no navigation

## Typography
- Display headline: Space Grotesk, black weight, very large (clamp 4rem–10vw)
- "We Love" — white or light text
- "Meepo" — violet/purple accent (#7c3aed)
- "x QuantumByte" — muted/secondary tone
- No body text, no subheadings

## Colors
- Background: near-black (#09090b)
- Primary text: white (#fafafa)
- Accent: violet (#7c3aed)
- No borders, no cards, no dividers

## Motion
- Optional: subtle fade-in on load (CSS only, no JS libraries)

## Constraints
- Text only — no images, no icons, no decorative elements
- Mobile responsive — headline scales down gracefully
- Use bg-background, text-foreground, text-primary Tailwind theme classes