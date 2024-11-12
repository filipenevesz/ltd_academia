import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      backgroundColor: '##f5f5f5',
      flex: 1,
      marginBottom: 100,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    scrollContent: {
      paddingBottom: 20,
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
    textTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionContent: {
      marginBottom: 20,
      backgroundColor: '#eeeeee',
      padding: 15,
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginBottom: 10,
    },
    question: {
      marginBottom: 20,
    },
    radioOption: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    }
  });
  
export default styles;