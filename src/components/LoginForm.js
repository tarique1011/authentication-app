import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' };
    }
    

    onButtonPress() {
        const { email, password } = this.state;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection> 
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Pasword"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button WhenPressed={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
            );
        }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;
