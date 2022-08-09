import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Divider } from "react-native-paper";
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
        { food: "apple", expiry: "2022-08-05" },
        { food: "banana", expiry: "2022-08-15" },
        { food: "orange", expiry: "2022-08-18" },
        { food: "grape", expiry: "2022-08-11" },
        { food: "pear", expiry: "2022-08-14" },
        { food: "cherry", expiry: "2022-08-17" },
        { food: "strawberry", expiry: "2022-08-10" },
        { food: "kiwi", expiry: "2022-08-13" },
        { food: "mango", expiry: "2022-08-16" },
        { food: "watermelon", expiry: "2022-08-19" },
        { food: "pineapple", expiry: "2022-08-12" },
        { food: "peach", expiry: "2022-08-15" },
        { food: "apricot", expiry: "2022-08-18" },
        { food: "avocado", expiry: "2022-08-11" },
    ];

    return (
        <SafeAreaView>
            <FlatList
                data={Foods.sort((a, b) => {
                    return (
                        new Date(a.expiry).getTime() -
                        new Date(b.expiry).getTime()
                    );
                })}
                keyExtractor={(item) => item.food}
                refreshing={refreshing}
                onRefresh={onRefresh}
                ItemSeparatorComponent={() => <Divider bold leftInset />}
                renderItem={(data) => (
                    <ExpiryCard
                        food={data.item.food}
                        expiry={new Date(data.item.expiry)}
                        key={data.item.food}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default ExpiringScreen;
