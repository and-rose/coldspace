import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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
    Modal,
} from "react-native";
import {
    Avatar,
    Card,
    FAB,
    Paragraph,
    TouchableRipple,
    useTheme,
} from "react-native-paper";
import { RootStackParamList } from "../../App";
import CategoryTiles from "../components/CategoryTiles";

type homeScreenProp = StackNavigationProp<RootStackParamList, "CheckIn">;
export type HomeStackParamList = {
    FoodDraw: undefined;
    Categories: undefined;
};

const HomeScreen = () => {
    return <FoodSpaces />;
};

const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

export type FoodInfo = {
    food: string;
    expiry: String;
    category: string;
};

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

const FoodSpaces = () => {
    const theme = useTheme();
    const navigation = useNavigation<homeScreenProp>();
    const [refreshing, setRefreshing] = React.useState(false);
    const [filters, setFilter] = React.useState<string[]>([]);
    const [foods, setFoods] = React.useState<FoodInfo[]>(Foods);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <CategoryTiles
                    data={foods}
                    setFilters={setFilter}
                    filters={filters}
                />
            </View>
            <FlatList
                data={
                    filters.length > 0
                        ? Foods.filter((food) =>
                              filters.includes(food.category)
                          )
                        : Foods
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={(data) => (
                    <TouchableRipple onPress={showModal}>
                        <Card
                            key={data.item.food}
                            elevation={2}
                            style={styles.cardCircle}
                            onPress={showModal}
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
                    </TouchableRipple>
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
            <Modal visible={visible} onDismiss={hideModal}>
                <Paragraph>
                    This is a card with a title, subtitle, and image.
                </Paragraph>
            </Modal>
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
        marginHorizontal: 10,
        elevation: 2,
    },
    separator: {
        margin: 5,
    },
});

const containerStyle = { backgroundColor: "white", padding: 20 };

export default HomeScreen;
