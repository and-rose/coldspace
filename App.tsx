import * as React from "react";
import {
    DefaultTheme as NavigationDefaultTheme,
    useNavigation,
} from "@react-navigation/native";
import {
    IconButton,
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
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import Splash from "./src/screens/Splash";
import CheckIn from "./src/screens/CheckIn";
import Settings from "./src/screens/Settings";
import { HeaderStyleInterpolators } from "@react-navigation/stack";

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

export type RootStackParamList = {
    Coldspace: undefined;
    CheckIn: undefined;
    Splash: undefined;
    Settings: undefined;
};

export default function App() {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    initialRouteName="Splash"
                    screenOptions={{
                        headerTitleStyle: {
                            color: theme.colors.text,
                            fontFamily: "Roboto",
                        },
                    }}
                >
                    <Stack.Screen
                        name="Coldspace"
                        component={BottomTabs}
                        options={({ route, navigation }) => ({
                            headerTitle: getHeaderTitle(route),
                            headerRight: () => (
                                <IconButton
                                    icon="cog"
                                    size={20}
                                    onPress={() =>
                                        navigation.navigate("Settings")
                                    }
                                />
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{
                            headerShown: false,
                            ...TransitionPresets.ScaleFromCenterAndroid,
                        }}
                    />
                    <Stack.Screen
                        name="CheckIn"
                        component={CheckIn}
                        options={{
                            title: "Check In",
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            title: "Settings",
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
