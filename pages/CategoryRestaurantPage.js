import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RestaurantData} from '../data/RestaurantData';
import RestaurantCard from '../components/RestaurantCard';
import CustomHeader from '../components/CustomHeader';

const CategoryRestaurantsPage = props => {
    const _renderItem = ({item, index}) => {
        return (
            <RestaurantCard item={item}/>
        );
    };
    return (
        <View style={styles.screen}>
            <CustomHeader title={props.navigation.getParam('restaurantName')} isHome={false}
                          navigation={props.navigation}/>
            <FlatList style={styles.list} data={RestaurantData} renderItem={_renderItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    list: {
        margin: 10,
    },
});

export default CategoryRestaurantsPage;
