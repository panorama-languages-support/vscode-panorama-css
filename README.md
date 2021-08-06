# Panorama CSS Support

VS Code support for Panorama's subset of CSS3, using a custom tmLanguage grammar and [CSS custom data](https://github.com/microsoft/vscode-custom-data). For Panorama CSS documentation, see the [VDC page](https://developer.valvesoftware.com/wiki/CSGO_Panorama_CSS_Properties).

[Check out the VS Code extension!](https://marketplace.visualstudio.com/items?itemName=braemie.panorama-css)

## Important Caveats

1. This extension removes coloring for non-Panorama properties. Make sure to **enable it per-workspace!**
2. No code completion for values introduced by Panorama apart from snippets, and in some cases misleading value completion where Panorama differs from W3C spec.

## Features

- Coloring for Panorama panel names
  - CSGO and Chaos currently supported
- Code completion for Panorama properties and pseudo-selectors, but not values
- Snippets for gradient creation and other values
