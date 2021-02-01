  
import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';

import { Home } from "../screens"

import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "transparent"
                }
            }} 
            <Tab.Screen>
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image 
                            source={icons.home}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? Colors.primary : Colors.secondary
                            }}
                        />
                    }
                }}
            </Tab.Screen>
            <Tab.Screen>
                name="Statistics"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image 
                            source={icons.statistics}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? Colors.primary : Colors.secondary
                            }}
                        />
                    }
                }}
            </Tab.Screen><Tab.Screen>
                name="Calendar"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image 
                            source={icons.calendar}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? Colors.primary : Colors.secondary
                            }}
                        />
                    }
                }}
            </Tab.Screen><Tab.Screen>
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image 
                            source={icons.user}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? Colors.primary : Colors.secondary
                            }}
                        />
                    }
                }}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;