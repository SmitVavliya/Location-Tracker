import React, {useContext} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import LoginUpperComponent from '../components/LoginUpperComponent';
import AuthForm from '../components/AuthForm';

const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(Context);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <LoginUpperComponent text="Signin" />
        <View style={styles.bottomContainer}>
          <AuthForm
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Signin"
          />
          <NavLink routeName="Signup" text="Don't have an account? Signup" />
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
    marginTop: 75,
  },
});

export default SigninScreen;
