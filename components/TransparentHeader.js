import React from 'react';
import {Dimensions, ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';
import IconButton from './IconButton';

const TransparentHeader = props => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
                <IconButton
                    style={styles.icon}
                    name={Platform.select({ios: 'ios-arrow-back', android: 'md-arrow-back'})}
                    onPress={props.onPressHandler}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: Dimensions.get('window').height * 0.08,
    },
    iconContainer: {
        flex: 1,
        width: Dimensions.get('window').width * 0.15,
    },
    titleContainer: {
        flex: Platform.select({ios: 20,android: 10}),
        alignItems: Platform.select({ios: 'center'}),
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        color: Colors.light,
        fontSize: 20,
    },
    icon: {
        color: Colors.light,
    },
});

export default TransparentHeader;
