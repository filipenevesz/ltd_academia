import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
import Header from '../../../../components/header'
import Button from '../../../../components/button'

const CreateWorking = () => {
  const [nomeTreino, setNomeTreino] = useState('');
  const [descricao, setDescricao] = useState('');
  const [aluno, setAluno] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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
          <Picker.Item label="Selecione um aluno" value="" />
          <Picker.Item label="ALUNO 01" value="aluno1" />
          <Picker.Item label="ALUNO 02" value="aluno2" />
          <Picker.Item label="ALUNO 03" value="aluno3" />
          <Picker.Item label="ALUNO 04" value="aluno4" />
        </Picker>

        <Text style={styles.label}>Selecionar dia(s) do treino</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#ED5359' },
          }}
          style={styles.calendar}
        />

      <Button title="Gerenciar o treino" onPress={() => alert("Implementar Isso")} />

      </ScrollView>
    </View>
  );
}

export default CreateWorking;