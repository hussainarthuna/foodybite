import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../constants/Colors';
import {Icon} from 'native-base';

const Input = props => {
    return (
        <View style={styles.inputContainer}>
            <Icon style={styles.icon} name={props.iconName} size={30}/>
            <TextInput
                {...props}
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor={Colors.light}
            />
        </View>
    )
        ;
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
        backgroundColor: 'grey',
        opacity: 0.6,
        borderRadius: 8,
        paddingVertical: 0,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 16,
        color: Colors.light
    },
    input: {
        paddingVertical: Platform.select({ios: 15, android: 10}),
        paddingHorizontal: 8,
        color: Colors.light,
        fontSize: 16,
        fontFamily:'OpenSans-Regular',
        width: '80%',
    },
});

export default Input;
