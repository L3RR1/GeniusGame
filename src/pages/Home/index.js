import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const logo = require(`../../assets/Images/logo.png`);

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#000428', '#004E92']}
      style={styles.container}
    >
      <Text style={styles.titleText}>Genius Game</Text>
      <Image source={logo} style={styles.image} />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Game')}
      >
        <Text style={styles.buttonText}>Jogar</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Historic')}
      >
        <Text style={styles.buttonText}>Histórico</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('SignInScreen')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    height: 70,
    justifyContent: 'center',
    width: 200,
    marginTop: 30,
    opacity: 0.7,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // cor do efeito glass
    backdropFilter: 'blur(10px)',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 32,
    marginBottom: 16,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#000',
  },
});

export default Home;
