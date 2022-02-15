# Changelog
All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2022-02-14
### Changed
- Panorama CSS/SCSS are now their own languages, which allows for better completion and validation
- Lots of bloat removed so that only Panorama supported properties/selectors/etc. are present
- Now Link to VDC and MDN (where applicable)

### Fixed
- Properties in MDN and Panorama now show the appropriate Panorama-specific descriptions and a reference to VDC

## [0.3.0] - 2021-08-21
### Added
- SCSS support for Chaos Engine

### Changed
- Shiny new readme :)

## [0.2.2] - 2021-08-10
### Changed
- New logo by False_ (@EthanV-3D)

### Fixed
- Add more missing tag names
- Add missing `transform` keyword
- Color line comments
  - These still show as errors, which cannot be remedied without defining Panorama CSS as its own language

## [0.2.1] - 2021-08-07
### Fixed
- Fixed issues with CSGO and Chaos specific panel coloring
- Added most properties to value syntax coloring (for properties like `transition-property` that accepted other properties as values)
- Fixed some Panorama values not being colored
- Proper coloring for functions such as `gradient`

## [0.2.0] - 2021-08-06
### Added
- CSGO and Chaos specific panels to tmLanguage, for proper coloring
- Some useful snippets (gradients especially)
- Add syntax fields in css custom data for usage descriptions

### Fixed
- Remedied some incorrect property descriptions

### Changed
- Lowered the verboseness of some property descriptions, as they have a reference to the VDC doc and now syntax descriptions.

## [0.1.0] - 2021-08-05
### Added
- tmLanguage grammar for syntax coloring
- CSS custom data for property, pseudo-selector, and @define completion and hover documentation
