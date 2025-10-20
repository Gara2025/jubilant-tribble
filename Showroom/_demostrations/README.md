# Live Demonstration Pages

This folder contains live "showroom" pages. The purpose of these files is to provide a real-world example of how the rules and classes from our main style guide are applied.

**VERY IMPORTANT:** The files in this folder are for **reference and testing purposes only**. They are **not** designed to be used as reusable components.

These pages demonstrate the practical application of the rules defined in the main **[STYLE_GUIDE.md](../STYLE_GUIDE.md)**.

---

## Available Demonstrations

### Stress Test Page

![Stress Test Preview](./Showroom/_demostrations/01-stress-test-dark-color-background-and-nested-elements.jpg)

This page is a comprehensive "showroom" for our global CSS classes, especially those related to dark contexts and interactive effects.

*   **File Location:** [01-stress-test-dark-background-and-nested-elements.html](./01-stress-test-dark-background-and-nested-elements.html)

#### **What This File Demonstrates:**

This single page provides a working example of the following key features from our Style Guide:

*   **The `.on-dark` Context:** Shows how adding this class to a container automatically makes all headings, paragraphs, and lists turn white for readability on dark backgrounds.
*   **Special Link Styles:**
    *   Demonstrates the default "light blue" link that appears automatically inside an `.on-dark` container.
    *   Shows the use of the `.link-alert` class for a special high-contrast link.
*   **Interactive Effects:**
    *   The `.lift` class for making cards lift on hover.
    *   The `.animate-pulse` (or `aura`) class for making buttons have a glowing animation.
*   **Nested Effects:** Proves that hover effects on buttons work correctly even when they are nested inside another container that also has a hover effect (like a `.lift` card).
*   **Button Styles:** Displays the standard `.custom-red-button`, `.custom-blue-button`, and `.custom-green-button` in both light and dark contexts.
