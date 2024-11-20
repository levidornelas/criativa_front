import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "./firebaseconfig";
import { Alert } from "react-native";

export const handleLogin = async (email, password, router, setErrorMessage) => {
  try {
    await signInWithEmailAndPassword(authentication, email, password); // Realiza o login
    Alert.alert('Seja bem vindo(a)!')
    router.push('/home'); // Redireciona para a página inicial
  } catch (error) {
    setErrorMessage('E-mail ou senha inválidos.'); // Atualiza o estado com a mensagem de erro
  }
};
