import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Button, Pressable, StyleSheet, View } from "react-native";
import { StackParamList } from "../App";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";
import ManageExpensesForm from "../components/ManageExpensesForm";

type ManageExpensesProps = NativeStackScreenProps<
  StackParamList,
  "ManageExpenses"
>;
type ManageExpensesNavigationProps = NativeStackNavigationProp<StackParamList>;

export default function ManageExpenses({ route }: ManageExpensesProps) {
  const expenseCtx = useContext(ExpensesContext);

  const navigation = useNavigation<ManageExpensesNavigationProps>();

  const expenseId = route.params?.expenseId;

  function updateOrAddHandler(name?: string, date?: Date, cost?: number) {
    if (name && date && cost) {
      if (!expenseId) {
        const newExpense = {
          id: Math.floor(Math.random() * 1000 + 6),
          name: name,
          date: date,
          cost: cost,
        };
        expenseCtx.addExpense(newExpense);
      } else {
        const updatedExpense = {
          id: expenseId,
          name: name,
          date: date,
          cost: cost,
        };
        
        expenseCtx.updateExpense(updatedExpense);
      }
    } else {
      //TODO Show an error or smth
    }
  }

  function deleteHandler() {
    if (expenseId) expenseCtx.deleteExpense(expenseId);
  }

  return (
    <View style={styles.container}>
      <ManageExpensesForm
        expenseId={expenseId}
        onCancel={navigation.goBack}
        onDelete={deleteHandler}
        onSubmit={updateOrAddHandler}
      ></ManageExpensesForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
