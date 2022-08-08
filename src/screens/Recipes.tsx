import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Avatar, Card, Paragraph } from "react-native-paper";
import CategoryTiles from "../components/CategoryTiles";

const RecipesScreen = () => {
    const recipes = [
        { recipe: "Waffles", category: "Breakfast" },
        { recipe: "Pancakes", category: "Breakfast" },
        { recipe: "Pizza", category: "Lunch" },
        { recipe: "Pasta", category: "Lunch" },
        { recipe: "Salad", category: "Dinner" },
        { recipe: "Steak", category: "Dinner" },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={recipes}
                ListHeaderComponent={() => (
                    <View style={{ height: 120 }}>
                        <CategoryTiles data={recipes} />
                    </View>
                )}
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
        margin: 10,
        elevation: 2,
    },
});
