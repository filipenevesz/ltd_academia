import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native';
import Header from '../../../../components/header';
import styles from './styles'; 
import CreateCoachForm from '../../../../forms/CreateCoachForm';
import { RadioButton } from 'react-native-paper';

export default function CreateCoach() {
  const [funcionario, setFuncionario] = useState();
  
  const handleCreateCoach = (data) => {
    console.log("Dados do Funcionário:", data);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Header title="Cadastrar funcionário" />

      <ScrollView style={styles.containerBackground}>
        <Text style={styles.textContainer}>Informações do funcionário</Text>
        <CreateCoachForm onSubmit={handleCreateCoach} />
        <RadioButton.Group
          onValueChange={newValue => setFuncionario(newValue)}
          value={funcionario}
        >
          <View style={styles.radioButtonOptions}>
            <Text style={styles.radioButtonText}>Administrador</Text>
            <RadioButton value='opcao1' color="#ED5359"/>
          </View>
          <View style={styles.radioButtonOptions}>
            <Text style={styles.radioButtonText}>Funcionário</Text>
            <RadioButton value='opcao2' color="#ED5359"/>
          </View>
        </RadioButton.Group>
      </ScrollView>
    </SafeAreaView>
  );
}
