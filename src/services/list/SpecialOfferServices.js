import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default SpecialOfferServices = {

  getSpecialOfferList: () => {  
    return RESTFull.get(API.doSpecialOffer)
  },

}
