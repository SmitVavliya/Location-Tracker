import React, {useContext} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';

const AccountScreen = props => {
  const {signout} = useContext(AuthContext);

  console.log(props);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{fontSize: 48}}>AccountScreen</Text>
      <Button title="Signout" onPress={signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
