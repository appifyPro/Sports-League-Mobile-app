import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../Screens/Dashboard';
import JoinPool from '../Screens/JoinPool';
import BottomNotification from '../Screens/BottomNotification';
import Connection from '../Screens/Connection';

import Home from '../Svgs/Home';
import Search from '../Svgs/Search';
import Notification from '../Svgs/Notification';
import Profile from '../Svgs/Profile';
import { FontSize } from '../assets/Theme';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName='Dashboard' screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Home width={FontSize.F30} height={FontSize.F30} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
            <Tab.Screen
                name="Join Poll"
                component={JoinPool}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Search width={FontSize.F30} height={FontSize.F30} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
            <Tab.Screen
                name="BottomNotification"
                component={BottomNotification}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Notification width={FontSize.F30} height={FontSize.F30} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
            <Tab.Screen
                name="Connection"
                component={Connection}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Profile width={FontSize.F30} height={FontSize.F30} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;