import React from 'react';
import {
    Dimensions,
    ImageBackground, Keyboard,
    Platform,
    SafeAreaView, StatusBar,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Input from '../components/Input';
import {Icon} from 'native-base';
import {Colors} from '../constants/Colors';
import TransparentHeader from '../components/TransparentHeader';
import CustomFooter from '../components/CustomFooter';
import MainButton from '../components/MainButton';

const ForgotPasswordPage = props => {
    return (
        <ImageBackground style={styles.backgroundImage} source={require('../assets/images/register.png')}>
            <TransparentHeader title='Forgot Password' onPressHandler={() => props.navigation.goBack()}/>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.screen}>
                    <Text style={styles.text}>Enter your email and we will send you instructions on how to reset
                        it.</Text>
                    <Input placeholder='Email' keyboardType='email-address' iconName='ios-mail'/>

                    <CustomFooter style={styles.footer}>
                        <MainButton title='Send'/>
                    </CustomFooter>
                </View>
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
    },
    text: {
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
        color: Colors.light,
        textAlign: 'center',
        marginVertical: 16,
    },
    footer: {
        alignItems: 'center',
    },
});

export default ForgotPasswordPage;
