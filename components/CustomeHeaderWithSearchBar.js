import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title, Item, Input} from 'native-base';
import {Colors} from '../constants/Colors';

const CustomHeaderWithSearchBar = props => {

    const {title, isHome} = props;

    return (
        <Header androidStatusBarColor='#fff' style={styles.header} searchBar rounded>
            <Item style={{flex: 1, backgroundColor: Colors.light}}>
                <Icon name="search" style={styles.icon}/>
                <Input style={styles.input} placeholder='Find Restaurants' placeholderTextColor={Colors.tertiary}/>
            </Item>
            <Right style={{flex: null}}>
                <Button transparent>
                    <Icon name='settings' type='Octicons' style={styles.icon}/>
                </Button>
            </Right>
        </Header>
    );
};

const styles = StyleSheet.create({
    header: {
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
    },
    icon: {
        color: Colors.tertiary,
        fontFamily: 'OpenSans-SemiBold',
    },
    input:{
        width:'80%',
        color: Colors.tertiary,
        fontFamily: 'OpenSans-Regular'
    }
});

export default CustomHeaderWithSearchBar;
