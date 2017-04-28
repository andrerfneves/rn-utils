import { getDeviceHeight, getDeviceWidth } from './src/dimensions';
import {
  addOrientationListener,
  getOrientation,
  isLandscape,
  lockLandscape,
  lockPortrait,
  unlockOrientations,
} from './src/orientation';

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
