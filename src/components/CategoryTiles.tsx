import React from "react";
import {
    View,
    StyleSheet,
    TouchableHighlight,
    RefreshControl,
} from "react-native";
import { Surface, Text, TouchableRipple, useTheme } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        marginTop: 8,
        backgroundColor: "aliceblue",
        maxHeight: 400,
    },
    surface: {
        flex: 1,
        height: 180,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});

const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

function CategoryTiles() {
    const theme = useTheme();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <FlatGrid
            itemDimension={140}
            spacing={20}
            data={[
                "All",
                "Fruit",
                "Vegetable",
                "Meat",
                "Fish",
                "Dairy",
                "Bread",
            ]}
            renderItem={({ item }) => (
                <View style={{ paddingTop: 2 }}>
                    <Surface style={styles.surface} elevation={2}>
                        <TouchableRipple
                            rippleColor="rgba(0, 0, 0, .05)"
                            onPress={() => console.log("Pressed")}
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
                                    {Math.floor(Math.random() * 10)} items
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
