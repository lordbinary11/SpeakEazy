import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

const Gradient2 = () => {

  const navigation = useNavigation();
  
  const goToPremium = () => {
    navigation.navigate( 'Subscription');
    console.log("Success");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goToPremium}>
      {/* Content inside the card */}
      <LinearGradient
        colors={['#1AAF4B','white']}
        locations={[0.5, 0.5]}
        start={{ x:0, y: -4.5 }}
        end={{ x: 2, y: 0 }}
        style={styles.card}
      >
        <Image
          style={styles.rightArrow}
          source={require('../assets/left-arrow.png')}
        />
        <Text style={styles.text}>Premium</Text>
       
         {/* Circle in the center */}
         <View style={styles.circle}></View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%', // Apply card styling to the container
    height: 80,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    elevation: 10, // Apply elevation
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
    marginLeft: 30,
    marginRight: 110,
  },
  rightArrow: {
    marginLeft: 0,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1AAF4B',
    position: 'absolute',
    left: 260,
    
  },
});

export default Gradient2;
