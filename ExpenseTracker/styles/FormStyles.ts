import { StyleSheet } from "react-native";

export const FormStyles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  containerInputs: {
    width: "100%",
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
    width: "80%",
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "black",
    width: "80%",
  },
  trashIcon: {
    margin: 10,
  },
  error: {
    color: "red",
  },
});
