import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import Ionicons from "@expo/vector-icons/Ionicons";
import CameraOverlay from "../components/CameraOverlay";

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
        fetch(
            "https://world.openfoodfacts.org/api/v0/product/" + data + ".json"
        )
            .then((response) => response.json())
            .then((json) => {
                Alert.alert(
                    "Product Found!",
                    `Type: ${type}\nData: ${data}\n[${json.product.brands}]: ${json.product.product_name}`,
                    [
                        {
                            text: "Cancel",
                            onPress: () => setScanned(false),
                            style: "cancel",
                        },
                        { text: "Add", onPress: () => setScanned(false) },
                    ]
                );
            })
            .catch((error) => {
                Alert.alert(
                    "No Food Product Found!",
                    `Type: ${type}\nData: ${data}\n[${error}]`,
                    [{ text: "OK", onPress: () => setScanned(false) }]
                );
            })
            .finally(() => {});
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Text>Scan a barcode to check an item in!</Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <CameraOverlay />
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
