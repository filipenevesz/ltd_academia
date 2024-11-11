import * as React from 'react';
import { SafeAreaView,  FlatList } from 'react-native';
import Header from '../../../../components/header';
import styles from './styles';
import { Searchbar, Button } from 'react-native-paper';
import CardPerson from '../../../../components/card_person';

export default function AlunoScreen() {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [alunos, setAlunos] = React.useState([
    {
      "id": 1,
      "nome": "João",
      "lastName": "Silva",
      "imageUrl": "https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg",
      "email": "joaoSilva@gmail.com",
      "createad": "10/10/2021"
      
    },
    {
      id: 2,
      "nome": "Maria",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": "mariasilva@gmail.com",
      "createad": "10/10/2021"	
      },
      {
        id: 3,
        "nome": "Pedro",
        "lastName": "Silva",
        "imageUrl": "https://www.google.com",
        "email": "pedroSilva@gmail.com",
        "createad": "10/10/2021"
      }
  ]);

  renderAlunos = ({item}) => (
  
          <CardPerson item={item} />
        
     )


  return (
    <SafeAreaView style={styles.container}>
      <Header title="Alunos" />
      <Searchbar
      placeholder="Pesquisar"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchBar}
      loading={false}
    />
      <FlatList
      data={alunos}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={renderAlunos}
      />    

    </SafeAreaView>
  );
}


