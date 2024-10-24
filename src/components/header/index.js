import React from 'react';
import {Text, TouchableOpacity, SafeAreaView } from 'react-native';
import{Ionicons} from '@expo/vector-icons'
import styles from './styles';


export default function Header({title, navigation}) {

return (
<SafeAreaView style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
    <TouchableOpacity onPress={()=>alert("COLOCAR NAVEGACAO AQUI")}>
        <Ionicons name="notifications-outline" size={25} color="white"/>
    </TouchableOpacity>
</SafeAreaView>
    
  );  }    