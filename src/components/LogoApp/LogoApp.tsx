import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './LogoAppStyles';
import PasswordLogo from '../../../assets/opcao.png'


export function LogoApp() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={PasswordLogo}/>
        <View style={styles.container}>
        <Text style={styles.logoText}>PASSWORD</Text>
        <Text style={styles.logoText}>GENERATOR</Text>
        </View>
    </View>
  );
}