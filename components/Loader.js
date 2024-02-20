import React from 'react';
import { View } from 'react-native';

const MyComponent = () => {
  return (
    
    <View style={{ width: '100%', height: 100,top:90, position: 'relative' }}>
      <View style={{ width: '96%', height: 95, left: 7, top: 0, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 10 }} />
      <View style={{ width: 50, height: 60, left: 16, top: 18, position: 'absolute', backgroundColor: '#E1EFE6', borderRadius: 10 }} />
      <View style={{ width: 140, height: 18, left: 80, top: 27, position: 'absolute', backgroundColor: '#E1EFE6' }} />
      <View style={{ width: 170, height: 14, left: 80, top: 64, position: 'absolute', backgroundColor: '#E1EFE6' }} />
      <View style={{ width: 82, height: 42, left: 260, top: 38, position: 'absolute', backgroundColor: '#E7F0FF', borderRadius: 10 }} />
    </View>  
  );

};

export default MyComponent;
