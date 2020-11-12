import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

function App(){
  return <View style={styles.container}>
    <Image source={require('./assets/Moorehills.jpg')} style={styles.image}/>
    <View style={styles.labelInfo}>
      <Text style={{color:'grey'}}>School</Text>
      <Text  style={{color:'grey',fontSize:20}}>The lawrenceville School</Text>
    </View>
    <View style={styles.labelInfo}>
      <Text style={{color:'grey'}}>Email</Text>
      <Text  style={{color:'grey',fontSize:20}}>ntongwe@gmail.com</Text>
    </View>

    {/* <View style={styles.labelInfo}>
      <Text style={{color:'grey'}}>Email</Text>
      <Text style={{ fontSize:20}}>moore@gmail.com</Text>
    </View> */}

    <View style={styles.labelInfo}>
      <Text style={{color:'blue'}}>Name</Text>
      <Text  style={{fontSize:20}}>moorhills ntungwe</Text>
    </View>

     
    <View style={styles.labelInfo}>
      <Text style={{color:'blue'}}>Nickname</Text>
      <Text  style={{fontSize:20}}>Engineer N</Text>
    </View>

    <View style={styles.labelInfo}>
      <Text style={{color:'blue'}}>Emergency Contact</Text>
      <Text  style={{fontSize:20}}>+00145668723</Text>
    </View>
    <TouchableOpacity
          onPress={() => alert('my react native profile')}
          style={styles.button}>
          <Text style={styles.text}>UPDATE PROFILE</Text>
        </TouchableOpacity>


  </View>
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 45,
  },
  image:{
    marginTop:100,
    width:150,
    height:150,
    marginBottom:30,
    alignSelf:"center",
    borderRadius:75,
    
  },
  labelInfo: {
   fontSize:30,
   alignItems:'flex-start',
   borderBottomWidth: 0.5,
   borderBottomColor:'black',
   marginBottom:30
  },
  button:{
    backgroundColor: 'blue',
    borderRadius:20,
    marginTop: 5,
    marginHorizontal: 40,
    padding:20
    

  },

  text:{
    textAlign:'center',
    fontSize:10,
    fontWeight:'bold'
  }
});
 export default App;