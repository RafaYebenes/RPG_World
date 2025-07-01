import { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import Expense from "../../components/Expenses/Expense";
import Summary from "../../components/Expenses/Summary";

export default function RecentExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);
  const currentDate = new Date();
  const tresholdDate = new Date(currentDate);
  tresholdDate.setDate(tresholdDate.getDate() - 5);

  const recentExpenses = expensesCtx.expenses.filter(
    (exp) => exp.date > tresholdDate
  );

  const recentCosts = recentExpenses.reduce((a, c) => a + c.cost, 0);

  return (
    <View style={styles.screen}>
      <Summary label="Last 5 Days:" costs={recentCosts}></Summary>
      <FlatList
        data={recentExpenses}
        renderItem={(itemData) => <Expense expense={itemData.item}></Expense>}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
