import React from "react";
import { Avatar, Card, List, useTheme, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardCircle: {
        borderRadius: 14,
        margin: 10,
        elevation: 2,
    },
});

function ExpiryCard(props: { food: string }) {
    const { colors } = useTheme();
    const status =
        Math.random() > 0.5
            ? "nearing"
            : Math.random() > 0.5
            ? "expired"
            : "close";
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
                        5 days
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
                        5 days
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
                        5 days
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
        <Card key={props.food} elevation={1} style={styles.cardCircle}>
            <Card.Title
                title={props.food}
                titleVariant={"titleLarge"}
                subtitle={"Quantity: " + Math.floor(Math.random() * 100)}
                subtitleVariant={"labelMedium"}
                subtitleStyle={{ color: colors.outline }}
                left={(props) => (
                    <Avatar.Icon {...props} icon="fruit-watermelon" />
                )}
                right={(props) => icon}
            />
            {/* <Card.Content>
                <Paragraph>
                    This is a card with a title, subtitle, and image.
                </Paragraph>
            </Card.Content> */}
        </Card>
    );
}

export default ExpiryCard;
