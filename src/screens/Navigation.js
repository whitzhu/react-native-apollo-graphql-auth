import { createSwitchNavigator } from 'react-navigation';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';

export default createSwitchNavigator({
  Auth: AuthScreen,
  App: HomeScreen,
});
