import { Pressable, StyleSheet, Text,View } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItems}>
            <Pressable android_ripple={{ color: '#dddddd' }}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={props.onDelete.bind(this, props.id)}
            >
                <Text style={styles.goalText}>{props.text}</Text>   
            </Pressable>
        </View> 

    )
}
export default GoalItem;
        
const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
    }
})