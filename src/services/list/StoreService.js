import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default StoreServices = {

  getListStores: (productId, storeName) => {  
    return RESTFull.get(API.doStores, {productId, key: storeName});
  },

  getListLocation: (address) => {
    return RESTFull.get(API.doGoogleMapAPI, {address: JSON.stringify(address)})
  },
}