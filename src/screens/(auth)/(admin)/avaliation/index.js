import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../../../components/header'
import Button from '../../../../components/button'
import styles from './styles';

const FichaAvaliacao = () => {
  const [isMetricsOpen, setIsMetricsOpen] = useState(true);
  const [isIndicesOpen, setIsIndicesOpen] = useState(true);

  return (
    <View style={styles.container}>
      <Header title={'Ficha de avaliação'}/>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Seção de Métricas */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => setIsMetricsOpen(!isMetricsOpen)}>
          <Text style={styles.sectionTitle}>Métricas</Text>
          <Ionicons name={isMetricsOpen ? 'chevron-up-outline' : 'chevron-down-outline'} size={24} color="black" />
        </TouchableOpacity>
        {isMetricsOpen && (
          <View style={styles.sectionContent}>
            {["Data", "Peso", "Cintura", "Braço D.C", "Braço E.C", "Braço D", "Braço E", "Coxa D", "Coxa E", "PT. D", "PT. E"].map((placeholder, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={placeholder}
              />
            ))}
          </View>
        )}

        {/* Seção de Índices e Percentuais */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => setIsIndicesOpen(!isIndicesOpen)}>
          <Text style={styles.sectionTitle}>Índices e Percentuais</Text>
          <Ionicons name={isIndicesOpen ? 'chevron-up-outline' : 'chevron-down-outline'} size={24} color="black" />
        </TouchableOpacity>
        {isIndicesOpen && (
          <View style={styles.sectionContent}>
            {[
              "Índice de Massa Corporal - IMC",
              "Percentual de Gordura Corporal (BODY FAT)",
              "Percentual de Músculo Esquelético (MUSCLE)",
              "Metabolismo em Repouso (RM)",
              "Idade Biológica (BODY AGE)",
              "Gordura Visceral (VISCERAL FAT)"
            ].map((placeholder, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={placeholder}
              />
            ))}
            <Text style={styles.observacao}>Obs: (-) o índice está Abaixo do peso</Text>
          </View>
        )}

        {/* Botão Atualizar */}
        <Button 
        title={'Atualizar'}
        onPress={() => alert("Implementar Isso")}
        />

      </ScrollView>
    </View>
  );
};


export default FichaAvaliacao;
