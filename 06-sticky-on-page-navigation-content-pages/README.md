# Sticky On-Page Navigation Component

## Component ID: `06-sticky-on-page-navigation-content-pages`

A fully-functional sticky navigation bar that remains fixed at the top of the page as users scroll. Features automatic section highlighting based on scroll position and smooth scrolling to sections.

---

## ⚠️ CRITICAL REQUIREMENTS

**Your page sections MUST use `<section>` tags with `id` attributes for auto-highlighting to work:**

```html
<!-- ✅ CORRECT - Auto-highlighting will work -->
<section id="overview">
  <h2>Overview</h2>
  <p>Content...</p>
</section>

<!-- ❌ INCORRECT - Auto-highlighting will NOT work -->
<div id="overview">
  <h2>Overview</h2>
  <p>Content...</p>
</div>
```

**Why:** The JavaScript specifically targets `$('section[id]')` for scroll detection. Using `<div>` tags will prevent the automatic highlighting from functioning.

---

## Features

✅ **Sticky positioning** - Stays at top of viewport while scrolling  
✅ **Auto-active highlighting** - Automatically highlights current section as you scroll  
✅ **Smooth scrolling** - Animated scroll to target sections  
✅ **Mobile responsive** - Collapses to hamburger menu on small screens  
✅ **Design system compliant** - Uses ColorCopiesUSA color palette and `.on-dark` styling  
✅ **Easy to customize** - Simple link structure, well-documented code

---

## Dependencies

- **Bootstrap 4.6** (Required)
- **jQuery 3.5.1** (Required)
- **Global CSS Styles** (Must include `.blue-background-block` and `.on-dark` classes)

---

## Page Structure

This component should be placed in a specific location within your page structure:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    <!-- Site-wide header (fixed, z-index: 1100+) -->
    <header class="site-header">
      <nav>Main site navigation...</nav>
    </header>

    <!-- Breadcrumbs (if any) -->
    <nav class="breadcrumbs">...</nav>

    <!-- Hero/Title section -->
    <section class="hero">
      <h1>Page Title</h1>
      <p>Page subtitle or description</p>
    </section>

    <!-- ⭐ STICKY ON-PAGE NAV GOES HERE ⭐ -->
    <div class="blue-background-block on-dark sticky-top" style="top: 55px;">
      <!-- Component code... -->
    </div>

    <!-- Main content with sections -->
    <main>
      <section id="section-1">
        <h2>First Section</h2>
        <p>Content...</p>
      </section>

      <section id="section-2">
        <h2>Second Section</h2>
        <p>Content...</p>
      </section>

      <!-- More sections... -->
    </main>

    <footer>...</footer>
  </body>
</html>
```

---

## Quick Start

### 1. Add the Component HTML

Place this component **after your hero/header section** and **before your main content**:

```html
<div
  class="blue-background-block on-dark sticky-top"
  style="top: 55px; z-index: 1000; margin-top: 20px; padding: 0.25rem 0 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.2);"
>
  <div class="container">
    <nav class="navbar navbar-expand-lg p-0">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#stickyNav"
        style="border-color: rgba(255,255,255,0.3);"
      >
        <span
          class="navbar-toggler-icon"
          style="background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.8%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');"
        ></span>
      </button>
      <div class="collapse navbar-collapse" id="stickyNav">
        <div style="padding: 0.4rem 1rem;" class="w-100">
          <nav
            style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center;"
          >
            <a
              href="#section-1"
              style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
              >Section 1</a
            >
            <a
              href="#section-2"
              style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
              >Section 2</a
            >
            <a
              href="#section-3"
              style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
              >Section 3</a
            >
          </nav>
        </div>
      </div>
    </nav>
  </div>
</div>
```

### 2. Add the CSS (in `<style>` tag or external stylesheet)

```css
/* ================================================================= */
/* STICKY ON-PAGE NAVIGATION STYLES                                  */
/* ================================================================= */

/* Navigation Links in Blue Background Block - Per Style Guide */
.blue-background-block.on-dark a {
  color: #87cefa !important;
  text-decoration: underline !important;
  transition: all 0.3s ease;
}

.blue-background-block.on-dark a:hover {
  color: #ffffff !important;
  text-decoration: underline !important;
  background-color: rgba(255, 255, 255, 0.1);
}

/* Active state highlighting for current section */
.blue-background-block.on-dark a.active {
  background-color: #d01e25 !important;
  color: #ffffff !important;
  font-weight: 600;
  text-decoration: none !important;
}

/* Ensure sticky positioning works properly */
.blue-background-block.sticky-top {
  position: sticky;
  top: 0;
}

