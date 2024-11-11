import React from "react";
import { useEffect,useState } from "react";
import { Text, View, FlatList } from "react-native";
import Card from "../../../../components/card";
import Header from "../../../../components/header";
import api from "../../../../services/api";
import { getTurmas } from "../../../../services/api";
export default function TurmasScreen() {
    const [turmas, setTurmas] = useState([]);
useEffect(
    () =>{
        const fetchTurmas = async () => {
            try {
                const turmasData = await getTurmas();
                console.log('==============================================');
                console.log(turmasData);
                setTurmas(turmasData);
            } catch (error) {
                console.error('Erro ao obter turmas', error);
            }
        };
        fetchTurmas();
    },
    []
    );
    
    const renderItem = ({item}) => {
        console.log(item);
        return (
            <Card
                title={` ${item.horario ? new Date(item.horario).toLocaleString() : 'Horário não definido'}`}

                description='Ver detalhes da turma'
                onPress={() => alert("Implementar Isso")}
            />
        );
    };

    return (
        <View>
            <Header title="Turmas" />
            
            {
                turmas.length === 0 ? (
                    <Text>Não há turmas cadastradas</Text>
                ) : 
                (
                    <FlatList
                        data={turmas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )
            }
            
        </View>
    )
}