import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Header from '../../../../components/header';
import styles from './styles'; 
import CreateCoachForm from '../../../../forms/CreateCoachForm';

export default function CreateCoach() {

  // Função para lidar com o envio do formulário
  const handleCreateCoach = (data) => {
    console.log("Dados do Funcionário:", data);
    // Adicione a lógica para processar os dados do funcionário
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Header title="Cadastro de funcionário" />

      <ScrollView style={styles.containerBackground}>
        <Text style={styles.textContainer}>Informações do funcionário</Text>

        {/* Componente de formulário com o handler passado como prop */}
        <CreateCoachForm onSubmit={handleCreateCoach} />
      </ScrollView>
    </SafeAreaView>
  );
}
