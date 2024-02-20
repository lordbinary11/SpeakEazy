import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StatusBar } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import TextToSpeechScreen from '../Screens/TextToSpeechScreen';
import RecordScreen from '../Screens/RecordScreen';
import TranslatorScreen from '../Screens/TranslatorScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import Splash from '../Screens/SplashScreens/Splash';
import Splash2 from '../Screens/SplashScreens/Splash2';
import Splash3 from '../Screens/SplashScreens/Splash3';
import Splash4 from '../Screens/SplashScreens/Splash4';
import Onboarding1 from '../Screens/OnboardingScreens/Onboarding1';
import Onboarding2 from '../Screens/OnboardingScreens/Onboarding2';
import Onboarding3 from '../Screens/OnboardingScreens/Onboarding3';
import Subscription from '../Screens/Subscription';
import AboutUs from '../Screens/AboutUs';
import PrivacyAndPolicy from '../Screens/PrivacyAndPolicy';
import HelpAndFeedback from '../Screens/HelpAndFeedback';
import RecordIcon from './RecordIcon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SplashScreens = ({ navigation }) => {
  const [splashScreenIndex, setSplashScreenIndex] = useState(1);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      if (splashScreenIndex < 4) {
        setSplashScreenIndex(splashScreenIndex + 1);
      } else {
        navigation.navigate('OnboardingScreens');
      }
    }, 3000); // Change the interval as needed for each splash screen

    return () => clearTimeout(splashTimer);
  }, [splashScreenIndex, navigation]);

  const renderSplashScreen = () => {
    switch (splashScreenIndex) {
      case 1:
        return <Splash />;
      case 2:
        return <Splash2 />;
      case 3:
        return <Splash4 />;
      case 4:
        return <Splash3 />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* <StatusBar backgroundColor="#3adf74" barStyle="light-content" /> */}
      {renderSplashScreen()}
    </>
  );
};

const OnboardingScreens = () => {
  return (
    <Stack.Navigator 
     screenOptions={{ headerShown: false }}
     >
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false ,
        tabBarActiveTintColor: '#3adf74',
        tabBarInactiveTintColor: 'gray',
         tabBarShowLabel: false,
         tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left:25,
          right:20,
          elevation:0,
          backgroundColor:"#1AAF4B",
          borderRadius:20,
          height:60,
        
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/hf.png')
              : require('../assets/h.png');
          } else if (route.name === 'TextToSpeech') {
            iconName = focused
              ? require('../assets/ttsf.png')
              : require('../assets/tts.png');
          } if (route.name === 'Record') {
            return <RecordIcon focused={focused} />;
          } else if (route.name === 'Translator') {
            iconName = focused
              ? require('../assets/tf.png')
              : require('../assets/t.png');
          } else if (route.name === 'Settings') {
            iconName = focused
              ? require('../assets/sf.png')
              : require('../assets/s.png');
          }

          return <Image source={iconName} style={{ width: 28, height: 28, resizeMode:'contain' }} />;
        },
        tabBarLabelStyle: { fontSize: 12 },
      }
      )
      } 
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="TextToSpeech" component={TextToSpeechScreen} />
      <Tab.Screen name="Record" component={RecordScreen} />
      <Tab.Screen name="Translator" component={TranslatorScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreens" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="SplashScreens" component={SplashScreens} />
      <Stack.Screen name="OnboardingScreens" component={OnboardingScreens} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="PrivacyAndPolicy" component={PrivacyAndPolicy} />
      <Stack.Screen name="HelpAndFeedback" component={HelpAndFeedback} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

