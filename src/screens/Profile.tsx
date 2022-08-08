import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "../util/styles";

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    );
};
export default ProfileScreen;
