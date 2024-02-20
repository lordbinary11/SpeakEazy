import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MyComponent = () => {

  const navigation = useNavigation();

  const goToPreviousScreen = () => {
    navigation.goBack();
  };

  const goToNextScreen = () => {
    navigation.navigate('TabNavigation', { screen: 'HomeScreen' });
  };

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={goToNextScreen}>
         <View style={styles.nextButton}>
          <Text style={styles.nextButtonText}>GET STARTED</Text>
       </View>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={goToPreviousScreen}>
        <Text style={styles.skipButton}>PREV</Text>
      </TouchableWithoutFeedback>

      </View>

      <Text style={styles.headerText}>
      Customizing Voice Characteristics
      </Text>

      <Text style={styles.descriptionText}>
      Our app allows you to fine-tune voice pitch, speed, and other characteristics,
       creating a truly personalized communication experience
      </Text>

      <View style={styles.imageContainer}>
      
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/Onelove.jpeg')
        }
          />
          <Image
            style={styles.image}
            source={require('../../assets/Picnic.jpeg')
        }
          />
        </View>
      
      <View style={[styles.innerContainer, {top:15}]}>
        
          <Image
            style={styles.image}
            source={require('../../assets/Festival.jpeg')
        }
          />
          <Image
            style={styles.image}
            source={require('../../assets/Mic.jpeg')
        }
          />
        
      </View>
    </View>

        <View style={styles.Circles}>
          <View style={[styles.circle, styles.borderedCircle]} />
          <View style={[styles.circle, styles.borderedCircle, {left:160}] }/>
          <View style={[styles.circle, styles.greenCircle, {left:170}]}/>
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
      width: 140,
      height: 66,
      left: 180,
      top: 500,
      position: 'absolute',
      backgroundColor: '#3ADF74',
      borderRadius: 60,
      alignItems: 'Center',
      justifyContent: 'Center',
    },
    nextButtonText: {
      width: 100,
      height: 20.38,
      left: 25.67,
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
        width: 343,
        height: 332,
        top:55,
        left:6.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },

      innerContainer: {
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },

      image: {
        flex: 1,
        height: undefined, // Let the height be determined by the aspect ratio
        aspectRatio: 163 / 158, // Adjust aspect ratio as needed
        borderRadius: 20,
        marginBottom: 16, // Gap between images
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