import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                props.onAddGoal(enteredGoalText);
                setEnteredGoalText("");
              }}
              color='#7f34e0'
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                props.closeModal(false);
              }}
              color='#f31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    padding:16,
    flex: 1,
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color:'#120438',
    width: "100%",
    borderRadius:6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:16
  },
  button: {
    width: "30%",
    marginHorizontal: 8,

  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  }
});
