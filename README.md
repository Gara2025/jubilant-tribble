# Jubilant Tribble: A Reusable Component Library

This repository contains a complete design system for creating high-quality, consistent web pages for our CMS environment. It includes reusable HTML components, strategic documentation, and page templates.

This document is the main "welcome mat" and directory for the entire project.

---

## 1. The Core System Documents (Start Here)

Before using any component, you **must** be familiar with the three core documents that govern this entire system. They are the single source of truth for all rules, styles, and architecture.

*   ### [**`manifest.json`**](./manifest.json)
    **Purpose:** The AI's Blueprint. This is the machine-readable master list of all available components, their locations, and their placeholders.

*   ### [**`STYLE_GUIDE.md`**](./STYLE_GUIDE.md)
    **Purpose:** The Brand Rulebook. This document defines the official color palette, typography scale, and special CSS effects (like `.on-dark`, `.lift`, and `.aura`). All components are built to follow these rules.

*   ### [**`INTERNAL_LINK_INVENTORY.md`**](./INTERNAL_LINK_INVENTORY.md)
    **Purpose:** The Website's Architectural Map. This document defines our "Pillar and Cluster" SEO strategy and provides a master list of key pages for internal linking.

---

## 2. The Component & Template Library

This is the collection of all available, ready-to-use building blocks.

### The Main Page Template (The "Shell")

This is the primary template to use as the foundation for almost all new content pages. It contains the hero, sticky navigation, and all necessary CSS.

*   **[011-Hero-Sticky-Nav](./011-Hero-Sticky-Nav/)** - Click to view the template and its specific documentation.

### Snippet Collections (The "Parts")

These are libraries of smaller, reusable HTML blocks designed to be placed inside the main shell template.

*   **[01-FAQ-Accordion](./01-FAQ-Accordion/)** - Contains a simple, accessible FAQ component.
*   **[03-Pillar-Page-Snippets](./03-Pillar-Page-Snippets/)** - A rich collection of advanced content blocks (comparison tables, feature cards, CTAs, etc.) for building detailed informational pages.

---

## 3. Live Demonstrations

This folder contains live "showroom" pages that demonstrate how various styles and components from the `STYLE_GUIDE.md` work in practice. These are for reference only and are not reusable components.

*   **[_demonstrations](./_demonstrations/)** - Click to view the available demo pages.

---

## 4. How to Use This Library

The primary workflow for this library is to use the **"Master Prompt"** to instruct an AI to assemble a new page. The prompt forces the AI to read the core system documents and use the pre-approved components, ensuring a consistent and high-quality result.
