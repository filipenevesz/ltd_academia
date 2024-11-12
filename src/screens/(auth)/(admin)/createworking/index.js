import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';  // Importação do Calendar
import styles from './styles';
import Header from '../../../../components/header';
import Button from '../../../../components/button';
import api from '../../../../services/api';

const CreateWorking = () => {
  const [nomeTreino, setNomeTreino] = useState('');
  const [descricao, setDescricao] = useState('');
  const [selectedAlunos, setSelectedAlunos] = useState([]);
  const [professor, setProfessor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [treinoId, setTreinoId] = useState(null);
  const [turmaId, setTurmaId] = useState(null);

  const fetchAlunos = useCallback(async () => {
    try {
      const response = await api.get('/users/alunos/all');
      setAlunos(response.data);
    } catch (error) {
      alert("Erro ao buscar alunos");
    }
  }, []);

  const fetchProfessores = useCallback(async () => {
    try {
      const response = await api.get('/users/all');
      setProfessores(response.data.filter(user => user.role === 'ADMIN' || user.role === 'TRAINER'));
    } catch (error) {
      alert("Erro ao buscar professores");
    }
  }, []);

  useEffect(() => {
    fetchAlunos();
    fetchProfessores();
  }, [fetchAlunos, fetchProfessores]);

  const createWorkout = async () => {
    const data = {
      nomeTreino,
      descricaoTreino: descricao,
    };

    console.log("Dados antes de criar o treino:", data); // Log dos dados antes de enviar

    try {
      const response = await api.post('/treinos', data);
      const createdTreinoId = response.data.id;
      setTreinoId(createdTreinoId);
      console.log("Treino criado:", response.data); // Log do treino criado
      alert("Treino criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar treino:", error.response?.data || error.message);
      alert("Erro ao criar treino");
    }
  };

  const createClass = async () => {
    const data = {
      treinoId,
      horario: selectedDate + "T00:00:00",
      trainer_Cpf : professor,
    };

    console.log("Dados antes de criar a turma:", data); // Log dos dados antes de enviar

    try {
      const response = await api.post('/turmas', data);
      const createdTurmaId = response.data.id;
      setTurmaId(createdTurmaId);
      console.log("Turma criada:", response.data); // Log da turma criada
      alert("Turma criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar turma:", error.response?.data || error.message);
      alert("Erro ao criar turma");
    }
  };

  const createTurmaAluno = async () => {
    try {
      const data = selectedAlunos.map((alunoCpf) => ({
        turmaId,
        alunoCpf: alunoCpf,
      }));
      console.log("Dados antes de associar alunos à turma:", data); // Log dos dados antes de enviar

      for (const alunoCpf of selectedAlunos) {
        const response = await api.post('/turma-alunos', {
          turmaId,
          alunoCpf: alunoCpf,
        });
        console.log("Aluno associado à turma (${turmaId} ) ", response.data); // Log de associação aluno-turma
      }
      alert("Alunos associados à turma com sucesso!");
    } catch (error) {
      console.error("Erro ao associar alunos à turma:", error.response?.data || error.message);
      alert("Erro ao associar alunos à turma");
    }
  };

  const toggleAlunoSelection = (cpf) => {
    if (selectedAlunos.includes(cpf)) {
      setSelectedAlunos(selectedAlunos.filter(alunoCpf => alunoCpf !== cpf));
    } else {
      setSelectedAlunos([...selectedAlunos, cpf]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header title="Criar treino" />
      
      {/* Substituindo ScrollView por FlatList para as seções de alunos e professores */}
      <FlatList
        data={[{ key: 'input' }]}  // A lista de um item fictício serve apenas para renderizar a tela
        renderItem={() => (
          <View>
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

            <Text style={styles.label}>Aluno(s)</Text>
            <FlatList
              data={alunos}
              keyExtractor={(item) => item.cpf}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => toggleAlunoSelection(item.cpf)}
                  style={[styles.alunoItem, selectedAlunos.includes(item.cpf) && styles.alunoItemSelected]}
                >
                  <Text style={styles.alunoText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />

            <Text style={styles.label}>Professor</Text>
            <FlatList
              data={professores}
              keyExtractor={(item) => item.cpf}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setProfessor(item.cpf)}
                  style={[styles.professorItem, professor === item.cpf && styles.professorItemSelected]}
                >
                  <Text style={styles.professorText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />

            <Text style={styles.label}>Selecionar dia(s) do treino</Text>
            <Calendar
              onDayPress={(day) => setSelectedDate(day.dateString)}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#ED5359' },
              }}
              style={styles.calendar}
            />

            <Button title="Criar Treino" onPress={createWorkout} />
            <Button title="Criar Turma" onPress={createClass} />
            <Button title="Associar Alunos à Turma" onPress={createTurmaAluno} />
          </View>
        )}
      />
    </View>
  );
};

export default CreateWorking;
