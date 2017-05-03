# React Native Utils
[![npm version](https://badge.fury.io/js/rn-utils.svg)](https://badge.fury.io/js/rn-utils)

React Native Utilities is a package born out of the incessant rewriting of utility functions while developing scalable and maintainable React Native applications. It aims to be a repository that holds trivial yet useful utility functions that are most times copied over/recreated in every new React Native project.

## Installation
```
npm install rn-utils --save
```

## Utilities

### Dimensions
|  Function | Usage | Utility |
|-----------|-------|---------|
| getDeviceHeight | `RNUtils.getDeviceHeight()` | Returns the device's current viewport height. |
| getDeviceWidth | `RNUtils.getDeviceWidth()` | Returns the device's current viewport width. |

### Orientation
*Currently the only 3rd party package with native dependecies used by React Native Utilities is the [React Native Orientation](https://github.com/yamill/react-native-orientation) module. If you wish to use any of the Orientation functionalities of React Native Utils, remember to link its native dependencies.*
```
react-native link react-native-orientation
```

|  Function | Usage | Utility |
|-----------|-------|---------|
| addOrientationListener | `RNUtils.addOrientationListener((orientation) => this.setState({ orientation }))` | Creates an event listener that triggers whenever the orientation of the device changes. |
| getOrientation | `RNUtils.getOrientation()` | Function that returns the current device's orientation. It uses `getInitialOrientation` method from [React Native Orientation](https://github.com/yamill/react-native-orientation) module to allow for Async/Initial orientation checks. Orientation will either return LANDSCAPE or PORTRAIT. |
| isLandscape | `RNUtils.isLandscape(orientation)` | Helper that returns `true` if current device orientation is Landscape. The `orientation` argument must be passed. This is usually used with the `addOrientationListener` or `getOrientation` utility functions. |
| lockLandscape | `RNUtils.lockLandscape()` | Locks the device's viewport to the Landscape mode. Disables portrait. |
| lockPortrait | `RNUtils.lockPortrait()` | Locks the device's viewport to the Portrait mode. Disables landscape. |
| unlockOrientations | `RNUtils.unlockOrientations()` | Unlocks any previous locking behavior applied by `lockPortrait` or `lockLandscape`. |

### Dimensions

|  Function | Usage | Utility |
|-----------|-------|---------|
| getFontSize | textHelpers.getFontSize(size) | Returns a font size baed on size argument |
| getLineHeight | textHelpers.getLineHeight(size) | Returns a line height based on size argument |
| getFontStyles | textHelpers.getFontStyles(size) | Returns an object with a font size and line height based on size argument |

**Example Usage**

```
import TextHelpers from 'rn-utils'

const fontSizes = {small: 8, medium: 12};
const lineHeights = {small: 12, medium: 16};

const textHelpers = new TextHelpers(fintSizes, lineHeights);

const fontStyles = {
  ...textHelpers.getFontStyles('small');
}
```

## Roadmap
The aim for this package is to introduce an ever growing list of React Native utilities that can be used when developing real-world scalable applications. With that in mind, below is the list of items I'd like to tackle next. These could be full rewrites of utilities or extracting it from current React Native projects.

- [x] Font Sizes / Line Heights
- [ ] Legacy Operating Systems
- [ ] Themes (?)
- [ ] Animations (?)

## Contributing & PRs
If you believe you have a utility that should be added to this list, please submit a Pull Request and I'll evaluate whether it should be merged. At this moment, I'd like to stay away from integrating other 3rd party libraries that have native dependencies as it creates yet another abstraction on top of those modules (harder to debug).

## Issues
If you face issues while using this package, please open an issue on the [Issues Tab](https://github.com/andrerfneves/rn-utils/issues). I'll try to resolve them as soon as possible.

----------

##### MIT LICENSED