/* Mobile responsive adjustments */
@media (max-width: 991px) {
  .blue-background-block.on-dark nav {
    flex-direction: column;
    align-items: stretch;
  }

  .blue-background-block.on-dark nav a {
    text-align: center;
    padding: 0.75rem 1rem !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .blue-background-block.on-dark nav a:last-child {
    border-bottom: none;
  }
}
```

### 3. Add the JavaScript (before closing `</body>` tag)

```javascript
<script>
$(document).ready(function(){
    // Smooth scrolling
    $('.blue-background-block.on-dark a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('.blue-background-block.on-dark a').removeClass('active');
            $(this).addClass('active');
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 120
            }, 800);
        }
    });

    // Auto-active on scroll
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        var foundActive = false;

        $('section[id]').each(function(i) {
            var sectionTop = $(this).offset().top - 150;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var sectionId = $(this).attr('id');

            if (scrollDistance >= sectionTop && scrollDistance < sectionBottom && !foundActive) {
                $('.blue-background-block.on-dark a').removeClass('active');
                $('.blue-background-block.on-dark a[href="#' + sectionId + '"]').addClass('active');
                foundActive = true;
            }
        });
    });

    $(window).trigger('scroll');
});
</script>
```

---

## Customization Guide

### Adjust Position Below Site Header

If you have a site-wide navigation menu, adjust the `top` value to prevent overlap:

```html
<!-- For sites with fixed header ~55px tall (RECOMMENDED for ColorCopiesUSA) -->
<div class="blue-background-block on-dark sticky-top" style="top: 55px; ...">
  <!-- For sites with taller headers (~80px) -->
  <div class="blue-background-block on-dark sticky-top" style="top: 80px; ...">
    <!-- For sites with very tall headers (~100px) -->
    <div
      class="blue-background-block on-dark sticky-top"
      style="top: 100px; ..."
    >
      <!-- For sites without fixed headers -->
      <div
        class="blue-background-block on-dark sticky-top"
        style="top: 0; ..."
      ></div>
    </div>
  </div>
</div>
```

**How to determine the right value:**

1. Measure your site header height (use browser DevTools)
2. Add 5-10px buffer for visual spacing
3. Example: 50px header + 5px buffer = `top: 55px;`

### Change Navigation Links

Update the `href` and text to match your page sections:

```html
<!-- BEFORE (Generic) -->
<a
  href="#section-1"
  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
  >Section 1</a
>

<!-- AFTER (Customized) -->
<a
  href="#overview"
  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
  >Overview</a
>
<a
  href="#features"
  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
  >Features</a
>
<a
  href="#pricing"
  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
  >Pricing</a
>
```

### Ensure Page Sections Have IDs

Each section you want to link to must have an `id` attribute:

```html
<section id="overview">
  <h2>Overview</h2>
  <p>Content here...</p>
</section>

<section id="features">
  <h2>Features</h2>
  <p>Content here...</p>
</section>

<section id="pricing">
  <h2>Pricing</h2>
  <p>Content here...</p>
</section>
```

### Understanding Scroll Offsets

The component uses TWO offset values that work together:

#### 1. Smooth Scroll Offset (`-120px`)

```javascript
scrollTop: target.offset().top - 120;
```

- **Purpose:** Controls where the page scrolls TO when clicking a link
- **Formula:** `sticky nav height + top position + small buffer`
- **Example:** If your sticky nav is at `top: 55px` and is `50px` tall, use `-120`
- **When to adjust:** If clicking links scrolls too far or not far enough

#### 2. Section Detection Offset (`-150px`)

```javascript
var sectionTop = $(this).offset().top - 150;
```

- **Purpose:** Controls when a section is considered "in view" for highlighting
- **Rule:** Should be slightly MORE than smooth scroll offset (about 30px more)
- **Why:** Makes highlighting feel more natural and responsive
- **Recommended relationship:** Detection offset = Scroll offset + 30px

**Adjustment Examples:**

```javascript
// For shorter sticky nav (40px tall at top: 40px)
scrollTop: target.offset().top - 90; // Scroll offset
var sectionTop = $(this).offset().top - 120; // Detection offset

// For taller sticky nav (60px tall at top: 60px)
scrollTop: target.offset().top - 130; // Scroll offset
var sectionTop = $(this).offset().top - 160; // Detection offset

// For sticky nav far from top (at top: 100px)
scrollTop: target.offset().top - 160; // Scroll offset
var sectionTop = $(this).offset().top - 190; // Detection offset
```

---

## z-index Layer Strategy

The component uses z-index layering to ensure proper stacking:

```html
<div class="... sticky-top" style="... z-index: 1000; ..."></div>
```

### Recommended z-index Hierarchy

| Element                 | z-index | Purpose                          |
| ----------------------- | ------- | -------------------------------- |
| **Site Header**         | 1100+   | Main navigation always on top    |
| **Sticky Tutorial Nav** | 1000    | Below site header, above content |
| **Regular Content**     | auto    | Standard page flow               |
| **Modals/Overlays**     | 1500+   | Above everything when active     |

**If you experience layering issues:**

```html
<!-- Site header should be higher -->
<header class="site-header" style="z-index: 1100;">...</header>

