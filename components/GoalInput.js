import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/Images/goal.png')}/>
                <TextInput style={styles.textInput} value={enteredGoalText} onChangeText={goalInputHandler} placeholder="Your course goal" />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color={'#B180f0'} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={'#f31282'} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff', 
        color:'#120438',
        width: '100%',
        borderRadius: 6,
        // marginRight: 8,
        padding: 8,
    },
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 24,
        padding:16,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        backgroundColor:'#311b6b'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:16

    },
    button:{
        width:'50%',
        marginHorizontal:5
    },
    image:{
        height:100,
        width:100,
        margin:20,
    }
})