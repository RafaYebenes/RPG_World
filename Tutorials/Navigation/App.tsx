import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { CATEGORIES, MEALS } from "./data/dummy-data";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritsButton from "./components/FavoritsButton";
import Favorits from "./screens/FavoritsScreen";
import FavoritesContextProvider from "./context/favorites-context";

export type RootStackParamList = {
  MealsCategories: undefined;
  Meals: { categoryId: string };
  MealDetails: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type DrawerParamList = {
  MealsCategories: undefined ;
  MealDetails: { mealId: string };
  Favorits: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
      ></Drawer.Screen>
      <Drawer.Screen name="Favorits" component={Favorits}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MealsCategories"
              options={{ title: "Meals Categories", headerShown: false }}
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="Meals"
              component={MealsScreen}
              options={(props) => {
                const category = CATEGORIES.find(
                  (category) => category.id == props.route.params.categoryId
                );
                return {
                  title: category?.title,
                };
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={(props) => {
                const meal = MEALS.find(
                  (meal) => meal.id == props.route.params.mealId
                );
                return {
                  title: meal?.title,
                  headerRight: () => (
                    <FavoritsButton mealId={meal?.id}></FavoritsButton>
                  ),
                };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
