import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import CategoryTiles from "../components/CategoryTiles";
import { styles } from "../util/styles";

const RecipesScreen = () => {
    const data = ["Breakfast", "Lunch", "Dinner", "Dessert"];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CategoryTiles data={data} />
        </SafeAreaView>
    );
};

export default RecipesScreen;
