import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '../../../firebase-api';


function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para fazer login do usuário
  function login() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Usuário logado com sucesso!');
      })
      .catch(error => {
        console.log('Erro ao fazer login:', error);
        Alert.alert('Erro', 'E-mail ou senha incorretos. Tente novamente.');
      });
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={login}
      >
        <Text style={styles.Text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  Text: {
    color: "White",
  },
  TouchableOpacity: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  }


});

export default LoginScreen;
