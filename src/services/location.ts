import {PermissionsAndroid, Platform} from 'react-native';

type CurrentCoords = {
  latitude: number;
  longitude: number;
};

type GeolocationModule = {
  getCurrentPosition: (
    success: (position: {
      coords: {
        latitude: number;
        longitude: number;
      };
    }) => void,
    error?: (error: {message: string}) => void,
    options?: {
      enableHighAccuracy?: boolean;
      maximumAge?: number;
      timeout?: number;
    },
  ) => void;
  requestAuthorization: () => void;
  setRNConfiguration: (config: {
    authorizationLevel: 'whenInUse';
    locationProvider: 'playServices';
    skipPermissionRequests: false;
  }) => void;
};

let geolocationModule: GeolocationModule | null = null;

function getGeolocationModule() {
  if (geolocationModule) {
    return geolocationModule;
  }

  // Lazy loading keeps Jest from failing before the native module is linked.
  const loadedModule = require('@react-native-community/geolocation')
    .default as GeolocationModule;

  loadedModule.setRNConfiguration({
    authorizationLevel: 'whenInUse',
    locationProvider: 'playServices',
    skipPermissionRequests: false,
  });

  geolocationModule = loadedModule;
  return geolocationModule;
}

export async function requestLocationPermission() {
  if (Platform.OS === 'ios') {
    getGeolocationModule().requestAuthorization();
    return true;
  }

  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location permission',
      message: 'We use your current location to auto-fill your pickup point.',
      buttonPositive: 'Allow',
      buttonNegative: 'Not now',
    },
  );

  return granted === PermissionsAndroid.RESULTS.GRANTED;
}

export async function getCurrentCoords(): Promise<CurrentCoords> {
  const hasPermission = await requestLocationPermission();

  if (!hasPermission) {
    throw new Error('Location permission denied');
  }

  return new Promise((resolve, reject) => {
    getGeolocationModule().getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        reject(new Error(error.message));
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  });
}
