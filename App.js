import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals,setCourseGoals]=useState([])
  const [modalIsVisible,setModalIsVisible] = useState(false)
  function startAddGoalHandler (){
    setModalIsVisible(true);
  }
  function endAddGoalHandler (){
    setModalIsVisible(false);
  }
  function addGoalHandler (enteredGoalText){  
    setCourseGoals(currentCourseGoal=>[...currentCourseGoal,{text: enteredGoalText,id: Math.random().toString()}]);  
    console.log(enteredText)
    setModalIsVisible(false);
  }
  function deleteGoalHandler (id){
    setCourseGoals((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal)=>goal.id !== id)
    })
    console.log('DELETE');
  }
  return (
    <View style={styles.container}>
      <Button title='Add new goal' color='#5e0acc' onPress={startAddGoalHandler}/>
         {/*Input  */}
       <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      {/* output */}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return <GoalItem id={itemData.item.id} text={itemData.item.text} onDelete={deleteGoalHandler}/>
        }} 
        keyExtractor={(item,index)=>{
          item.id
        }}
          alwaysBounceVertical={false}
        />
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
  goalsContainer:{
    flex:3
  }

      });
