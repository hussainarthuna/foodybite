import React from 'react';
import {
    Dimensions, Keyboard,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, TouchableWithoutFeedback,
    View,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Input from '../components/Input';
import {Colors} from '../constants/Colors';
import {Footer, Container, Content, Button} from 'native-base';
import MainButton from '../components/MainButton';

const ChangePasswordPage = props => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container style={styles.screen}>
                <CustomHeader title='Change Password' navigation={props.navigation}/>
                <Content>
                    <View style={styles.container}>
                        <Input placeholder='Old Password' secureTextEntry iconName='ios-key'/>
                        <Input placeholder='New Password' secureTextEntry iconName='ios-key'/>
                        <Input placeholder='Confirm New Password' secureTextEntry iconName='ios-key'/>
                    </View>
                </Content>
                <SafeAreaView>
                    <Footer style={styles.footer}>
                        <TouchableOpacity style={{width: '100%', alignItems: 'center'}} activeOpacity={0.8}
                                          onPress={() => props.navigation.goBack()}>
                            <Text style={styles.footerText}>Update</Text>
                        </TouchableOpacity>
                    </Footer>
                </SafeAreaView>
            </Container>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: Colors.light,
    },
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    footer: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: Platform.select({
            ios: Dimensions.get('window').height * 0.03,
            android: Dimensions.get('window').height * 0.07,
        }),
    },
    footerText: {
        fontFamily: 'OpenSans-SemiBold',
        color: Colors.light,
        fontSize: 20,
    },
});

export default ChangePasswordPage;
