import React from 'react';
import {StyleSheet, View} from 'react-native';

const CustomFooter = props => {
    return (
        <View style={{...styles.footer, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default CustomFooter;
