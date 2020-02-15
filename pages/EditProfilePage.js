import React from 'react';
import {Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';
import ProfileImageWithUpload from '../components/ProfileImageWithUpload';
import Input from '../components/Input';
import MainButton from '../components/MainButton';

const EditProfilePage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='Edit Profile' navigation={props.navigation}/>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={{justifyContent: 'space-evenly', flex: 1}} behavior='padding'>
                    <View style={{alignItems: 'center'}}>
                        <ProfileImageWithUpload style={styles.profileImage} source={require('../assets/images/3.jpg')}/>
                    </View>
                    <View style={styles.container}>
                        <Input placeholder='Name' value='John Wick' iconName='ios-person' autoFocus/>
                        <Input placeholder='Email' value='johnwick@gmail.com' keyboardType='email-address'
                               iconName='ios-mail'/>
                    </View>
                    <View style={styles.container}>
                        <MainButton title='Update' onPress={() => props.navigation.goBack()}/>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    profileImage: {
        opacity: 1,
    },
    container: {
        width: '100%',
        alignItems: 'center',
    },
});

export default EditProfilePage;
