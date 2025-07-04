import { View, Text } from 'react-native';
import { WelcomeStyle } from '../Styles/WelcomeStyle';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Button } from 'react-native';

export default function WelcomeScreen() {
  const authCtx = useContext(AuthContext);

  return (
    <View style={WelcomeStyle.container}>
      <Text>Welcome</Text>
      <Button title={'Sign out'} onPress={authCtx.signOut}/>
    </View>
  );
}
