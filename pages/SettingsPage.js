import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {List, ListItem, Right, Icon, Left} from 'native-base';
import {Colors} from '../constants/Colors';
import TextButton from '../components/TextButton';

const SettingsPage = props => {
    return (
        <View style={styles.screen}>
            <CustomHeader title='Settings' navigation={props.navigation}/>
            <ScrollView>
                <List>
                    <ListItem style={styles.ListHeader} last>
                        <Text style={styles.HeaderText}>Account</Text>
                    </ListItem>
                    <ListItem last onPress={() => props.navigation.navigate('ChangePassword')}>
                        <Left>
                            <Text style={styles.text}>Change Password</Text>
                        </Left>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem last onPress={() => props.navigation.navigate('ChangeLanguage')}>
                        <Left>
                            <Text style={styles.text}>Change Language</Text>
                        </Left>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem style={styles.ListHeader} last>
                        <Text style={styles.HeaderText}>Others</Text>
                    </ListItem>
                    <ListItem last>
                        <Left>
                            <Text style={styles.text}>Privacy Policy</Text>
                        </Left>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem last>
                        <Left>
                            <Text style={styles.text}>Terms & Conditions</Text>
                        </Left>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem noIndent onPress={() => props.navigation.navigate('Auth')}>
                        <TextButton title='Logout' color={Colors.tertiary} fontSize={16}
                                    onPress={() => props.navigation.navigate('Auth')}/>
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
    ListHeader: {
        backgroundColor: '#fafafa',
        padding: 0,
    },
    text: {
        fontFamily: 'OpenSans-Regular',
    },
    HeaderText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
    },
});

export default SettingsPage;
