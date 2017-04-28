import { getDeviceHeight, getDeviceWidth } from './lib/dimensions';
import {
  addOrientationListener,
  getOrientation,
  isLandscape,
  lockLandscape,
  lockPortrait,
  unlockOrientations,
} from './lib/orientation';

export default {
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
};
