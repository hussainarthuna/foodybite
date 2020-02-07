import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import {Colors} from '../constants/Colors';

const CustomHeader = props => {

    const {title, isHome} = props;

    return (
        <Header androidStatusBarColor='#fff' style={styles.header}>
            <Left style={{flex:1}}>
                {
                    isHome ?
                        null
                        :
                        <Button style={styles.icon}  transparent onPress={() => props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                }
            </Left>
            <Body style={{flex: 3,alignItems:'center'}}>
                <Title style={styles.title}>{title}</Title>
            </Body>
            <Right>
                {/*<Button transparent>*/}
                {/*    <Icon name='menu'/>*/}
                {/*</Button>*/}
            </Right>
        </Header>
    );
};

const styles = StyleSheet.create({
    header: {
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
    },
    title:{
        color:Colors.dark,
        fontFamily:'OpenSans-SemiBold',
        textAlign:'center'
    },
    icon:{
        color:Colors.dark,
    }
});

export default CustomHeader;
