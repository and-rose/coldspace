import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const CameraOverlay = () => {
    return (
        <View
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={styles.cameraFrame}></View>
        </View>
    );
};

export default CameraOverlay;

const styles = StyleSheet.create({
    cameraFrame: {
        width: 350,
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 5,
        borderRadius: 10,
    },
});
