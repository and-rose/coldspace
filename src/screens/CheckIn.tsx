import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { Button } from "react-native-paper";

function CheckIn() {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
        setScanned(true);
        Alert.alert("Barcode Found!", `Type: ${type}\nData: ${data}`, [
            {
                text: "Cancel",
                onPress: () => setScanned(false),
                style: "cancel",
            },
            { text: "Add", onPress: () => setScanned(false) },
        ]);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
});

export default CheckIn;
