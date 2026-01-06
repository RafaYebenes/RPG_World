import { View, Text, Button, Pressable } from "react-native";
import Input from "../Input";
import { useState } from "react";
import { FormStyles } from "../../styles/FormStyles";

export default function SignupForm({
  onSubmit,
  onScreenSwitch,
}: {
  onSubmit: (email: string, password: string) => void;
  onScreenSwitch: () => void;
}) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirmed, setPasswordConfirmed] = useState<string>();
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
        <Input
          label="Confirm password:"
          keyboardType="default"
          onChange={(value) => setPasswordConfirmed(value)}
          placeholder=""
          password={true}
        ></Input>
        {!passwordConfirmed && password !== passwordConfirmed && submited && (
          <Text style={FormStyles.error}>Passwords must match.</Text>
        )}
      </View>
      <View style={FormStyles.containerButtons}>
        <Button
          title="Signup"
          onPress={() => {
            setSubmited(true);
            if (
              email &&
              password &&
              passwordConfirmed &&
              password == passwordConfirmed
            )
              onSubmit(email, password);
          }}
        ></Button>
      </View>
      <View style={FormStyles.separator}></View>
      <View>
        <Pressable onPress={onScreenSwitch}>
          <Text>Login to your accout</Text>
        </Pressable>
      </View>
    </View>
  );
}
