import React from "react";
import Home from "../screens/Home";
import Recipes from "../screens/Recipes";
import Expiring from "../screens/Expiring";
import Profile from "../screens/Profile";
import { createMaterialBottomTabNavigator } from "@juliushuck/react-native-navigation-material-bottom-tabs";
import { useTheme } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" shifting={true}>
            <Tab.Screen
                name="Foodspace"
                component={Home}
                options={{
                    tabBarIcon: "fridge",
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
                    tabBarBadge: 3,
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
