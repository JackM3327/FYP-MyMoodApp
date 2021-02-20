import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import homeStack from './homeStack';
import userStack from './userStack';
import Login from '../screens/Login';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  
  Home: {
    screen: homeStack,
  },
  User: {
    screen: userStack,
  },
  Login: {
    screen: Login,
  }
});

export default createAppContainer(RootDrawerNavigator);