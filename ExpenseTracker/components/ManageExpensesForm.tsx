import { useState } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "./Input";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export default function ManageExpensesForm({
  expenseId,
  onCancel,
  onSubmit,
  onDelete,
}: {
  expenseId?: number;
  onCancel: () => void;
  onSubmit: (name?: string, date?: Date, cost?: number) => void;
  onDelete: (expenseId: number) => void;
}) {
  const [name, setName] = useState<string>();
  const [date, setDate] = useState<Date>(new Date());
  const [cost, setCost] = useState<number>();

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (selectedDate) setDate(selectedDate);
  };
  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
      is24Hour: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <Input
          label="Name:"
          keyboardType="default"
          onChange={(value) => setName(value)}
        ></Input>
        <Input
          label="Cost:"
          keyboardType="number-pad"
          onChange={(value) => setCost(+value)}
        ></Input>
        <View>
          <Button onPress={showDatePicker} title={"Date"}></Button>
          <Text>Selected date: {date.toDateString()}</Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <View>
          <Button title="Cancel" onPress={onCancel}></Button>
        </View>
        <View>
          <Button
            title={expenseId ? "Update" : "Add"}
            onPress={() => onSubmit(name, date, cost)}
          ></Button>
        </View>
      </View>
      <View style={styles.separator}></View>
      {expenseId && (
        <View style={styles.trashIcon}>
          <Pressable
            onPress={() => {
              onDelete;
            }}
          >
            <Ionicons name="trash" size={24}></Ionicons>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  containerInputs: {
    width: "100%",
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
    width: "80%",
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "black",
    width: "80%",
  },
  trashIcon: {
    margin: 10,
  },
});
