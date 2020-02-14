import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/Colors';

const CategoryCard = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <ImageBackground style={{...styles.image, ...props.style}} source={props.image} borderRadius={15}
                             resizeMethod='resize'>
                <Text style={styles.text}>{props.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'OpenSans-SemiBold',
        color: Colors.light,
        fontSize: Dimensions.get('window').fontScale * 20,
    },
});

export default CategoryCard;
