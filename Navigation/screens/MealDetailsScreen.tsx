import { View, Text, StyleSheet, FlatList } from "react-native";
import { meal } from "../interfaces/Meal";
import { styles } from "../styles/MealStyle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MEALS } from "../data/dummy-data";

type mealsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetails"
>;

export default function MealDetailsScreen({ route }: mealsDetailsScreenProps) {
  const meal = MEALS.find((meal) => meal.id == route.params.mealId);
  if (meal) {
    return (
      <View>
        <View>
          <Text style={styles.h2}>Ingredients:</Text>
          <FlatList
            data={meal.ingredients}
            renderItem={(itemData) => (
              <Text
                style={[
                  styles.li,
                  itemData.index % 2 == 0 ? { backgroundColor: "white" } : {},
                ]}
              >
                {itemData.item}
              </Text>
            )}
            keyExtractor={(item, index) => 1 + index.toString()}
          ></FlatList>
        </View>

        <View>
          <Text style={styles.h2}>Steps:</Text>
          <FlatList
            data={meal.steps}
            renderItem={(itemData) => (
              <Text
                style={[
                  styles.li,
                  itemData.index % 2 == 0 ? { backgroundColor: "white" } : {},
                ]}
              >
                {itemData.item}
              </Text>
            )}
            keyExtractor={(item, index) => 1 + index.toString()}
          ></FlatList>
        </View>

        <View style={styles.tags}>
          <Text style={styles.tag}>{meal.affordability}</Text>
          <Text style={styles.tag}>{meal.complexity}</Text>
          {meal.isGlutenFree && <Text style={styles.tag}>Gluten free</Text>}
          {meal.isVegan && <Text style={styles.tag}>Vegan</Text>}
          {meal.isVegetarian && <Text style={styles.tag}>Vegetarian</Text>}
          {meal.isLactoseFree && <Text style={styles.tag}>Lactose free</Text>}
        </View>
      </View>
    );
  }
}