<!-- Sticky nav below it -->
<div class="blue-background-block ... sticky-top" style="z-index: 1000;">
  ...
</div>

<!-- Content uses default z-index -->
<main>...</main>
```

---

## Color Scheme

Colors are automatically applied via the design system:

| State | Color Name | Hex Code | CSS Class/Property |
| --- | --- | --- | --- |
| **Background** | Corporate Blue | `#1c3481` | `.blue-background-block` |
| **Default Link** | Light Blue | `#87cefa` | `.on-dark a` |
| **Link Hover** | White | `#ffffff` | `.on-dark a:hover` |
| **Link Hover Background** | White 10% opacity | `rgba(255,255,255,0.1)` | `.on-dark a:hover` |
| **Active Link Background** | Corporate Red | `#d01e25` | `.on-dark a.active` |
| **Active Link Text** | White | `#ffffff` | `.on-dark a.active` |

**Design System Integration:**

- Colors are defined in global CSS stylesheet
- Component inherits from `.blue-background-block` and `.on-dark` classes
- No color customization needed - follows brand automatically

---

## Mobile Behavior

### Menu Stays Open After Clicking

**By design**, the mobile menu remains open after clicking a link. This allows users to quickly navigate between multiple sections without reopening the menu each time.

**To add auto-collapse** (if desired for your specific use case):

```javascript
// Add this inside the smooth scrolling function, after the animate() call
$("html, body")
  .stop()
  .animate(
    {
      scrollTop: target.offset().top - 120,
    },
    800,
    function () {
      // Auto-collapse on mobile after scroll completes
      if ($(window).width() <= 991) {
        $("#stickyNav").collapse("hide");
      }
    }
  );
```

### Mobile Responsive Breakpoint

- **Desktop mode:** Above 991px width
- **Mobile mode:** 991px and below (hamburger menu appears)

This matches Bootstrap 4.6's `navbar-expand-lg` breakpoint.

---

## Common Use Cases

### Example 1: Tutorial/Guide Page

```html
<nav
  style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center;"
>
  <a
    href="#overview"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Overview</a
  >
  <a
    href="#prerequisites"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Prerequisites</a
  >
  <a
    href="#step-1"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Step 1</a
  >
  <a
    href="#step-2"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Step 2</a
  >
  <a
    href="#step-3"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Step 3</a
  >
  <a
    href="#troubleshooting"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Troubleshooting</a
  >
  <a
    href="#faq"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >FAQ</a
  >
</nav>
```

### Example 2: Long-Form Article

```html
<nav
  style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center;"
>
  <a
    href="#introduction"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Introduction</a
  >
  <a
    href="#background"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Background</a
  >
  <a
    href="#main-content"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Main Content</a
  >
  <a
    href="#examples"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Examples</a
  >
  <a
    href="#conclusion"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Conclusion</a
  >
  <a
    href="#resources"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Resources</a
  >
</nav>
```

### Example 3: Product/Service Page

```html
<nav
  style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center;"
>
  <a
    href="#features"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Features</a
  >
  <a
    href="#specifications"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Specifications</a
  >
  <a
    href="#pricing"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Pricing</a
  >
  <a
    href="#testimonials"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Testimonials</a
  >
  <a
    href="#how-it-works"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >How It Works</a
  >
  <a
    href="#faq"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >FAQ</a
  >
  <a
    href="#contact"
    style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
    >Contact</a
  >
</nav>
```

---

## Troubleshooting

### Problem: Links Don't Highlight on Scroll

**Symptoms:** Active state not changing as you scroll through sections

**Causes & Solutions:**

1. **Using `<div>` instead of `<section>` tags**

   ```html
   <!-- ❌ WRONG - JavaScript can't detect these -->
   <div id="my-section">Content</div>

   <!-- ✅ CORRECT - JavaScript detects section[id] -->
   <section id="my-section">Content</section>
   ```

2. **Section IDs don't match navigation hrefs**

   ```html
   <!-- Navigation link -->
   <a href="#overview">Overview</a>

   <!-- Section MUST have matching id -->
   <section id="overview">...</section>
   ```

3. **Sections are too short**
   - Very short sections may not trigger highlighting
   - Ensure sections have enough content (at least 200-300px tall)

### Problem: Scroll Position is Off

**Symptoms:** Clicking a link scrolls too far down or not far enough

**Solution:** Adjust the scroll offset in JavaScript

```javascript
// Current value
scrollTop: target.offset().top - 120;

// If scrolling too far down, INCREASE the offset (more negative)
scrollTop: target.offset().top - 150;

// If not scrolling far enough, DECREASE the offset (less negative)
scrollTop: target.offset().top - 90;
```

**How to calculate correct offset:**

1. Measure your sticky nav height in browser DevTools
2. Add your `top` position value
3. Add 15-20px buffer for visual spacing
4. Example: 50px nav + 55px top + 15px buffer = `-120px`

### Problem: Active Highlighting Too Sensitive/Not Sensitive Enough

