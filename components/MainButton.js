import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/Colors';

const MainButton = props => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '80%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        padding: Dimensions.get('window').height * 0.02,
        borderRadius: 15,
        marginVertical:16
    },
    text: {
        color: Colors.light,
        fontSize: 18,
        fontFamily:'OpenSans-Bold'
    },
});

export default MainButton;
