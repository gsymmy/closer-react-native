import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  FlatList } from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Login from './screens/AppSwitchNavigator/Login';
import Home from './screens/Home';
import Family from './screens/Family';
import DB from './screens/DB';
import Engage from './screens/Engage';

const App = () => <AppContainer/>;

const AppSwitchNavigator = createSwitchNavigator({
  Login,
  Home,
  Family,
  DB,
  Engage
})

const AppContainer = createAppContainer(AppSwitchNavigator);
export default App;