import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Header from '../../../../components/header';
import ProfileLabel from '../../../../components/profile_label';

import styles from './styles';

export default function HomeScreen() {
  return (


    <View style={styles.container}>
      <Header
        title="Início"
      />
      <ProfileLabel />
      {/* <Text style={styles.barra}></Text>
      <Image style={styles.perfil} source={require('../../../../assets/images/defalt_profile.png')} />
      <Text style={styles.nome}>
        Bom dia!{'\n'}
        Francisco Pinto</Text> */}
      


    </View>

  );
}



