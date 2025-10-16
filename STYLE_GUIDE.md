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
                                                                                        
                                                                                                                                                         |                                                                                        |                                                                            | Component / Effect                                  | Context                 | Preview                                                                               | Description                                                                                               | Code - how to use |                                                                                                                                                        
| :---                                                 | :---                  | :---                                                                                   | :---                                                                                                       | :---                                                                                                                                                                                                                                                                            |
| white fonts on dark background with or without image | on hero section       | ![On-Dark Preview](./_assets/style-guide-images/hero-block-on-dark-readable-width.jpg) | produces 'h1' and 'p' in white ovr hero section or similar                                                 | <div   class="hero-block on-dark readable-width"   style="     --hero-bg-image: url('https://d3...);                                                                                                                                                                            |
| Red button animate on top of dark hero section       | on top of hero        | ![red-button](./_assets/style-guide-images/custom-red-button-animate-pulse.gif)        | the animate effect not visible                                                                             | a href="#" class="custom-red-button animate-pulse" style="margin-top: 20px"                                                                                                                                                                                                     |
| White card with blue outline                         | message block         | ![card](./_assets/style-guide-images/promobox-is-featured.jpg)                         | The 'promobox .is-featured' class adds a prominent border and shadow to draw attention.                    | div class="promoBox is-featured" style="text-align: center"                                                                                                                                                                                                                     |
| Blue button on white with PULSE                      | CALL attention button | ![card](./_assets/style-guide-images/custom-blue-button-animate-pulse.gif)             | blue button pulses with breathing animation on white background                                            | div class="promoBox is-featured" style="text-align: center"                                                                                                                                                                                                                     |
| Readable Width: Improvement of reading               | inside a dark block   | ![card](./_assets/style-guide-images/readable-width.jpg)                               | By adding the '.readable-width'class, we ensure the lines don't stretch across the entire screen           | div class="dark-background-block on-dark readable-width"                                                                                                                                                                                                                        |
| Table on black background                            | inside dark class     | ![card](./_assets/style-guide-images/table-black-bkgd-white-fonts.jpg)                 | to get white fonts on black background generated y the class "dark-background�" you need style color white | &lt;div class=&quot;dark-background-block on-dark&quot;&gt; &nbsp;&nbsp;&lt;table class=&quot;table table-bordered&quot; style=&quot;color: white&quot;&gt;                                                                                                                     |
| Lift blue nested box on top of gay                   | nesting- Lift-hover   | ![card](./_assets/style-guide-images/blue-bx-nested-gray-hover-lift.gif)               | blue hover-lift card inside of promoBox                                                                    | &lt;div class=&quot;blue-background-block on-dark hover-lift&quot;&gt;&lt;div class=&quot;blue-background-block on-dark hover-lift&quot;&gt;                                                                                                                                    |
| Blue Red Green buttons and hover                     | hover colored buttons | ![card](./_assets/style-guide-images/blue-red-green-buttons.gif)                       | 3 colors of buttons are defined with the hover features                                                    | &lt;a href=&quot;#&quot; class=&quot;custom-blue-button&quot;&gt;Blue Button&lt;/a&gt;&nbsp; &lt;a href=&quot;#&quot;class=&quot;custom-red-button&quot;&gt;Red Button&lt;/a&gt;&nbsp; &lt;a href=&quot;#&quot; class=&quot;custom-green-button&quot;&gt;Green Button&lt;/a&gt; |
| Green Button Nested on PromoBox                      | Nest - Green Btn      | ![card](./_assets/style-guide-images/green-btn-neste-on-promobox-hover.gif)            | a green button on a light gray block (promobox)                                                            | &lt;div class=&quot;promoBox&quot; style=&quot;padding: 25px&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;custom-green-button&quot;&gt;                                                                                                                                        |
| class= "alert-link" - white                          | on white background   | ![card](./_assets/style-guide-images/alert-link-on-white.jpg)                          | this what a link under the class alert-link looks like                                                     | &lt;div class="blue-background-block on-dark"&gt; &lt;a href="#" class="alert-link"&gt;Alert Link&lt;/a&gt; will be a high-contrast light blue. &lt;/div&gt;                                                                                                                    |
| class= "alert-link" - blue                           | on blue background    | ![card](./_assets/style-guide-images/alert-link-on-blue.jpg)                           | the alert link looks different under white or dark background                                              | &lt;a href="#" class="alert-link"&gt;Alert Link&lt;/a&gt;                                                                                                                                                                                                                       |
