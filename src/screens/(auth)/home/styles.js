
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
      //width:300,
      //marginTop:25,
      justifyContent: 'center',
      alignItems: 'center',
      //marginVertical:150
      
      
      
    
      
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
    

    redline:{
      backgroundColor:'#ED5359',
      width:'100%',
      height:2,
      
    },
    texto:{
      fontSize:14,
      color:'white',
      marginTop:10,
      marginBottom:5,
      marginLeft:5,
      
    },
    textAbaixo:{
      fontSize:14,
      color:'white',
      marginTop:5,
      textAlign:'left',

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
      margin:8,
      padding:45,
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
      marginBottom:40,
      paddingTop:10,
      textDecorationLine: 'underline',
      left:3,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      top:-150,
      
      
    },
      
    }
  );


export default styles;

  

