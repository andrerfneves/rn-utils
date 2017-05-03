import { getDeviceHeight, getDeviceWidth } from './lib/dimensions';
import {
  addOrientationListener,
  getOrientation,
  isLandscape,
  lockLandscape,
  lockPortrait,
  unlockOrientations,
} from './lib/orientation';
import TextHelpers from './text';

export {
  // Orientation
  addOrientationListener,
  getOrientation,
  isLandscape,
  lockLandscape,
  lockPortrait,
  unlockOrientations,

  // Dimensions
  getDeviceHeight,
  getDeviceWidth,

  // Text
  TextHelpers
};
