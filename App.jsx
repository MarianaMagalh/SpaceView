import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './telas/Login'
import { Cadastro } from './telas/Cadastro'
import { Perfil } from './telas/Perfil'
import {Configuracoes } from './telas/Configuracoes'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Configuracoes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garantir que ocupe a tela inteira
    backgroundColor: '#D7E5FF',
  },
});
