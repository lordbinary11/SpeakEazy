import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HelpAndFeedback = () => {

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
     <Text style = {{fontSize:20,marginLeft:5, marginTop:40}}>Help & Feedback</Text>
     </View>
    <View style={{ flex: 1, backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{fontSize:20, textAlign:'center'}}>Contact us on the E-mail below with all your queries</Text>
      <Text style={{fontSize:20}}>help.speakeazy@outlook.com</Text>
 
    </View>
    </View>
  )
}

export default HelpAndFeedback