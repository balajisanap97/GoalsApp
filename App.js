import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  function goalInputHandler (enteredText){
    console.log(enteredText)
  }
  function addGoalHandler (){

  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder="Enter Your course goal"/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop:50,
    paddingHorizontal:15,
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    borderRadius:'5px',
    padding:8,
    marginRight:8
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  goalsContainer:{
    flex:3
  }
});
