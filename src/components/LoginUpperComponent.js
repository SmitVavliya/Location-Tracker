import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';

const LoginUpperComponent = ({text}) => {
  return (
    <View style={styles.upperContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../Assets/logo.png')} />
      </View>
      <View>
        <Text style={styles.signupText}>{text}</Text>
        <Image source={require('../Assets/tab.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    height: Dimensions.get('window').height / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    shadowColor: '#1F54C3',
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 22,
    fontFamily: '',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2554C0',
  },
});

export default LoginUpperComponent;
