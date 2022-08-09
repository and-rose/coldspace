import React from "react";
import {
    FlatList,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    View,
} from "react-native";
import { List, TouchableRipple } from "react-native-paper";
import CategoryTiles from "../components/CategoryTiles";

const Recipes = [
    { recipe: "Waffles", category: "Breakfast" },
    { recipe: "Omelette", category: "Breakfast" },
    { recipe: "Pizza", category: "Lunch" },
    { recipe: "Pasta", category: "Lunch" },
    { recipe: "Pancakes", category: "Breakfast" },
    { recipe: "Salad", category: "Dinner" },
    { recipe: "Steak", category: "Dinner" },
    { recipe: "Rice", category: "Lunch" },
    { recipe: "Chicken", category: "Dinner" },
    { recipe: "Fish", category: "Dinner" },
    { recipe: "Beef", category: "Dinner" },
    { recipe: "Sushi", category: "Lunch" },
    { recipe: "Soup", category: "Lunch" },
    { recipe: "Ice Cream", category: "Dessert" },
    { recipe: "Chocolate Cake", category: "Dessert" },
    { recipe: "Cookies", category: "Dessert" },
    { recipe: "Jerky", category: "Snack" },
];

const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const RecipesScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [filters, setFilters] = React.useState<string[]>([]);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={
                    filters.length > 0
                        ? Recipes.filter((food) =>
                              filters.includes(food.category)
                          )
                        : Recipes
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListFooterComponent={() => <View style={styles.separator} />}
                keyExtractor={(item) => item.recipe}
                ListHeaderComponent={
                    <View>
                        <CategoryTiles
                            data={Recipes}
                            setFilters={setFilters}
                            filters={filters}
                        />
                    </View>
                }
                renderItem={(data) => (
                    <TouchableRipple onPress={() => console.log("Pressed")}>
                        <List.Item
                            title={data.item.recipe}
                            description="<recipe descript>"
                            left={(props) => (
                                <List.Icon {...props} icon="food" />
                            )}
                            right={(props) => (
                                <List.Icon {...props} icon="chevron-right" />
                            )}
                        />
                    </TouchableRipple>
                )}
            />
        </SafeAreaView>
    );
};

export default RecipesScreen;

const styles = StyleSheet.create({
    cardCircle: {
        borderRadius: 14,
        marginHorizontal: 10,
        elevation: 2,
    },
    separator: {
        margin: 5,
    },
});
