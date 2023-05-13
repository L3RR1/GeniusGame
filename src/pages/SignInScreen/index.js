import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "../../components/Login";
import Register from "../../components/Register";



const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Login />
      <Register />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;
