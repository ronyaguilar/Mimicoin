import {FETCH_USER} from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const user = await axios.get('/api/user');
  dispatch({type: FETCH_USER, user: user.data});
}

export const addToWatchlist = (id) => async dispatch => {
  const user = await axios.post('/api/watchlist', {id});
  dispatch({type: FETCH_USER, user: user.data});
}
