import { FlatList, Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext";
import Expense from "../../components/Expenses/Expense";
import Summary from "../../components/Expenses/Summary";

export default function AllExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);

  const totalCosts = expensesCtx.expenses.reduce((a, c) => a + c.cost, 0);

  return (
    <View style={styles.screen}>
      <Summary label="Total costs:" costs={totalCosts}></Summary>
      <FlatList
        data={expensesCtx.expenses}
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
