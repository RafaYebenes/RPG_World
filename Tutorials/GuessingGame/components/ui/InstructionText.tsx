import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

type instructionTextProps = {
  children: string;
};
function InstructionText({ children }: instructionTextProps) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
