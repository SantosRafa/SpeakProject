import React, { useState } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
 } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {

  const [text, setText] = useState('');

  function speak (){
    Speech.speak(text,{
      language:'pt-BR',
      voiceName:'carlos'
      
    });
  }
  return (
    <KeyboardAvoidingView behavior="padding" enable={true} style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Digite qualquer coisa"
      onChangeText={setText}
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={speak}
      >
        <Text style={{height:20, color:'black'}}>Aperte aqui</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height:120,
    width:'90%',
    borderWidth:2,
    margin:10,
    
  },

  button:{
    width:'90%',
    height:50,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center'
  }

});
