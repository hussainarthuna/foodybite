import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Body, Button, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import {Colors} from '../constants/Colors';

const FollowingsPage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='Followings' navigation={props.navigation}/>
            <ScrollView style={{flex: 1}}>
                <List>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Hussain Carter</Text>
                            <Text note>48 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/4.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Fusion</Text>
                            <Text note>78 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/5.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Steve Robs</Text>
                            <Text note>18 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/6.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Tim Rock</Text>
                            <Text note>428 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/1.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Brendan Hawkins</Text>
                            <Text note>50 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/2.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Julie Hopper</Text>
                            <Text note>501 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Hussain Carter</Text>
                            <Text note>48 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/4.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Fusion</Text>
                            <Text note>78 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/5.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Steve Robs</Text>
                            <Text note>18 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/6.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Tim Rock</Text>
                            <Text note>428 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/1.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Brendan Hawkins</Text>
                            <Text note>50 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/2.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Julie Hopper</Text>
                            <Text note>501 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Hussain Carter</Text>
                            <Text note>48 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/4.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Fusion</Text>
                            <Text note>78 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/5.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Steve Robs</Text>
                            <Text note>18 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Follow</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail source={require('../assets/images/6.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Tim Rock</Text>
                            <Text note>428 Rated Reviews</Text>
                        </Body>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Button style={styles.SecondaryBtn} small>
                                <Text style={styles.BtnText}>Unfollow</Text>
                            </Button>
                        </Body>
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
    SecondaryBtn: {
        backgroundColor: Colors.light,
        elevation: 0,
        borderWidth: 1,
        borderColor: Colors.tertiary,
        width: '75%',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
    },
    BtnText: {
        color: Colors.tertiary,
        textTransform: 'capitalize',
        fontFamily: 'OpenSans-SemiBold',
    },
});

export default FollowingsPage;
