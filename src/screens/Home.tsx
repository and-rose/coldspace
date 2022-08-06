import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    ScrollView,
    RefreshControl,
} from "react-native";
import CategoryTiles from "../components/CategoryTiles";

const HomeScreen = () => {
    const Foods = [
        "apple",
        "banana",
        "cherry",
        "date",
        "egg",
        "fig",
        "grape",
        "honey",
        "milk",
        "orange",
        "pear",
        "pineapple",
        "strawberry",
        "tomato",
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CategoryTiles />
            {/* <ScrollView>
                {Foods.map((food) => (
                    <Card key={food} elevation={2} style={styles.cardCircle}>
                        <Card.Title
                            title={food}
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
                ))}
            </ScrollView> */}
        </SafeAreaView>
    );
};

export default HomeScreen;
