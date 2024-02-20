import React from 'react';
import { View, Image } from 'react-native';


const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/se3.png')}
      />
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
      backgroundColor: '#FFFF',
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
  };
  

export default MyComponent;
