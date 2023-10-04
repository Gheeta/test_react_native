import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//screens
import Home from '../screens/Home';
import YourReservation from '../screens/YourReservation';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'green',
          tabBarStyle: {
            position: 'absolute',
            height: 70,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Icon
                  name="home"
                  size={19}
                  style={[
                    styles.iconStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}
                />
                <Text
                  style={[
                    styles.textStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Your Reservation"
          component={YourReservation}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <MaterialIcons
                  name="add-card"
                  size={19}
                  style={[
                    styles.iconStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}
                />
                <Text
                  style={[
                    styles.textStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}>
                  Your Reservation
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <MaterialIcons
                  name="favorite"
                  size={19}
                  style={[
                    styles.iconStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}
                />
                <Text
                  style={[
                    styles.textStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}>
                  Favourite
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <MaterialIcons
                  name="person"
                  size={19}
                  style={[
                    styles.iconStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}
                />
                <Text
                  style={[
                    styles.textStyle,
                    {color: focused ? 'orange' : '#7630ac'},
                  ]}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  textStyle: {
    fontSize: 10,
  },
});
