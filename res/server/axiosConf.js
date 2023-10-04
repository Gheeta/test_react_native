import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View} from 'react-native';

function AxiosConf() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data using axios
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Handle success
        setPosts(response.data);
        console.log(posts);
      })

      .catch(error => {
        // Handle error
        console.error('There was an error fetching the data', error);
      });
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  // Render the fetched data
  return <View></View>;
}

export default AxiosConf;
