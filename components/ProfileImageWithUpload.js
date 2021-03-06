import React from 'react';
import {Dimensions, Image, Platform, StyleSheet, View} from 'react-native';
import IconButton from './IconButton';
import {Colors} from '../constants/Colors';

const ProfileImageWithUpload = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Image style={{borderRadius: (Dimensions.get('window').height * 0.30) / 2}} source={props.source}/>
            <View style={styles.uploadIcon}>
                <IconButton style={styles.icon}
                            name='md-arrow-up'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * .15,
        width: Dimensions.get('window').height * .15,
        borderRadius: (Dimensions.get('window').height * .15) / 2,
        backgroundColor: 'grey',
        opacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadIcon: {
        position: 'absolute',
        bottom: Platform.select({
            ios: 12,
            android: 0,
        }),
        right: Platform.select({
            ios: 6,
            android: 0,
        }),
        borderWidth: 2,
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.light,
        backgroundColor: Colors.primary,
    },
    icon: {
        color: Colors.light,
        fontSize: 16,
    },
});

export default ProfileImageWithUpload;
