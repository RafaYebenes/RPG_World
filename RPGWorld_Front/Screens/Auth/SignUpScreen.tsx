import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNavigationParamList } from '../../Navigators/AuthNavigator';
import SignUpForm from '../../Components/Auth/SignUpForm';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { View } from 'react-native';

type SignupScreenNavigationProps =
  NativeStackNavigationProp<AuthNavigationParamList>;

export default function SignUpScreen() {
  const navigation = useNavigation<SignupScreenNavigationProps>();
  const AuthCtx = useContext(AuthContext);

  function onSubmit(email: string, password: string) {
    AuthCtx.signUp(email, password);
  }

  function onScreenSwitch() {
    navigation.navigate('Login');
  }

  return (
    <View>
      <SignUpForm
        onSubmit={onSubmit}
        onScreenSwitch={onScreenSwitch}
      />
    </View>
  );
}
