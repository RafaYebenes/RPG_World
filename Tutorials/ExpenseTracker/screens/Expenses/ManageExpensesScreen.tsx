import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Button, Pressable, StyleSheet, View } from "react-native";
import { StackParamList } from "../../Navigators/Expenses/ExpensesNavigator";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import ManageExpensesForm from "../../components/Expenses/ManageExpensesForm";

type ManageExpensesProps = NativeStackScreenProps<
  StackParamList,
  "ManageExpenses"
>;
type ManageExpensesNavigationProps = NativeStackNavigationProp<StackParamList>;

export default function ManageExpensesScreen({ route }: ManageExpensesProps) {
  const expenseCtx = useContext(ExpensesContext);

  const navigation = useNavigation<ManageExpensesNavigationProps>();

  const expenseId = route.params?.expenseId;
  const expense = expenseCtx.expenses.find((e) => e.id == expenseId);

  function updateOrAddHandler(name?: string, date?: Date, cost?: number) {
    if (name && date && cost) {
      if (!expenseId) {
        const newExpense = {
          id: "id",
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
      navigation.goBack();
    } else {
      //TODO Show an error or smth
    }
  }

  function deleteHandler(expenseId: string) {
    if (expenseId) expenseCtx.deleteExpense(expenseId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ManageExpensesForm
        expense={expense}
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
