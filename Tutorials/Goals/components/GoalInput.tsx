import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

type GoalInputProps = {
  addGoalHandler: (enteredGoalText: string) => void;
  stopGoalHandler: () => void;
  visible: boolean;
};

function GoalInput({
  addGoalHandler,
  stopGoalHandler,
  visible,
}: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal!"
          placeholderTextColor={'white'}
          onChangeText={goalInputHandler}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={() => addGoalHandler(enteredGoalText)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={stopGoalHandler}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: { marginHorizontal: 8 },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
