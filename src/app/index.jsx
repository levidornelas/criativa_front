import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require('../../assets/bg_login.png')} // Caminho da sua imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require('../../assets/ecobytelogo.png')} style={styles.logo} />

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
        <Link href={'/map'} asChild>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        </Link>
        {/* Botão Cadastrar-se com Gradiente */}
        <TouchableOpacity style={styles.signupButton}>
          <LinearGradient
            colors={['#FFDF2B', '#10A683']}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientBackground}
          >
            <Text style={styles.signupButtonText}>CADASTRE-SE</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Linha separadora */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Ou</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Botões de Login com Google e Outro Serviço */}
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity>
            <Image source={require('../../assets/google_logo.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logobutton}>
            <Image source={require('../../assets/logobb.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela inteira
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 170,
    height: 120,
    marginBottom: 30,
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
    color: '#1E90FF',
    marginVertical: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#00B386',
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
  signupButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  gradientBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
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
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  logobutton:{
    
  }
});
