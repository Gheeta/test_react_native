import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardImage = ({title}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };
  return (
    <View style={styles.card}>
      <View style={{position: 'relative', borderRadius: 20}}>
        <ImageBackground
          source={require('../assests/img/background.jpeg')}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{borderRadius: 10}}>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              padding: 8,
              flexDirection: 'column',
              flex: 1,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 2,
                justifyContent: 'center',
                borderRadius: 25,
                width: 40,
                height: 40,
              }}>
              <TouchableOpacity onPress={handleLike}>
                <Text style={liked ? styles.likedText : styles.likeText}>
                  {liked ? (
                    <Icon name="heart" size={26} />
                  ) : (
                    <Icon name="heart-o" size={26} style={{color: 'red'}} />
                  )}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                paddingVertical: 2,
                paddingHorizontal: 8,
                borderRadius: 20,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 11}}>
                10 km
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{flexDirection: 'row', padding: 5, justifyContent: 'flex-end'}}>
        <Image
          source={require('../assests/img/loc.png')}
          style={{
            width: 12,
            height: 15,
            resizeMode: 'cover',
            marginRight: 5,
          }}
        />
        <Text style={{color: '#7630ac', fontSize: 10}}>
          Mode Al Fasalah,Rayadh
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
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
              padding: 4,
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
          <View style={{borderRadius: 16, borderColor: 'red', borderWidth: 2}}>
            <Text
              style={{
                color: 'red',
                paddingVertical: 10,
                paddingHorizontal: 12,
                fontSize: 12,
              }}>
              {' '}
              Cancel
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardImage;

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
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  likeText: {
    color: 'blue',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
  },
  likedText: {
    color: 'red',
    fontSize: 14,
    alignItems: 'center',
    textAlign: 'center',
  },
  imageLocation: {
    width: '100%',
    height: 10,
  },
  title: {
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
});
