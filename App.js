import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [enteredGoalText,setEnteredGoalText] = useState('');
  const [courseGoals,setCourseGoals]=useState([])
  function goalInputHandler (enteredText){
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler (){  
    setCourseGoals(currentCourseGoal=>[...currentCourseGoal,enteredGoalText]);  
    console.log(enteredText)
  }
  return (
    <View style={styles.container}>   
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder="Your course goal"/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {
          courseGoals.map((goals,index)=>
          <Text key={index}>{goals}</Text>
          )
        }
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
