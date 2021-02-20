import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    return(
        <View>
            <Text>This is a test</Text> 
        </View>
    );
}

export default DrawerContent;