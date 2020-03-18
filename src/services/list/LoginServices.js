import AsyncStorage from '@react-native-community/async-storage';
import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';
import Storage from '../../commons/Storage';


export default LoginServices = {

  doLogin: (username, password) => {
    let body = JSON.stringify({
      username,
      password
    });
    return RESTFull.post(API.doLogin, body)
  },

  doLogout: () => {
    try {
      AsyncStorage.clear();
      // return RESTFull.get(API.doLogout);
    } catch(e) {
      console.error('Error:', e);
      return {error: -1, message: e}
    }
  },

  autoLogin: async () => {
    return await Storage.getToken()
  },

  getProfile: () => {
    return RESTFull.get(API.doProfile);
  },

  postProfile: (body) => {
    body.firstName = body.name
    body.lastName = ''
    return RESTFull.post(API.doProfile, JSON.stringify(body));
  }

}
