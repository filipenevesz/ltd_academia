import * as React from 'react';
import { FlatList, SafeAreaView, View, Modal, Text } from 'react-native';
import Header from '../../../../components/header';
import styles from './styles';
import { Searchbar, Card, Avatar, IconButton } from 'react-native-paper';
import CreateAluno from '../../../../forms/CreateAlunoForm';
import EditAluno from '../../../../forms/EditAlunoForm';


export default function AlunoScreen() {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [isUpdateModalVisible, setUpdateModalVisible] = React.useState(false);
  const [isCreateModalVisible, setCreateModalVisible] = React.useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [selectedAluno, setSelectedAluno] = React.useState(null);
  const openCreateModal = () => setCreateModalVisible(true);
  const openUpdateModal = (aluno) => {
    setSelectedAluno(aluno);
    setUpdateModalVisible(true);
  };
  const openDeleteModal = (aluno) => {
    setSelectedAluno(aluno);
    setDeleteModalVisible(true);
  };

  const closeModals = () => {
    setCreateModalVisible(false);
    setUpdateModalVisible(false);
    setDeleteModalVisible(false);
    setSelectedAluno(null);
  };

  const [alunos, setAlunos] = React.useState([
    {
      "id": 1,
      "name": "João",
      "lastName": "Silva",
      "imageUrl": "https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg",
      "email": "joaoSilva@gmail.com",
      "createad": "10/10/2021"

    },
    {
      id: 2,
      "name": "Maria",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": "mariasilva@gmail.com",
      "createad": "10/10/2021"
    },
    {
      id: 3,
      "name": "Pedro",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": "pedroSilva@gmail.com",
      "createad": "10/10/2021"
    },
    {
      id: 4,
      "name": "Ana",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
    },
    {
      id: 5,
      "name": "José",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": "",
      "createad": "10/10/2021"
    },
    {
      id: 6,
      "name": "Carlos",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": ""
    },
    {
      "id": 10,
      "name": "João",
      "lastName": "Silva",
      "imageUrl": "https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg",
      "email": "joaoSilva@gmail.com",
      "createad": "10/10/2021"

    },
    {
      id: 20,
      "name": "Maria",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": "mariasilva@gmail.com",
      "createad": "10/10/2021"
    },
    {
      id: 30,
      "name": "Pedro",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": "pedroSilva@gmail.com",
      "createad": "10/10/2021"
    },
    {
      id: 40,
      "name": "Ana",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
    },
    {
      id: 50,
      "name": "José",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": "",
      "createad": "10/10/2021"
    },
    {
      id: 60,
      "name": "Carlos",
      "lastName": "Silva",
      "imageUrl": "https://www.google.com",
      "email": ""
    },
  ]);

  renderAlunos = ({ item }) => (

    <Card style={styles.card}>
      <Card.Title
        title={`${item.name} ${item.lastName}`}
        subtitle={item.email}
        left={(props) => <Avatar.Image size={40} source={{ uri: item.imageUrl }} />}
        right={(props) =>
          <>
            <IconButton icon="pencil" onPress={() => { openUpdateModal(item) }} />
            <IconButton icon="delete" iconColor="rgb(255, 82, 82)" onPress={() => { alert("implementar isso") }} />
          </>

        }

      />
    </Card>

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
        style={styles.list}
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAlunos}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <IconButton
        icon="plus"
        mode='contained'
        iconColor='white'
        containerColor='rgb(255, 82, 82)'
        size={30}
        style={styles.button}
        onPress={openCreateModal}
        accessibilityLabel="Adicionar aluno"
      />
      <Modal
        visible={isCreateModalVisible}
        onRequestClose={closeModals}
      >
        <CreateAluno
          onSubmit={(data) => {closeModals(); alert(JSON.stringify(data))}
          }
        />
      </Modal>
      <Modal
        visible={isUpdateModalVisible}
        onRequestClose={closeModals}
      >
        <EditAluno
          onSubmit={(data) => {closeModals(); alert(JSON.stringify(data))}
          }
          aluno={selectedAluno}
        />
        
      </Modal>
      


    </SafeAreaView>

  );
}


