import { Dimensions } from 'react-native';

export const getDeviceHeight = () => Dimensions.get('window').height;
export const getDeviceWidth = () => Dimensions.get('window').width;
