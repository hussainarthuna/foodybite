import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {Colors} from '../constants/Colors';
import {Icon, Left, List, ListItem, Body, Radio} from 'native-base';
import {useState} from 'react';

const ChangeLanguagePage = props => {

    const [enRadioSelected, setEnRadioSelectedState] = useState(true);
    const [arRadioSelected, setArRadioSelectedState] = useState(false);

    const selectLanguage = () => {
        setEnRadioSelectedState((prevState) => !prevState);
        setArRadioSelectedState((prevState) => !prevState);
    };

    return (
        <View style={styles.screen}>
            <CustomHeader title='Change Language' navigation={props.navigation}/>
            <List>
                <ListItem style={styles.ListHeader} last>
                    <Text style={styles.HeaderText}>Select Language</Text>
                </ListItem>
                <ListItem last onPress={() => selectLanguage()}>
                    <Radio style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25 / 2,
                        marginRight: 10,
                    }}
                           selected={enRadioSelected}
                    />
                    <Body>
                        <Text style={styles.text}>English</Text>
                    </Body>
                </ListItem>
                <ListItem last onPress={() => selectLanguage()}>
                    <Radio style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25 / 2,
                        marginRight: 10,
                    }}
                           selected={arRadioSelected}
                    />
                    <Body>
                        <Text style={styles.text}>Arabic</Text>
                    </Body>
                </ListItem>
            </List>
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

export default ChangeLanguagePage;
