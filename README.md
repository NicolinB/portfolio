# nicolin@dev — Portfolio

Personal portfolio site with a terminal / CLI theme.
Built with vanilla HTML, CSS and JavaScript — no frameworks, no dependencies.

🔗 **Live:** [nicolinb.github.io/portfolio](https://nicolinb.github.io/portfolio/)

## Structure

```
portfolio/
├── index.html      # Single-page app with anchor sections
├── css/style.css   # All styles — variables, components, responsive
├── js/main.js      # Terminal animation, EN/RO toggle, interactions
└── assets/         # Images (future use)
```

## Sections

- **Hero** — animated terminal typing sequence
- **Projects** — Web, Python, C, FPGA/Quartus categories
- **About** — skills, tools, status
- **Contact** — email and GitHub

## Customize

### Colors
All colors are CSS variables in `:root {}` inside `style.css`:
```css
--green: #00ff41;   /* primary / Python */
--cyan:  #00d4ff;   /* Web */
--amber: #ffb000;   /* C / Systems */
--coral: #ff6b6b;   /* FPGA */
```

### Terminal animation
Edit the `TRANSLATIONS.en.terminal` and `TRANSLATIONS.ro.terminal` arrays in `js/main.js`.

### Language toggle
All UI strings are in the `TRANSLATIONS` object in `js/main.js`. Both `en` and `ro` keys must be present.

## Deploy

Hosted on **GitHub Pages** from the `main` branch, root `/`.
Any push to `main` triggers an automatic rebuild.
