// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'; // Import PROVIDER_DEFAULT
// import MapboxGL from "@react-native-mapbox-gl/maps";

// MapboxGL.setAccessToken("pk.eyJ1Ijoibmh1dDIzMDYiLCJhIjoiY2xzMnd6ZnZrMGc1cDJrbDhrOTMzbW1oOSJ9.x4LaxBgDoRZU3C7_1BJ2Pw"); // Set your Mapbox access token

// const Address = () => {
//     return (
//         <View style={styles.container}>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: 37.78825,
//                     longitude: -122.4324,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 provider={PROVIDER_DEFAULT} 
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
// });

// export default Address;

import { View, Text } from 'react-native'
import React from 'react'

const Address = () => {
  return (
    <View>
      <Text>Address</Text>
    </View>
  )
}

export default Address