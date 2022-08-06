import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "../util/styles";

const RecipesScreen = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text>Recipes</Text>
        </View>
    </SafeAreaView>
);

export default RecipesScreen;
