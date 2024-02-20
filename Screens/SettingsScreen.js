import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Loader from '../components/Loader'
import { useNavigation } from '@react-navigation/native'



const SettingsScreen = () => {

  const navigation = useNavigation();
  
  const goToSubscription = () => {
    navigation.navigate( 'Subscription');
  };

  const goToAboutUs = () => {
    navigation.navigate( 'AboutUs' );
  };

  const goPrivacyAndPolicy = () => {
    navigation.navigate( 'PrivacyAndPolicy' );
  };

  const goToHelp = () => {
    navigation.navigate( 'HelpAndFeedback' );
  };

  return (
    <View style = {styles.container}>
      <Loader/> 
       <View style ={styles.linkContainer}>

        <TouchableOpacity style={styles.links} onPress={goToSubscription}>
          <Image style={styles.image} 
            source={require('../assets/setting.png')}
          />
          <Text style={styles.text}>Premium Subscription</Text>
          <Image style={styles.image} 
            source={require('../assets/left.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.links} onPress={goToAboutUs}>
          <Image style={styles.image} 
            source={require('../assets/info.png')}
          />
          <Text style={styles.text}>About Us</Text>
          <Image style={styles.image} 
            source={require('../assets/left.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.links} onPress={goPrivacyAndPolicy}>
          <Image style={styles.image} 
            source={require('../assets/shield.png')}
          />
          <Text style={styles.text} >Privacy Policy</Text>
          <Image style={styles.image} 
            source={require('../assets/left.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.links} onPress={goToHelp}>
          <Image style={styles.image} 
            source={require('../assets/answer.png')}
          />
          <Text style={styles.text}>Help & Feedback</Text>
          <Image style={styles.image} 
            source={require('../assets/left.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.links}>
          <Image style={styles.image} 
            source={require('../assets/share.png')}
          />
          <Text style={styles.text}>Share Our App</Text>
          <Image style={styles.image} 
            source={require('../assets/left.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles=StyleSheet.create({
   
    container:{
        width:'100%',
        height: '100%',
        backgroundColor:'#E1EFE6',
        flexDirection:'column',
        alignItems:'center'
    },
    linkContainer:{
        top:120,
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    links:{
        width: '90%',
        height: 70,
        backgroundColor: '#D2F7E9',
        borderRadius: 20,
        borderColor: '#0AF79D',
        borderWidth: 1,
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    image:{
        width:30,
        height:30,
    },
    text:{
        fontSize:20, 
    }

})
export default SettingsScreen