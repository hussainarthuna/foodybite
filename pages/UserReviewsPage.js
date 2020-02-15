import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Body, Right, Left, List, ListItem, Text, Thumbnail, Icon} from 'native-base';
import {Colors} from '../constants/Colors';
import {RestaurantData} from '../data/RestaurantData';

const UserReviewsPage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='Reviews' navigation={props.navigation}/>
            <ScrollView style={{flex: 1}}>
                <List>
                    <FlatList data={RestaurantData} renderItem={(item, index) => {
                        const data = item.item;
                        return (
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={data.image}/>
                                </Left>
                                <Body>
                                    <Text>{data.name}</Text>
                                    <Text note numberOfLines={4} lineBreakMode={'tail'}>It is a long established fact
                                        that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it
                                        has a more-or-less normal distribution of letters, as opposed to using 'Content
                                        here,
                                        content here', making it look like readable English.
                                    </Text>
                                </Body>
                                <Right>
                                    <View style={styles.rating}>
                                        <Icon name='ios-star' style={styles.icon}/>
                                        <Text style={styles.text}>{data.avgRating}</Text>
                                    </View>
                                </Right>
                            </ListItem>
                        );
                    }}/>
                    <FlatList data={RestaurantData} renderItem={(item, index) => {
                        const data = item.item;
                        return (
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={data.image}/>
                                </Left>
                                <Body>
                                    <Text>{data.name}</Text>
                                    <Text note numberOfLines={4} lineBreakMode={'tail'}>It is a long established fact
                                        that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it
                                        has a more-or-less normal distribution of letters, as opposed to using 'Content
                                        here,
                                        content here', making it look like readable English.
                                    </Text>
                                </Body>
                                <Right>
                                    <View style={styles.rating}>
                                        <Icon name='ios-star' style={styles.icon}/>
                                        <Text style={styles.text}>{data.avgRating}</Text>
                                    </View>
                                </Right>
                            </ListItem>
                        );
                    }}/>
                    <FlatList data={RestaurantData} renderItem={(item, index) => {
                        const data = item.item;
                        return (
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={data.image}/>
                                </Left>
                                <Body>
                                    <Text>{data.name}</Text>
                                    <Text note numberOfLines={4} lineBreakMode={'tail'}>It is a long established fact
                                        that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it
                                        has a more-or-less normal distribution of letters, as opposed to using 'Content
                                        here,
                                        content here', making it look like readable English.
                                    </Text>
                                </Body>
                                <Right>
                                    <View style={styles.rating}>
                                        <Icon name='ios-star' style={styles.icon}/>
                                        <Text style={styles.text}>{data.avgRating}</Text>
                                    </View>
                                </Right>
                            </ListItem>
                        );
                    }}/>
                </List>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    rating: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        margin: 5,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
});

export default UserReviewsPage;
