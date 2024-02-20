import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './components/Navigation';
import HomeScreen from "./Screens/HomeScreen"
import RecordScreen from './Screens/RecordScreen'
import Splash4 from './Screens/SplashScreens/Splash4'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Subscription from './Screens/Subscription';
import AboutUs from './Screens/AboutUs';
import PrivacyAndPolicy from './Screens/PrivacyAndPolicy';



const App = () => {
    return (
      
      
         <NavigationContainer>
           <MainNavigator />
        </NavigationContainer>  

    );
};

export default App;

