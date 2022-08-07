import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableHighlight,
    RefreshControl,
} from "react-native";
import { Surface, Text, TouchableRipple, useTheme } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";
import { FoodInfo } from "../screens/Home";

const styles = StyleSheet.create({
    surface: {
        flex: 1,
        width: 130,
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

function CategoryTiles(props: { data: any[] }) {
    const theme = useTheme();
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const [categoryCounts, setCategoryCounts] = React.useState<{
        [category: string]: number;
    }>({});

    useEffect(() => {
        const uniqueCategories = [
            ...new Set(props.data.map((a: { category: string }) => a.category)),
        ];

        const uniqueCategoriesCounts = uniqueCategories.reduce(
            (acc: { [category: string]: number }, category: string) => {
                acc[category] = props.data.filter(
                    (a: { category: string }) => a.category === category
                ).length;
                return acc;
            },
            {}
        );

        setCategoryCounts(uniqueCategoriesCounts);
    }, [props.data]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <FlatGrid
            itemDimension={110}
            spacing={10}
            horizontal={true}
            data={Object.keys(categoryCounts)}
            renderItem={({ item }) => (
                <View style={{ paddingTop: 2, paddingLeft: 2 }}>
                    <Surface style={styles.surface}>
                        <TouchableRipple
                            rippleColor="rgba(0, 0, 0, .05)"
                            onPress={() => {
                                console.log(`pressed${item}`);
                            }}
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text variant="titleLarge">{item}</Text>
                                <Text
                                    variant="bodyMedium"
                                    style={{ color: theme.colors.outline }}
                                >
                                    {categoryCounts[item]} items
                                </Text>
                            </View>
                        </TouchableRipple>
                    </Surface>
                </View>
            )}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    );
}

export default CategoryTiles;
