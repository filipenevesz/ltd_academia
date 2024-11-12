import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  button: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 100,
    zIndex: 10,
    padding: 10,
    width: 60,
    height: 60,

  },
  searchBar: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: "#ED5359",
    backgroundColor: "#d6d9db",
    borderRadius: 10,
  },
  list: {
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 100,

    
  },
  card: {
    marginVertical: 10,
    backgroundColor: "#dfdfdf",
    borderRadius: 10,
  },
  
});

export default styles;
