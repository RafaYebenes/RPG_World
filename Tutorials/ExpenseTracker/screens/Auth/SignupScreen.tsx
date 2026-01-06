import { View, Text } from "react-native";
import LoginForm from "../../components/Auth/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthNavigationParamList } from "../../Navigators/Auth/AuthNavigator";
import SignupForm from "../../components/Auth/SignupForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

type SignupScreenNavigationProps =
  NativeStackNavigationProp<AuthNavigationParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<SignupScreenNavigationProps>();
  const AuthCtx = useContext(AuthContext);

  function onSubmit(email: string, password: string) {
    AuthCtx.signUp(email, password);
  }

  function onScreenSwitch() {
    navigation.navigate("Login");
  }

  return (
    <View>
      <SignupForm
        onSubmit={onSubmit}
        onScreenSwitch={onScreenSwitch}
      ></SignupForm>
    </View>
  );
}
