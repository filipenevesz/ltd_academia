import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { Calendar, WeekCalendar  } from "react-native-calendars";
import { ScrollView } from "react-native";
import { colors } from "../../../styles/colors";
import styles from "./styles";
import Header from "../../../components/header";
import Button from "../../../components/button";




export default function WorkoutScreen() {
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

      <Header
        title="Treino"
      />

      <ScrollView style={styles.containerScroll}>
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
        <View style={styles.details}>
          <Text style={styles.title}>Treino do dia:</Text>
          <Text style={styles.treino}>
            {treinos[selectedDate] || "Nenhum treino para este dia"}
          </Text>
        </View>
        <View style={styles.buttons}>
 
          <Button
            title="Gerenciar o treino"
            onPress={() => alert("Implementar Isso")}
          />
          <Button
            title="Gerenciar o treino"
            onPress={() => alert("Implementar Isso")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

