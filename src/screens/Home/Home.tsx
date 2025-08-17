import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from 'react-native';
import styles from './Styles'
import { LogoApp } from '../../components/LogoApp/LogoApp';
import { PassButton } from '../../components/PassButton/PassButton';


export default function Home() {
    return(
        <View style={styles.container}>
            <View>
                <LogoApp/>
            </View>

            <View style={styles.containerButton}>
                <PassButton/>
            </View>
              <StatusBar style="auto" />
            </View>
    )
}