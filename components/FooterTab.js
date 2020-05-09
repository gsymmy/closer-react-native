import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../assets/colors';

const FooterTab = ({children, onPress, title, count}) => (
    <TouchableOpacity onPress={onPress} style={styles.touch}>
        <View style={styles.footerTabs}>
            <Text style={styles.tabText}>{title}</Text>
            <View style={{flex:1, paddingTop:0}}>
                {children}
            </View>
        </View>
        </TouchableOpacity>
        );

const styles = StyleSheet.create({
    footerTabs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        fontSize: 20,
        color: colors.appText,
        fontFamily: 'Avenir-Black',
        paddingTop: 5,
        marginBottom: 0
    },
    touch: {
        flex:1
    }
});

FooterTab.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number
}

FooterTab.defaultProps = {
    title: 'Default'
}

export default FooterTab;