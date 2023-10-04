import {setPreviews} from '../Slice/settingsSlice';
import store from '../store';
import axios from 'axios';

const allPreviews = async () => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // Handle success

      store.dispatch(setPreviews(response.data));
      console.log('this response', response.data);
    })

    .catch(error => {
      // Handle error
      console.error('There was an error fetching the data', error);
    });
};

export default allPreviews;
