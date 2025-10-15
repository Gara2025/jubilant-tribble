# Template: Single-Page Guide with Sticky Internal Navigation

![Template Preview](Hero+TOC+FAQ/011-Hero+stickyTOC+FAQ+other-bottom-content.jpg)

This is a responsive HTML template for creating a detailed guide or feature page. It includes a hero section with a faded background image, a navigation bar that sticks to the top on desktop, and a main content area for where most of the creative activity will happen. Based on the main content, the titles will need to be provided, internal links created and reflected in the internal navigation bar and a specific call to action might need to be changed as well.

## Key Features

- ✅ **Faded Hero Image:** An eye-catching hero section with a customizable background image and color overlay.
- ✅ **Sticky Navigation:** On desktop, the navigation bar stays visible at the top as you scroll down the page.
- ✅ **Mobile-Friendly:** The design automatically adapts to smaller screens. The navigation becomes a horizontally-scrolling list with arrows, saving valuable screen space.
- ✅ **Modular Content:** You can add different types of content blocks (like FAQs, feature lists, etc.) into the main content area.

### 2. Implementation Rules
- **Do Not Modify Structure:** The class names and HTML structure...
- **Content is Variable:** You should always replace placeholder text...
- ✅ **Use Placeholder Images:** When a component requires an image and a specific one isn't provided, use the following default placeholder image. This ensures the layout is complete and the image can be easily replaced later. In case you can't provide any other image use this default image:
https://d3vmbilae16g7h.cloudfront.net/colorcopi/images/opt/products_gallery_images/business-card_1.jpg.webp?v=4324



## How to Use This Template

1.  **Start with `011-Hero+stickyTOC+FAQ+other-bottom-content.html`**: This is your main file.
2.  **Add Content**: Copy the HTML for the content blocks you want (e.g., from the `/_snippets` folder) and paste them into the main content area of 011-Hero+stickyTOC+FAQ+other-bottom-content.html. As a reference you will identify an area that reads -Additional content lives here-
3.  **Customize**: Follow the guide below to change the text, image, and links to match your needs.

---

## Customizable Parts

This table explains exactly what to change in the `011-Hero+stickyTOC+FAQ+other-bottom-content.html` file.

| What to Change | Where to Find It in the Code | How to Change It |
| :--- | :--- | :--- |
| **Hero Background Image** | The `<section>` tag with the class `wire-o-hero` | Replace the URL inside the `style="..."` attribute with your new image URL. |
| **Main Title** | The `<h1>` tag inside the hero section. | Change the text inside the `<h1>` tag. |
| **Subtitle / Paragraph**| The `<p>` tag with the class `subhead-hero`.| Change the text inside the `<p>` tag. |
| **Navigation Links** | The `<ul>` list inside the `<nav>` tag. | Edit the text and the `href="#..."` for each `<a>` tag to match your section IDs. |
| **Main Page Content** | The area below the `<nav>` tag. | This is where you will paste the HTML for your content sections, like the FAQs. |

---

## File Structure

This repository includes the template itself and a folder with reusable content ideas.


- [011-Hero+stickyTOC+FAQ+other-bottom-content.html](./ 011-Hero+stickyTOC+FAQ+other-bottom-content.html) |- The main HTML file to use.
- `011-Hero+stickyTOC+FAQ+other-bottom-content.jpg` - A screenshot showing what the template looks like.
- `README.md` - This instruction file.
- `/_snippets/` - A folder containing different content blocks you can copy and paste into your page.

### Requirements

This component is not standalone. It requires the following from the main project environment to function correctly:
- Bootstrap 4.6
- The Global Custom Styles

For details, please refer to the **main project `README.md` file**.


