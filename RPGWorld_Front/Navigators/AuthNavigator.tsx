import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';

export type AuthNavigationParamList = {
  Login: undefined;
  Signup: undefined;
};
const Stack = createNativeStackNavigator<AuthNavigationParamList>();

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: 'Expense Tracker' }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
