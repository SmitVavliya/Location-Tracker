import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={{color: '#2554C0', fontSize: 16}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(NavLink);
