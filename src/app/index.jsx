import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.wrapper}>
      {/* Imagem de Fundo */}
      <ImageBackground
        source={require('../../assets/criativa_bg.png')} // Caminho da sua imagem de fundo
        style={styles.background} 
      >
        {/* Logo */}
      </ImageBackground>

      {/* Container de Login */}
      <View style={styles.container}>
        <Image source={require('../../assets/logo_top.png')} style={styles.mainlogo} />
        <Image source={require('../../assets/logo_bottom.png')} style={styles.logo} />
        
        {/* Campo de Email ou Telefone */}
        <TextInput
          style={styles.input}
          placeholder="Email ou Número de Telefone"
          keyboardType="email-address"
        />

        {/* Campo de Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
          />
          <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
        </View>

        {/* Link Esqueceu a Senha */}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Botão Entrar */}
        <Link href={'/home'} asChild>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>
        </Link>

    
        {/* Link para Entrar como Convidado */}
        <Link href={'/home'} asChild>
        <TouchableOpacity>
          <Text style={styles.guestText}>Entrar como Convidado</Text>
        </TouchableOpacity>
        </Link>
        {/* Linha separadora */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Ou</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Botões de Login com Google e Facebook */}
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity>
            <Image source={require('../../assets/google_logo.png')} style={styles.socialIcon1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/logo.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAEBDD', // Cor de fundo
  },
  background: {
    width: '100%',
    height: 250, // Reduzindo a altura da imagem de fundo
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 30
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF6E5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
  forgotPasswordText: {
    color: '#FF914D',
    marginVertical: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF914D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guestText: {
    color: '#FF914D',
    textAlign: 'center',
    marginVertical: 10,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 15,
    color: '#555',
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  socialIcon1: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 50,
    height: 40, // Alinhando o tamanho com socialIcon1
    marginHorizontal: 5,
  },
});
