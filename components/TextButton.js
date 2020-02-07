import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/Colors';

const TextButton = props => {
    return (
        <TouchableOpacity
            style={{...styles.button, ...props.style}}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {},
    text: {
        color: Colors.light,
        fontSize: 16,
        fontFamily: 'OpenSans-SemiBold',
    },
});

export default TextButton;
