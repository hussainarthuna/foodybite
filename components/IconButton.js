import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

const IconButton = props => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <Icon {...props}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default IconButton;
