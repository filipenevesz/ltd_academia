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
  inputContainer: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 15,
  },
  calendar: {
    borderRadius: 5,
    marginBottom: 15,
  },
  alunoItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  alunoItemSelected: {
    backgroundColor: '#ED5359',
  },
  alunoText: {
    fontSize: 16,
  },
  professorItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  professorItemSelected: {
    backgroundColor: '#ED5359',
  },
  professorText: {
    fontSize: 16,
  },
});

export default styles;