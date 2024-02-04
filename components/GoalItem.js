import { Pressable, StyleSheet, Text } from "react-native";

function GoalItem(props) {
    return (
        <Pressable android_ripple={{color:'#dddddd'}} style={({pressed})=>pressed && styles.pressedItem} onPress={props.onDelete.bind(this,props.id)}>
            <Text style={styles.goalItems}>{props.text}</Text>
        </Pressable>
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: 'white',
        backgroundColor: '#5e0acc',
    },
    pressedItem:{
        opacity:0.5,
    }
})