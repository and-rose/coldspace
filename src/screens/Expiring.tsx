import React from "react";
import { RefreshControl, SafeAreaView, ScrollView } from "react-native";
import ExpiryCard from "../components/ExpiryCard";

const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ExpiringScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const Foods = [
        "apple",
        "banana",
        "cherry",
        "date",
        "egg",
        "fig",
        "grape",
        "honey",
        "milk",
        "orange",
        "pear",
        "pineapple",
        "strawberry",
        "tomato",
    ];

    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{
                    justifyContent: "center",
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {Foods.map((food) => (
                    <ExpiryCard food={food} key={food} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ExpiringScreen;
