# Brand Style Guide

This document defines the official color palette for all components in this library. Since the target CMS environment does not support CSS variables, **always use the direct Hex Codes** provided below to ensure brand consistency.

---

## Primary Corporate Colors

These are the main colors that define our brand identity.

| Color | Swatch | Hex Code | Usage |
| :--- | :---: | :--- | :--- |
| **Corporate Blue** | ![](https://placehold.co/60x30/1c3481/1c3481.png) | `#1c3481` | Primary headings, primary buttons, important links, and accents. |
| **Corporate Red** | ![](https://placehold.co/60x30/d01e25/d01e25.png) | `#d01e25` | Call-to-action buttons, interactive links, and highlights. |

---

## Secondary & Accent Colors

These colors are used for backgrounds, borders, and text to support the primary palette.

| Color | Swatch | Hex Code | Usage |
| :--- | :---: | :--- | :--- |
| **Light Blue** | ![](https://placehold.co/60x30/E8F4FD/E8F4FD.png) | `#E8F4FD` | Calculator / Forms / Light backgrounds for info boxes and subtle highlights. |
| **Light Grey** | ![](https://placehold.co/60x30/f8f9fa/f8f9fa.png) | `#f8f9fa` | Default background color for sections to create visual separation. |
| **Darker Blue** | ![](https://placehold.co/60x30/162965/162965.png) | `#162965` | Hover state for primary blue buttons and elements. |
| **Charcoal Gray** | ![](https://placehold.co/60x30/34495E/34495E.png) | `#34495E` | Hover state for primary blue buttons and elements. |
| **Professional Blue** | ![](https://placehold.co/60x30/4A90C2/4A90C2.png) | `#4A90C2` | helpful information and tips blocks. |

---

## Text & Border Colors

These are the standard colors for typography and UI elements.

| Color | Swatch | Hex Code | Usage |
| :--- | :---: | :--- | :--- |
| **Dark Text** | ![](https://placehold.co/60x30/343a40/343a40.png) | `#343a40` | Main body copy and paragraph text. |
| **Grey Text** | ![](https://placehold.co/60x30/6c757d/6c757d.png) | `#6c757d` | Subheadings, meta-data, and less important text. |
| **Grey Border** | ![](https://placehold.co/60x30/dee2e6/dee2e6.png) | `#dee2e6` | Standard borders for cards, tables, and dividers. |



## Text Link Styles

This section defines the standard appearance for text links (`<a>` tags) and their special variations.

### Standard Links (on Light Backgrounds)

This is the default style for all links on white or light grey backgrounds.

| State | Color | Swatch | Hex Code | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Default** | Corporate Red | ![](https://placehold.co/60x30/d01e25/d01e25.png) | `#d01e25` | All standard links should use the primary red color. |
| **Hover** | Darker Red | ![](https://placehold.co/60x30/a8181e/a8181e.png) | `#a8181e` | Links should darken and become underlined on hover. |

### Standard Context (on Light Backgrounds)

This is the default style for all content placed on a white or light grey background.

| Element | Style | Example |
| :--- | :--- | :--- |
| **Headings & Text** | Dark Text (`#343a40`) | Normal paragraph and heading color. |
| **Standard Link** | Corporate Red (`#d01e25`) | `<a>` tags are red by default. |
| **Link Hover** | Darker Red (`#a8181e`) | Links darken and are underlined on hover. |

---
---

## 3. Global CSS Components & Effects

This section documents the special global CSS classes that can be applied to elements to add visual styles and effects. For a live demonstration of all these classes working together, see the file in the `_demonstrations` folder.

| Component / Effect | Context | How to Use (CSS Class) | Preview | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Dark Context** | Any | Add `.on-dark` to a container with a dark background. | ![On-Dark Preview](./_assets/style-guide-images/effect-on-dark.jpg) | **Crucial Rule:** Automatically styles all inner text (headings, paragraphs, standard links) to be white or light blue for readability. |
| **Lift on Hover** | Light or Dark | Add `.lift` to a card, block, or link element. | ![Lift Preview](./_assets/style-guide-images/effect-lift.jpg) | Adds a subtle shadow and "lifts" the element off the page on hover. Ideal for making elements feel interactive. |
| **Button Aura** | Light or Dark | Add `.aura` to a button (`<a>` or `<button>`). | ![Aura Preview](./_assets/style-guide-images/effect-aura.jpg) | Adds a glowing "aura" effect to a button. Best used for primary calls-to-action to draw attention. |
| **Nested Hover** | N/A | Structure your HTML normally (e.g., a button inside a `.lift` card). | ![Nested Hover Preview](./_assets/style-guide-images/effect-nested-hover.jpg) | The global CSS automatically handles nested effects. A button's hover effect will work correctly even if it's inside a card that also has a hover effect. |
| **Alert Link** | Dark Only | Add `.link-alert` to an `<a>` tag that is inside an `.on-dark` container. | ![Alert Link Preview](./_assets/style-guide-images/effect-link-alert.jpg) | A special high-contrast link style (yellow/blue) designed to stand out on dark backgrounds. |


----------------
| Component / Effect                                   | Context         | How to Use (CSS Class)                                                                                                                                                                                                       | Preview                                                             | Description                                                |
| ---------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| :---                                                 | :---            | :---                                                                                                                                                                                                                         | :---                                                                | :---                                                       |
| white fonts on dark background with or without image | on hero section | <div   class="hero-block on-dark readable-width"   style="     --hero-bg-image: url('https://d3vmbilae16g7h.cloudfront.net/colorcopi/images/opt/products_gallery_images/vinyl-banners-hemm-ColorCopiesUSA.jpg.webp?v=7943'); | ![On-Dark Preview](./_assets/style-guide-images/effect-on-dark.jpg) | produces <h1> and <p> in white ovr hero section or similar |
| Red button animate on top of dark hero section       | on top of hero  | a href="#" class="custom-red-button animate-pulse" style="margin-top: 20px"                                                                                                                                                  | test5                                                               | the animate effect not visible                             |
| test 3                                               | tst4            |                                                                                                                                                                                                                              | test5                                                               | test6                                                      |
| test 4                                               | tst5            | test3                                                                                                                                                                                                                        | test5                                                               | test6                                                      |
| test 5                                               | tst6            | test3                                                                                                                                                                                                                        | test5                                                               | test6                                                      |
| test 6                                               | tst7            | test3                                                                                                                                                                                                                        | test5                                                               | test6                                                      |
| test 7                                               | tst8            | test3                                                                                                                                                                                                                        | test5                                                               | test6                                                      |
| test 8                                               | tst9            | test3                                                                                                                                                                                                                        | test5                                                               | test6                                                      |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
|                                                      |                 |                                                                                                                                                                                                                              |                                                                     |                                                            |
