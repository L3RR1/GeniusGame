import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '../../../firebase-api';


function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função para registrar um novo usuário
    async function register() {
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            console.log('Novo usuário registrado com sucesso:', userCredential.user.email);
        } catch (error) {
            console.log('Erro ao registrar novo usuário:', error);
            Alert.alert('Erro', 'Não foi possível registrar o novo usuário. Tente novamente.');
        };
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
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
    },
    button: {
        height: 50,
        width: '90%',
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 20
    }
})
export default RegisterScreen;
