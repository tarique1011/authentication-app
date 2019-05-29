import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', loading: false };
    }
    

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.OnLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    OnLoginFail() {
        this.setState({ 
            error: 'Authentication Failed',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button WhenPressed={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
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
                    {this.renderButton()}
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
