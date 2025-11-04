# Sticky On-Page Navigation Component

## Component ID: `16-sticky-on-page-navigation`

A fully-functional sticky navigation bar that remains fixed at the top of the page as users scroll. Features automatic section highlighting based on scroll position and smooth scrolling to sections.

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

## Quick Start

### 1. Add the Component HTML

Place this component **after your hero/header section** and **before your main content**:

```html
<div class="blue-background-block on-dark sticky-top" style="top: 0; z-index: 1000; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
    <div class="container">
        <nav class="navbar navbar-expand-lg p-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#stickyNav" style="border-color: rgba(255,255,255,0.3);">
                <span class="navbar-toggler-icon" style="background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.8%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');"></span>
            </button>
            <div class="collapse navbar-collapse" id="stickyNav">
                <div class="p-3 w-100">
                    <nav style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
                        <a href="#section-1" style="padding: 0.5rem 1rem; border-radius: 4px;">Section 1</a>
                        <a href="#section-2" style="padding: 0.5rem 1rem; border-radius: 4px;">Section 2</a>
                        <a href="#section-3" style="padding: 0.5rem 1rem; border-radius: 4px;">Section 3</a>
                    </nav>
                </div>
            </div>
        </nav>
    </div>
</div>
```

### 2. Add the CSS (in `<style>` tag or external stylesheet)

```css
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
```

### 3. Add the JavaScript (before closing `</body>` tag)

```javascript
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
```

---

## Customization Guide

### Change Navigation Links

Update the `href` and text to match your page sections:

```html
<!-- BEFORE (Generic) -->
<a href="#section-1" style="padding: 0.5rem 1rem; border-radius: 4px;">Section 1</a>

<!-- AFTER (Customized) -->
<a href="#what-is-bleed" style="padding: 0.5rem 1rem; border-radius: 4px;">What is Bleed?</a>
```

### Ensure Page Sections Have IDs

Each section you want to link to must have an `id` attribute:

```html
<section id="what-is-bleed">
    <h2>What is Bleed in Printing?</h2>
    <p>Content here...</p>
</section>

<section id="why-it-matters">
    <h2>Why Bleed Matters</h2>
    <p>Content here...</p>
</section>
```

### Adjust Scroll Offset

If your sticky nav has a different height, change the scroll offset in JavaScript:

```javascript
// Current setting: -120 pixels from top
scrollTop: target.offset().top - 120

// For taller nav, increase the offset:
scrollTop: target.offset().top - 150

// For shorter nav, decrease the offset:
scrollTop: target.offset().top - 80
```

### Change Active Section Detection Threshold

Adjust when a section is considered "active":

```javascript
// Current: 150 pixels from top
var sectionTop = $(this).offset().top - 150;

// More sensitive (activates earlier):
var sectionTop = $(this).offset().top - 100;

// Less sensitive (activates later):
var sectionTop = $(this).offset().top - 200;
```

---

## Color Scheme

Colors are automatically applied via the design system:

| State | Color | Hex Code | Applied By |
|-------|-------|----------|------------|
| **Background** | Corporate Blue | `#1c3481` | `.blue-background-block` |
| **Default Link** | Light Blue | `#87cefa` | `.on-dark a` |
| **Link Hover** | White | `#ffffff` | `.on-dark a:hover` |
| **Active Link Background** | Corporate Red | `#d01e25` | `.on-dark a.active` |
| **Active Link Text** | White | `#ffffff` | `.on-dark a.active` |

---

## Common Use Cases

### Example 1: Long-Form Article

```html
<nav>
    <a href="#introduction">Introduction</a>
    <a href="#main-content">Main Content</a>
    <a href="#examples">Examples</a>
    <a href="#conclusion">Conclusion</a>
    <a href="#faq">FAQs</a>
</nav>
```

### Example 2: Tutorial/Guide

```html
<nav>
    <a href="#overview">Overview</a>
    <a href="#step-1">Step 1</a>
    <a href="#step-2">Step 2</a>
    <a href="#step-3">Step 3</a>
    <a href="#troubleshooting">Troubleshooting</a>
</nav>
```

### Example 3: Product/Service Page

```html
<nav>
    <a href="#features">Features</a>
    <a href="#pricing">Pricing</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#how-it-works">How It Works</a>
    <a href="#contact">Contact</a>
</nav>
```

---

## Troubleshooting

### Links Don't Highlight on Scroll

**Problem:** Active state not changing as you scroll  
**Solution:** Ensure your sections use `<section id="...">` tags, not `<div>` tags

```html
<!-- ✅ CORRECT -->
<section id="my-section">...</section>

<!-- ❌ INCORRECT -->
<div id="my-section">...</div>
```

### Scroll Position is Off

**Problem:** Clicking a link scrolls too far or not far enough  
**Solution:** Adjust the `-120` offset in the JavaScript

### Mobile Menu Doesn't Collapse

**Problem:** Hamburger menu opens but doesn't close after clicking  
**Solution:** Ensure `data-target="#stickyNav"` matches the `id="stickyNav"` on the collapse div

### Colors Not Applying

**Problem:** Navigation links are not showing correct colors  
**Solution:** Ensure the global CSS stylesheet is loaded with `.blue-background-block` and `.on-dark` definitions

---

## Browser Compatibility

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile Safari (iOS 14+)  
✅ Chrome Mobile (Android 10+)  

---

## File Structure for GitHub

When adding to your `jubilant-tribble` repository:

```
jubilant-tribble/
├── 16-Sticky-On-Page-Navigation/
│   ├── 16-STICKY-ON-PAGE-NAVIGATION.html
│   ├── README.md
│   └── example-usage.html (optional)
```

---

## Version History

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
1. Check the Troubleshooting section above
2. Review the `STYLE_GUIDE.md` for color definitions
3. Ensure all dependencies are properly loaded

---

## License

Part of the Jubilant Tribble component library for ColorCopiesUSA.com

