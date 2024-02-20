import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientCard = () => {
  return (
    <View style={styles.container}>
      {/* Content inside the card */}
      <LinearGradient
        colors={['white', '#1AAF']}
        locations={[0.5, 0.5]}
        start={{ x: 0, y: 1.8 }}
        end={{ x: 3, y: 0 }}
        style={styles.card}
      >
      </LinearGradient>
      <Text style={{fontSize:50, textAlign:'center'}}>Hepppppllo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
    width: '100%', // Apply card styling to the container
    height: '100%',
    backgroundColor: 'transparent', // Set a transparent background color
    alignItems:'center',
    justifyContent:'center'
  
  },
  card: {
    width: '100%',
    height: '100%',
    flexDirection:'row'
  },

});

export default GradientCard;