**Symptoms:** Sections highlight too early or too late while scrolling

**Solution:** Adjust the section detection offset

```javascript
// Current value
var sectionTop = $(this).offset().top - 150;

// To make highlighting happen EARLIER (more sensitive)
var sectionTop = $(this).offset().top - 100;

// To make highlighting happen LATER (less sensitive)
var sectionTop = $(this).offset().top - 200;
```

**Rule of thumb:** Detection offset should be 20-40px MORE than your scroll offset

### Problem: Mobile Menu Doesn't Collapse

**Symptoms:** Hamburger menu opens but doesn't close after clicking

**Check these:**

1. **Matching IDs**

   ```html
   <!-- Button data-target MUST match collapse div id -->
   <button data-toggle="collapse" data-target="#stickyNav">
     <div class="collapse" id="stickyNav"></div>
   </button>
   ```

2. **Bootstrap JavaScript loaded**

   - Ensure Bootstrap 4.6 JS is included before closing `</body>` tag
   - jQuery must be loaded BEFORE Bootstrap

3. **jQuery version**
   - Use jQuery 3.5.1 or later
   - Older versions may have compatibility issues

### Problem: Sticky Nav Goes Behind Content

**Symptoms:** Page content scrolls over the sticky navigation

**Solution:** Adjust z-index

```html
<!-- Increase z-index value -->
<div
  class="blue-background-block ... sticky-top"
  style="... z-index: 1100; ..."
></div>
```

**Check site header z-index:** Your sticky nav z-index should be LOWER than your site header z-index

### Problem: Colors Not Applying

**Symptoms:** Navigation links are not showing correct colors

**Causes & Solutions:**

1. **Global CSS stylesheet not loaded**

   ```html
   <!-- Ensure this is in <head> -->
   <link rel="stylesheet" href="path/to/global-css-styles.css" />
   ```

2. **`.blue-background-block` class missing from global CSS**

   - Check that your global stylesheet defines `.blue-background-block`
   - Should have `background-color: #1c3481;`

3. **`.on-dark` class styles missing**

   - Check that your global stylesheet has `.on-dark` styles
   - Required for text/link color adjustments on dark backgrounds

4. **CSS specificity conflict**
   - Component styles use `!important` to override conflicts
   - If still not working, check browser DevTools for style overrides

### Problem: Sticky Nav Overlaps Site Header

**Symptoms:** On-page navigation covers main site menu

**Solution:** Increase the `top` value

```html
<!-- Current (overlapping) -->
<div style="top: 0; ...">
  <!-- Fixed (55px below top) -->
  <div style="top: 55px; ...">
    <!-- For taller headers -->
    <div style="top: 80px; ..."></div>
  </div>
</div>
```

---

## Browser Compatibility

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile Safari (iOS 14+)  
✅ Chrome Mobile (Android 10+)

**Note:** Internet Explorer 11 is NOT supported (requires CSS `position: sticky` and modern JavaScript)

---

## Performance Considerations

### Scroll Event Optimization

The scroll event listener runs on every scroll, so it's optimized for performance:

```javascript
$(window).scroll(function () {
  var foundActive = false; // Stops checking after first match

  $("section[id]").each(function (i) {
    // Only continues if no active section found yet
    if (
      scrollDistance >= sectionTop &&
      scrollDistance < sectionBottom &&
      !foundActive
    ) {
      // ... highlight logic
      foundActive = true; // Prevents unnecessary checks
    }
  });
});
```

**Best practices:**

- Component stops checking sections once it finds the active one
- Fewer sections = better performance (keep under 15 sections if possible)
- Use descriptive section IDs for better code readability

---

## Accessibility

### Keyboard Navigation

- **Tab key:** Navigate through links
- **Enter/Space:** Activate focused link (triggers smooth scroll)
- **Escape:** Close mobile menu (standard Bootstrap behavior)

### Screen Readers

```html
<!-- Mobile toggle has proper aria labels -->
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#stickyNav"
  aria-controls="stickyNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
></button>
```

**Recommended additions for better accessibility:**

```html
<!-- Add aria-label to nav element -->
<nav aria-label="On-page navigation" style="display: flex...">
  <a href="#section-1">Section 1</a>
  ...
</nav>

<!-- Add skip link before sticky nav -->
<a href="#main-content" class="sr-only sr-only-focusable">
  Skip to main content
</a>
```

---

## File Structure for GitHub

When adding to your `jubilant-tribble` repository:

```
jubilant-tribble/
├── 06-sticky-on-page-navigation-content-pages/
│   ├── 06-STICKY-ON-PAGE-NAVIGATION.html (the component file)
│   ├── README.md (this documentation)
│   ├── example-usage.html (optional: complete page example)
│   └── demo.gif (optional: animated demo)
```

---

## Version History

