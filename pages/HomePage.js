import React, {useEffect} from 'react';
import {Dimensions, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CustomHeaderWithSearchBar from '../components/CustomeHeaderWithSearchBar';
import TitleWithSeeAll from '../components/TitleWithSeeAll';
import Carousel from 'react-native-snap-carousel';
import {RestaurantData} from '../data/RestaurantData';
import RestaurantCard from '../components/RestaurantCard';
import CategoryCard from '../components/CategoryCard';
import FriendsAvatar from '../components/FriendsAvatar';

const HomePage = props => {

    useEffect(() => {
        setTimeout(() => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff');
            StatusBar.setTranslucent(false);
        }, 10);
    }, []);

    const _renderItem = ({item, index}) => {
        return (
            <RestaurantCard item={item}/>
        );
    };

    return (
        <View style={styles.screen}>
            <CustomHeaderWithSearchBar/>

            <ScrollView>

                <View style={styles.trendingRestaurantsBlock}>
                    <View style={styles.title}>
                        <TitleWithSeeAll title='Trending Restaurants' seeAllCount={12}
                                         onPress={() => props.navigation.navigate('TrendingRestaurants')}/>
                    </View>
                    <Carousel
                        data={RestaurantData}
                        renderItem={_renderItem}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width * 0.87}
                    />
                </View>

                <View style={styles.categoryBlock}>
                    <View style={styles.title}>
                        <TitleWithSeeAll title='Category' seeAllCount={8}
                                         onPress={() => props.navigation.navigate('AllCategories')}/>
                    </View>
                    <View style={styles.categoryContainer}>
                        <CategoryCard title='Italian' image={require('../assets/images/italian.png')}
                                      onPress={() => props.navigation.navigate('CategoryRestaurant', {
                                          restaurantName: 'Italian',
                                      })}/>
                        <CategoryCard title='Indian' image={require('../assets/images/indian.png')}
                                      onPress={() => props.navigation.navigate('CategoryRestaurant', {
                                          restaurantName: 'Indian',
                                      })}/>
                        <CategoryCard title='Chinese' image={require('../assets/images/chinese.png')}
                                      onPress={() => props.navigation.navigate('CategoryRestaurant', {
                                          restaurantName: 'Chinese',
                                      })}/>
                    </View>
                </View>

                <View style={styles.FriendsBlock}>
                    <View style={styles.title}>
                        <TitleWithSeeAll title='Friends' seeAllCount={80}/>
                    </View>
                    <View style={styles.categoryContainer}>
                        <FriendsAvatar title='Italian' image={require('../assets/images/1.jpg')}/>
                        <FriendsAvatar title='Indian' image={require('../assets/images/2.jpg')}/>
                        <FriendsAvatar title='Chinese' image={require('../assets/images/3.jpg')}/>
                        <FriendsAvatar title='Chinese' image={require('../assets/images/4.jpg')}/>
                        <FriendsAvatar title='Chinese' image={require('../assets/images/5.jpg')}/>
                        <FriendsAvatar title='Chinese' image={require('../assets/images/6.jpg')}/>
                    </View>
                </View>

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    trendingRestaurantsBlock: {},
    title: {},
    categoryBlock: {},
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    FriendsBlock: {},
});

export default HomePage;
