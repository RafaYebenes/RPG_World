import { TextInput, StyleSheet, View, Text } from "react-native";

type keyboardType = "default" | "number-pad";
export default function Input({
  label,
  keyboardType,
  onChange,
  placeholder,
}: {
  label: string;
  keyboardType: keyboardType;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChange(value)}
        keyboardType={keyboardType}
        placeholder={placeholder}
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
