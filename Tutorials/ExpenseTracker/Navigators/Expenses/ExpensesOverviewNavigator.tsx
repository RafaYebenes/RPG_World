import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddButton from "../../components/Expenses/AddButton";
import { Ionicons } from "@expo/vector-icons";
import RecentExpensesScreen from "../../screens/Expenses/RecentExpensesScreen";
import AllExpensesScreen from "../../screens/Expenses/AllExpensesScreen";
import { Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export type BottomParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};
const BottomTabs = createBottomTabNavigator<BottomParamList>();

export default function ExpensesOverviewNavigator() {
  const authCtx = useContext(AuthContext);

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerRight: () => <AddButton></AddButton>,
        headerLeft: () => (
          <Button title="Logout" onPress={() => {authCtx.signOut()}}></Button>
        ),
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
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
        component={AllExpensesScreen}
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
