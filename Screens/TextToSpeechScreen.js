import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Clipboard } from 'expo-clipboard';

const mapVoiceName = (identifier) => {
  switch (identifier) {
    case 'en-us-x-tpf-local':
      return 'English - Samantha';
    case 'fr-FR-language':
      return 'French - Marjolaine';
    case 'ar-xa-x-arz-local':
      return 'Arabic-Maged';
    case 'ar-xa-x-ard-local':
      return 'Arabic(Male)';
    case 'en-in-x-end-network':
      return 'English - India';
    default:
      return 'Unknown Voice';
  }
};

const mapLanguageName = (language) => {
  switch (language) {
    case 'en-US':
      return 'English (US)';
    case 'fr-FR':
      return 'French (France)';
    case 'ar':
      return 'Arabic (Saudi Arabia)';
    case 'en-IN':
      return 'English-India';
    default:
      return 'Unknown Language';
  }
};


const TextToSpeechScreen = () => {
  const [text, setText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [selectedVoice, setSelectedVoice] = useState('en-us-x-tpf-local');
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(0.5);
  const languages = ['en-US', 'en-IN',  'fr-FR', 'ar'];
  const voices = ['en-us-x-tpf-local','en-in-x-end-network', 'fr-FR-language', 'ar-xa-x-arz-local','ar-xa-x-ard-local'];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadVoices();
  }, []);

  const preloadVoices = async () => {
    try {
      await Promise.all(
        voices.map((voice) =>
          Speech.speak('', {
            // language: selectedLanguage,
            voice
          })
        )
      );
      console.log('Voices preloaded:', voices);
      setLoading(false);
    } catch (error) {
      console.error('Error preloading voices:', error);
    }
  };
  
  // const logAvailableLanguages=async()=> {
  //   const languages =  await Speech.getAvailableAsync();
  //   console.log('Available languages:', languages);
  // }
  
  // logAvailableLanguages();

  const handleSpeak = async () => {
    try {
      const speechOptions = {
        language: selectedLanguage,
        voice: selectedVoice,
        pitch: pitch,
        rate: 1,
        volume: volume,
      };

       Speech.speak(text, speechOptions);
    } catch (error) {
      console.error('Error speaking:', error);
    }
  };


  const getVoiceName = (identifier) => mapVoiceName(identifier);
 // const getLanguageName = (language) => mapLanguageName(language);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SpeakEazy</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Input text..."
          multiline={true}
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </View>

      {/* <View style={styles.actions}>
        <TouchableOpacity style={styles.circle} onPress={handlePaste}>
          <Image style={styles.image} source={require('../assets/paste.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle}>
          <Image style={styles.image} source={require('../assets/delete.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle}></TouchableOpacity>
      </View> */}

      {/* <Text style={[styles.sliderText, { top: 240 }]}>Select Language</Text>
      <View style={[styles.pickerContainer, { marginBottom: 10 }]}>
        <Picker
          style={{ width: '100%', height: 50, color: '#fff' }}
          selectedValue={selectedLanguage}
          onValueChange={(value) => setSelectedLanguage(value)}
        >
          {languages.map((language, index) => (
            <Picker.Item key={index} label={getLanguageName(language)} value={language} style={{ fontSize: 20 }} />
          ))}
        </Picker>
      </View> */}

      <Text style={[styles.sliderText, { top: 240 }]}>Select Voice</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={{ width: '100%', height: 50, color: '#fff' }}
          selectedValue={selectedVoice}
          onValueChange={(value) => setSelectedVoice(value)}
        >
          {voices.map((voice, index) => (
            <Picker.Item
              key={index}
              label={getVoiceName(voice)}
              value={voice}
              style={{ fontSize: 20 }}
            />
          ))}
        </Picker>
      </View>

      <Text style={[styles.sliderText, { top: 245 }]}>Pitch: {pitch.toFixed(2)}</Text>
      <View style={styles.slider}>
        <Slider
          style={{ width: '100%', height: '100%', color: '#fff' }}
          value={pitch}
          onValueChange={(value) => setPitch(value)}
          minimumValue={0.5}
          maximumValue={2}
          step={0.2}
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#000"
          thumbTintColor="#fff"
        />
      </View>

      {/* <Text style={[styles.sliderText, { top: 220 }]}>Volume: {volume.toFixed(2)}</Text>
      <View style={styles.slider1}>
        <Slider
          style={{ width: '100%', height: '100%' }}
          value={volume}
          onValueChange={(value) => setVolume(value)}
          minimumValue={0}
          maximumValue={1}
          step={0.2}
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#000"
          thumbTintColor="#fff"
        />
      </View> */}
      <TouchableOpacity style={styles.GenerateButton} onPress={handleSpeak}>
        <Text style={styles.generateText}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#E1EFE6',
  },
  headerText: {
    top: 30,
    position: 'absolute',
    textAlign: 'center',
    color: '#1AAF4B',
    fontSize: 24,
    fontWeight: '800',
  },
  inputContainer: {
    width: '90%',
    height: 140,
    top: 80,
    backgroundColor: 'white',
    borderRadius: 26,
    position: 'absolute',
  },
  input: {
    left: 20,
    top: 10,
    width: '90%',
    position: 'absolute',
    color: 'rgba(76.50, 70.76, 70.76, 0.80)',
    fontSize: 20,
    fontWeight: '300',
  },
  actions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: 230,
    left: 17,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    width: 25,
    height: 25,
  },
  pickerContainer: {
    backgroundColor: '#1AAF4B',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    top: 240,
    justifyContent: 'center',
  },
  slider: {
    marginTop: 30,
    width: '90%',
    top: 215,
    backgroundColor: '#1AAF4B',
    height: 50,
    borderRadius: 9,
  },
  slider1: {
    marginTop: 10,
    width: '90%',
    top: 215,
    backgroundColor: '#1AAF4B',
    height: 50,
    borderRadius: 10,
  },
  GenerateButton: {
    backgroundColor: '#1AAF4B',
    borderRadius: 9,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: 220,
    marginTop: 20,
  },
  generateText: {
    color: '#fff',
    fontSize: 20,
  },
  sliderText: {
    fontSize: 20,
  },
});

export default TextToSpeechScreen;
