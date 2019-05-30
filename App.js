import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component {
  state= { loggedIn: null }; 

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

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true }); 
        } else {
          this.setState({ loggedIn: false });
        }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button WhenPressed={() => firebase.auth().signOut()}>
            Log out  
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ paddingTop: 20 }} >
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

