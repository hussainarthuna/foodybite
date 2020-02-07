import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';

const ProfilePage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='My Profile' isHome/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:Colors.light
    }
});

export default ProfilePage;
