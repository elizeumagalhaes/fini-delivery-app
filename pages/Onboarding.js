import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {StatusBar} from 'react-native';

export default function Onboarding() {
  return (
    <ImageBackground style={styles.bg} source={require('../assets/bg_onboarding.png')}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.textButton1}>Entrar na minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.textButton2}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    bg: {
      width: '100%',
      height: '100%',
    },

    container: {
      flex: 1,
      alignItems: 'center',
    },

    button1: {
      top: '70%',
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems:'center',
      width: '80%',
      height: 53,
      borderRadius: 11,
      marginBottom: 13,
    },

    textButton1: {
      color: '#EE3D71',
      fontWeight: 'bold',
      fontSize: 17,
    },

    button2: {
      top: '70%',
      justifyContent: 'center',
      alignItems:'center',
      width: '80%',
      height: 53,
      borderRadius: 11,
    },

    textButton2: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 17,
    },
});
  