import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PrivacyAndPolicy = () => {

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
     <Text style = {{fontSize:20,marginLeft:5, marginTop:40}}>Privacy Policy</Text>
     </View>

    <ScrollView>
     <View style={{ flex: 1, backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center' }} >
     <Text style={{fontSize:20, marginTop:20, fontWeight:600,}}>Last Updated: 29th November, 2023</Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
     We at Speakeazy are committed to protecting the privacy of our users. 
     This Privacy Policy outlines the information we collect, how we use it, 
     and the choices you have regarding your personal information in connection 
     with our speech recognition app designed to assist deaf and mute individuals in communication.
     </Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>Information We Collect:</Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
        <Text style={{fontSize:17,marginLeft:10, fontWeight:600,marginRight:10,color:'#12853A'}}>Speech-Data: </Text>
        We collect and process speech data to improve the accuracy and functionality of our speech recognition technology. 
        This may include voice recordings and transcriptions, but we do not store personally identifiable information linked to these recordings.
     </Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
        <Text style={{fontSize:17,marginLeft:10, fontWeight:600,marginRight:10,color:'#12853A'}}>Usage Data: </Text>
        We collect information about how you use our app, including the features you use and the interactions you have. This data helps us improve our app's performance and user experience.
     </Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>How we use your Information:</Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
        <Text style={{fontSize:17,marginLeft:10, fontWeight:600,marginRight:10,color:'#12853A'}}>To Improve Our Service: </Text>
        We use speech data and usage information to enhance the accuracy and functionality of our speech recognition technology, providing a better experience for our users.
     </Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>Data Security:</Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
        We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
     </Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>Your Choice:</Text>
     
     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
     You can control certain information we collect and how it is used. You may choose not to provide certain personal information, but this may limit your ability to use certain features of the app. 
     </Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>Updates to this Privacy Policy:</Text>
     
     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
     We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </Text>

      <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>Contact Us:</Text>
     
     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
     If you have any questions or concerns about this Privacy Policy, please contact us at help.speakeazy@outlook.com.
      </Text>

      <Text style={{fontSize:17,marginLeft:10,marginTop:10,marginBottom:20, marginRight:10}}>
      By using our app, you agree to the terms outlined in this Privacy Policy.
            </Text>




     </View>
     </ScrollView>
    </View>
  )
}

export default PrivacyAndPolicy