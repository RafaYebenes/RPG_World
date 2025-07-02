import { TextInput, StyleSheet, View, Text } from "react-native";

type keyboardType = "default" | "number-pad" | "email-address";
export default function Input({
  label,
  keyboardType,
  onChange,
  placeholder,
  password,
}: {
  label: string;
  keyboardType: keyboardType;
  onChange: (value: string) => void;
  placeholder: string;
  password: boolean;
}) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChange(value)}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={password}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
  },
});
