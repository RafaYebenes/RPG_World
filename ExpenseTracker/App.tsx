import { StatusBar } from "expo-status-bar";
import ExpensesContextProvider from "./contexts/ExpensesContext";
import ExpensesNavigator from "./Navigators/Expenses/ExpensesNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <ExpensesNavigator></ExpensesNavigator>
      </ExpensesContextProvider>
    </>
  );
}
