# Panorama CSS Support

VS Code support for Panorama's subset of CSS3, using a custom tmLanguage grammar and [CSS custom data](https://github.com/microsoft/vscode-custom-data). This extensions extends CSS files, providing coloring for Panorama specific properties and pseudo-selectors. For Panorama CSS documentation, see the [VDC page](https://developer.valvesoftware.com/wiki/CSGO_Panorama_CSS_Properties).

## Important Caveats

1. This extension removes coloring for non-Panorama properties. Make sure to **enable it per-workspace!**
3. No code completion for values introduced by Panorama, and in some cases misleading completion where Panorama differs from W3C spec.
