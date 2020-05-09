import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ActionButton from '../components/ActionButton';
export default class SignUp extends React.Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor: '#247ba0'}}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffe066',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    buttonStyle: {
        borderWidth: 0.5,
        height: 50,
        width: 200,
        marginBottom: 20,
        borderColor: 'white',
        borderRadius: 5
    }
});

