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

export default class DB extends React.Component {
  constructor() {
    super();
    this.state = {
      plannedCount: 0,
      watchingCount: 0,
      watchedCount: 0,
      isNewShowAdderVisible: false,
      newShowText: "",
      plannedShows:[]
    };
  }

  openShowAdder = () => {
    this.setState({isNewShowAdderVisible:true});
  };

  closeShowAdder = () => {
    this.setState({isNewShowAdderVisible:false});
  };

  addShowToPlanned = show => {
    this.setState((state, props) => ({
      plannedShows: [...state.plannedShows, show],
      plannedCount: state.plannedCount + 1
    }), ()=> {
      console.log(this.state.plannedShows);
    });
  };

  markAsWatching = (selectedShow, index) => {
    let newPlannedShows = this.state.plannedShows.filter(show => show !== selectedShow);
    this.setState(prev => ({
      plannedShows: newPlannedShows,
      plannedCount: prev.plannedCount - 1,
      watchingCount: prev.watchingCount + 1
    }));
  };


  renderShow = (item, index) => (
    <View  style={{flex:1, paddingLeft: 2.5, paddingRight: 2.5}}>
      <View style={styles.showListing}>
        <View style={{flex:4, justifyContent: 'center'}}>
          <Text style={styles.showListingText}>{item}</Text>
        </View>
        <TouchableOpacity style={{flex:1}} onPress={() => this.markAsWatching(item, index)}>
        <View style={styles.moveToWatchingView}>
            <View style={styles.moveToWatchingButton}>
              <Ionicons name='ios-arrow-round-forward' style={{fontSize: 40, color: colors.appText, fontWeight: 'bold'}} />
            </View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
  return (
    <View style={styles.appBody}>
    <SafeAreaView style={{backgroundColor: colors.appSecondary}} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Closer</Text>
      </View>
      <View style={styles.mainBody}>
      <View style={{flex:0}}>
      <View style={{backgroundColor: colors.appSecondary, marginTop:10, marginRight: 10, marginLeft: 10, padding:10, borderRadius: 10 }}>
      <View>
      <Text style={styles.openText}>Dooley Burdell</Text>
      <Text style={{fontFamily: 'Avenir', color: colors.appText}}>Grandpa | Age: 79</Text>
      </View>
      </View>
      <View style={{alignItems: 'center'}}>
      <View style={{backgroundColor: colors.appSecondary, marginTop: 10, borderRadius: 10}}>
      <Text style={styles.openTextMental}>Mental Health</Text>
      <LineChart
      data={{
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            data: [4,3,4,5,3,3,3.5],
                },
              ],
            }}
          width={Dimensions.get('window').width - 20} // from react-native
          height={250}
          yAxisLabel={''}
          chartConfig={{
            backgroundColor: colors.appText,
            backgroundGradientFrom: colors.appSecondary,
            backgroundGradientTo: colors.appSecondary,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(224, 251, 252, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 10,
            borderRadius:10,
            marginTop: 10
          }}
        />
      </View>
      </View>
      </View>
      <View style={{flex:1}}>
          <View style={{backgroundColor: colors.appSecondary, marginTop:10, marginRight: 10, marginLeft: 10, padding:10, borderRadius: 10, flexDirection:'row' }}>
          <View style={{flex:4, justifyContent: 'center'}}>
          <Text style={styles.openTextBioSoc}>Biological Health</Text>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name='ios-radio-button-on' style={{fontSize: 25, color: '#ffff00'}} />
          </View>
          </View>
          <View style={{backgroundColor: colors.appSecondary, marginTop:10, marginRight: 10, marginLeft: 10, padding:10, borderRadius: 10, flexDirection:'row' }}>
          <View style={{flex:4, justifyContent: 'center'}}>
          <Text style={styles.openTextBioSoc}>Social Health</Text>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name='ios-radio-button-on' style={{fontSize: 25, color: '#ffff00'}} />
          </View>
          </View>
          <View style={{flex: 1, padding: 10}}>
              <View style={{flex:1, backgroundColor: colors.appSecondary, borderRadius: 10, padding: 10}}>
                  <View style={{flex: 1}}>
                      <Text style={[styles.openTextBioSoc, {fontFamily: 'Avenir-Black'}]}>Recent Activity</Text>
                  </View>
                  <View style={{flex:3}}>
                      <Text style={styles.recentAct}>• 05/09/2020 4:35 PM : Dad called Grandpa</Text>
                      <Text style={styles.recentAct}>• 05/09/2020 9:00 AM : Alexa Interaction</Text>
                      <Text style={styles.recentAct}>• 05/08/2020 8:15 PM : Sister called Grandpa</Text>
                      <Text style={styles.recentAct}>• 05/08/2020 9:00 AM : Alexa Interaction</Text>
                  </View>
              </View>
          </View>
      </View>
      </View>
      <View style={styles.footer}>
        <FooterTab title='You' count={this.state.plannedCount} onPress={() => this.props.navigation.navigate('Home')}>
        <Ionicons name='ios-contact' style={{fontSize: 35, color: colors.appText}}/>
        </FooterTab>
        <FooterTab title='Family' count={this.state.watchingCount} onPress={() => this.props.navigation.navigate('Family')}>
        <Ionicons name='ios-contacts' style={{fontSize: 35, color: colors.appText}}/>
        </FooterTab>
        <FooterTab title='Engage' count={this.state.watchedCount} onPress={() => this.props.navigation.navigate('Engage')}>
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
  recentAct: {
      marginLeft: 20,
      fontSize: 16,
      fontFamily: 'Avenir',
      color: colors.appText
  },
  emptyListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25
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
