import React from 'react';
import { View, Image } from 'react-native';

const RecordIcon = ({ focused }) => {
  return (
    <View style={{ width: 60, height: 60, top:-20, borderRadius: 40, backgroundColor: '#3adf74', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={focused ? require('../assets/mc.png') : require('../assets/mcf.png')}
        style={{ width: 30, height: 30, resizeMode: 'contain' }}
      />
    </View>
  );
};

export default RecordIcon;
