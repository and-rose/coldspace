import { useNavigation } from "@react-navigation/native";
import {
    createStackNavigator,
    StackNavigationProp,
    TransitionPresets,
} from "@react-navigation/stack";
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
    FlatList,
} from "react-native";
import { Avatar, Card, FAB, Paragraph, useTheme } from "react-native-paper";
import { RootStackParamList } from "../../App";
import CategoryTiles from "../components/CategoryTiles";
import FoodDraw from "./FoodDraw";

type homeScreenProp = StackNavigationProp<RootStackParamList, "CheckIn">;
export type HomeStackParamList = {
    FoodDraw: undefined;
    Categories: undefined;
};

const HomeScreen = () => {
    return <FoodSpaces />;
};

export type FoodInfo = {
    food: string;
    expiry: String;
    category: string;
};

const FoodSpaces = () => {
    const theme = useTheme();
    const navigation = useNavigation<homeScreenProp>();
    const Foods: FoodInfo[] = [
        { food: "apple", expiry: "2022-08-05", category: "Fruit" },
        { food: "banana", expiry: "2022-08-15", category: "Fruit" },
        { food: "orange", expiry: "2022-08-18", category: "Fruit" },
        { food: "carrot", expiry: "2022-08-20", category: "Vegetable" },
        { food: "potato", expiry: "2022-08-25", category: "Vegetable" },
        { food: "tomato", expiry: "2022-08-30", category: "Vegetable" },
        { food: "chicken", expiry: "2022-08-30", category: "Meat" },
        { food: "beef", expiry: "2022-08-30", category: "Meat" },
        { food: "pork", expiry: "2022-08-30", category: "Meat" },
        { food: "fish", expiry: "2022-08-30", category: "Fish" },
        { food: "milk", expiry: "2022-08-30", category: "Dairy" },
        { food: "cheese", expiry: "2022-08-30", category: "Dairy" },
        { food: "bread", expiry: "2022-08-30", category: "Bread" },
        { food: "pasta", expiry: "2022-08-30", category: "Pasta" },
        { food: "rice", expiry: "2022-08-30", category: "Rice" },
        { food: "soup", expiry: "2022-08-30", category: "Soup" },
        { food: "sushi", expiry: "2022-08-30", category: "Sushi" },
        { food: "pizza", expiry: "2022-08-30", category: "Pizza" },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={Foods}
                ListHeaderComponent={() => (
                    <View style={{ height: 120 }}>
                        <CategoryTiles data={Foods} />
                    </View>
                )}
                renderItem={(data) => (
                    <Card
                        key={data.item.food}
                        elevation={2}
                        style={styles.cardCircle}
                    >
                        <Card.Title
                            title={data.item.food}
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
            <FAB
                icon="barcode-scan"
                style={styles.fab}
                customSize={75}
                variant={"primary"}
                color={theme.colors.onSurface}
                onPress={() => {
                    navigation.navigate("CheckIn");
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
    },
    cardCircle: {
        borderRadius: 14,
        margin: 10,
        elevation: 2,
    },
});

export default HomeScreen;
