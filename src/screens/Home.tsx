import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    ScrollView,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const styles = StyleSheet.create({
    cardCircle: {
        borderRadius: 14,
        margin: 10,
        elevation: 2,
    },
});

const HomeScreen = () => {
    const Foods = [
        "apple",
        "banana",
        "cherry",
        "date",
        "egg",
        "fig",
        "grape",
        "honey",
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
