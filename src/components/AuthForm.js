import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AuthForm = ({userName, errorMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.inputText}>
        <Image
          style={styles.iconImage}
          source={require('../Assets/email.png')}
        />
        <TextInput
          style={styles.iconText}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputText}>
        <Image
          style={styles.iconImage}
          source={require('../Assets/password.png')}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.iconText}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => onSubmit({userName, email, password})}>
        <Text style={{fontSize: 20, color: 'white'}}>{submitButtonText}</Text>
      </TouchableOpacity>
      <Image
        style={{width: 300, marginVertical: 25}}
        source={require('../Assets/line.png')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputText: {
    width: Dimensions.get('window').height / 2.2,
    height: Dimensions.get('window').height / 13,
    borderColor: 'white',
    borderWidth: 2,
    elevation: 10,
    backgroundColor: 'white',
    shadowColor: '#1F54C3',
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 6,
    marginTop: 25,
    flexDirection: 'row',
  },
  iconImage: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  iconText: {
    color: '#2554C0',
    width: Dimensions.get('window').height / 2.6,
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
    marginTop: 15,
    marginBottom: -10,
  },
  signupButton: {
    width: Dimensions.get('window').height / 4.5,
    height: Dimensions.get('window').height / 13,
    borderColor: 'white',
    elevation: 10,
    backgroundColor: '#E93354',
    shadowColor: '#1F54C3',
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default AuthForm;
