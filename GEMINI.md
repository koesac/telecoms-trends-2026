# Innovate Comms: Design Consistency Guidelines

This document defines the foundational mandates for the "Innovate Comms" portfolio. All future updates and new prototypes must adhere strictly to these standards to maintain a world-class, cohesive brand identity.

## 1. Brand Palette
The brand utilizes a "Prestige Jewel" palette. Avoid pure blacks and whites where possible; prefer the "Luxury Paper" or "Deep Navy" variants.

| Name | HEX Code | Usage |
| :--- | :--- | :--- |
| **Agate** | `#D6883A` | Primary accent, CTA buttons, Logo stroke, Recommended badges. |
| **Aventurine** | `#3E9B9B` | Trend branding, background gradients. |
| **Azurite** | `#842366` | Trend branding, background gradients, technical dots. |
| **Bloodstone** | `#15404F` | Trend branding, background gradients, deep atmosphere. |
| **Alexandrite** | `#4C194C` | Trend branding, background gradients. |
| **Deep Navy** | `#050a10` | Primary background color for all prototypes. |
| **Paper** | `#f4f1ea` | Luxury cardstock color for card interiors and tactile elements. |

## 2. Typography
*   **Primary Font:** "Avenir Next LT" (Fallback: sans-serif). Used for body copy, strategy text, and general UI.
*   **Display Font:** "Bebas Neue" (Fallback: impact). Used for high-impact trend titles on card fronts.
*   **Formatting:** 
    *   Main branded headings (`h1`, `h2`) should be **ALL-CAPS** with generous letter-spacing (2px - 5px).
    *   Strategy "Key Messages" must be **Bold** and high-contrast (White on brand colors, or Dark Grey on Paper).

## 3. UI Components & Assets
*   **The Logo:** Always use the official stroke-only SVG. The stroke color must be `var(--agate)` with `fill: none`.
*   **Header Branding:** Positioned top-left, respects `safe-area-inset-top`. Must link to the official site.
*   **Navigation:** 
    *   Use side-aligned semi-transparent arrows (`backdrop-filter: blur`).
    *   Progress indicators (dots) should sit at the bottom, centered.
*   **Overlays:** Intro and Conclusion screens must use a full-screen blurred background (`backdrop-filter: blur(20px)`) over the `Deep Navy` base.

## 4. Technical & Mobile Mandates
*   **Viewport:** Always use `viewport-fit=cover` to allow backgrounds to flow into notches and safe areas.
*   **Safe Areas:** Use `env(safe-area-inset-*)` for all fixed-position UI elements (Header, Arrows, Controls).
*   **Viewport Units:** Prefer `dvh` (Dynamic Viewport Height) over `vh` to prevent mobile toolbar clipping.
*   **Transitions:** Use GSAP for high-end feel. Navigation should feel "physical" (sliding, stacking, or flipping) rather than simple fading.
*   **Z-Index Hierarchy:** 
    1.  Overlays: `5000+`
    2.  Main Interaction (Cards): `100 - 1000`
    3.  UI Elements (Dots/Arrows): `10`
    4.  Background: `0`

## 5. Content Management
*   **Source of Truth:** All campaign copy (Trends, Implications, Intro/Outro) must be pulled dynamically from `master_content.js`.
*   **Direct Modification:** NEVER hardcode strategy text into individual prototype files. Update the master config to reflect changes across the entire portfolio.
