import React from 'react';
import { View, Image, Text } from 'react-native';


const Splash4 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/se3.png')}
      />
    
      <View style={styles.overlay1}/> 
      <Text style={styles.text}>Empowering Voices, Connecting Hearts</Text>
      
    </View>
  );
};

const styles = {
  container: {
    width: 400,
    height: 926,
    paddingTop: 258,
    paddingBottom: 443,
    paddingLeft: 89,
    paddingRight: 114,
    backgroundColor: '#3ADF74',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 9999,
      alignItems: 'center'
    
    },
    overlay1: {
      width: 350,
      height: 50,
      left: 4.5,
      top: 710,
      position: 'absolute',
      backgroundColor: '#fff',
      borderRadius: 15,
    },
    text: {
      width: 400,
      left: 19,
      top: 721,
      position: 'absolute',
      color: '#3adf74',
      fontSize: 21,
      fontWeight: '700',
    },
  };

export default Splash4;
