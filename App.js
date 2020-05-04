import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FooterTab from './components/FooterTab';

export default class App extends React.Component{
  render() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={{backgroundColor: '#B8F2E6'}} />
      <View style={styles.header}>
        <Text style={styles.headerText}>closer</Text>
      </View>
      <View style={styles.mainArea}></View>
      <View style={styles.footer}>
        <FooterTab title="you" />
        <FooterTab  title="family" />
        <FooterTab  title="engage" />
      </View>
      <SafeAreaView style={{backgroundColor: '#B8F2E6'}} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#5E6472',
    backgroundColor: '#B8F2E6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainArea: {
    flex: 1,
    backgroundColor: '#FAF3DD',
  },
  footer: {
    flexDirection: 'row',
    height: 40,
    borderTopWidth: 0.5,
    borderTopColor: '#5E6472',
    backgroundColor: '#B8F2E6'
  },
  headerText: {
    fontSize: 35,
    color: '#5E6472',
    fontFamily: 'Avenir'
  }
});
