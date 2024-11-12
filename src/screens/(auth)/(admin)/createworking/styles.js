import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      marginBottom: 80,
    },
    scrollContent: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#000',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#FFF',
    },
    picker: {
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 5,
      backgroundColor: '#FFF',
      marginBottom: 15,
    },
    calendar: {
      borderRadius: 5,
      marginBottom: 15,
    },

  });
  
export default styles;