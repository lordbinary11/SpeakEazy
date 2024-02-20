import React, {useState} from 'react';
import { View, Text, Image,TextInput, StyleSheet, TouchableOpacity} from 'react-native';


const MyComponent = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = () => {
      // Implement your signup logic here
      console.log('Signup Successful');
      console.log('Email:', email);
      console.log('Username:', username);
      console.log('Password:', password);
      // You can add your signup API call or further processing here
    };

    return (
  
      <View style={styles.container}>
        <Image
          style={styles.backgroundImg}
          source={require('../assets/SignUpBackground.jpeg')}
        />
        <TouchableOpacity>
           <Image style={styles.backButton}
            source={require('../assets/back.png')}
            />
        </TouchableOpacity>
        <Text style={[styles.text, styles.headerText]}>Create Account :)</Text>
        
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
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
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    
      <TouchableOpacity>
            <Text style={[styles.text, styles.accountExist]}>Already Have An Account?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
           <Text style={[styles.text, styles.login]}>Login</Text>
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
    top: 80,
    color: '#1AAF4B',
    fontSize: 32,
    fontWeight: '700',
  },
  inputContainer: {
    top: 120,
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
  
  signUpButton: {
    width: 229,
    height: 54,
    left: 70,
    top: 120,
    backgroundColor: '#1AAF4B',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  accountExist: {
    width: 160,
    height: 20,
    left: 120,
    top: 150,
    fontSize: 15,
    color: 'black',
  },
  login: {
    width: 183,
    height: 20,
    left: 170,
    top: 160,
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
