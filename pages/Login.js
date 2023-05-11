import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import {StatusBar} from 'react-native';
import React, { useState } from 'react';

export default function Login() {

  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
          <View style={styles.topbar}>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Estamos quase lá!</Text>
            <Text style={styles.subtitle}>Acesse sua conta :)</Text>
            <TextInput style={styles.input} onChangeText={setText} value={text} placeholder="E-mail"/>
            <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Senha" secureTextEntry={true}/>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textButton1}>Criar conta</Text>
            </TouchableOpacity>
            <Text style={styles.divisor}>───── Ou ─────</Text>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.textButton2}>Logar como entregador</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#EE3D71',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 17,
    color: '#6D6D6D',
    marginBottom: 43,
  },

  input: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    width: '80%',
    height: 53,
    borderRadius: 11,
    marginBottom: 17,
  },

  button1: {
    backgroundColor: '#EE3D71',
    justifyContent: 'center',
    alignItems:'center',
    width: '80%',
    height: 53,
    borderRadius: 11,
    marginTop: 6,
  },

  textButton1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

  divisor: {
    marginVertical: 55,
    color: '#878787'
  },

  button2: {
    backgroundColor: '#3DB8FF',
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