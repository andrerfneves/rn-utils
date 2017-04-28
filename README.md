# React Native Utils

React Native Utilities is a package born out of the incessant rewriting of utility functions while developing scalable and maintainable React Native applications. It aims to be a repository that holds trivial yet useful utility functions that are most times copied over from project to project.

## Installation
```
npm install rn-utils
```

## Utilities

### Device Dimensions
|  Function | Usage | Utility |
|-----------|-------|---------|
| getDeviceHeight | `RNUtils.getDeviceHeight()` | Returns the device's current viewport height. |
| getDeviceWidth | `RNUtils.getDeviceWidth()` | Returns the device's current viewport width. |


### Device Orientation
*Currently the only 3rd party package used by React Native Utilities is the React Native Orientation module. If you wish to use any of the Orientation functionalities of React Native Utils, remember to link its native dependencies.*
```
react-native link react-native-orientation
```

|  Function | Usage | Utility |
|-----------|-------|---------|
| addOrientationListener | `RNUtils.addOrientationListener((orientation) => this.setState({ orientation }))` | Creates an event listener that triggers whenever the orientation of the device changes. |
| getOrientation | `RNUtils.getOrientation()` | Function that returns the current device's orientation. It uses `getInitialOrientation` method from React Native Orietation module to allow for Async/Initial orientation checks. |
| isLandscape | `RNUtils.isLandscape(orientation)` | Helper that returns `true` if current device orientation is Landscape. The `orientation` argument must be passed. This is usually used with the `addOrientationListener` or `getOrientation` utility functions. |
| lockLandscape | `RNUtils.lockLandscape()` | Locks the device's viewport to the Landscape mode. Disables portrait. |
| lockPortrait | `RNUtils.lockPortrait()` | Locks the device's viewport to the Portrait mode. Disables landscape. |
| unlockOrientations | `RNUtils.unlockOrientations()` | Unlocks any previous locking behavior applied by `lockPortrait` or `lockLandscape`. |
