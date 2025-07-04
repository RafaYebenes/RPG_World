import { View } from "react-native";
import LoginForm from "../../Components/Auth/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthNavigationParamList } from "../../Navigators/AuthNavigator";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

type LoginScreenNavigationProps =
  NativeStackNavigationProp<AuthNavigationParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const authCtx = useContext(AuthContext);

  function onSubmit(email: string, password: string) {
    authCtx.signIn(email, password);
  }

  function onScreenSwitch() {
    navigation.navigate("Signup");
  }

  return (
    <View>
      <LoginForm
        onSubmit={onSubmit}
        onScreenSwitch={onScreenSwitch}
      />
    </View>
  );
}