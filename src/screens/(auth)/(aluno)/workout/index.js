import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import { Calendar } from "react-native-calendars";
import { colors } from "../../../../styles/colors";
import styles from "./styles";
import Header from "../../../../components/header";
import Button from "../../../../components/button";
import Card from "../../../../components/card";

export default function WorkoutScreen() {
  const [selectedDate, setSelectedDate] = useState(""); // Data selecionada no calendário
  const [treinos, setTreinos] = useState({}); // Objeto de treinos mapeados por data
  const [turmas, setTurmas] = useState([]); // Dados das turmas
  const [exercicios, setExercicios] = useState([]); // Exercícios do treino
  const [isLoading, setIsLoading] = useState(true); // Carregando dados
  const [error, setError] = useState(null); // Mensagem de erro

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYWJyaWVsanYyMDE5QGdtYWlsLmNvbSIsImV4cCI6MTczMTA0MzIzNX0.jeZNOTmpA4NUiFpvH8gHvl_2x_2GN804LoMPdqmxGPU"; // Token de autenticação

  // Função para buscar dados das turmas
  const fetchTurmas = async () => {
    try {
      const response = await fetch('http://34.56.3.98:8081/turmas', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao carregar as turmas. Status: ${response.status}`);
      }

      const data = await response.json();
      setTurmas(data); // Ajustando para lidar com um array de turmas
    } catch (err) {
      setError(`Erro ao carregar as turmas: ${err.message}`);
    }
  };

  // Função para buscar os dados dos treinos
  const fetchExercicioTreino = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://34.56.3.98:8081/exercicio-treino', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao carregar os dados do treino. Status: ${response.status}`);
      }

      const data = await response.json();
      setIsLoading(false);

      // Mapeando os treinos pela data (ajustando para o formato correto)
      const treinosMapeados = data.reduce((acc, treino) => {
        const treinoData = treino.data ? treino.data.split('T')[0] : ''; // Garantir que existe a data
        if (treinoData) {
          acc[treinoData] = treino; // A chave será a data, e o valor será o treino
        }
        return acc;
      }, {});

      setTreinos(treinosMapeados); // Atualiza o estado com os treinos mapeados
      setExercicios(data); // Salva os exercícios também
    } catch (err) {
      setError(`Erro ao carregar os dados do treino: ${err.message}`);
      setIsLoading(false);
    }
  };

  // Chama as funções para buscar os dados ao iniciar o componente
  useEffect(() => {
    fetchTurmas(); // Carrega as turmas
  }, []);

  // Quando as turmas forem carregadas, carrega os dados do treino
  useEffect(() => {
    if (turmas.length > 0) {
      fetchExercicioTreino(); // Carrega os treinos assim que as turmas são carregadas
    }
  }, [turmas]);

  // Exibindo os dias marcados no calendário
  const markedDates = Object.keys(treinos).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: colors.primary,
      selected: true,
      selectedColor: colors.primary,
      selectedTextColor: "#fff",
    };
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <Header title="Treino" />

      <ScrollView style={styles.containerScroll} contentContainerStyle={{ paddingBottom: 20 }}>
        {isLoading && <ActivityIndicator size="large" color={colors.primary} />}

        {error && <Text style={{ color: 'red' }}>{error}</Text>}

        <Calendar
          style={styles.calender}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={markedDates}
          theme={{
            backgroundColor: colors.background,
            calendarBackground: colors.cardBackground,
            textSectionTitleColor: colors.textForeground,
            selectedDayBackgroundColor: colors.primary,
            selectedDayTextColor: "#fff",
            todayTextColor: colors.primary,
            dayTextColor: colors.textForeground,
            textDisabledColor: colors.mutedForeground,
            dotColor: colors.primary,
            selectedDotColor: "#fff",
          }}
        />

        <Card
          title={"Treino do dia"}
          description={treinos[selectedDate] ? treinos[selectedDate].descricao : "Nenhum treino para este dia"}
          onPress={() => alert("Implementar Isso")}
        />

        <View style={styles.details}>
          <Text style={styles.title}>Treino do dia:</Text>
          <Text style={styles.treino}>
            {treinos[selectedDate] ? treinos[selectedDate].descricao : "Nenhum treino para este dia"}
          </Text>
        </View>

        {/* Exibindo as turmas */}
        <View style={styles.details}>
          <Text style={styles.title}>Turmas:</Text>
          {turmas && turmas.length > 0 ? (
            turmas.map((turma, index) => (
              <Text key={index} style={styles.treino}>
                {turma.nome} - {turma.horario}
              </Text>
            ))
          ) : (
            <Text style={styles.treino}>Nenhuma turma encontrada</Text>
          )}
        </View>

        {/* Exibindo os exercícios */}
        <View style={styles.details}>
          <Text style={styles.title}>Exercícios:</Text>
          {exercicios && exercicios.length > 0 ? (
            exercicios.map((exercicio, index) => (
              <View key={index} style={styles.exercicioContainer}>
                <Text style={styles.treino}>Exercício: {exercicio.nome}</Text>
                <Text style={styles.treino}>Carga: {exercicio.carga}kg</Text>
                <Text style={styles.treino}>Repetições: {exercicio.repeticao}</Text>
                <Text style={styles.treino}>Séries: {exercicio.serie}</Text>
                <Text style={styles.treino}>Descanso: {exercicio.descanso}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.treino}>Nenhum exercício encontrado</Text>
          )}
        </View>

        <View style={styles.buttons}>
          <Button title="Gerenciar o treino" onPress={() => alert("Implementar Isso")} />
          <Button title="Gerenciar o treino" onPress={() => alert("Implementar Isso")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