- **v1.1** (2025-11-06) - Documentation improvements

  - Added section tag requirement callout
  - Documented z-index strategy
  - Explained scroll offset relationship
  - Added page structure diagram
  - Clarified `top` value adjustment
  - Added mobile behavior explanation
  - Expanded troubleshooting section
  - Added performance and accessibility notes

- **v1.0** (2025-11-04) - Initial release
  - Sticky positioning
  - Auto-active highlighting
  - Smooth scrolling
  - Mobile responsive
  - Design system colors

---

## Credits

Component developed for ColorCopiesUSA.com design system  
Part of the Jubilant Tribble component library  
Bootstrap 4.6 | jQuery 3.5.1

---

## Support

For questions or issues with this component:

1. **Check the Troubleshooting section** above for common issues
2. **Review the STYLE_GUIDE.md** for color and class definitions
3. **Verify all dependencies** are properly loaded:
   - Bootstrap 4.6 CSS and JS
   - jQuery 3.5.1
   - Global CSS stylesheet with `.blue-background-block` and `.on-dark`
4. **Check browser console** for JavaScript errors
5. **Use browser DevTools** to inspect element positioning and z-index

---

## Quick Checklist

Before deploying this component, verify:

- [ ] Bootstrap 4.6 CSS loaded
- [ ] Bootstrap 4.6 JS loaded
- [ ] jQuery 3.5.1 loaded
- [ ] Global CSS stylesheet loaded (with `.blue-background-block` and `.on-dark`)
- [ ] Component HTML added after hero section
- [ ] Component CSS added to stylesheet or `<style>` tag
- [ ] Component JavaScript added before closing `</body>` tag
- [ ] Navigation links updated to match your page sections
- [ ] All page sections use `<section id="...">` tags (not `<div>`)
- [ ] Section IDs match navigation hrefs exactly
- [ ] `top` value adjusted for your site header height
- [ ] Scroll offsets adjusted if needed (-120 and -150)
- [ ] Tested on mobile (hamburger menu works)
- [ ] Tested smooth scrolling (clicks navigate correctly)
- [ ] Tested auto-highlighting (scrolling updates active state)
- [ ] z-index doesn't conflict with other sticky elements

---

## License

Part of the Jubilant Tribble component library for ColorCopiesUSA.com

---

## Complete Implementation Example

