import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const AppStack = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

export default createSwitchNavigator({
  Auth: AuthScreen,
  App: AppStack,
});
