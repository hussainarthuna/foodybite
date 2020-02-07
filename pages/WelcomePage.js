import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';
import Logo from '../components/Logo';

const WelcomePage = props => {

    useEffect(() => {
        setTimeout(()=>{
            props.navigation.navigate('Auth');
        },600);
    }, []);

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/images/register.png')} resizeMethod='resize'>
            <Logo/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WelcomePage;
