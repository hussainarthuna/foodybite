import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {ListItem, List, Left, Thumbnail, Body, Right, Text} from 'native-base';
import {Colors} from '../constants/Colors';

const NotificationsPage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='Notifications' isHome/>
            <ScrollView style={{flex: 1}}>
                <List>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/1.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Brendan Hawkins</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>4:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/2.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Julie Hopper</Text>
                            <Text note>Checked in at cheesecake factory</Text>
                        </Body>
                        <Right>
                            <Text note>12:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Hussain Carter</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>1:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/4.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Fusion</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>1:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/5.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Steve Robs</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>5:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/6.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Tim Rock</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>5:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/1.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Brendan Hawkins</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>4:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/2.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Julie Hopper</Text>
                            <Text note>Checked in at cheesecake factory</Text>
                        </Body>
                        <Right>
                            <Text note>12:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Hussain Carter</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>1:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/4.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Fusion</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>1:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/5.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Steve Robs</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>5:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/6.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Tim Rock</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>5:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/1.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Brendan Hawkins</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>4:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/2.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Julie Hopper</Text>
                            <Text note>Checked in at cheesecake factory</Text>
                        </Body>
                        <Right>
                            <Text note>12:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Hussain Carter</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>1:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/4.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Fusion</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>1:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/5.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Steve Robs</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>5:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/6.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Tim Rock</Text>
                            <Text note>Started following you</Text>
                        </Body>
                        <Right>
                            <Text note>5:43 pm</Text>
                        </Right>
                    </ListItem>
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
});

export default NotificationsPage;
