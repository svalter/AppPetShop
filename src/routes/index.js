
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

import IntroSlider from "../screens/IntroSlider";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Products from "../screens/Products"
import Settings from "../screens/Settings";
import Cart from "../screens/Cart";

const StackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

const RoutesTabs = () => (
    <BottomTabNavigator.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Produtos':
                        iconName = 'shopping-bag';
                        break;
                    case 'Carrinho':
                        iconName = 'shopping-cart';
                        break;
                    case 'Configurações':
                        iconName = 'settings';
                        break;
                    default:
                        iconName = 'circle';
                        break;
                }
                return <Icon name={iconName} size={size} color={color} style={{ marginTop: 3 }} />;
            },
            headerShown: true,
            headerStyle: {
                backgroundColor: "#38BEAC",
                height: 70,
            },
            headerTitleStyle: {
                fontSize: 16,
                color: "#FFFFFF",
            },
            headerTitle: () => {
                let iconName;

                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Produtos':
                        iconName = 'shopping-bag';
                        break;
                    case 'Carrinho':
                        iconName = 'shopping-cart';
                        break;
                    case 'Configurações':
                        iconName = 'settings';
                        break;
                    default:
                        iconName = 'circle';
                        break;
                }
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                        <Icon name={iconName} style={{ color: "#FFFFFF", marginRight: 10, fontSize: 20 }}></Icon>
                        <Text style={{ color: "#FFFFFF", fontSize: 20 }}>{route.name}</Text>
                    </View>
                )
            },
            headerTitleAlign: "center",
            tabBarStyle: {
                height: 65,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                paddingBottom: 10,
                fontWeight: "bold"
            },
            tabBarActiveBackgroundColor: "#FFFFFF",
            tabBarInactiveBackgroundColor: "#FFFFFF",
            tabBarActiveTintColor: "#38BEAC",
            tabBarInactiveTintColor: "#B1BDC5",
        })}
    >
        <BottomTabNavigator.Screen name="Home" component={Home} />
        <BottomTabNavigator.Screen name="Produtos" component={Products} />
        <BottomTabNavigator.Screen name="Carrinho" component={Cart} />
        <BottomTabNavigator.Screen name="Configurações" component={Settings} />
    </BottomTabNavigator.Navigator>
)


export const Routes = () => (
    <StackNavigator.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <StackNavigator.Screen name="IntroSlider" component={IntroSlider} />
        <StackNavigator.Screen name="SignIn" component={SignIn} />
        <StackNavigator.Screen name="SignUp" component={SignUp} />
        <StackNavigator.Screen name="RoutesTabs" component={RoutesTabs} />
    </StackNavigator.Navigator>
)
