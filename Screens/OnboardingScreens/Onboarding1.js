import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MyComponent = () => {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    navigation.navigate('Onboarding2');
  };

  const skipOnboarding = () => {
    navigation.navigate('TabNavigation', { screen: 'HomeScreen' });
  };

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={goToNextScreen}>
         <View style={styles.nextButton}>
          <Text style={styles.nextButtonText}> NEXT</Text>
       </View>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={skipOnboarding}>
        <Text style={styles.skipButton}>SKIP</Text>
      </TouchableWithoutFeedback>

      </View>

      <Text style={styles.headerText}>
        Bridging Cultural and Emotional Gaps
      </Text>

      <Text style={styles.descriptionText}>
        Bridging gaps, fostering understanding. Our app brings people together,
         transcending cultural and emotional differences through meaningful communication
      </Text>

      <Image style={styles.image}source={require('../../assets/Kids.jpeg')}/>

        <View style={styles.Circles}>
          <View style={[styles.circle, styles.greenCircle]} />
          <View style={[styles.circle, styles.borderedCircle, {left:160}] }/>
          <View style={[styles.circle, styles.borderedCircle, {left:170}]}/>
        </View>
    </View>
  );
};

const styles = {
    container: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: 'white',
      flex: 1,
      paddingHorizontal: 2,
      alignItems: 'flex-start',
    },
    buttonContainer: {
      width: 316,
      height: 66,
      left: 20,
      top: 190,
      position: 'absolute',
      flexDirection: 'row',
    },
    
    nextButton: {
      width: 120,
      height: 66,
      left: 192.53,
      top: 500,
      position: 'absolute',
      backgroundColor: '#3ADF74',
      borderRadius: 60,
      alignItems: 'Center',
      justifyContent: 'Center',
    },
    nextButtonText: {
      width: 48.13,
      height: 20.38,
      left: 37.67,
      top: 23.29,
      position: 'absolute',
      color: 'white',
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeight: '500',
    },
    skipButton: {
      width: 48,
      height: 20.38,
      left: 2,
      top: 530,
      position: 'absolute',
      color: 'black',
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeight: '500',
      alignItems: 'flex-start'
    },
    headerText: {
      width: 359,
      height: 92,
      left: 0,
      top: 431,
      position: 'absolute',
      textAlign: 'center',
      color: 'black',
      fontSize: 35,
      fontFamily: 'Roboto',
      fontWeight: '600',
      lineHeight: 50,
    },
    descriptionText: {
      width: '100%',
      top:530,
      position: 'absolute',
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      fontFamily: 'Roboto',
      fontWeight: '300',
      lineHeight: 30,
      //flexWrap: 'wrap',
      
    },
    image: {
      width: 320,
      height: 300,
      left: 20,
      top: 91,
      position: 'absolute',
      borderRadius: 20,
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 9999,
        top: 410,
        left: 150,
        justifyContent: 'space-between',
      },
    greenCircle: {
        backgroundColor: '#3ADF74',
      },

    borderedCircle: {
        borderWidth: 1,
        borderColor: 'black',
      },

    Circles:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }  
  };

export default MyComponent;

