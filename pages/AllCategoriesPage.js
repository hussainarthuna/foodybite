import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {CategoriesData} from '../data/CategoriesData';
import {Colors} from '../constants/Colors';
import CategoryCard from '../components/CategoryCard';

const AllCategoriesPage = props => {

    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.categoryItem}>
                <CategoryCard style={styles.category} title={item.name} image={item.image}
                              onPress={() => props.navigation.navigate('CategoryRestaurant', {
                                  restaurantName: item.name,
                              })}/>
            </View>
        );
    };

    return (
        <View style={styles.screen}>
            <CustomHeader title='Categories' isHome={false} navigation={props.navigation}/>
            <FlatList style={styles.list} numColumns={2} data={CategoriesData} renderItem={_renderItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    list: {},
    image: {
        width: '100%',
        // height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.light,
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
    },
    categoryItem: {
        flex: 1,
        margin: 5,
    },
    category: {
        width: '100%',
    },
});

export default AllCategoriesPage;
