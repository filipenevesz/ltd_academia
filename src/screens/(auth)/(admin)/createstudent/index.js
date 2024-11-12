import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Checkbox, RadioButton } from 'react-native-paper';
import Header from '../../../../components/header';
import Button from '../../.././../components/button'
import styles from './styles'

const CadastroAluno = () => {
  const [isStudentInfoOpen, setIsStudentInfoOpen] = useState(true);
  const [isAnamnesisOpen, setIsAnamnesisOpen] = useState(true);

  // Estados para inputs e seleções
  const [objectives, setObjectives] = useState([]);
  const [useMedication, setUseMedication] = useState('no');
  const [hasSurgery, setHasSurgery] = useState('no');
  const [smokes, setSmokes] = useState('no');
  const [drinks, setDrinks] = useState('no');
  const [cardiacIssue, setCardiacIssue] = useState('no');
  const [chestPain, setChestPain] = useState('no');
  const [dizziness, setDizziness] = useState('no');
  const [highBloodPressure, setHighBloodPressure] = useState('no');
  const [boneProblem, setBoneProblem] = useState('no');
  const [hasPulmonaryDisease, setHasPulmonaryDisease] = useState(false);
  const [studentObjective, setStudentObjective] = useState('');

  const [familyHeartIssue, setFamilyHeartIssue] = useState('no');
  const [isPregnant, setIsPregnant] = useState('no');
  const [pregnancyDuration, setPregnancyDuration] = useState('');
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [drinkFrequency, setDrinkFrequency] = useState('');

  const toggleCheckbox = (item) => {
    if (objectives.includes(item)) {
      setObjectives(objectives.filter(obj => obj !== item));
    } else {
      setObjectives([...objectives, item]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Cadastro do aluno'} />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Seção Informações do Aluno */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => setIsStudentInfoOpen(!isStudentInfoOpen)}>
          <Text style={styles.sectionTitle}>Informações do aluno</Text>
          <Ionicons name={isStudentInfoOpen ? 'chevron-up-outline' : 'chevron-down-outline'} size={24} color="black" />
        </TouchableOpacity>
        {isStudentInfoOpen && (
          <View style={styles.sectionContent}>
            {["Nome", "Sobrenome", "Data nascimento", "Celular", "CPF", "Altura", "Peso", "Profissão", "Estado", "Cidade", "Bairro", "Rua", "Número", "Complemento"].map((placeholder, index) => (
              <TextInput key={index} style={styles.input} placeholder={placeholder} />
            ))}
            {/* Dropdown para objetivo do aluno */}
            <Text style={styles.textTitle}>Qual o objetivo do aluno ao praticar exercício físico?</Text>
            <RadioButton.Group onValueChange={newValue => setStudentObjective(newValue)} value={studentObjective}>
              <View style={styles.radioOption}>
                <RadioButton value="Convivo social" />
                <Text>Convívio social</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="Condicionamento físico (Prevenção/Saúde)" />
                <Text>Condicionamento físico (Prevenção/Saúde)</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="Necessidade médica" />
                <Text>Necessidade médica</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="Outros" />
                <Text>Outros</Text>
              </View>
            </RadioButton.Group>
          </View>
        )}

        {/* Seção Anamnese */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => setIsAnamnesisOpen(!isAnamnesisOpen)}>
          <Text style={styles.sectionTitle}>Anamnese</Text>
          <Ionicons name={isAnamnesisOpen ? 'chevron-up-outline' : 'chevron-down-outline'} size={24} color="black" />
        </TouchableOpacity>
        {isAnamnesisOpen && (
          <View style={styles.sectionContent}>

            {/* Perguntas Sim/Não para Anamnese */}
            {[
              { question: "Seu médico já lhe disse alguma vez que você tem problema cardíaco?", state: cardiacIssue, setState: setCardiacIssue },
              { question: "Você tem dores no peito com frequência?", state: chestPain, setState: setChestPain },
              { question: "Você desmaia com frequência ou tem episódios importantes de vertigem?", state: dizziness, setState: setDizziness },
              { question: "Algum médico já lhe disse que a sua pressão arterial estava muito alta?", state: highBloodPressure, setState: setHighBloodPressure },
              { question: "Algum médico já lhe disse que você tem um problema ósseo ou articular, como por exemplo, artrite?", state: boneProblem, setState: setBoneProblem }
            ].map((item, index) => (
              <View key={index} style={styles.question}>
                <Text style={styles.textTitle}>{item.question}</Text>
                <RadioButton.Group onValueChange={newValue => item.setState(newValue)} value={item.state}>
                  <View style={styles.radioOption}>
                    <RadioButton value="yes" />
                    <Text>Sim</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="no" />
                    <Text>Não</Text>
                  </View>
                </RadioButton.Group>
              </View>
            ))}

            {/* Pergunta com Checkbox para sintomas */}
            <Text style={styles.textTitle}>Você tem algum dos sintomas abaixo?</Text>
            {["Dor nas costas", "Dor nas articulações, tendões ou músculo", "Doença pulmonar"].map((symptom, index) => (
              <View key={index} style={styles.checkboxContainer}>
                <Checkbox
                  status={objectives.includes(symptom) ? 'checked' : 'unchecked'}
                  onPress={() => toggleCheckbox(symptom)}
                />
                <Text>{symptom}</Text>
              </View>
            ))}
            {hasPulmonaryDisease && (
              <TextInput style={styles.input} placeholder="Qual doença pulmonar?" />
            )}

            {/* Perguntas adicionais */}
            <View style={styles.question}>
              <Text style={styles.textTitle}>Você faz uso de medicamentos?</Text>
              <RadioButton.Group onValueChange={newValue => setUseMedication(newValue)} value={useMedication}>
                <View style={styles.radioOption}>
                  <RadioButton value="yes" />
                  <Text>Sim</Text>
                </View>
                <View style={styles.radioOption}>
                  <RadioButton value="no" />
                  <Text>Não</Text>
                </View>
              </RadioButton.Group>
              {useMedication === 'yes' && (
                <TextInput style={styles.input} placeholder="Quais?" />
              )}
            </View>

            <View style={styles.question}>
              <Text style={styles.textTitle}>Algum parente próximo teve ataque cardíaco ou outro problema relacionado com o coração antes dos 50 anos?</Text>
              <RadioButton.Group onValueChange={newValue => setFamilyHeartIssue(newValue)} value={familyHeartIssue}>
                <View style={styles.radioOption}>
                  <RadioButton value="yes" />
                  <Text>Sim</Text>
                </View>
                <View style={styles.radioOption}>
                  <RadioButton value="no" />
                  <Text>Não</Text>
                </View>
              </RadioButton.Group>
            </View>

            <View style={styles.question}>
              <Text style={styles.textTitle}>Você está grávida?</Text>
              <RadioButton.Group onValueChange={newValue => setIsPregnant(newValue)} value={isPregnant}>
                <View style={styles.radioOption}>
                  <RadioButton value="yes" />
                  <Text>Sim</Text>
                </View>
                <View style={styles.radioOption}>
                  <RadioButton value="no" />
                  <Text>Não</Text>
                </View>
              </RadioButton.Group>
              {isPregnant === 'yes' && (
                <TextInput style={styles.input} placeholder="A quanto tempo?" onChangeText={setPregnancyDuration} value={pregnancyDuration} />
              )}
            </View>

            <View style={styles.question}>
              <Text style={styles.textTitle}>Você fuma?</Text>
              <RadioButton.Group onValueChange={newValue => setSmokes(newValue)} value={smokes}>
                <View style={styles.radioOption}>
                  <RadioButton value="yes" />
                  <Text>Sim</Text>
                </View>
                <View style={styles.radioOption}>
                  <RadioButton value="no" />
                  <Text>Não</Text>
                </View>
              </RadioButton.Group>
              {smokes === 'yes' && (
                <TextInput style={styles.input} placeholder="Quantos cigarros por dia?" onChangeText={setCigarettesPerDay} value={cigarettesPerDay} />
              )}
            </View>

            <View style={styles.question}>
              <Text style={styles.textTitle}>Você ingere bebidas alcoólicas?</Text>
              <RadioButton.Group onValueChange={newValue => setDrinks(newValue)} value={drinks}>
                <View style={styles.radioOption}>
                  <RadioButton value="yes" />
                  <Text>Sim</Text>
                </View>
                <View style={styles.radioOption}>
                  <RadioButton value="no" />
                  <Text>Não</Text>
                </View>
              </RadioButton.Group>
              {drinks === 'yes' && (
                <TextInput style={styles.input} placeholder="Qual a frequência?" onChangeText={setDrinkFrequency} value={drinkFrequency} />
              )}
            </View>
            {/* Checkbox para objetivos */}
            <Text style={styles.textTitle}>Quais são seus objetivos ao ingressar no grupo de promoção de saúde?</Text>
            {["Perder peso", "Melhorar a aptidão cardiovascular", "Melhorar a flexibilidade", "Melhorar o condicionamento físico", "Reduzir as dores nas costas", "Reduzir o estresse", "Diminuir colesterol", "Coordenação motora", "Outros"].map((objective, index) => (
              <View key={index} style={styles.checkboxContainer}>
                <Checkbox
                  status={objectives.includes(objective) ? 'checked' : 'unchecked'}
                  onPress={() => toggleCheckbox(objective)}
                />
                <Text>{objective}</Text>
              </View>
            ))}
            {objectives.includes("Outros") && (
              <TextInput style={styles.input} placeholder="Especifique" />
            )}
            
        
          </View>
          
        )}
        <Button 
          title={'Cadastrar Aluno'}
          onPress={() => alert("Implementar Isso")}
          />
      </ScrollView>
    </View>
  );
};


export default CadastroAluno;
