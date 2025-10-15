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

### Dark Context (The "on-dark" Rule)

To ensure all text is automatically styled to be white and readable on a dark background, you **must** wrap the content in a container with the class `.on-dark`.

**The Rule:** Use a container like `<div class="dark-background-block on-dark">` or `<div class="trust-blue-block on-dark">`.

**What it does automatically:**
- All headings (`H1`, `H2`, etc.) become **white**.
- All paragraphs (`<p>`) and list items (`<li>`) become **white**.
- **Standard links** become **light blue** for readability.

#### **Links within the "on-dark" Context**

There are two types of links available on dark backgrounds:

| Link Type | How to Create It | Appearance | Usage |
| :--- | :--- | :--- | :--- |
| **Standard Link** | A normal `<a>` tag. | **Light Blue** | This is the automatic, default style for any link inside an `.on-dark` container. |
| **Alert Link** | Add the class `link-alert` to the `<a>` tag. | **High-Contrast Blue/Yellow** | Use this for special links that need to stand out even more. |

**Example Usage (from `01-stress-test-dark-background-and-nested-elements.html`):**
**Live Example File:** For a complete, working example of all these rules, see the file: [`01-stress-test-dark-background-and-nested-elements.html`](https://github.com/Gara2025/jubilant-tribble/blob/main/02-Dark-Product-Card/01-stress-test-dark-background-and-nested-elements.html).


```html
<!-- This is the container that makes everything work -->
<div class="dark-background-block on-dark">

  <h1>H1 Heading (This is automatically white)</h1>
  
  <p>
    This paragraph is automatically white. It includes a
    <!-- This is the standard link on a dark background -->
    <a href="#">standard link (automatically light blue)</a>.
  </p>

  <ul>
    <li>List item one (automatically white).</li>
    <li>
      List item two with a 
      <!-- This is the special, high-contrast link -->
      <a href="#" class="link-alert">special alert link</a>.
    </li>
  </ul>

</div>
