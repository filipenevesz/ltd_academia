import React from 'react';
import {Text, TouchableOpacity, SafeAreaView } from 'react-native';
import{Ionicons} from '@expo/vector-icons'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header({title}) {
    const navigation = useNavigation();

return (
<SafeAreaView style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
    <TouchableOpacity onPress={()=> navigation.navigate('Notifications')}>
        <Ionicons name="notifications-outline" size={25} color="white"/>
    </TouchableOpacity>
</SafeAreaView>
    
  );  }    