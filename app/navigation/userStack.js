import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import User from '../screens/User'
import Favourites from '../screens/Favourites'
import Preferences from '../screens/Preferences'
import Settings from '../screens/Settings'
import Tabs from './tabs'

const screens = {
    User: {
        screen: User,
        navigationOptions: {
            title: 'User',
        }
    },
    Favourites: {
        screen: Favourites,
        navigationOptions: {
            title: 'Favourites',
        }
    },
    Preferences: {
        screen: Preferences,
        navigationOptions: {
            title: 'Preferences',
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        }
    },
}

const userStack = createStackNavigator(screens);

export default createAppContainer(userStack);