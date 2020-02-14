import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';
import RestaurantCard from '../components/RestaurantCard';
import {RestaurantData} from '../data/RestaurantData';

const FavoritesPage = props => {

    const _renderItem = ({item, index}) => {
        return (
            <RestaurantCard item={item}/>
        );
    };

    return (
        <View style={styles.screen}>
            <CustomHeader title='My Favorites' isHome/>
            <FlatList style={styles.list} data={RestaurantData} renderItem={_renderItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    list: {
        margin: 10,
    },
});

export default FavoritesPage;
