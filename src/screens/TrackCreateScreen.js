// import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import {Context as LocationContext} from '../context/LocationContext';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
  const {
    state: {recording},
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording],
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

// await requestPermissionsAsync();
// await watchPositionAsync(
//   {
//     accuracy: Accuracy.BestForNavigation,
//     timeInterval: 1000,
//     distanceInterval: 10,
//   },
//   location => {
//     addLocation(location);
//   },
// );
