import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';

const FavoritesPage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='Favorites' isHome/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:Colors.light
    }
});

export default FavoritesPage;
