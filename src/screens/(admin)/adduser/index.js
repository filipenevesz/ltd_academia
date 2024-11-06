import * as React from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import Button from '../../../components/button';
import styles from './styles'

export default function AddUser() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header title="Cadastro de usuário" />

      <View style={styles.buttons}>
        {/* Aqui o estilo extra é passado para aumentar o tamanho do botão */}
        <Button
          title="Cadastrar aluno"
          onPress={() => alert("ADICIONAR ESTA FUNCIONALIDADE")}
        />
        <Button
          title="Cadastrar funcionário"
          onPress={() => alert("ADICIONAR ESTA FUNCIONALIDADE")}
        />
      </View>
    </SafeAreaView>
  );
}