import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MyComponent = () => {

  const navigation = useNavigation();

  const goToPreviousScreen = () => {
    navigation.goBack();
  };

  const goToNextScreen = () => {
    navigation.navigate('Onboarding3');
  };


  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={goToNextScreen}>
         <View style={styles.nextButton}>
          <Text style={styles.nextButtonText}> NEXT</Text>
       </View>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={goToPreviousScreen}>
        <Text style={styles.skipButton}>PREV</Text>
      </TouchableWithoutFeedback>

      </View>

      <Text style={styles.headerText}>
      Connect and communicate effortlessly
      </Text>

      <Text style={styles.descriptionText}>
       Experience the power of text-to-speech as individuals seamlessly
       exchange thoughts and ideas using our app
      </Text>

      <View style={[styles.imageContainer, { flexDirection: 'row' }]}>
      <Image
        style={[styles.image, { left: 0, top: 0, position: 'absolute' }]}
            source={require('../../assets/Kids1.jpeg')
        }
      />
      <Image
        style={[styles.image, { left: 120, top: 17, position: 'absolute' }]}
        source={require('../../assets/Kids2.jpeg')
        }
      />
      <Image
        style={[styles.image, { left: 240, top: 0, position: 'absolute' }]}
        source={require('../../assets/Kids3.jpeg')
        }
      />
     </View>

        <View style={styles.Circles}>
          <View style={[styles.circle, styles.borderedCircle]} />
          <View style={[styles.circle, styles.greenCircle, {left:160}] }/>
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
    imageContainer: {
        width: 340,
        height: 329,
        top: 50,
        left:5,
        position: 'relative',
      },

    image: {
      width: 100,
      height: 315,
      left: 20,
      top: 91,
      position: 'absolute',
      borderRadius: 20,
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 9999,
        top: 70,
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