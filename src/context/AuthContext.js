import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = dispatch => async ({userName, email, password}) => {
  try {
    const res = await trackerApi.post('/signup', {
      userName,
      email,
      password,
    });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({type: 'signin', payload: res.data.token});

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
  }
};

const signin = dispatch => async ({email, password}) => {
  try {
    const res = await trackerApi.post('/signin', {
      email,
      password,
    });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({
      type: 'signin',
      payload: res.data.token,
    });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signin',
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
  navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);
