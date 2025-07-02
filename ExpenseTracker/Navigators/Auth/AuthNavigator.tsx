import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/LoginScreen";
import SignupScreen from "../../screens/Auth/SignupScreen";

export type AuthNavigationParamList = {
  Login: undefined;
  Signup: undefined;
};
const Stack = createNativeStackNavigator<AuthNavigationParamList>();

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: "Expense Tracker" }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerBackVisible: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerBackVisible: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
