import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
    FlatList,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    Divider,
    FAB,
    List,
    Modal,
    TouchableRipple,
    useTheme,
} from "react-native-paper";
import { RootStackParamList } from "../../App";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
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
    expiry: string;
    category: string;
    quantity: number;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const Foods: FoodInfo[] = [
    {
        food: "apple",
        expiry: "2022-10-05",
        category: "Fruit",
        quantity: 1,
        icon: "food-apple",
    },
    {
        food: "banana",
        expiry: "2022-10-15",
        category: "Fruit",
        quantity: 3,
        icon: "food",
    },
    {
        food: "lemon",
        expiry: "2022-10-18",
        category: "Fruit",
        quantity: 2,
        icon: "fruit-citrus",
    },
    {
        food: "carrot",
        expiry: "2022-10-20",
        category: "Vegetable",
        quantity: 6,
        icon: "carrot",
    },
    {
        food: "bread",
        expiry: "2022-10-25",
        category: "Bread",
        quantity: 4,
        icon: "baguette",
    },
    {
        food: "cheese",
        expiry: "2022-10-30",
        category: "Vegetable",
        quantity: 5,
        icon: "cheese",
    },
    {
        food: "chicken",
        expiry: "2022-10-30",
        category: "Meat",
        quantity: 5,
        icon: "food-drumstick",
    },
    {
        food: "eggs",
        expiry: "2022-10-30",
        category: "Meat",
        quantity: 1,
        icon: "egg",
    },
    {
        food: "steak",
        expiry: "2022-10-30",
        category: "Meat",
        quantity: 2,
        icon: "food-steak",
    },
    {
        food: "fish",
        expiry: "2022-10-30",
        category: "Fish",
        quantity: 3,
        icon: "fish",
    },
    {
        food: "milk",
        expiry: "2022-10-30",
        category: "Dairy",
        quantity: 1,
        icon: "blender",
    },
    {
        food: "pasta",
        expiry: "2022-10-30",
        category: "Pasta",
        quantity: 1,
        icon: "pasta",
    },
    {
        food: "rice",
        expiry: "2022-10-30",
        category: "Rice",
        quantity: 1,
        icon: "rice",
    },
    {
        food: "soup",
        expiry: "2022-10-30",
        category: "Soup",
        quantity: 1,
        icon: "bowl",
    },
];

const FoodSpaces = () => {
    const theme = useTheme();
    const navigation = useNavigation<homeScreenProp>();
    const [refreshing, setRefreshing] = React.useState(false);
    const [filters, setFilters] = React.useState<string[]>([]);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                ListHeaderComponent={
                    <View>
                        <CategoryTiles
                            data={Foods}
                            setFilters={setFilters}
                            filters={filters}
                        />
                    </View>
                }
                ItemSeparatorComponent={() => <Divider bold leftInset />}
                keyExtractor={(item) => item.food}
                renderItem={(data) => (
                    <TouchableRipple onPress={() => console.log("Pressed")}>
                        <List.Item
                            title={data.item.food}
                            key={data.item.food}
                            description={`Quantity: ${data.item.quantity}`}
                            left={(props) => (
                                <List.Icon {...props} icon={data.item.icon} />
                            )}
                            right={(props) => (
                                <List.Icon {...props} icon="chevron-right" />
                            )}
                        />
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
            <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
            >
                <Text>Example Modal. Click outside this area to dismiss.</Text>
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
        marginVertical: 5,
        marginHorizontal: 10,
    },
    separator: {
        margin: 5,
    },
});

const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 30,
    height: "60%",
};

export default HomeScreen;
