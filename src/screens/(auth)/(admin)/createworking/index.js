import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
import Header from '../../../../components/header'
import Button from '../../../../components/button'
import api from '../../../../services/api';

const CreateWorking = () => {
  const [nomeTreino, setNomeTreino] = useState('');
  const [descricao, setDescricao] = useState('');
  const [aluno, setAluno] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = useCallback(async () => {
    try{
      const response = await api.get('/users/alunos/all')
      setAlunos(response.data);
    }
    catch(error){
      alert("Erro ao buscar alunos");	
    }
  }, []);

  React.useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header title="Criar treino" />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.label}>Nome do treino</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do treino"
          value={nomeTreino}
          onChangeText={setNomeTreino}
        />

        <Text style={styles.label}>Descrição do treino</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição do treino"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Aluno</Text>
        <Picker
          selectedValue={aluno}
          onValueChange={(itemValue) => setAluno(itemValue)}
          style={styles.picker}
        >
          {alunos.map((aluno) => (
            <Picker.Item key={aluno.cpf} label={aluno.name} value={aluno.cpf} />
          ))}
        </Picker>

        <Text style={styles.label}>Selecionar dia(s) do treino</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#ED5359' },
          }}
          style={styles.calendar}
        />

      <Button title="Gerenciar o treino" onPress={() => {
        alert('Treino criado com sucesso!');
        alert(selectedDate)
      }} />

      </ScrollView>
    </View>
  );
}

export default CreateWorking;