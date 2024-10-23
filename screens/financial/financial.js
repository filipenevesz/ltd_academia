import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image, SafeAreaView, StatusBar, } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const colors = {
  background: "#f0f0f0",
  textForeground: "#000",
  mutedForeground: "#6c757d",
  cardBackground: "#fff",
  success: "#28a745",
  danger: "#dc3545",
  primary: "#ED5359", // Cor dos botões
  muted: "#6c757d",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: "#2B2B2B",
    borderBottomWidth: 3,
    borderColor: "#ED5359",
    padding: 20,
  },
  textHeader: {
    color: "#FFFFFF",
    paddingTop: 20,
    alignSelf: "flex-start",
    fontSize: 30,
    fontWeight: "700",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 8, // Espaço entre a imagem e o título
    color: colors.textForeground,
  },
  subtitle: {
    fontSize: 18,
    color: colors.mutedForeground,
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.cardBackground,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
  },
  cardTwo: {
    backgroundColor: colors.cardBackground,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 18,
    width: "100%",
    justifyContent: "center",


  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  paidText: {
    color: colors.success,
    fontWeight: "bold",
  },
  pendingText: {
    color: colors.danger,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 20,
  },
  mutedText: {
    color: colors.mutedForeground,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    //width:160,
    //height:40
  },
  primaryButtonText: {
    color: "#fff", // Texto em branco
    fontWeight: "bold",
  },
  mutedButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,

  },
  mutedButtonText: {
    color: "#fff", // Texto em branco

  },
  dangerButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  dangerButtonText: {
    color: "#fff", // Texto em branco
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20, // Para fazer a imagem ser redonda
    marginRight: 8, // Espaço entre a imagem e o texto
  },
  moneyImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
});

export const Financial = () => {
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
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <View style={styles.header}>
        <Text style={styles.textHeader}>Financeiro</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Ionicons name="person-circle" size={60} color={"#2b2b2b"} />
          <Text style={styles.title}> Francisco Pinto</Text>
        </View>

        <View style={styles.titleContainer}>
          <Image
            style={styles.moneyImage}
            source={require("../../assets/dinheiro.jpeg")}
          />
          <Text style={styles.subtitle}>Plano mensal</Text>
        </View>

        <Text style={styles.subtitle}>Informações Financeiras:</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dados Financeiros</Text>
          <View style={styles.infoRow}>
            <Text style={styles.paidText}>Mensalidade paga</Text>
            <Text style={styles.amount}>R$150,00</Text>
          </View>
          <Text style={styles.mutedText}>Pagamento efetuado em 21/Set</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleViewInfo}
              accessibilityLabel="View information"
            >
              <Text style={styles.primaryButtonText}>Ver informações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mutedButton}
              onPress={handlePaymentHistory}
              accessibilityLabel="View payment history"
            >
              <Text style={styles.mutedButtonText}>Histórico de pag.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardTwo}>
          <Text style={styles.cardTitle}>Próximo pagamento</Text>
          <View style={styles.infoRow}>
            <Text style={styles.pendingText}>Mensalidade Pendente</Text>
            <Text style={styles.amount}>R$150,00</Text>
          </View>
          <Text style={styles.mutedText}>Vencimento em 21/Out</Text>
          <TouchableOpacity
            style={styles.dangerButton}
            onPress={handleMakePayment}
            accessibilityLabel="Make payment"
          >
            <Text style={styles.dangerButtonText}>Efetuar pagamento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
