import React, { useState } from "react";
import { View, TextInput, Text,Image, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import languageData from '../components/MSSLanguages'

const TranslatorScreen = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState('en');


  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

const handleClear=()=>{
  setInputText('');
  setTranslatedText('');
}
  const translateText = async () => {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "api-version": '3.0',
        "to": selectedLanguage 
      },
      headers: {
        "content-type": 'application/json',
        'X-RapidAPI-Key': 'cdbfd8b18cmshf7d9f5550bef466p19ea91jsn9bf5d1352325',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      data: [
        {
          text: inputText,
        },
      ],
    };

    try {
      const response = await axios.request(options);
      // Extract the translated text from the response
      const translatedText = response.data[0].translations[0].text;
      setTranslatedText(translatedText);
      console.log(translatedText)
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return (
    <View style={styles.container}>
    
    
     <Text style={styles.headerText}>SpeakEazy</Text>

     <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text to translate"
        value={inputText}
        multiline={true}
        onChangeText={(text) => setInputText(text)}
      />
      <TouchableOpacity onPress={handleClear}>
         <Image style={styles.clearimage}
            source={require('../assets/close.png')}
          />
       </TouchableOpacity>
      </View>
      
      
      <View style={{alignItems:"flex-end"}}>     
      <View style={styles.pickerContainer}>
      <Picker style={{width:'100%',height:50, color:'#fff'}}
        selectedValue={selectedLanguage}
        onValueChange={handleLanguageChange}
      >
        {languageData.map((language) => (
          <Picker.Item key={language.code} label={language.language} value={language.code} />
        ))}
      </Picker>
      
      </View>
      </View>
      <Text style={styles.outputText}>Output Language:</Text>

      <View style={{alignItems:'flex-end'}}>
      <TouchableOpacity style={styles.GenerateButton}  onPress={translateText} >
         <Text style={styles.generateText}>Translate</Text>
      </TouchableOpacity>
      </View>

        <View style = {styles.inputContainer1}>
      <TextInput
        style={styles.translatedText}
        multiline={true}
        value={translatedText}
        editable={false}
      />
      <TouchableOpacity>
       <Image style={styles.cpimage}
            source={require('../assets/cp.png')}
          />
      </TouchableOpacity>
      </View>
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    //alignItems:'center',
    //justifyContent:'center',
    backgroundColor:'#E1EFE6',
    
  },

  headerText: {
    top: 60,
    left:110,
    position: 'absolute',
    textAlign: 'center',
    color: '#1AAF4B',
    fontSize: 30,
    //fontFamily: 'Open Sans',
    fontWeight: '800',
   
  },

  inputContainer:{
    width: '90%',
    height: 170,
    backgroundColor: 'white',
    borderRadius: 26,
    position: 'absolute',
    left: 18,
    top:130,
    
    flexDirection:'row'
  },
  textInput: {
    top: 10,
    left:20,
    width: '90%',
    height: 160,
    fontSize:20,
    color: 'rgba(76.50, 70.76, 70.76, 0.80)',
  },
  pickerContainer: {
    backgroundColor: '#1AAF4B', // Green background color
    borderRadius: 10,
    width: 140,
    alignItems: 'center',
    top:320,
    height:40,
    justifyContent: 'center',
    right:18
    
  },
  inputContainer1:{
    top:450,
    height: 170,
    width:'90%',
    borderRadius: 25,
    padding: 5,
    backgroundColor: "#dadada",
    position: 'absolute',
    left:18,
    flexDirection:'row'
  },
  translatedText: {
    top: 10,
    left:20,
    width: '90%',
    height: 160,
    fontSize:20,
    color: 'rgba(76.50, 70.76, 70.76, 0.80)',
  },
 
  GenerateButton:{
    backgroundColor:'#1AAF4B',
    borderRadius:10,
    width:100,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    top:320,
    marginRight:18
    
  },
  generateText:{
    color:'#fff',
    fontSize:20
  },
  outputText:{
    fontSize:18,
    top:290,
    left:18
  },
  bkimage:{
    top:30,
    width:30,
    height:30,
    left:10
  },
  cpimage:{
    top:0,
    width:30,
    height:30,
   
  },
  clearimage:{
    top:9,
    width:15,
    height:15,
    left:3 
  },
});

export default TranslatorScreen;

