import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, useTheme } from "react-native-paper";

const Splash = (props: any) => {
    const [appIsReady, setAppIsReady] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setAppIsReady(true);
        }, 4500);
    }, []);

    useEffect(() => {
        if (appIsReady) {
            props.navigation.replace("Coldspace");
        }
    }, [appIsReady, props.navigation]);

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                flex: 1,
                backgroundColor: theme.colors.onPrimary,
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                    name="fridge"
                    size={35}
                    color={theme.colors.primaryAlt}
                />
                <Text
                    variant={"displaySmall"}
                    style={{
                        color: theme.colors.primary,
                        letterSpacing: 7,
                        fontWeight: "100",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "900",
                            color: theme.colors.primaryAlt,
                            letterSpacing: 0,
                        }}
                    >
                        COLD
                    </Text>
                    SPACE
                </Text>
            </View>
            <ActivityIndicator
                animating={true}
                color={theme.colors.primary}
                size={"large"}
            />
        </View>
    );
};

export default Splash;
