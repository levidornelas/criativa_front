import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MapPage() {
  return (
      <View style={styles.container}>
        <Text>Página de perfil</Text>
        <Image
          source={require('../../assets/blacklogo.png')}
          style={styles.logoStyle}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
});
