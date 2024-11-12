import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      marginBottom: 80,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 20,
      color: '#000',
    },
    scrollContent: {
      padding: 20,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#DDD',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    sectionContent: {
      backgroundColor: '#EEE',
      borderRadius: 5,
      padding: 15,
      marginBottom: 15,
    },
    input: {
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#FFF',
    },
    observacao: {
      fontSize: 12,
      color: '#777',
      marginTop: 5,
    },
    button: {
      backgroundColor: '#FF6666',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default styles;