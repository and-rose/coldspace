import React from "react";
import { View, StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        height: 80,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});

function CategoryTiles() {
    return (
        <View>
            <Surface style={styles.surface} elevation={4}>
                <Text>Surface</Text>
            </Surface>
            <Surface style={styles.surface} elevation={4}>
                <Text>Surface</Text>
            </Surface>
            <Surface style={styles.surface} elevation={4}>
                <Text>Surface</Text>
            </Surface>
            <Surface style={styles.surface} elevation={4}>
                <Text>Surface</Text>
            </Surface>
        </View>
    );
}

export default CategoryTiles;
