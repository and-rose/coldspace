import React from "react";
import Expiring from "../screens/Expiring";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Recipes from "../screens/Recipes";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            barStyle={{ backgroundColor: "#fff" }}
        >
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
