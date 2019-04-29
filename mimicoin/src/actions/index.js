import {FETCH_USER} from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const user = await axios.get('/api/user');
  console.log(user);
  dispatch({type: FETCH_USER, user: user.data});
}
