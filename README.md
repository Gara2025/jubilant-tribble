# Jubilant Tribble: A Reusable Component Library

This repository contains a complete design system for creating high-quality, consistent web pages for our CMS environment. It includes reusable HTML components, strategic documentation, and page templates.

This document is the main "welcome mat" and directory for the entire project.

---

## 1. Core System Documents (Start Here)

Before using any component, you **must** be familiar with the three core documents that govern this entire system. They are the single source of truth for all rules, styles, and architecture.

- ### [**`manifest.json`**](./manifest.json)

  **Purpose:** The AI's Blueprint. This is the machine-readable master list of all available components, their locations, and their placeholders.

- ### [**`STYLE_GUIDE.md`**](./STYLE_GUIDE.md)

  **Purpose:** The Brand Rulebook. This document defines the official color palette, typography scale, and special CSS effects (like `.on-dark`, `.lift`, and `.aura`).

- ### [**`INTERNAL_LINK_INVENTORY.md`**](./INTERNAL_LINK_INVENTORY.md)
  **Purpose:** The Website's Architectural Map. This document defines our "Pillar and Cluster" SEO strategy and provides a master list of key pages for internal linking.

---

## 2. Development Environment & Rules

This section contains the critical technical information for any developer or AI working with this library.

### Technical Environment

All components are designed to work within the following pre-existing environment. **Do not** add CDN links for these libraries as they are already provided by the CMS.

| Technology | Version | Notes |
| :-- | :-- | :-- |
| **Bootstrap** | `4.6.2` | Provided by the CMS. Do not add CDN links. |
| **jQuery** | `3.7.1` | Provided by the CMS. |
| **Fancybox** | `5.0.36` | Provided by the CMS. |
| **Font Awesome** | `6.7.2` | Provided by the CMS. |
| **Custom CSS** | `N/A` | A global stylesheet is required. [Link to file](https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/036-7-UPLD-GLOBAL-CSS-STYLES-2025-09-29--04-49PM.css). |

### Implementation Rules

### Implementation Rules
*   **Do Not Modify Structure:** The class names and HTML structure of these components must be used _exactly_ as provided.
*   **All Content is an Example:** The text, images, and links found inside the component HTML files are for demonstration purposes only. **Even though this content is not explicitly marked as a "placeholder," it MUST be treated as such.**
*   **Content Must Be Replaced:** When using a component, you must **completely replace** the example content with the new, required content for your project. Do not mix or merge the new content with the example content.
*   **Use Placeholder Images:** When a component requires an image and a specific one isn't provided, use the default placeholder image defined in the `manifest.json`.

### Standard Page Architectures

This section defines the standard "blueprints" for assembling common page types. It dictates which components are required and where they should be placed.

#### **The "In-Depth" Content Page**
*   **Purpose:** Comprehensive, educational articles (e.g., guides, deep dives).
*   **Required Shell:** `page-template-hero-sticky-nav`.
*   **Required Content:** Must contain detailed text, headings, and may use any snippets from the `pillar-page-snippet-collection`.

#### **The "Product" Page**
*   **Purpose:** To present a configurable product and its pricing calculator.
*   **Required Shell:** Can use the `page-template-hero-sticky-nav` or another shell.
*   **Required Structure:**
    1.  **Calculator Area:** The main interactive pricing calculator provided by the CMS.
    2.  **Description 1 Area:** This area sits directly below the calculator and **must** contain the `snippet-specifications-table` component from the `05-Product-Page-Components` collection.
    3.  **Description 2 Area:** This area contains all other marketing copy and informational snippets, such as the `snippet-intro-summary`, `snippet-best-for-checklist`, and the new `snippet-pricing-examples`.


---

## 3. The Component & Template Library

This is the collection of all available, ready-to-use building blocks.

### The Main Page Template (The "Shell")

This is the primary template to use as the foundation for almost all new content pages. It contains the hero, sticky navigation, and all necessary CSS.

- **[011-Hero-Sticky-Nav](./011-Hero-Sticky-Nav/)** - Click to view the template and its specific documentation.

### Snippet Collections (The "Parts")

These are libraries of smaller, reusable HTML blocks designed to be placed inside the main shell template.

- **[01-FAQ-Accordion](./01-FAQ-Accordion/)** - Contains a simple, accessible FAQ component.
- **[04-FAQ-with-Infographic](./04-FAQ-with-Infographic/)** - A two-column component that pairs an infographic with an accordion.
- **[03-Pillar-Page-Snippets](./03-Pillar-Page-Snippets/)** - A rich collection of advanced content blocks (comparison tables, feature cards, CTAs, etc.) for building detailed informational pages.

---

## 4. Live Demonstrations

This folder contains live "showroom" pages that demonstrate how various styles and components from the `STYLE_GUIDE.md` work in practice. These are for reference only and are not reusable components.

- **[\_demonstrations](./_demonstrations/)** - Click to view the available demo pages.

---

## 5. How to Use This Library

The primary workflow for this library is to use the **"Master Prompt"** to instruct an AI to assemble a new page. The prompt forces the AI to read the core system documents and use the pre-approved components, ensuring a consistent and high-quality result.
