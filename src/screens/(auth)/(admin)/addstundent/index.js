import * as React from 'react';
import { View, StatusBar, SafeAreaView, Text, ScrollView } from 'react-native';
import Header from '../../../../components/header';
import styles from './styles';

import StudentForm from '../../../../forms/StudentForm'

export function AddStudent() {

  const handleSubmit = (data) => {
    console.log("Dados do Aluno:", data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header title="Cadastro de aluno" />

      <ScrollView contentContainerStyle={styles.containerBackground}>
        <Text style={styles.textTitle}>Informações do aluno</Text>

        {/* Exibe o formulário */}
        <StudentForm onSubmit={handleSubmit} />

      </ScrollView>
    </SafeAreaView>
  );
}
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 12,
  },
  textTitle: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
  },
  containerBackground: {
    backgroundColor: '#D9D9D9',
    margin: 20,
    borderRadius: 10,
    paddingBottom: 30, // Ajuste para que o conteúdo final não fique colado ao fundo
  },
});

export { styles };