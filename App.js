/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import Bookings from './src/bookings';


const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Bookings/>
    </SafeAreaView>
  );
};

export default App;
