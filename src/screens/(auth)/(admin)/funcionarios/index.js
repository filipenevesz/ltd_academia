import * as React from 'react';
import { FlatList, SafeAreaView, View, Modal, Text } from 'react-native';
import Header from '../../../../components/header';
import styles from './styles';
import { Searchbar, Card, Avatar, IconButton} from 'react-native-paper';
import CreateFuncionario from '../../../../forms/CreateFuncionarioForm';
import EditAluno from '../../../../forms/EditAlunoForm';
import api from '../../../../services/api';

export default function FuncionarioScreen() {

  
  const [searchQuery, setSearchQuery] = React.useState('');
  const [Funcionarios, setFuncionarios] = React.useState([]);
  const [filteredFuncionarios, setFilteredFuncionarios] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const [isUpdateModalVisible, setUpdateModalVisible] = React.useState(false);
  const [isCreateModalVisible, setCreateModalVisible] = React.useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [selectedFuncionario, setSelectedFuncionario] = React.useState(null);


  const openCreateModal = () => {
    setCreateModalVisible(true);

  }
  const openUpdateModal = (funcionario) => {
    setSelectedFuncionario(funcionario);
    setUpdateModalVisible(true);
  };
  const openDeleteModal = (funcionario) => {
    setSelectedFuncionario(funcionario);
    setDeleteModalVisible(true);
  };

  const closeModals = () => {
    setCreateModalVisible(false);
    setUpdateModalVisible(false);
    setDeleteModalVisible(false);
    setselectedFuncionario(null);
  };

  const fetchFuncionarios = React.useCallback(async () => {
    try{
      const response = await api.get('/users/all')
    setFuncionarios(response.data.filter(user => user.role === 'ADMIN' || user.role === 'TRAINER'));
    }
    catch(error){
      alert("Erro ao buscar Funcionarios");	
    }
  }, []);

  React.useEffect(() => {
    fetchFuncionarios();
  }, [fetchFuncionarios]);

  React.useEffect(() => {
    if (searchQuery === '') {
      setFilteredFuncionarios(Funcionarios);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = Funcionarios.filter((funcionario) => 
        funcionario.name.toLowerCase().includes(lowerCaseQuery) ||
        funcionario.lastName.toLowerCase().includes(lowerCaseQuery) ||
        funcionario.email.toLowerCase().includes(lowerCaseQuery) ||
        funcionario.cpf.toLowerCase().includes(lowerCaseQuery) 
      );
      setFilteredFuncionarios(filtered);
    }
  }, [searchQuery, Funcionarios]);

  const deleteFuncionario = async (aluno) => {
    try{
      await api.delete(`/users/email/${aluno.email}`);
      fetchAlunos();
      alert("Funcionario deletado com sucesso");
    }
    catch(error){
      alert("Erro ao deletar aluno");
    }
  }

  const createFuncionario = async (data) => {
    senha = Math.random().toString(36).slice(-8);
    try{
      data.role = 'TRAINER'
      data.imageUrl = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
      data.password = senha
      console.log(data);
      await api.post('/auth/register', data);
      
    }
    catch(error){
      alert("Erro ao criar aluno");
    }
  }

  const onRefresh = async () => { 
    setRefreshing(true);
    await fetchFuncionarios();
    setRefreshing(false);
  };


  renderFuncionarios = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={`${item.name} ${item.lastName}`}
        subtitle={`${item.email} - ${item.role}`}
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
      <Header title="Funcionarios" />
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        loading={false}
      />
      <FlatList
        style={styles.list}
        data={filteredFuncionarios}
        keyExtractor={(item) => item.cpf}
        renderItem={renderFuncionarios}
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
        <CreateFuncionario
          
        />
      </Modal>
      <Modal
        visible={isUpdateModalVisible}
        onRequestClose={closeModals}
      >
        <EditAluno
          onSubmit={(data) => {closeModals(); alert(JSON.stringify(data))}}
          aluno={selectedFuncionario}
        />
      </Modal>
    </SafeAreaView>
  );
}


