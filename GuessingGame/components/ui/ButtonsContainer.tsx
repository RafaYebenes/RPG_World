import { View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { ReactNode } from "react";

type buttonsContainerProps = {
  firstButton: ReactNode;
  secondButton: ReactNode;
};
function ButtonsContainer({
  firstButton,
  secondButton,
}: buttonsContainerProps) {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        {firstButton}
      </View>
      <View style={styles.buttonContainer}>
       {secondButton}
      </View>
    </View>
  );
}

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
