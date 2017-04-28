import Orientation from 'react-native-orientation';
import { LANDSCAPE, PORTRAIT } from '../constants/orientation';

export const lockPortrait = () => Orientation.lockToPortrait();
export const lockLandscape = () => Orientation.lockToLandscape();
export const unlockOrientations = () => Orientation.unlockAllOrientations();

export const isLandscape = (orientation) => LANDSCAPE === orientation.toUpperCase();

export const getOrientation = () => {
  return Orientation.getInitialOrientation((err, orientation) => {
    if (err) console.log(`Error on Orientation fetching: ${error}`); // eslint-disable-line
    if (orientation !== LANDSCAPE || orientation !== PORTRAIT) return PORTRAIT;
    return orientation;
  });
};

export const addOrientationListener = (listenerFn) => {
  return Orientation.addOrientationListener(listenerFn);
};