Here's a full working example showing how everything fits together:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tutorial Page with Sticky Navigation</title>

    <!-- Bootstrap 4.6 CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    />

    <!-- Font Awesome (optional) -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <!-- Global CSS Styles (REQUIRED - must include .blue-background-block and .on-dark) -->
    <link
      rel="stylesheet"
      href="https://raw.githubusercontent.com/Gara2025/jubilant-tribble/main/036-7-UPLD-GLOBAL-CSS-STYLES-2025-09-29--04-49PM.css"
    />

    <style>
      /* ================================================================= */
      /* STICKY ON-PAGE NAVIGATION STYLES                                  */
      /* ================================================================= */

      .blue-background-block.on-dark a {
        color: #87cefa !important;
        text-decoration: underline !important;
        transition: all 0.3s ease;
      }

      .blue-background-block.on-dark a:hover {
        color: #ffffff !important;
        text-decoration: underline !important;
        background-color: rgba(255, 255, 255, 0.1);
      }

      .blue-background-block.on-dark a.active {
        background-color: #d01e25 !important;
        color: #ffffff !important;
        font-weight: 600;
        text-decoration: none !important;
      }

      .blue-background-block.sticky-top {
        position: sticky;
        top: 0;
      }

      @media (max-width: 991px) {
        .blue-background-block.on-dark nav {
          flex-direction: column;
          align-items: stretch;
        }

        .blue-background-block.on-dark nav a {
          text-align: center;
          padding: 0.75rem 1rem !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blue-background-block.on-dark nav a:last-child {
          border-bottom: none;
        }
      }

      /* Demo page styles */
      .hero-section {
        background: linear-gradient(135deg, #1c3481 0%, #2a4a9f 100%);
        padding: 4rem 0;
        color: white;
        text-align: center;
      }

      section {
        padding: 3rem 0;
        min-height: 400px;
      }
    </style>
  </head>
  <body>
    <!-- Site Header (Optional - adjust sticky nav 'top' value to match this height) -->
    <header
      class="bg-dark text-white py-3"
      style="position: sticky; top: 0; z-index: 1100;"
    >
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="mb-0">ColorCopiesUSA</h3>
          <nav>
            <a href="#" class="text-white mx-2">Home</a>
            <a href="#" class="text-white mx-2">Products</a>
            <a href="#" class="text-white mx-2">Resources</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Breadcrumbs (Optional) -->
    <nav aria-label="breadcrumb" class="bg-light">
      <div class="container">
        <ol class="breadcrumb bg-transparent mb-0 py-2">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Tutorials</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Full Bleed Setup
          </li>
        </ol>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="display-4 font-weight-bold">Tutorial: Full Bleed Setup</h1>
        <p class="lead">Learn how to create professional print-ready files</p>
      </div>
    </section>

    <!-- ⭐ STICKY ON-PAGE NAVIGATION COMPONENT ⭐ -->
    <div
      class="blue-background-block on-dark sticky-top"
      style="top: 55px; z-index: 1000; margin-top: 20px; padding: 0.25rem 0 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.2);"
    >
      <div class="container">
        <nav class="navbar navbar-expand-lg p-0">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#stickyNav"
            style="border-color: rgba(255,255,255,0.3);"
          >
            <span
              class="navbar-toggler-icon"
              style="background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.8%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');"
            ></span>
          </button>
          <div class="collapse navbar-collapse" id="stickyNav">
            <div style="padding: 0.4rem 1rem;" class="w-100">
              <nav
                style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center;"
              >
                <a
                  href="#overview"
                  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
                  >Overview</a
                >
                <a
                  href="#step-1"
                  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
                  >Step 1</a
                >
                <a
                  href="#step-2"
                  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
                  >Step 2</a
                >
                <a
                  href="#step-3"
                  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
                  >Step 3</a
                >
                <a
                  href="#conclusion"
                  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
                  >Conclusion</a
                >
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <main class="container">
      <!-- IMPORTANT: Use <section> tags with id attributes -->
      <section id="overview">
        <h2>Overview</h2>
        <p>
          This is the overview section. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          Notice how the navigation automatically highlights as you scroll
          through sections.
        </p>
      </section>

      <section id="step-1">
        <h2>Step 1: Getting Started</h2>
        <p>
          First step content here. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          More content to make the section taller for better scroll detection...
        </p>
      </section>

      <section id="step-2">
        <h2>Step 2: Configuration</h2>
        <p>
          Second step content here. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>Keep adding content to demonstrate scrolling behavior...</p>
      </section>

      <section id="step-3">
        <h2>Step 3: Implementation</h2>
        <p>
          Third step content here. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>Final step instructions and details...</p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Summary of what was covered. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium.
        </p>
        <p>Next steps and additional resources...</p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>&copy; 2024 ColorCopiesUSA. All rights reserved.</p>
      </div>
    </footer>

    <!-- jQuery 3.5.1 (REQUIRED - must load before Bootstrap) -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

    <!-- Bootstrap 4.6 JS (REQUIRED) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Sticky Navigation JavaScript -->
    <script>
      $(document).ready(function () {
        // Smooth scrolling
        $('.blue-background-block.on-dark a[href^="#"]').on(
          "click",
          function (event) {
            var target = $(this.getAttribute("href"));

            if (target.length) {
              event.preventDefault();

              $(".blue-background-block.on-dark a").removeClass("active");
              $(this).addClass("active");

              $("html, body")
                .stop()
                .animate(
                  {
                    scrollTop: target.offset().top - 120,
                  },
                  800
                );
            }
          }
        );

        // Auto-active on scroll
        $(window).scroll(function () {
          var scrollDistance = $(window).scrollTop();
          var foundActive = false;

          $("section[id]").each(function (i) {
            var sectionTop = $(this).offset().top - 150;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var sectionId = $(this).attr("id");

            if (
              scrollDistance >= sectionTop &&
              scrollDistance < sectionBottom &&
              !foundActive
            ) {
              $(".blue-background-block.on-dark a").removeClass("active");
              $(
                '.blue-background-block.on-dark a[href="#' + sectionId + '"]'
              ).addClass("active");
              foundActive = true;
            }
          });
        });

        $(window).trigger("scroll");
      });
    </script>
  </body>
</html>
```

---

## Testing Checklist

After implementing the component, test these scenarios:

### Desktop Testing (Width > 991px)

- [ ] **Visual appearance**

  - Blue background (`#1c3481`) displays correctly
  - Links are light blue (`#87cefa`) with underlines
  - Links turn white on hover
  - Active link has red background (`#d01e25`)

- [ ] **Sticky behavior**

  - Navigation sticks to top when scrolling
  - Stays below site header (not overlapping)
  - Remains visible throughout page scroll

- [ ] **Link clicking**

  - Clicking link smoothly scrolls to section
  - Clicked link becomes active (red background)
  - Page scrolls to correct position (not too far/not too close)

- [ ] **Auto-highlighting**
  - Scrolling down highlights correct section link
  - Scrolling up updates active link appropriately
  - Only one link active at a time
  - Highlighting feels responsive (not too early/late)

### Mobile Testing (Width ≤ 991px)

- [ ] **Hamburger menu**

  - Toggle button appears
  - Clicking opens menu (slides down)
  - Menu displays vertically stacked links
  - Links have proper spacing and borders

- [ ] **Menu behavior**

  - Clicking link scrolls to section
  - Menu stays open after clicking (by design)
  - Can manually close menu with toggle button
  - Menu closes when clicking outside (Bootstrap default)

- [ ] **Responsive layout**
  - Navigation doesn't overflow screen
  - Links are readable and tappable
  - Proper spacing on small screens

### Browser Testing

Test in these browsers (minimum):

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS/iOS)
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

### JavaScript Console

- [ ] No JavaScript errors in console
- [ ] jQuery loaded successfully
- [ ] Bootstrap loaded successfully
- [ ] Scroll events firing correctly

### Edge Cases

- [ ] Very short sections (< 200px) still highlight
- [ ] Very long sections maintain highlighting throughout
- [ ] First section highlights on page load
- [ ] Last section highlights when scrolled to bottom
- [ ] Rapid scrolling doesn't break highlighting
- [ ] Clicking same link twice works correctly

---

## Common Integration Issues & Solutions

### Issue: Component styling conflicts with existing CSS

**Symptom:** Links don't look right, colors are wrong

**Solution:** Component uses `!important` to override conflicts, but if issues persist:

```css
/* Ensure component styles load AFTER your main stylesheet */
/* Add this at the END of your CSS file or in a separate <style> tag */

.blue-background-block.on-dark a {
  color: #87cefa !important;
  text-decoration: underline !important;
}

.blue-background-block.on-dark a:hover {
  color: #ffffff !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.blue-background-block.on-dark a.active {
  background-color: #d01e25 !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
```

### Issue: Smooth scrolling conflicts with other smooth scroll libraries

**Symptom:** Scrolling jerky or doesn't work

**Solution:** Disable other smooth scroll scripts or adjust this component:

```javascript
// Disable component smooth scroll if using another library
// Comment out or remove the smooth scrolling section:

/*
$('.blue-background-block.on-dark a[href^="#"]').on('click', function(event) {
    // ... smooth scroll code ...
});
*/

// Keep only the active state logic
```

### Issue: Multiple sticky elements conflict

**Symptom:** Elements overlap or positioning is wrong

**Solution:** Adjust z-index values:

```html
<!-- Site header: Highest priority -->
<header style="z-index: 1100; position: sticky; top: 0;">
  <!-- Sticky nav: Below header -->
  <div
    class="blue-background-block sticky-top"
    style="z-index: 1000; top: 55px;"
  >
    <!-- Other sticky elements -->
    <div class="sticky-sidebar" style="z-index: 900; top: 120px;"></div>
  </div>
</header>
```

### Issue: Navigation highlights wrong section

**Symptom:** Active state doesn't match scroll position

**Solution:** Adjust detection offset based on your sticky nav total height:

```javascript
// Calculate: sticky nav height + top position
// Example: 50px nav + 55px top = 105px buffer needed

var sectionTop = $(this).offset().top - 150; // Adjust this number

// Try different values:
// - Highlights too early: INCREASE the offset (e.g., -200)
// - Highlights too late: DECREASE the offset (e.g., -100)
```

---

## Advanced Customization

### Add Icons to Navigation Links

```html
<a
  href="#overview"
  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
>
  <i class="fas fa-home"></i> Overview
</a>
<a
  href="#step-1"
  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
>
  <i class="fas fa-cog"></i> Step 1
</a>
```

### Add Badge/Counter to Links

```html
<a
  href="#faq"
  style="padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.95rem;"
>
  FAQ <span class="badge badge-light ml-1">12</span>
</a>
```

### Change Animation Speed

```javascript
// Faster scrolling (400ms instead of 800ms)
$('html, body').stop().animate({
    scrollTop: target.offset().top - 120
}, 400);  // Change this number

// Slower scrolling
}, 1200);
```

### Add Easing to Scroll Animation

```javascript
// Requires jQuery UI or easing plugin
$("html, body")
  .stop()
  .animate(
    {
      scrollTop: target.offset().top - 120,
    },
    800,
    "easeInOutCubic"
  ); // Add easing type
```

### Show Section Numbers Automatically

```javascript
// Add section numbers to links on page load
$(document).ready(function () {
  $(".blue-background-block.on-dark nav a").each(function (index) {
    var currentText = $(this).text();
    $(this).text(index + 1 + ". " + currentText);
  });
});
```

### Add Progress Indicator

```css
/* Add to your stylesheet */
.blue-background-block.on-dark::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: var(--scroll-progress, 0%);
  background: #d01e25;
  transition: width 0.1s ease;
}
```

```javascript
// Add to your JavaScript
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height() - $(window).height();
  var scrollPercent = (scrollTop / docHeight) * 100;
  $(".blue-background-block.on-dark").css(
    "--scroll-progress",
    scrollPercent + "%"
  );
});
```

---

## FAQ

### Q: Can I use this with other CSS frameworks besides Bootstrap?

**A:** The component relies heavily on Bootstrap 4.6 for:

- Grid system (`.container`)
- Collapse functionality (mobile menu)
- Navbar components

You could adapt it to other frameworks, but would need to replace Bootstrap-specific classes and JavaScript.

### Q: Does this work with hash URLs from external pages?

**A:** Yes! If someone lands on your page with `yoursite.com/page#section-2`, the component will:

1. Scroll to that section on page load
2. Highlight the correct navigation link

No additional code needed - it works automatically.

### Q: Can I have multiple sticky navigations on one page?

**A:** Not recommended. Multiple sticky elements can cause:

- Confusion about which section is active
- Overlapping positioning issues
- Increased scroll event processing

If needed, adjust z-index and `top` values carefully.

### Q: How do I change the blue background to a different color?

**A:** The blue color comes from `.blue-background-block` in your global CSS. To change it:

```css
/* Override in your page-specific CSS */
.blue-background-block.custom-color {
  background-color: #your-color !important;
}
```

```html
<!-- Add 'custom-color' class to component -->
<div class="blue-background-block custom-color on-dark sticky-top" ...></div>
```

**Note:** Keep contrast in mind - `.on-dark` styles assume a dark background.

### Q: Why use `<section>` instead of `<div>` tags?

**A:** Two reasons:

1. **Semantic HTML:** `<section>` indicates a thematic grouping of content, which is correct for page sections
2. **JavaScript targeting:** The component uses `$('section[id]')` selector - it won't detect `<div>` tags

If you must use `<div>`, change the JavaScript:

```javascript
// Change this line:
$('section[id]').each(function(i) {

// To this:
$('div[id], section[id]').each(function(i) {
```

### Q: Can I make it work with Vue.js / React / Angular?

**A:** Yes, but requires adaptation:

- Remove jQuery dependencies
- Convert to component-based structure
- Use framework's scroll detection (e.g., Vue's `mounted()` hook)
- Replace Bootstrap collapse with framework equivalent

