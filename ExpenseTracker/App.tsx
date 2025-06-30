import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { Ionicons } from "@expo/vector-icons";
import ExpensesContextProvider from "./contexts/ExpensesContext";
import AddButton from "./components/AddButton";

export type StackParamList = {
  ExpensesOverview: undefined;
  ManageExpenses: { expenseId: number } | undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

export type BottomParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};
const BottomTabs = createBottomTabNavigator<BottomParamList>();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerRight: () => <AddButton></AddButton>,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color}></Ionicons>
          ),
        }}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color}></Ionicons>
          ),
        }}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
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
      </ExpensesContextProvider>
    </>
  );
}
