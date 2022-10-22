import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Divider } from "react-native-paper";
import ExpiryCard from "../components/ExpiryCard";
import { Foods } from "./Home";

const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ExpiringScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

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
                        icon={data.item.icon}
                        quantity={data.item.quantity}
                        expiry={new Date(data.item.expiry)}
                        key={data.item.food}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default ExpiringScreen;
