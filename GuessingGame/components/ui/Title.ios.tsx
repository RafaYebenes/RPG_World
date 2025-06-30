import { Text, View, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

type titleProps = {
  children: string;
};

function Title({ children }: titleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "#ddb52f",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
