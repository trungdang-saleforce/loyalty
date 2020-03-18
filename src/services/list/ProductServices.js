import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default ProductServices = {

  getCategories: () => {  
    return RESTFull.get(API.doCategories)
  },

  getProducts: (name) => {
    return RESTFull.get(API.doProduct, {name})
  }

}
