import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';
import CustomHeaderWithSearchBar from '../components/CustomeHeaderWithSearchBar';

const HomePage = props => {
    useEffect(()=>{
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('#fff');
        StatusBar.setTranslucent(false);
    },[]);
    return (
        <View style={styles.screen}>
            <CustomHeaderWithSearchBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:Colors.light
    }
});

export default HomePage;
