import { Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import styles from './styles'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import Button from '../../../../components/button';
import Header from '../../../../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useState, useEffect } from 'react';



export default function Profile() {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (!token) {
          throw new Error('Token não encontrado');
        }

        const response = await axios.get('http://34.71.4.173:8081/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`, // Passando o token no cabeçalho
          },
        });

        const data = response.data;

        // Definindo os estados com os valores da resposta
        setCpf(data.cpf);
        setEmail(data.email);
        setRole(data.role);
        setName(data.name);
        setLastName(data.lastName);
        setBirthDate(data.birthDate);
        setCreatedAt(data.createdAt);
        setImageUrl(data.imageUrl);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  console.log(imageUrl)

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title='Perfil'
      />

      <ScrollView style={styles.containerScroll}>
        <View style={styles.profile}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePhoto}>
              {/* <Ionicons name="person-circle" size={120} color={"#ffffff"} /> */}

              <Image
                source={{ uri: imageUrl }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
            </View>
            <TouchableOpacity style={styles.profilePhotoChange}>
              <Ionicons name="camera-reverse" size={20} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileTextName}>{name} {lastName}</Text>
          <View style={styles.addressContainer}>
            <Ionicons name="call" size={15} color={"#2B2B2B"} />
            <Text> (99) 9 9999-9999</Text>
          </View>
          <View style={styles.addressContainer}>
            <Ionicons name="location" size={15} color={"#ED5359"} />
            <Text style={styles.addressText}>Rua Argentina, 98, Centro</Text>
          </View>
        </View>

        <View>
          <Text style={styles.textInfo}>Minhas informações:</Text>
          <ScrollView style={styles.card}>
            <Text style={styles.textCard}>
              Email: <Text style={styles.textCardInfo}>{email}</Text>
            </Text>
            <Text style={styles.textCard}>
              Endereço: <Text style={styles.textCardInfo}>Rua Argentina, 98, Centro</Text>
            </Text>
            <Text style={styles.textCard}>
              Matrícula: <Text style={styles.textCardInfo}>0000</Text>
            </Text>
            <Text style={styles.textCard}>
              Peso: <Text style={styles.textCardInfo}>80Kg</Text>
            </Text>
            <Text style={styles.textCard}>
              Altura: <Text style={styles.textCardInfo}>180cm</Text>
            </Text>
          </ScrollView>
        </View>

        <View style={styles.buttons}>
          <Button
            title='Editar Perfil'
            onPress={() => alert("CRIAR FUNCIONALIDADE DE VER PERFIL")}
          />
          <Button
            title='Ver Ficha'
            onPress={() => alert("CRIAR FUNCIONALIDADE DE VER FICHA")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
