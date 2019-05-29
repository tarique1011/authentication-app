import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, onChangeText, placeholder, secureTextEntry, value }) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{ label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                onChangeText={onChangeText}
                value={value}
                autoCorrect={false}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };

