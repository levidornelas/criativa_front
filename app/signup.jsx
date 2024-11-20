import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { handleSignUp } from './functions/signup';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../assets/criativa_bg.png')}
        style={styles.background}
      ></ImageBackground>

      <View style={styles.container}>
        <Text style={styles.title}>Crie a sua conta! </Text>
        <Image source={require('../assets/logo_top.png')} style={styles.mainlogo} />
        <Image source={require('../assets/logo_bottom.png')} style={styles.mainlogo} />
  

        {/* Campo de Nome */}
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        {/* Campo de E-mail */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        {/* Campo de Senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Botão Criar Conta */}
        <TouchableOpacity 
          style={styles.signUpButton} 
          onPress={() => handleSignUp(email, password, router)}>
          <Text style={styles.signUpButtonText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    top: 70,
    fontSize: 35,
    color: 'orange'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#FAEBDD',
  },
  background: {
    width: '100%',
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF6E5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF914D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainlogo: {
    bottom: 100
  }
});
