import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "../util/styles";

const SettingsScreen = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    </SafeAreaView>
);

export default SettingsScreen;
