import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';

import allPreviews from '../server/actions/profileUser';
import {useSelector} from 'react-redux';
import CardImage from '../components/CardImage';
import Card from '../components/Card';

const YourReservation = () => {
  useEffect(() => {
    allPreviews();
  }, []);

  const previewsData = useSelector(state => state?.settings?.previews);
  console.log('====================================');
  console.log(previewsData);
  console.log('====================================');

  return (
    <>
      <View>
        <View style={styles.containerTitle}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Upcoming
          </Text>
        </View>

        <CardImage title="ea molestias quasi e" />
        
        <View style={styles.containerTitle}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Previous
          </Text>
        </View>

        <FlatList
          data={previewsData}
          renderItem={({item}) => (
            <Card Title={item.title} LocationDetail={item.body} />
          )}
        />
      </View>
    </>
  );
};

export default YourReservation;

const styles = StyleSheet.create({
  containerTitle: {
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 7,
  },
});
