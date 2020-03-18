import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default RewardServices = {

  getVouchers: () => {  
    return RESTFull.get(API.doNewProgramVoucher);
  },

  getMyRewards: () => {  
    return RESTFull.get(API.doMyRewards);
  },

  updateVoucherAvailables: (loyaltyProgramId, availableVoucher) => {
    return RESTFull.post(API.doVoucher, JSON.stringify({loyaltyProgramId, availableVoucher}) )
  },

  getHistoryVouchers: () => {
    return RESTFull.get(API.doHistoryVoucher);
  }

}
