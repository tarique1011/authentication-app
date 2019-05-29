import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCYMa1FFhknv2AioKcYDjN_0osxtIzThDA',
    authDomain: 'authentication-d4ce9.firebaseapp.com',
    databaseURL: 'https://authentication-d4ce9.firebaseio.com',
    projectId: 'authentication-d4ce9',
    storageBucket: 'authentication-d4ce9.appspot.com',
    messagingSenderId: '472559303192',
    appId: '1:472559303192:web:cc95bcb638921cf0'
  });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}
