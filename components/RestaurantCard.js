import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../constants/Colors';
import {Icon, ListItem, Left, Right} from 'native-base';

const RestaurantCard = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <ImageBackground style={styles.image} source={props.item.image} borderTopLeftRadius={15}
                                 borderTopRightRadius={15} resizeMethod='resize'>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.openStatus}>
                            <Text style={styles.text}>{props.item.openStatus ? 'OPEN' : 'CLOSE'}</Text>
                        </View>
                        <View style={styles.rating}>
                            <Icon name='ios-star' style={styles.icon}/>
                            <Text style={styles.text}>{props.item.avgRating}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            <ListItem style={{marginRight: 0, borderBottomWidth: 0}}>
                <Left style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{props.item.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>{props.item.category}</Text>
                        </View>
                        <View style={styles.distanceContainer}>
                            <Text style={styles.categoryText}>{props.item.distance}</Text>
                        </View>
                    </View>
                </Left>
            </ListItem>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 15,
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginVertical: 10,
        shadowColor: '#cdcdcd',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height * 0.22,
    },
    openStatus: {
        padding: 2,
        margin: 5,
        backgroundColor: Colors.light,
        width: '20%',
        borderRadius: 8,
        elevation: 30,
    },
    rating: {
        padding: 2,
        margin: 5,
        backgroundColor: Colors.light,
        width: '15%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 30,
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        color: Colors.tertiary,
        textAlign: 'center',
    },
    icon: {
        fontSize: 16,
        color: 'orange',
        marginRight: 5,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        color: Colors.accent,
        fontSize: 18,
        width: '60%',
    },
    categoryContainer: {
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 9,
    },
    distanceContainer: {
        backgroundColor: Colors.tertiary,
        padding: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryText: {
        fontSize: 10,
        color: Colors.light,
        fontFamily: 'OpenSans-Bold',
    },
});

export default RestaurantCard;