This is advanced - consider using a framework-specific navigation component instead.

### Q: Does this affect SEO?

**A:** No negative impact. In fact, it can help:

- ✅ All links use proper HTML `<a href="#...">` (crawlable)
- ✅ Improves user experience (lower bounce rate)
- ✅ Clean semantic structure with `<section>` tags
- ✅ No hidden content (everything visible to crawlers)

### Q: How do I test if it's working correctly?

1. **Open browser DevTools** (F12)
2. **Console tab:** Check for JavaScript errors
3. **Elements tab:** Inspect `.active` class on links as you scroll
4. **Network tab:** Verify jQuery and Bootstrap loaded
5. **Responsive mode:** Test mobile menu behavior

---

## Migration from v1.0 to v1.1

If you implemented v1.0, here's what changed in v1.1:

### No Breaking Changes

v1.1 is backward compatible - existing implementations continue working.

### What's New (Optional Updates)

1. **Improved documentation** - No code changes needed
2. **Better examples** - Reference material only
3. **Enhanced troubleshooting** - Help section expanded

### Recommended Updates

```html
<!-- v1.0 used: -->
<div
  class="blue-background-block on-dark sticky-top"
  style="top: 60px; z-index: 300; ..."
>
  <!-- v1.1 recommends: -->
  <div
    class="blue-background-block on-dark sticky-top"
    style="top: 55px; z-index: 1000; ..."
  ></div>
</div>
```

