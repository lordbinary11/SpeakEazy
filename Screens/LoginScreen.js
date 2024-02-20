import React, {useState} from 'react';
import { View, Text, Image,TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


const MyComponent = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('login successful')
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your login API call or further processing here
  };

    return (
          
  
      <View style={styles.container}>
        <Image
          style={styles.backgroundImg}
          source={require('../assets/LoginBackground.jpeg')}
        />
        <TouchableOpacity>
           <Image style={styles.backButton}
            source={require('../assets/back.png')}
            />
        </TouchableOpacity>
        <Text style={[styles.text, styles.headerText]}>Welcome Back!</Text>
        <Text style={[styles.text, styles.subHeaderText]}>Enter Your Username & Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={[styles.text, styles.loginButtonText]}>LOGIN</Text>
        </TouchableOpacity>
        
         <TouchableOpacity>
            <Text style={[styles.text, styles.forgotPassword]}>Forgotten Password?</Text>
          </TouchableOpacity>

           <TouchableOpacity>
           <Text style={[styles.text, styles.createAccount]}>Or Create a New Account</Text>
           </TouchableOpacity>
        </View>
      
  
   
    );
  };

  

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    left:0,
    top: 0,
    position: 'absolute',
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  headerText: {
    width: 241,
    height: 61,
    left: 31,
    top: 60,
    color: '#1AAF4B',
    fontSize: 32,
    fontWeight: '700',
  },
  subHeaderText: {
    width: 338,
    height: 31,
    left: 31,
    top: 45,
    color: '#1AAF4B',
    fontSize: 18,
    fontWeight: '600',
  },
  inputContainer: {
    top: 100,
    left:8,
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
  },
  
  loginButton: {
    width: 229,
    height: 54,
    left: 70,
    top: 200,
    backgroundColor: '#1AAF4B',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  forgotPassword: {
    width: 160,
    height: 20,
    left: 134,
    top: 220,
    fontSize: 15,
    color: 'black',
  },
  createAccount: {
    width: 183,
    height: 20,
    left: 120,
    top: 250,
    fontSize: 15,
    color: 'black',
  },
  backButton: {
    width: 48,
    height: 48,
    left: 15,
    top: 30,
  },
  
});

export default MyComponent;
