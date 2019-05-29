import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ WhenPressed, children }) => {
    return (
        <TouchableOpacity onPress={WhenPressed} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}  </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#162a6b',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 5,
        marginRight: 5

    }
}

export { Button };
