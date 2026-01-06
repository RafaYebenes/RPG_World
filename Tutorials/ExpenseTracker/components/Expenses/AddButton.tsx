import { Pressable, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../Navigators/Expenses/ExpensesNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type AddButtonNavigationProps = NativeStackNavigationProp<StackParamList>;

export default function AddButton() {
  const navigation = useNavigation<AddButtonNavigationProps>();
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("ManageExpenses");
        }}
      >
        <Ionicons name="add" size={24}></Ionicons>
      </Pressable>
    </View>
  );
}
