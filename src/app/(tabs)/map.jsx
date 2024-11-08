import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Link } from 'expo-router';

export default function MapPage() {
  // Dados simulados para exibição no mapa
  const mediaItems = [
    { id: 1, title: 'Porto Digital', descricao: 'Descarte o seu eletrônico aqui!', latitude: -8.0584154, longitude: -34.8725719 },
    { id: 2, title: 'RECN PLAY', descricao: 'Descarte seu eletrônico aqui!', latitude: -8.063169, longitude: -34.871139 },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/bbot.png')}
        style={styles.logoStyle}
      />
      <MapView
        initialRegion={{
          latitude: -8.05428,
          longitude: -34.8813,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {mediaItems.map((item) => (
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}
              description={item.descricao}
              image={require('../../../assets/pin.png')}
            />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E6CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
  },
  logoStyle: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 100,
    height: 100,
    zIndex: 1,
  },
});
