import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Card = ({Title, LocationDetail}) => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={styles.title}>{Title}</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}>
        <Image
          source={require('../assests/img/loc.png')}
          style={{
            width: 12,
            height: 15,
            resizeMode: 'cover',
            marginRight: 9,
          }}
        />
        <Text style={{color: '#7630ac', fontSize: 11}}>{LocationDetail}</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              // justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../assests/img/person.png')}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'cover',
                marginRight: 7,
              }}
            />
            <Text style={{color: '#7630ac', fontSize: 11}}>
              Reservation for 3 people
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              // justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../assests/img/phone.png')}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'cover',
                marginRight: 7,
              }}
            />
            <Text style={{color: '#7630ac', fontSize: 11}}>+2001023311369</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              // justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../assests/img/calendar.png')}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'cover',
                marginRight: 7,
              }}
            />
            <Text style={{color: 'orange', fontSize: 11}}>
              Thu Apr 20 2023 , 4:43 AM
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{backgroundColor: '#7630ac', padding: 10, borderRadius: 15}}>
            <Text style={{color: 'white', fontSize: 12}}>Re-Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    // margin: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageLocation: {
    width: '100%',
    height: 10,
    // borderRadius: 10,
  },
  title: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
});
