import React, {useState, useContext} from 'react';
import {View, StyleSheet, Image, Dimensions, TextInput} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import LoginUpperComponent from '../components/LoginUpperComponent';
import AuthForm from '../components/AuthForm';

const SignupScreen = () => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);
  const [userName, setUserName] = useState('');

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <LoginUpperComponent text="Signup" />
        <View style={styles.bottomContainer}>
          <View style={styles.inputText}>
            <Image
              style={styles.iconImage}
              source={require('../Assets/username.png')}
            />
            <TextInput
              style={styles.iconText}
              placeholder="User Name"
              value={userName}
              onChangeText={setUserName}
              autoCapitalize="none"
            />
          </View>
          <AuthForm
            errorMessage={state.errorMessage}
            onSubmit={signup}
            submitButtonText="Signup"
            userName={userName}
          />
          <NavLink routeName="Signin" text="Already have an account? Signin" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    height: Dimensions.get('window').height / 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
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
});

export default SignupScreen;
