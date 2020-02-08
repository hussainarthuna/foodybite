import React from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';

const FriendsAvatar = props => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <Image style={styles.image} source={props.image}
                   borderRadius={Dimensions.get('window').width * 0.15 / 2}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
    },
});

export default FriendsAvatar;