**Changes:**

- `top: 60px` → `top: 55px` (better alignment with standard headers)
- `z-index: 300` → `z-index: 1000` (follows documented z-index strategy)

### How to Update

1. Check your current `top` value against your site header height
2. Adjust if needed (measure header in DevTools)
3. Update z-index to 1000 for consistency
4. Test scroll behavior and positioning
5. Done!

---

## Related Components

These components work well together:

- **Hero Section** - Place before sticky nav for page titles
- **Breadcrumb Navigation** - Place above hero for page hierarchy
- **FAQ Accordion** - Use as page sections with sticky nav links
- **CTA Blocks** - Add between sections as scroll targets

---

## Support & Contribution

### Getting Help

1. Review this README thoroughly
2. Check the Troubleshooting section
3. Test in browser DevTools
4. Review the complete implementation example

### Reporting Issues

If you find a bug:

1. **Document the issue:**

   - What you expected to happen
   - What actually happened
   - Browser and version
   - Screenshots if applicable

2. **Provide code sample:**

   - Minimal reproducible example
   - Include relevant HTML, CSS, and JavaScript

3. **Check dependencies:**
   - Verify Bootstrap 4.6 is loaded
   - Verify jQuery 3.5.1 is loaded
   - Verify global CSS is loaded

### Contributing Improvements

To suggest improvements:

1. Explain the use case
2. Provide code example
3. Maintain backward compatibility
4. Follow ColorCopiesUSA design system
5. Document changes clearly

---

## Resources

- [Bootstrap 4.6 Documentation](https://getbootstrap.com/docs/4.6/)
- [jQuery Documentation](https://api.jquery.com/)
- [CSS Position: Sticky](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [ColorCopiesUSA Style Guide](link-to-style-guide)
- [Jubilant Tribble Component Library](https://github.com/Gara2025/jubilant-tribble)

---

**End of Documentation**

For questions or support, contact the ColorCopiesUSA development team.
