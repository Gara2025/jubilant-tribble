# Reusable Component Library for CMS

This repository contains a library of premade HTML components designed to work within our Bootstrap 4.6-based CMS.

---

## How to Use This Library (For Developers)

### 1. Development Environment

- **Bootstrap 4.6:** All components are built on this framework. Do not add CDN links; the CMS already provides it.
- **Custom CSS:** In addition to Bootstrap, a global custom stylesheet is used. You can view it here: [GLOBAL-CSS-STYLES.css](https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/036-7-UPLD-GLOBAL-CSS-STYLES-2025-09-29--04-49PM.css)
- **JavaScript:** jQuery 3.7.1
- **Fancybox** 5.0.36
- **Font Awesome** 6.7.2 

### 2. Implementation Rules

- **Do Not Modify Structure:** The class names and HTML structure of these components must be used _exactly_ as provided. This ensures they work correctly within the CMS.
- **Content is Variable:** You should always replace placeholder text, image `src` paths, and link `href` paths with your final content.

---

## Available Components

This is the list of all available, ready-to-use components.

### 1. FAQ Accordion

A responsive and accessible accordion section for frequently asked questions. Uses semantic `<details>` and `<summary>` tags.

- **HTML File:** [`01-FAQ-formatting-2025-10-14.html`](https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/01-FAQ-formatting-2025-10-14)

### 2. Full Page Layout: Hero + Sticky Nav + Content Blocks

A complete page template that includes a hero section, a sticky internal navigation bar, and several content blocks for the bottom of the page (FAQs, Why Us, About Us, CTA).

- **HTML File:** [`011-Hero+stickyTOC+FAQ+other-bottom-content.html`](https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/011-Hero+stickyTOC+FAQ+other-bottom-content.html)
- **Reference Image:** [`screenshot.jpg`](https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/011-Hero+stickyTOC+FAQ+other-bottom-content.jpg)

### 3. Dark Product Cards with white fonts, and embedded components

A card component stress-tested to ensure content (text, links, buttons) remains readable on dark backgrounds.

- **HTML File:** [`01-stress-test-dark-background-and-nested-elements.html`](https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/01-stress-test-dark-background-and-nested-elements.html)
- **Reference Image:** [`screenshot.jpg`](https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/01-stress-test-dark-color-background-and-nested-elements.jpg)

### 4. Pillar Page Content Snippets
A collection of reusable content blocks originally designed for a pillar page. These snippets can be mixed and matched to build detailed informational pages. They are designed to be placed inside the "Full Page Layout: Hero + Sticky Nav" template.
- **Folder Location:** `03-Pillar-Page-Snippets/_snippets/`
