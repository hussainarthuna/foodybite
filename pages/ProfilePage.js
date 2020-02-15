import React from 'react';
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';
import {RestaurantData} from '../data/RestaurantData';
import RestaurantCard from '../components/RestaurantCard';
import {Text, Button} from 'native-base';

const ProfilePage = props => {

    const _renderItem = ({item, index}) => {
        return (
            <RestaurantCard item={item}/>
        );
    };

    return (
        <View style={styles.screen}>
            <CustomHeader title='My Profile' isHome/>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.profileImage} source={require('../assets/images/3.jpg')}/>
                </View>
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>John Wick</Text>
                    <Text style={styles.email} note>johnwick@gmail.com</Text>
                </View>
                <View style={styles.statsContainer}>
                    <TouchableOpacity style={styles.reviewsCount}
                                      onPress={() => props.navigation.navigate('UserReviews')}>
                        <Text style={styles.count}>239</Text>
                        <Text style={styles.countForName} note>Reviews</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.followersCount}
                                      onPress={() => props.navigation.navigate('Followers')}>
                        <Text style={styles.count}>1000</Text>
                        <Text style={styles.countForName} note>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.followingsCount}
                                      onPress={() => props.navigation.navigate('Followings')}>
                        <Text style={styles.count}>340</Text>
                        <Text style={styles.countForName} note>Followings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.functionBtnContainer}>
                    <Button style={styles.PrimaryBtn}>
                        <Text>Edit Profile</Text>
                    </Button>
                    <Button style={styles.SecondaryBtn} onPress={() => props.navigation.navigate('Settings')}>
                        <Text style={styles.BtnText}>Settings</Text>
                    </Button>
                </View>
                <View style={styles.reviews}>
                    <FlatList style={styles.list} data={RestaurantData} renderItem={_renderItem}/>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    profileImage: {
        height: Dimensions.get('window').height * .15,
        width: Dimensions.get('window').height * .15,
        borderRadius: (Dimensions.get('window').height * .15) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userNameContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    userName: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
    },
    email: {
        fontFamily: 'OpenSans-Regular',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    reviewsCount: {
        alignItems: 'center',
    },
    followersCount: {
        alignItems: 'center',
    },
    followingsCount: {
        alignItems: 'center',
    },
    count: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: Colors.primary,
    },
    functionBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
    },
    PrimaryBtn: {
        backgroundColor: Colors.primary,
        width: Dimensions.get('window').width * 0.4,
        justifyContent: 'center',
        borderRadius: 10,
    },
    SecondaryBtn: {
        backgroundColor: Colors.light,
        elevation: 0,
        borderWidth: 1,
        borderColor: Colors.tertiary,
        width: Dimensions.get('window').width * 0.4,
        justifyContent: 'center',
        borderRadius: 10,
    },
    BtnText: {
        color: Colors.tertiary,
    },
    reviews: {
        margin: 10,
    },
});

export default ProfilePage;
