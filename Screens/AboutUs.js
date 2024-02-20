import { View, Text,Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {

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
      <Text style = {{fontSize:20,marginLeft:5, marginTop:40}}>About Us</Text>
     </View> 
     <ScrollView>
     <View style={{ flex: 1, backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center' }} >
     <Text style={{fontSize:20, marginTop:20, fontWeight:600,}}>Welcome To SpeakEazy!</Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>Empowering Connection Through Communication</Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
     In a world that thrives on connections, we understand the significance of clear,
      seamless communication. At SpeakEzy, we're driven by a passion for inclusion,
       accessibility, and fostering connections among individuals from all walks of life.
     </Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>Our Features, Your Support:</Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
        <Text style={{fontSize:17,marginLeft:10, fontWeight:600,marginRight:10,color:'#12853A'}}>Text-to-Speech: </Text>
        For those seeking a voice in their written words, our text-to-speech feature is a lifeline.
         It lends a voice to articles, messages, or documents, enabling everyone to express themselves freely.
     </Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
        <Text style={{fontSize:17,marginLeft:10, fontWeight:600,marginRight:10,color:'#12853A'}}>Speech-to-Text: </Text>
        We're here to make your thoughts heard and transcribed effortlessly.
        Whether it's jotting down ideas on the go or transcribing spoken content,
        our speech-to-text feature stands as your trusty companion.
     </Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
        <Text style={{fontSize:17,marginLeft:10, fontWeight:600,marginRight:10,color:'#12853A'}}>Translator: </Text>
        Breaking down language barriers, one conversation at a time. Our translator facilitates conversations,
         connecting diverse cultures and communities, transcending language limitations effortlessly.
     </Text>

     <Text style={{fontSize:17, marginTop:20, fontWeight:600,}}>We Are Here For You:</Text>

     <Text style={{fontSize:17,marginLeft:10,marginTop:10, marginRight:10}}>
     Our dedication lies in serving individuals seeking a voice, those navigating barriers,
      and anyone striving to connect in a world where language could be a hurdle.
       Whether it's for students, professionals, travelers, or those with accessibility needs,
        SpeakEazy is here to be your beacon of accessible communication.
     </Text>

     <Text style={{fontSize:17,marginLeft:5,marginTop:10, marginRight:0}}>
     Join us in our journey to create a world where communication knows no bounds, 
     where understanding thrives, and where connections flourish.
     </Text>

     <Text style={{fontSize:17,marginTop:10, marginLeft:5}}>
     Join us in fostering meaningful connections, empowering communication, and embracing diversity through every interaction.
     </Text>

     <Text style={{fontSize:20, marginTop:20, fontWeight:600}}>Meet Our Team</Text>

     
     <Image style={{width:250,height:250, borderRadius:20,marginTop:10}} source ={require('../assets/Herbert.jpg')} />

     <Text style={{fontSize:17, marginTop:20, fontWeight:600, color:'#12853A'}}>Herbert Sekpey</Text>

     <Text style={{fontSize:17,marginTop:10, marginLeft:5}}>
     Hello! I'm Herbert, a highly motivated individual with a passion for technology. 
     As the Tech lead at SpeakEazy, I specialize in Java and frontend development. 
     Mainly interested in Machine Learning and Cyber security. 
     I'm currently a level 200 Computer Science student at KNUST, constantly expanding my knowledge and skills. I am excited to be leading this team of developers to success.
     </Text>

     <Image style={{width:250,height:250, borderRadius:20,marginTop:10}} source ={require('../assets/Mujahid.jpg')} />

    <Text style={{fontSize:17, marginTop:20, fontWeight:600, color:'#12853A'}}>Shahid Mujahid</Text>

    <Text style={{fontSize:17,marginTop:10, marginLeft:5, marginBottom:20}}>
      I'm Shahid, a Computer Science student with a strong interest in Software engineering, AI development and technology. 
      Currently at Level 200 in my studies at KNUST, I'm constantly expanding my knowledge and skills. 
      When not coding, you'll find me on the football field, playing with passion. In my leisure time, 
      I enjoy exploring movies and their captivating world. Excited to be part of this team and contribute 
      to our collective success! 
    </Text>

     </View>
     </ScrollView>
    </View>
  )
}

export default AboutUs