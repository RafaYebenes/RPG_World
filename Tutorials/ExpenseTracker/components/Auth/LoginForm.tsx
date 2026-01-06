import { View, Text, Button, Pressable } from "react-native";
import Input from "../Input";
import { useState } from "react";
import { FormStyles } from "../../styles/FormStyles";

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
    <View style={FormStyles.container}>
      <View style={FormStyles.containerInputs}>
        <Input
          label="Email:"
          keyboardType="email-address"
          onChange={(value) => setEmail(value)}
          placeholder=""
          password={false}
        ></Input>
        {!email && submited && (
          <Text style={FormStyles.error}>You must enter a valid password.</Text>
        )}
        <Input
          label="Password:"
          keyboardType="default"
          onChange={(value) => setPassword(value)}
          placeholder=""
          password={true}
        ></Input>
        {!password && submited && (
          <Text style={FormStyles.error}>You must enter a valid password.</Text>
        )}
      </View>
      <View style={FormStyles.containerButtons}>
        <Button
          title="Login"
          onPress={() => {
            setSubmited(true);
            if (email && password) onSubmit(email, password);
          }}
        ></Button>
      </View>
      <View style={FormStyles.separator}></View>
      <View>
        <Pressable onPress={onScreenSwitch}>
          <Text>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
}
