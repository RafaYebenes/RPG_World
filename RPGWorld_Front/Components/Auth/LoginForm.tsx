import { View, Text, Button, Pressable } from 'react-native';
import Input from '../Input';
import { useState } from 'react';
import { FormStyle } from '../../Styles/FormStyle';

export default function LoginForm({
  onSubmit,
  onScreenSwitch,
}: {
  onSubmit: (email: string, password: string) => void;
  onScreenSwitch: () => void;
}) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [submited, setSubmited] = useState<boolean>(false);

  return (
    <View style={FormStyle.container}>
      <View style={FormStyle.containerInputs}>
        <Input
          label="Email:"
          keyboardType="email-address"
          onChange={value => setEmail(value)}
          placeholder=""
          password={false}
        />
        {!email && submited && (
          <Text style={FormStyle.error}>You must enter a valid password.</Text>
        )}
        <Input
          label="Password:"
          keyboardType="default"
          onChange={value => setPassword(value)}
          placeholder=""
          password={true}
        />
        {!password && submited && (
          <Text style={FormStyle.error}>You must enter a valid password.</Text>
        )}
      </View>
      <View style={FormStyle.containerButtons}>
        <Button
          title="Login"
          onPress={() => {
            setSubmited(true);
            if (email && password) onSubmit(email, password);
          }}
        />
      </View>
      <View style={FormStyle.separator} />
      <View>
        <Pressable onPress={onScreenSwitch}>
          <Text>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
}
