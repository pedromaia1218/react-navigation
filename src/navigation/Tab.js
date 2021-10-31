import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScreenA from "../views/ScreenA"
import ScreenB from "../views/ScreenB"
import ScreenC from "../views/ScreenC"

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator initialRouteName="ScreenA"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    
                    switch (route.name) {
                        case "ScreenA":
                            iconName = focused
                            ? 'home'
                            : 'home-outline'
                            break;
                        case "ScreenB":
                            iconName = focused
                            ? 'search'
                            : 'search-outline'
                            break;
                        case "ScreenC":
                            iconName = focused
                            ? 'person'
                            : 'person-outline'
                            break;
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="ScreenA" component={ScreenA} />
            <Tab.Screen name="ScreenB" component={ScreenB} />
            <Tab.Screen name="ScreenC" component={ScreenC} />
        </Tab.Navigator>
    )
}