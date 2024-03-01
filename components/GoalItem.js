
import { StyleSheet,View,Text,Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
      android_ripple={{color:'#7b1062'}}
      onPress={props.onDeleteGoal.bind(this,props.id)}
      style={({pressed}) => pressed && styles.pressedItem} //for ios, we need to capture the pressed state in style prop
      >
        <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
    
  )
}
const styles = StyleSheet.create({
    goalItem: {
        margin:8,
        borderRadius:6,
        backgroundColor:'#cc0a9f',
      },
      pressedItem: {
        opacity:0.5
      },
      goalText: {
        padding:8,
        color:'white'
      }
})