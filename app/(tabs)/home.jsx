import { View, Text, StyleSheet, Image } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Página inicial</Text>
            <Image
            source={require('../../assets/blacklogo.png')}
            style={styles.logoStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
  },
  logoStyle: {
      position: 'absolute',
      top: 50,
      right: 10,
  },
})