import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    RefreshControl,
} from "react-native";
import { Avatar, Card, Paragraph } from "react-native-paper";
import CategoryTiles from "../components/CategoryTiles";

const recipes = [
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
    const [data, setData] = React.useState(recipes);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <CategoryTiles
                    data={recipes}
                    setFilters={setFilters}
                    filters={filters}
                />
            </View>
            <FlatList
                data={
                    filters.length > 0
                        ? data.filter((food) => filters.includes(food.category))
                        : data
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={(data) => (
                    <Card
                        key={data.item.recipe}
                        elevation={2}
                        style={styles.cardCircle}
                    >
                        <Card.Title
                            title={data.item.recipe}
                            left={(props) => (
                                <Avatar.Icon {...props} icon="apple" />
                            )}
                        />
                        <Card.Content>
                            <Paragraph>
                                This is a card with a title, subtitle, and
                                image.
                            </Paragraph>
                        </Card.Content>
                    </Card>
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
