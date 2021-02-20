import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import AddEntry from '../screens/AddEntry'
import Tabs from './tabs'
import { COLOURS } from '../constants'

const screens = {
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            title: 'MyMoodApp',
            headerStyle: {
                backgroundColor: COLOURS.primary,
                alignItems: 'center',
            }
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }
    },
    AddEntry: {
        screen: AddEntry,
        navigationOptions: {
            title: 'How was your day?',
        }
    }
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: COLOURS.white,
        headerStyle: {
            backgroundColor: COLOURS.primary, 
            height: 60, },
    }
});

export default createAppContainer(homeStack);