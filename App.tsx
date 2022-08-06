import * as React from "react";
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
    MD3DarkTheme as PaperDarkTheme,
    MD3LightTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer,
    Route,
    useNavigation,
    useNavigationState,
    useRoute,
} from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTabs";
import { createStackNavigator } from "@react-navigation/stack";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

const theme = {
    ...CombinedDefaultTheme,
    roundness: 1,
    version: 3,
    colors: {
        ...CombinedDefaultTheme.colors,
        primary: "#A2D2FF",
        primaryContainer: "#A2D2FF",
        surfaceVariant: "#A2D2FF",
        surface: "#FFFFFF",
        secondary: "#FFC8DD",
        error: "#fa7676",
        warning: "#ffc46b",
        tertiary: "#CDB4DB",
    },
};

function getHeaderTitle(route: any) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen

    return getFocusedRouteNameFromRoute(route) ?? "Foodspace";
}

export default function App() {
    const Stack = createStackNavigator();

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName="Coldspace">
                    <Stack.Screen
                        name="Coldspace"
                        component={BottomTabs}
                        options={({ route }) => ({
                            headerTitle: getHeaderTitle(route),
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
