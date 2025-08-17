import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './PassButtonStyles';
import { PassTextInput } from '../appTextInput/PassTextInput';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'

export function PassButton() {
    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        let GenerateToken = generatePassword()
        setPass(GenerateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }
  return (
    <View>
    <PassTextInput pass={pass}/>
    <Pressable 
    onPress={handleGenerateButton}
    style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
    </Pressable>

    <Pressable 
    onPress={handleCopyButton}
    style={styles.button}>
        <Text style={styles.text}>COPY</Text>
    </Pressable>
    
    </View>
  );
}