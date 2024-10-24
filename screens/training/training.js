import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";

const colors = {
  background: "#f0f0f0",
  textForeground: "#000",
  mutedForeground: "#6c757d",
  cardBackground: "#fff",
  primary: "#ED5359", // Cor dos botões e marcadores de treino
};

export const Training = () => {
  const [selectedDate, setSelectedDate] = useState("");

  // Dados fictícios para os treinos
  const treinos = {
    "2024-10-07": "Deadlift 12'\n10 Burpees\nToes-To-Bar\nRun 2Km",
    "2024-10-10": "Squat 3x12\nPush-Ups 3x15\nPlank 1 min",
  };

  // Marcação dos dias de treino
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
      <StatusBar
        animated={true}
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.header}>
        <Text style={styles.textHeader}>Treino</Text>
      </View>
      <ScrollView style={styles.containerScroll}>
        <Calendar
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
        <View style={styles.details}>
          <Text style={styles.title}>Treino do dia:</Text>
          <Text style={styles.treino}>
            {treinos[selectedDate] || "Nenhum treino para este dia"}
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gerenciar o treino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Visualizar o treino</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: "#2B2B2B",
    borderBottomWidth: 3,
    borderColor: "#ED5359",
    padding: 20,
  },
  textHeader: {
      color: "#FFFFFF",
      paddingTop: 20,
      alignSelf: "flex-start",
      fontSize: 30,
      fontWeight: "700",
  },
  containerScroll: {
    backgroundColor: colors.background,
  },
  details: {
    margin: 20,
    padding: 10,
    paddingBottom: 60,
    backgroundColor: colors.cardBackground,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.textForeground,
  },
  treino: {
    fontSize: 16,
    color: colors.textForeground,
  },
  buttons: {
    marginHorizontal: 17,
    flexDirection: "row",
    justifyContent: "center", // Centraliza os botões horizontalmente
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20, // Bordas arredondadas
    marginHorizontal: 10, // Espaçamento entre os botões
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Training;
