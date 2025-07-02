import { StatusBar } from "expo-status-bar";
import MainNavigator from "./Navigators/MainNavigator";
import AuthContextProvider from "./contexts/AuthContext";

export default function App() {
 
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <MainNavigator></MainNavigator>
      </AuthContextProvider>
    </>
  );
}
