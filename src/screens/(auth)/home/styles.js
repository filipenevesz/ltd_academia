
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#f3f3f3',
      height: '100%',
      width: 'max-content',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2B2B2B',
      padding: 15,
      backgroundColor: "#2B2B2B",
      borderBottomWidth: 3,
      borderColor: "#ED5359"

      
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      margin:10,
      marginTop:2
    },
    profileCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#525153',
      margin: '100',
      padding: 10,
      borderRadius: 3,
      width: '100%',
      height:'10%',
      
      
    },
  
    barra:{
      borderTopWidth:58,
      borderColor: '#525153',
      width: '100%',
      height: 3,
      top:0
      

    },
    
    card: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 20,
      padding: 20,
      paddingTop: 10,
      borderRadius: 20,
      overflow: 'hidden',
      elevation: 8,
      height: 400,
      width:300,
      marginTop:25,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:100,
      top:-90
      
      
      
    
      
    },
    
    cardTitle: {
      position: 'absolute',
      top: 10,
      left: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textDecorationLine: 'underline', 
    },
    
    cardSubtitle: {
      position: 'absolute',
      top: 30,
      left: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },

    
    imagem:{
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      width:'115%',
      height:'110%',
      resizeMode:'stretch',
      
    },
    cardInterno:{
      backgroundColor:'#fff',
      margin:20,
      padding:0,
      borderRadius:20,
      height:'80%',
      width:'100%',
      position:'relative',
      alignItems:'center',
      justifyContent:'center',
      top:25,
      right:2,
      alignSelf: 'center',
    },
    texCardInterno:{
      fontSize:22,
      fontWeight:'bold',
      color:'#2B2B2B',
      marginTop:100,
      marginBottom:50,
      paddingTop:10,
      textDecorationLine: 'underline',
      left:3,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      top:-150,
      
      
    },
    perfil:{
      top:-53,
      left:4
    },
    nome:{
      fontSize:18,
      fontWeight:'bold',
      color:'white',
      marginLeft:60,
      flexDirection: 'column',
      top:-95
      
  
      


    }
    
      
    }
  );


export default styles;

  

