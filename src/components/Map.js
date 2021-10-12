import React, {useContext} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as Locationcontext} from '../context/LocationContext';

const Map = () => {
  const {
    state: {currentLocation, locations},
  } = useContext(Locationcontext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  }

  const giveLocation = () => {
    let latitude;
    let longitude;

    let {
      accuracy,
      altitude,
      altitudeAccuracy,
      speed,
      speedAccuracy,
      timestamp,
    } = currentLocation;

    if (currentLocation != null) {
      latitude = currentLocation.latitude;
      longitude = currentLocation.longitude;
    } else {
      latitude = 37.33233;
      longitude = -122.03121;
    }

    return {
      latitude,
      longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      accuracy,
      altitude,
      altitudeAccuracy,
      speed,
      speedAccuracy,
      timestamp,
    };
  };

  return (
    <MapView style={styles.map} initialRegion={giveLocation()}>
      <Circle
        center={currentLocation}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
