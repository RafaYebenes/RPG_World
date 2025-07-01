import { useState } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "./Input";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { IExpense } from "../../Interfaces/IExpense";

export default function ManageExpensesForm({
  expense,
  onCancel,
  onSubmit,
  onDelete,
}: {
  expense?: IExpense;
  onCancel: () => void;
  onSubmit: (name?: string, date?: Date, cost?: number) => void;
  onDelete: (expenseId: string) => void;
}) {
  const [name, setName] = useState<string>();
  const initDate = expense ? expense.date : new Date();
  const [date, setDate] = useState<Date>(initDate);
  const [cost, setCost] = useState<number>();
  const [submited, setSubmited] = useState<boolean>(false);

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
          placeholder={expense ? expense.name : ""}
        ></Input>
        {!name && submited && (
          <Text style={styles.error}>You must enter a name.</Text>
        )}
        <Input
          label="Cost:"
          keyboardType="number-pad"
          onChange={(value) => setCost(+value)}
          placeholder={expense ? "" + expense.cost : ""}
        ></Input>
        {!cost && submited && (
          <Text style={styles.error}>You must enter a cost.</Text>
        )}
        <View>
          <Button onPress={showDatePicker} title={"Date"}></Button>
          <Text>Selected date: {date.toLocaleString().split(",")[0]}</Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <View>
          <Button title="Cancel" onPress={onCancel}></Button>
        </View>
        <View>
          <Button
            title={expense ? "Update" : "Add"}
            onPress={() => {
              setSubmited(true);
              if (name && date && cost) onSubmit(name, date, cost);
            }}
          ></Button>
        </View>
      </View>
      <View style={styles.separator}></View>
      {expense && (
        <View style={styles.trashIcon}>
          <Pressable
            onPress={() => {
              onDelete(expense.id);
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
  error: {
    color: "red",
  },
});
