import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';

const NotificationsPage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='Notifications' isHome/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:Colors.light
    }
});

export default NotificationsPage;
