import * as React from "react";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {
    MD3LightTheme as PaperDefaultTheme,
    Provider as PaperProvider,
    Text,
} from "react-native-paper";
import merge from "deepmerge";
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer,
} from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTabs";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/Splash";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

const theme = {
    ...CombinedDefaultTheme,
    roundness: 1,
    version: 3,
    colors: {
        ...CombinedDefaultTheme.colors,
        primary: "#A2D2FF",
        primaryAlt: "#52a7f7",
        primaryContainer: "#A2D2FF",
        secondary: "#FFC8DD",
        secondaryContainer: "#A2D2FF",
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
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen
                        name="Coldspace"
                        component={BottomTabs}
                        options={({ route }) => ({
                            headerTitle: getHeaderTitle(route),
                        })}
                    />
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
