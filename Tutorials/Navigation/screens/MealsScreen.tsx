import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../App";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealCard from "../components/MealCard";

type mealsScreenProps = NativeStackScreenProps<RootStackParamList, "Meals">;

export default function MealsScreen({ route, navigation }: mealsScreenProps) {
  const { categoryId } = route.params;
  const mealsFiltered = MEALS.filter((meal) =>
    meal.categoryIds.some((id) => id == categoryId)
  );
  return (
    <View>
      <FlatList
        data={mealsFiltered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => (
          <MealCard
            meal={itemData.item}
            onPress={() =>
              navigation.navigate("MealDetails", { mealId: itemData.item.id })
            }
          ></MealCard>
        )}
      ></FlatList>
    </View>
  );
}
