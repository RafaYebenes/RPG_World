import { FlatList, View, Text } from "react-native";

import { useContext } from "react";
import { FavoritesContext } from "../context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerParamList } from "../App";

type favoritsScreenProps = NativeStackScreenProps<DrawerParamList, "Favorits">;

export default function Favorits({ route, navigation }: favoritsScreenProps) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoritMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  return (
    <View>
      <FlatList
        data={favoritMeals}
        renderItem={(itemData) => (
          <MealCard
            meal={itemData.item}
            onPress={() => {
              navigation.navigate("MealDetails", {
                mealId: itemData.item.id,
              });
            }}
          ></MealCard>
        )}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
}
