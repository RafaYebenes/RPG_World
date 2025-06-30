import { StyleSheet, View, Text, Pressable } from "react-native";

type GoalItemProps = {
  item: string;
  index: number;
  deleteGoalHandler: (index: number) => void;

};

function GoalItem({ item, index , deleteGoalHandler}: GoalItemProps) {
  return (
   
      <View style={styles.goalItem}>
         <Pressable android_ripple={{color: '#dddddd'}} onPress={()=> deleteGoalHandler(index)}>
        <Text style={styles.goalText}>{item}</Text>
        </Pressable>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
