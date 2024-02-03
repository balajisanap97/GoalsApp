import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [enteredGoalText,setEnteredGoalText] = useState('');
  const [courseGoals,setCourseGoals]=useState([])
  function goalInputHandler (enteredText){
    setEnteredGoalText(enteredText) 
  }
  function addGoalHandler (){  
    setCourseGoals(currentCourseGoal=>[...currentCourseGoal,{text: enteredGoalText,id: Math.random().toString()}]);  
    console.log(enteredText)
  }
  return (
    <View style={styles.container}>   
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder="Your course goal"/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return (
            <Text style={styles.goalItems}>{itemData.item.text}</Text>
          ) 
        }} 
        keyExtractor={(item,index)=>{
          item.id
        }}
          alwaysBounceVertical={false}
        />        
      {/* <ScrollView >
        {
          courseGoals.map((goals,index)=>
          <Text style={styles.goalItems} key={index}>{goals}</Text>
          )
        }
      </ScrollView> */}

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
  },
  goalItems:{
    margin:8,
    borderRadius:8,
    paddingHorizontal:10,
    paddingVertical:8,
    color:'white',
    backgroundColor:'#5e0acc',
  }

});
