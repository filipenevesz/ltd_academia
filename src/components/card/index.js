import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

export default function Card({title,description, imagem, onPress = null}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
      onPress={onPress}
      >
        <Text
        style={styles.cardTitle}
        >{title}</Text>
        <Text
        style={styles.cardSubtitle}
        >{description}</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardInterno: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  texCardInterno: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  underline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
})