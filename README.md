# VIJAYA Odisha Website

A responsive multi-page website redesign for **VIJAYA**, an NGO based in Odisha.

## Pages

- Home
- About Us
- Objectives
- Activities
- Strength
- Projects
- Photo Gallery
- News
- Contact Us

## Project Structure

```text
vijaya_odisha_project/
├── index.html
├── about-us.html
├── objectives.html
├── activities.html
├── strength.html
├── projects.html
├── photo-gallery.html
├── news.html
├── contact.html
├── css/
│   ├── style.css          # Shared navigation/footer base styles
│   ├── site-pages.css     # Styles for all pages except gallery
│   └── gallery.css        # Photo Gallery styles (kept unchanged)
├── js/
│   ├── script.js          # Shared navigation + contact form behavior
│   └── gallery.js         # Photo Gallery interactions
└── assets/
    └── images/
        ├── 2025/
        ├── 2026/
        └── other site images
```

## Run locally

No build tool is required. Open `index.html` in a browser, or use VS Code Live Server.

## GitHub Pages

Push the complete project to GitHub and enable **GitHub Pages** from the repository settings. The site is static HTML/CSS/JavaScript and does not require a server or database.

## Important

The Photo Gallery page and its gallery-specific styling are kept as the dedicated gallery implementation. The other pages use `site-pages.css` so the complete website shares the same navy, cream and gold visual language without overwriting the gallery styling.
