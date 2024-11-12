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
      setAlunos(response.data);
      setFilteredAlunos(response.data);
    }
    catch(error){
      alert("Erro ao buscar alunos");	
    }
  }, []);

  const deleteAluno = async (aluno) => {
    try{
      await api.delete(`/users/email/${aluno.email}`);
      fetchAlunos();
      alert("Aluno deletado com sucesso");
    }
    catch(error){
      alert("Erro ao deletar aluno");
    }
  }

  const createAluno = async (data) => {
    senha = Math.random().toString(36).slice(-8);
    try{
      data.role = 'STUDENT'
      data.imageUrl = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
      data.password = senha
      console.log(data);
      await api.post('/auth/register', data);
      
    }
    catch(error){
      alert("Erro ao criar aluno");
    }
  }


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
            <IconButton icon="delete" iconColor="rgb(255, 82, 82)" onPress={() => { deleteAluno(item) }} />
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
          onSubmit={(data) => {createAluno(data); closeModals()}
          }
        />
      </Modal>
      <Modal
        visible={isUpdateModalVisible}
        onRequestClose={closeModals}
      >
        <EditAluno
          onSubmit={(data) => { closeModals();}
          }
          aluno={selectedAluno}
        />
        
      </Modal>
      


    </SafeAreaView>

  );
}


