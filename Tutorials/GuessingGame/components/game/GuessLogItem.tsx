import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

type GuessLogItemProps = {
  roundNumber: number;
  guess: number;
};

function GuessLogItem({ roundNumber, guess }: GuessLogItemProps) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's guess{guess}</Text>
    </View>
  );
}
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary700,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
});
