import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisibile, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<Array<string>>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function stopAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    stopAddGoalHandler();
  }

  function deleteGoalHandler(index: number) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal, i) => i != index)
    );
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal!"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      ></Button>

      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={modalIsVisibile}
        stopGoalHandler={stopAddGoalHandler}
      ></GoalInput>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item, index }) => {
            return (
              <GoalItem
                item={item}
                index={index}
                deleteGoalHandler={deleteGoalHandler}
              ></GoalItem>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
