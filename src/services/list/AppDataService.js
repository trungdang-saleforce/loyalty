import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default AppDataServices = {

  getData: () => {  
    return RESTFull.get(API.doAppData)
  },

}