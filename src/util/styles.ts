import {
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    StatusBar,
} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
