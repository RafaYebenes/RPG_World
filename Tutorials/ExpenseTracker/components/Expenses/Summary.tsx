import { View, Text, StyleSheet } from "react-native";

export default function Summary({
  label,
  costs,
}: {
  label: string;
  costs: number;
}) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text>€{costs}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
