import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native";
import { colors } from "../../../styles/colors";

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
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
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


export default Training;
