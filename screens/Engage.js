import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  FlatList, Dimensions } from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart } from "react-native-chart-kit";

import {Ionicons} from '@expo/vector-icons';
import FooterTab from '../components/FooterTab'
import colors from '../assets/colors';

export default class Family extends React.Component {
    constructor() {
        super();
        this.state = {
          isNewNeedAdderVisible: false,
          newNeedText: ""
        };
      }

      addNeedToBag = need => {
          alert(need + ' has been added to your Needs List');
      };

      openNeedAdder = () => {
        this.setState({isNewNeedAdderVisible:true});
      };
    
      closeNeedAdder = () => {
        this.setState({isNewNeedAdderVisible:false});
      };

  render() {
  return (
    <View style={styles.appBody}>
    <SafeAreaView style={{backgroundColor: colors.appSecondary}} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Closer</Text>
      </View>
      <View style={styles.mainBody}>
      {this.state.isNewNeedAdderVisible && (
      <View style={{height:50, flexDirection: 'row'}}>
          <TextInput onChangeText={text => this.setState({ newNeedText: text })} style={{flex:1, backgroundColor: '#FFFFFF', paddingLeft: 5}} placeholder="What do you need?" placeholderTextColor='grey' />
          <TouchableOpacity onPress={() => this.addNeedToBag(this.state.newNeedText)}>
            <View style={{width: 50, height:50, backgroundColor:'#a5deba', alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name='ios-checkmark' style={{fontSize: 40, color: 'white'}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.closeNeedAdder}>
            <View style={{width: 50, height:50, backgroundColor:'#deada5', alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name='ios-close' style={{fontSize: 40, color: 'white'}} />
            </View>
          </TouchableOpacity>
        </View> 
      )}
        <View style={{flex:1, padding: 10}}>
          <View style={styles.memberView}>
            <View style={{flex:7, justifyContent: 'center'}}>
                <Text style={styles.memberName}>Interact with Alexa</Text>
            </View>
            <View style={{flex:1, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => alert('Your Alexa enabled device has been activated!')}>
              <Ionicons style={{fontSize: 25, color: colors.appText}} name='ios-hand' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.memberView}>
            <View style={{flex:7, justifyContent: 'center'}}>
                <Text style={styles.memberName}>Add to Needs List</Text>
            </View>
        
            <View style={{flex:1, justifyContent: 'center'}}>
              <TouchableOpacity onPress={this.openNeedAdder}>
              <Ionicons style={{fontSize: 25, color: colors.appText}} name='ios-hand' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <FooterTab title='You'  onPress={() => this.props.navigation.navigate('Home')}>
        <Ionicons name='ios-contact' style={{fontSize: 35, color: colors.appText}}/>
        </FooterTab>
        <FooterTab title='Family' onPress={() => this.props.navigation.navigate('Family')}>
        <Ionicons name='ios-contacts' style={{fontSize: 35, color: colors.appText}}/>
        </FooterTab>
        <FooterTab title='Engage'>
        <Ionicons name='ios-hand' style={{fontSize: 35, color: colors.appText}}/>
        </FooterTab>
      </View>
    <SafeAreaView style={{backgroundColor: colors.appSecondary}} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
  },
  memberView: {
    height: 100,
    backgroundColor: colors.appSecondary,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row'
  },
  emptyListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25
  },
  memberName: {
    marginLeft: 10,
    fontFamily: 'Avenir-Black',
    color: colors.appText,
    fontSize: 25
  },
  emptyListText: {
    color: colors.appText,
    fontFamily: 'Avenir-Black',
    fontSize: 30,
    textAlign: 'center'
  },
  showListing: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#f25f5c',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 5
  },
  showListingText: {
    marginLeft: 5,
    color: 'white',
    fontFamily: 'Avenir-Black',
    fontSize: 30
  },
  header: {
    height: 50,
    backgroundColor: colors.appSecondary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText : {
    fontSize: 25,
    fontFamily: 'Avenir-Black',
    color: colors.appText
  },
  mainBody: {
    flex: 1,
    backgroundColor: colors.appBody
  },
  footer: {
    height: 70,
    backgroundColor: colors.appSecondary,
    flexDirection: 'row'
  },
  roundButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.appSecondary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  moveToWatchingView: {
    flex:1,
    backgroundColor:  '#f25f5c',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5
  },
  moveToWatchingButton: {
    flex:1,
    backgroundColor: colors.appSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  openText: {
    color: colors.appText,
    fontFamily: 'Avenir-Black',
    fontSize: 20

  },
  openTextMental: {
    color: colors.appText,
    fontFamily: 'Avenir',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10
  },
  openTextBioSoc: {
    color: colors.appText,
    fontFamily: 'Avenir',
    fontSize: 18,
    marginLeft: 10,
  },
  markerHead: {
    color: colors.appText,
    fontFamily: 'Avenir',
    fontSize: 15
  },
  markerCont: {
    color: colors.appText,
    fontFamily: 'Avenir-Black',
    fontSize: 25
  }
});
