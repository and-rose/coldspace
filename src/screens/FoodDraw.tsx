import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { FoodInfo } from "./Home";

function FoodDraw(props: { data: FoodInfo }) {
    return (
        <View>
            <Text>{props.data.food}</Text>
        </View>
    );
}

export default FoodDraw;
