import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ListItem, Left, Right} from 'native-base';
import TextButton from './TextButton';
import {Colors} from '../constants/Colors';

const TitleWithSeeAll = props => {

    const seeAll = 'See All (' + props.seeAllCount + ')';

    return (
        <ListItem style={styles.listItem}>
            <Left>
                <Text style={styles.title}>{props.title}</Text>
            </Left>
            <Right>
                <TextButton title={seeAll} color={Colors.tertiary}
                            fontSize={12}
                            onPress={props.onPress}
                />
            </Right>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 0,
    },
    title: {
        fontSize: 24,
        fontFamily: 'OpenSans-Bold',
        color: Colors.accent,
    },
});

export default TitleWithSeeAll;
