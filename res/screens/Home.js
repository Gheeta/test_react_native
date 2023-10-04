import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{color: 'black'}}>Home</Text>
      <Icon
        name="home"
        size={29}
        // style={{}}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
