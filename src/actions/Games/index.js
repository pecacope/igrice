import axios from 'axios';
import { REQUEST_SENT, RESPONSE_RECEIVED, SUCCESS_MESSAGE, ERROR_MESSAGE } from '../types';
import * as authHeaders from '../common';

const ROOT_URL = 'https://api-endpoint.igdb.com';

export function fetchGameData (term) {
  return function (dispatch) {
    dispatch({type: REQUEST_SENT});
    console.log('HEDERI', authHeaders.authorizedHeader());
    axios.get(`${ROOT_URL}/games/?search=${term}`, {
      headers: {
        'Accept': 'application/json',
        'user-key': '9918ec8bc6e9472bdeef053636e92305'
      }
    })
      .then(function (response) {
        console.error('Radi', response);
        dispatch({type: SUCCESS_MESSAGE, payload: 'Upesno!!!!'});
        dispatch({type: RESPONSE_RECEIVED});
      })
      .catch(function (error) {
        console.error('Ne radi', error);
        dispatch({type: ERROR_MESSAGE, payload: 'Ne uspesno!!!!!'});
        dispatch({type: RESPONSE_RECEIVED});
      });
  };
}
