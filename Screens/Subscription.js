import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Subscription = () => {

    const navigation = useNavigation();
  
    const getBack = () => {
      navigation.goBack();
    };

  return (
    <View style={{ flex: 1, backgroundColor:'#E1EFE6' }}> 
    <View style={{flexDirection:'row'}}>
     <TouchableOpacity onPress={getBack} >
      <Image style={{ marginTop:30, width:40,marginLeft:5, height:40}} source ={require('../assets/back.png')} />
     </TouchableOpacity>
     <Text style = {{fontSize:20,marginLeft:5, marginTop:40}}>Premium Subscription</Text>
     </View>
    <View style={{ flex: 1, backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{fontSize:20}}>Hold on tight Premium Subscription coming</Text>
      <Text style={{fontSize:20}}>Soon!</Text>
      <Image style={{width:40, height:40, marginTop:20}} source={require('../assets/hour-glass.png')} />
    </View>
    </View>
  )
}

export default Subscription