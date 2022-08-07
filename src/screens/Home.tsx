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
} from "react-native";
import { FAB, useTheme } from "react-native-paper";
import { RootStackParamList } from "../../App";
import CategoryTiles from "../components/CategoryTiles";

type homeScreenProp = StackNavigationProp<RootStackParamList, "CheckIn">;

const HomeScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation<homeScreenProp>();
    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CategoryTiles />
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
