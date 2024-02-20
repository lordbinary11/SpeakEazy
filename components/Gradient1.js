import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

const GradientCard = () => {

  const navigation = useNavigation();
  
  const goToHelp = () => {
    navigation.navigate( 'HelpAndFeedback');
    console.log("Success");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goToHelp}>
      {/* Content inside the card */}
      <LinearGradient
        colors={['white', '#1AAF4B']}
        locations={[0.5, 0.5]}
        start={{ x: 0, y: 3 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}
      >
        {/* Circle in the center */}
        <View style={styles.circle}></View>
        <Text style={styles.text}>Help & Feedback</Text>
        <Image
          style={styles.rightArrow}
          source={require('../assets/right-arrow.png')}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%', // Apply card styling to the container
    height: 80,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    elevation: 15, // Apply elevation
    backgroundColor: 'transparent', // Set a transparent background color
    overflow: 'hidden', // Hide any shadow that goes beyond the container
    left:10
  },
  card: {
    width: '100%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginLeft: 100,
  },
  rightArrow: {
    marginLeft: 15,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1AAF4B',
    position: 'absolute',
    left: 20,
    
  },
});

export default GradientCard;
