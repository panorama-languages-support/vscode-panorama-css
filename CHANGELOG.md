# Changelog
All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
