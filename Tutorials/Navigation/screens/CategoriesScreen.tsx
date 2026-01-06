import { View,  FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CATEGORIES } from "../data/dummy-data";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ButtonCategory from "../components/CategoryCard";
import { RootStackParamList } from "../App";

type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealsCategories"
>;

function CategoriesScreen() {
  const navigation = useNavigation<CategoriesScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ButtonCategory
            category={itemData.item}
            onPress={() =>
              navigation.navigate("Meals", { categoryId: itemData.item.id })
            }
          ></ButtonCategory>
        )}
        numColumns={2}
      ></FlatList>
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
