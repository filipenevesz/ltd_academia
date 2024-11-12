import * as React from 'react';
import { FlatList, SafeAreaView, View, Modal, Text } from 'react-native';
import Header from '../../../../components/header';
import styles from './styles';
import { Searchbar, Card, Avatar, IconButton } from 'react-native-paper';
import CreateAluno from '../../../../forms/CreateAlunoForm';
import EditAluno from '../../../../forms/EditAlunoForm';
import api from '../../../../services/api';


export default function AlunoScreen() {

  
  const [searchQuery, setSearchQuery] = React.useState('');
  const [alunos, setAlunos] = React.useState([]);
  const [filteredAlunos, setFilteredAlunos] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

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

  const fetchAlunos = React.useCallback(async () => {
    try{
      const response = await api.get('/users/alunos/all')
      console.log
      setAlunos(response.data);
      setFilteredAlunos(response.data);
    }
    catch(error){
      alert("Erro ao buscar alunos");	
    }
  }, []);

  React.useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  React.useEffect(() => {
    if (searchQuery === '') {
      setFilteredAlunos(alunos);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = alunos.filter((aluno) => 
        aluno.name.toLowerCase().includes(lowerCaseQuery) ||
        aluno.lastName.toLowerCase().includes(lowerCaseQuery) ||
        aluno.email.toLowerCase().includes(lowerCaseQuery) ||
        aluno.cpf.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredAlunos(filtered);
    }
  }, [searchQuery, alunos]);

  const onRefresh = async () => { 
    setRefreshing(true);
    await fetchAlunos();
    setRefreshing(false);
  };


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
        data={filteredAlunos}
        keyExtractor={(item) => item.cpf}
        renderItem={renderAlunos}
        contentContainerStyle={{ paddingBottom: 100 }}
        onRefresh={onRefresh}
        refreshing={refreshing}
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


