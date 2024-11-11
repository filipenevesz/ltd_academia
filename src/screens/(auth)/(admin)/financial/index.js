import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, Image, SafeAreaView, StatusBar, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import styles from "./styles";
import Header from "../../../../components/header";
import Button from "../../../../components/button";


export default function Financial() {
  const handleViewInfo = () => {
    Alert.alert("Viewing information");
  };

  const handlePaymentHistory = () => {
    Alert.alert("Viewing payment history");
  };

  const handleMakePayment = () => {
    Alert.alert("Processing payment...");
  };

  return (
    <SafeAreaView style={styles.container}>

      <Header
        title="Financeiro"
      />
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* <View style={styles.header}>
        <Text style={styles.textHeader}>Financeiro</Text>
      </View> */}



      <ScrollView contentContainerStyle={styles.container}>


        <View style={styles.card}>
          <Text style={styles.cardTitle}>Joao Carlos</Text>
          <View style={styles.infoRow}>
            <Text style={styles.paidText}>Mensalidade paga</Text>
            <Text style={styles.amount}>R$150,00</Text>
          </View>
          <Text style={styles.mutedText}>Pagamento efetuado em 21/Set</Text>
          <View style={styles.buttonRow}>
            <View style = {styles.buttons}>
              
            </View>



          </View>
        </View>


        <View style={styles.card}>
          <Text style={styles.cardTitle}>Paulo André</Text>
          <View style={styles.infoRow}>
            <Text style={styles.paidText}>Mensalidade paga</Text>
            <Text style={styles.amount}>R$100,00</Text>
          </View>
          <Text style={styles.mutedText}>Pagamento efetuado em 21/Set</Text>
          <View style={styles.buttonRow}>
            <View style = {styles.buttons}>
              
            </View>



          </View>
        </View>
        <View style={styles.cardTwo}>
          <Text style={styles.cardTitle}>Palloma Silva</Text>
          <View style={styles.infoRow}>
            <Text style={styles.pendingText}>Mensalidade Pendente</Text>
            <Text style={styles.amount}>R$150,00</Text>
          </View>
          <Text style={styles.mutedText}>Vencimento em 21/Out</Text>
          {/* <TouchableOpacity
            style={styles.dangerButton}
            onPress={handleMakePayment}
            accessibilityLabel="Make payment"
          >
            <Text style={styles.dangerButtonText}>Efetuar pagamento</Text>
          </TouchableOpacity> */}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
