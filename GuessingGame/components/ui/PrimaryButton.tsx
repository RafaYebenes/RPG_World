import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { ReactNode } from "react";

type primaryButtonProps = {
  children: ReactNode;
  onPress: () => void;
};
function primaryButton({ children, onPress }: primaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.container}
        android_ripple={{ color: Colors.primary700 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default primaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Colors.primary500,
    paddingVertical: 9,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
