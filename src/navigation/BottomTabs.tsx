import { createMaterialBottomTabNavigator } from "@juliushuck/react-native-navigation-material-bottom-tabs";
import React from "react";
import Expiring from "../screens/Expiring";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Recipes from "../screens/Recipes";

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
