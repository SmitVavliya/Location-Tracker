import {useState, useEffect} from 'react';
import RNLocation from 'react-native-location';
import Geolocation from '@react-native-community/geolocation';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    RNLocation.configure({
      distanceFilter: 10,
      interval: 1000,
    });

    const startWatching = async () => {
      try {
        subscriber = RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'fine',
          },
        }).then(granted => {
          if (granted) {
            RNLocation.subscribeToLocationUpdates(callback);
          }
        });
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

// import {useState, useEffect} from 'react';
// import Geolocation from '@react-native-community/geolocation'

// export default (shouldTrack, callback) => {
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     let subscriber;
//     RNLocation.configure({
//       distanceFilter: 10,
//       interval: 1000,
//     });

//     const startWatching = async () => {
//       try {
//         subscriber = RNLocation.requestPermission({
//           ios: 'whenInUse',
//           android: {
//             detail: 'coarse',
//           },
//         }).then(granted => {
//           if (granted) {
//             RNLocation.subscribeToLocationUpdates(callback);
//           }
//         });
//       } catch (e) {
//         setErr(e);
//       }
//     };

//     if (shouldTrack) {
//       startWatching();
//     } else {
//       if (subscriber) {
//         subscriber.remove();
//       }
//       subscriber = null;
//     }

//     return () => {
//       if (subscriber) {
//         subscriber.remove();
//       }
//     };
//   }, [shouldTrack, callback]);

//   return [err];
// };
