import React from 'react';
import {
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView, StatusBar,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import ProfileImageWithUpload from '../components/ProfileImageWithUpload';
import {Icon} from 'native-base';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import TextButton from '../components/TextButton';
import {Colors} from '../constants/Colors';

StatusBar.setBackgroundColor('rgba(0,0,0,0)');
StatusBar.setBarStyle('light-content');
StatusBar.setTranslucent(true);

const RegisterPage = props => {
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/images/register.png')}
            resizeMethod='resize'
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={styles.screen} behavior='padding'>
                    <View>
                        <ProfileImageWithUpload source={require('../assets/icons/profile_icon.png')}/>
                    </View>
                    <View style={styles.container}>
                        <Input placeholder='Name' iconName='ios-person'/>
                        <Input placeholder='Email' keyboardType='email-address' iconName='ios-mail'/>
                        <Input placeholder='Password' secureTextEntry iconName='ios-key'/>
                        <Input placeholder='Confirm Password' secureTextEntry iconName='ios-key'/>
                    </View>
                    <View style={styles.container}>
                        <MainButton title='Register' onPress={() => props.navigation.navigate('App')}/>
                    </View>
                    <View style={styles.container}>
                        <TextButton title='Already have an account ?' onPress={() => props.navigation.goBack()}
                                    color={Colors.light}
                                    fontSize={16}/>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    container: {
        width: '100%',
        alignItems: 'center',
    },
});

export default RegisterPage;
