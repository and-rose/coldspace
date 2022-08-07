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
} from "react-native";
import { FAB, useTheme } from "react-native-paper";
import { RootStackParamList } from "../../App";
import CategoryTiles from "../components/CategoryTiles";
import FoodDraw from "./FoodDraw";

type homeScreenProp = StackNavigationProp<RootStackParamList, "CheckIn">;
export type HomeStackParamList = {
    FoodDraw: undefined;
    Categories: undefined;
};

const HomeScreen = () => {
    const theme = useTheme();
    const Stack = createStackNavigator<HomeStackParamList>();

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerTitleStyle: {
                    color: theme.colors.text,
                    fontFamily: "Roboto",
                },
            }}
        >
            <Stack.Screen
                name="Categories"
                component={FoodSpaces}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoodDraw"
                component={FoodDraw}
                options={{ ...TransitionPresets.SlideFromRightIOS }}
            />
        </Stack.Navigator>
    );
};

const FoodSpaces = () => {
    const theme = useTheme();
    const navigation = useNavigation<homeScreenProp>();
    const [isLoading, setIsLoading] = React.useState(false);
    const Stack = createStackNavigator<RootStackParamList>();
    const data = [
        "All",
        "Fruit",
        "Vegetable",
        "Meat",
        "Fish",
        "Dairy",
        "Bread",
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CategoryTiles data={data} />
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

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default HomeScreen;
