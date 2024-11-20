import { authentication } from './firebaseconfig';
import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const handleSignUp = async (email, password, router) => {
  try {
    // Cria a conta do usuário no Firebase
    await createUserWithEmailAndPassword(authentication, email, password);
    // Exibe uma mensagem de sucesso
    Alert.alert('Sucesso', 'Bem vindo(a) à criativa!');
    // Redireciona para a tela inicial
    router.push('/home'); 
  } catch (error) {
    // Exibe erros específicos
    Alert.alert('Erro', error.message);
  }
};
