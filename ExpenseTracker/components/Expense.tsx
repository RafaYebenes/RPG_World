import { View, Text, StyleSheet, Pressable } from "react-native";
import { IExpense } from "../Interfaces/IExpense";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ExpenseNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "ExpensesOverview"
>;

export default function Expense({ expense }: { expense: IExpense }) {
  const navigation = useNavigation<ExpenseNavigationProps>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ManageExpenses", { expenseId: expense.id })
      }
    >
      <View style={style.container}>
        <View>
          <Text style={{ fontWeight: "bold" }}>{expense.name}</Text>
          <Text>{expense.date.toLocaleString().split(",")[0]}</Text>
        </View>
        <View style={style.containerCosts}>
          <Text>{expense.cost}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#cfcfcf",
  },
  containerCosts: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});
