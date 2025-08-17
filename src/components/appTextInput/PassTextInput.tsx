import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './PassTextInputStyles';

interface PassTextInputProps{
  pass: string
}
export function PassTextInput(props: PassTextInputProps) {
  return (
<TextInput
        placeholder='password'
        style={styles.PassInput}
        value={props.pass}
        >
</TextInput>
  );
}