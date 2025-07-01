import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpensesScreen from "../../screens/Expenses/ManageExpensesScreen";
import ExpensesOverviewNavigator from "./ExpensesOverviewNavigator";

export type StackParamList = {
  ExpensesOverview: undefined;
  ManageExpenses: { expenseId: string } | undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

export default function ExpensesNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverviewNavigator}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpensesScreen}
          options={({ route }) => {
            const expenseId = route?.params?.expenseId;
            return {
              title: expenseId ? "Edit" : "Add",
              params: { expenseId: expenseId },
            };
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
