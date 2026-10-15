<p align="center"><img src="assets/signature/signature-n.svg" width="104" height="72" alt="Nas"></p>

# Nas design system

Semantic colors, tactile controls, and pixel artwork for personal software.

[Live catalog](https://nas2077.github.io/nas-design-system/) / [Components](components) / [API](docs/API.md) / [Orbi](docs/ORBI.md)

## Use

```html
<link rel="stylesheet" href="kit/nas.css">
<script src="kit/orbi.js"></script>
<script src="kit/orbi-icons.js"></script>
<script src="kit/nas.js"></script>
<script>Nas.init();</script>
```

The browser kit has no framework dependency. Orbi scripts are optional when a page does not use the mascot. Inter is requested from Google Fonts.

Set `data-personality="orbit|studio|workshop"`, `data-density="comfortable|compact|airy"`, and `data-motion="quiet|expressive|off"` on the document. Dark/light themes use the same semantic roles; system reduced motion takes precedence.

## Design rules

- Six core colors. Rust marks the primary action; orange stays in pixel artwork.
- Raised buttons and switches; recessed fields; flat text.
- Inter for interface text, system monospace for code.
- Whole-number scaling for pixel art.
- The N is the author signature, Orbi is the mascot, and products use their own names and marks.

## Develop

Open `index.html`, or serve the directory with any static server. Run `node tools/verify.mjs` for syntax/API and pixel regression checks. `node tools/build.mjs` writes a distributable kit to ignored `dist/`.

Code and documentation use English. The artwork and component behavior follow Nas v2.

MIT; see [LICENSE](LICENSE). Inter retains its [SIL OFL](assets/Inter-OFL.txt).
