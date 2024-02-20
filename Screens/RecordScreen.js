import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView} from 'react-native';
import Voice from '@react-native-voice/voice';
import { Picker } from '@react-native-picker/picker';

const androidLocales = {
  'ar-EG': 'Arabic (Egypt)',
  'de-DE': 'German (Germany)',
  'en-US': 'English (United States)',
  'es-CL': 'Spanish (Chile)',
  'fr-FR': 'French (France)',
  'hi-IN': 'Hindi (India)',
  'it-IT': 'Italian (Italy)',
  'ja-JP': 'Japanese (Japan)',
  'ko-KR': 'Korean (South Korea)',
  'pt-BR': 'Portuguese (Brazil)',
  'ru-RU': 'Russian (Russia)',
  'cmn-Hans-CN': 'Chinese (Simplified, China)',
};

const RecordScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error message

  

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechResults = (result) => setResult(result.value[0]);

  const startRecording = async () => {
    try {
      await Voice.start(selectedLanguage);
    } catch (error) {
      console.log('Start recording error:', error); // Log error for debugging
      if (error.error?.code === "2") {
        // Show an alert for network error
        Alert.alert('Network Error', 'Check your internet connection and try again.');
        // Or set an error state to display on the screen
        setError('Network error. Check your internet connection and try again.');
      } else {
        // Handle other errors
        console.error('Error:', error);
      }
    }
  };

  const stopRecording = async () => {
    setLoading(true); // Show loading indicator when processing language
    try {
      await Voice.stop();
    } catch (error) {
      console.log('Stop recording error:', error); // Log error for debugging
      if (error.error?.code === "2") {
        console.log('Network error detected.'); // Log for debugging
        // Show an alert for network error
        Alert.alert('Network Error', 'Check your internet connection and try again.');
        // Or set an error state to display on the screen
        setError('Network error. Check your internet connection and try again.');
      } else {
        // Handle other errors
        console.error('Error:', error);
      }
    }
    setLoading(false); // Hide loading indicator after processing language
  };

  return (
    <View style={{ flex: 1, backgroundColor:'#E1EFE6', justifyContent: 'center', alignItems: 'center' }}>
<TextInput
        style={{
          marginTop:150,
          width: '90%',
          height: 170,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderRadius:25,
          backgroundColor:"#dadada"
        }}
        multiline
        editable={true}
        value={result}
      />

      <Text style={{fontSize:20,marginTop:20}}>Select Language</Text>

<View style={{marginTop:10,backgroundColor: '#1AAF4B',borderRadius: 10,width: '90%',alignSelf: 'center',justifyContent: 'center',}}>
      <Picker
        selectedValue={selectedLanguage}
        style={{ height: 50, width: '100%',color:'#fff' }}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      >
        {Object.entries(androidLocales).map(([key, value]) => (
          <Picker.Item key={key} label={value} value={key} />
        ))}
      </Picker>
      </View>

      <TouchableOpacity
        onLongPress={startRecording}
        onPressOut={stopRecording}
        style={{
          marginTop:20,
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: isRecording ? 'red' : 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20 }}>{isRecording ? 'Recording...' : 'Record'}</Text>
      </TouchableOpacity>

      <Text style={{fontSize:20,marginTop:20}}>Hold To Record</Text>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
       {error && <Text style={{ color: 'red' }}>{error}</Text>}  
       </View>
  
  );
};

export default RecordScreen;
