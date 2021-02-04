  
import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';

import { Home } from "../screens";

import { icons, images, SIZES, COLOURS, FONTS } from '../constants'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen>
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image 
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLOURS.primary : COLOURS.secondary
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
                            source={require('../assets/icons/statistics.png')}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLOURS.primary : COLOURS.secondary
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
                            source={require('../assets/icons/calendar.png')}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLOURS.primary : COLOURS.secondary
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
                            source={require('../assets/icons/user.png')}
                            resizeMode="contain"
                            style= {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLOURS.primary : COLOURS.secondary
                            }}
                        />
                    }
                }}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;