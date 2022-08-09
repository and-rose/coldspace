import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Avatar,
    Card,
    List,
    Text,
    TouchableRipple,
    useTheme,
} from "react-native-paper";

const styles = StyleSheet.create({
    cardCircle: {
        borderRadius: 14,
        margin: 10,
        elevation: 2,
    },
});

function ExpiryCard(props: { food: string; expiry: Date }) {
    const { colors } = useTheme();
    const timeDiff = props.expiry.getTime() - new Date().getTime();
    const daysLeft = Math.floor(timeDiff / (1000 * 3600 * 24));

    const status =
        daysLeft > 5 ? "nearing" : daysLeft < 0 ? "expired" : "close";
    let icon: JSX.Element | null = null;
    let urgencyColor = colors.text;

    switch (status) {
        case "nearing":
            urgencyColor = colors.primary;
            icon = (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        variant="labelMedium"
                        style={{ color: colors.outline }}
                    >
                        {daysLeft} days
                    </Text>
                    <List.Icon color={urgencyColor} icon="clock" />
                </View>
            );
            break;

        case "close":
            urgencyColor = colors.warning;
            icon = (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        variant="labelMedium"
                        style={{ color: colors.outline }}
                    >
                        {daysLeft} days
                    </Text>
                    <List.Icon color={urgencyColor} icon="alert" />
                </View>
            );
            break;

        case "expired":
            urgencyColor = colors.error;
            icon = (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        variant="labelMedium"
                        style={{ color: colors.outline }}
                    >
                        Expired
                    </Text>
                    <List.Icon color={urgencyColor} icon="close-circle" />
                </View>
            );
            break;

        default:
            icon = <i className="fas fa-question-circle" />;
            break;
    }

    return (
        <TouchableRipple onPress={() => console.log("Pressed")}>
            <List.Item
                title={props.food}
                description="<food descript>"
                left={(props) => (
                    <List.Icon {...props} icon="fruit-watermelon" />
                )}
                right={(props) => icon}
            />
        </TouchableRipple>
    );
}

export default ExpiryCard;
