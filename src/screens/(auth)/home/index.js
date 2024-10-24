import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../../../components/header';

import styles from './styles';


export default function HomeScreen() {
  return (
    

    <View style={styles.container}>
      <Header 
      title = "Inicio"
      />
        <View style={styles.card}>
          {/* <ImageBackground style={styles.imagem} source={require('../../assets/images/ex_card.png')}></ImageBackground> */}
          <Text style={styles.cardTitle}>Quinta-feira</Text>
          <Text style={styles.underline}></Text>
          <Text style={styles.cardSubtitle}>Dia de Treino!!</Text>
        <View style={styles.cardInterno}>
          <Text style={styles.texCardInterno}>Categoria do Treino:</Text>
          <Text style={styles.underline}></Text>
        </View>
      </View>


    </View>

  );
}



