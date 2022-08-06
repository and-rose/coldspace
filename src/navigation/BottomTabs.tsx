import React from "react";
import { createMaterialBottomTabNavigator } from "@juliushuck/react-native-navigation-material-bottom-tabs";
import Home from "../screens/Home";
import Recipes from "../screens/Recipes";
import Expiring from "../screens/Expiring";
import Profile from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Foodspace"
                component={Home}
                options={{
                    tabBarIcon: "fridge",
                }}
                screenOptions={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={Recipes}
                options={{
                    tabBarIcon: "chef-hat",
                }}
            />
            <Tab.Screen
                name="Expiring"
                component={Expiring}
                options={{
                    tabBarIcon: "history",
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: "account-circle",
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
