import React, {useEffect} from 'react';
import {
    Dimensions,
    ImageBackground, Keyboard,
    KeyboardAvoidingView, Platform,
    ScrollView, StatusBar,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import MainButton from '../components/MainButton';
import TextButton from '../components/TextButton';
import Logo from '../components/Logo';
import Input from '../components/Input';
import {Colors} from '../constants/Colors';

StatusBar.setBackgroundColor('rgba(0,0,0,0)');
StatusBar.setBarStyle('light-content');
StatusBar.setTranslucent(true);

const LoginPage = props => {

    useEffect(() => {
        StatusBar.setBackgroundColor('rgba(0,0,0,0)');
        StatusBar.setBarStyle('light-content');
        StatusBar.setTranslucent(true);
    }, []);

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/images/register.png')}
            resizeMethod='auto'
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={styles.backgroundImage}
                                      behavior={Platform.select({ios: 'padding', android: 'padding'})}>
                    <View style={styles.logoContainer}>
                        <Logo/>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <Input placeholder='Email' keyboardType='email-address' iconName='ios-mail'/>
                            <Input placeholder='Password' secureTextEntry iconName='ios-key'/>
                            <View style={styles.forgotPassword}>
                                <TextButton title='Forgot Password ?'
                                            onPress={() => props.navigation.navigate('ForgotPassword')}
                                            color={Colors.light}
                                            fontSize={16}
                                />
                            </View>
                        </View>
                        <MainButton title='Login' onPress={() => props.navigation.navigate('App')}/>
                        <TextButton title='Create a new account'
                                    onPress={() => props.navigation.navigate('Register')}
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
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logoContainer: {
        marginVertical: Dimensions.get('window').height * 0.02,
    },
    container: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    forgotPassword: {
        width: '80%',
        alignItems: 'flex-end',
    },
});

export default LoginPage;
