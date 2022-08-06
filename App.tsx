import {
    Provider as PaperProvider,
    MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import * as React from "react";
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

const theme = {
    ...DefaultTheme,
    roundness: 1,
    version: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: "#A2D2FF",
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
            <NavigationContainer>
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
