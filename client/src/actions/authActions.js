import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User Action
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to Local Storage
      const { token } = res.data;

      // Set Token to Local Storage
      localStorage.setItem('jwtToken', token);

      // Set token to Auth Header (found in src/utils)
      setAuthToken(token);

      // Decode Token
      const decoded = jwt_decode(token);

      // Set Current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');

  // Remove auth header for future requests
  setAuthToken(false);

  // Set current user to {} which will auto set isAuthenticated to false

  dispatch(setCurrentUser({}));

  return {
    type: SET_CURRENT_USER,
    payload: {}
  };
};
